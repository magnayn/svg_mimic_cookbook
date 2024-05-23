import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import PowerPanel from './components/powerpanel';
import { updateDefaultClause } from 'typescript';

function App() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState<any>(null);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    const interval = setInterval(() => {
      updateData();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  function updateData() {
    fetch("http://openhab.nirima.com:8080/rest/items")
      .then(res => res.json())
      .then(
        (result) => {
          console.log("DATA");
          setIsLoaded(true);
          

          var data = new Map<string, any>();
          result.forEach((element: { name: string; state: any; }) => {
              data.set(element.name, element.state);
          });
          
          var fb1 = Number(data.get("CurrentFB1"));
          var pv = Number(data.get("CurrentPV"));

          var generate = pv;
          var grid = Number(data.get("Current3"));
          var _export = grid<0?-grid:0;
          var _import = grid>0?grid:0;

          var inUse = generate - _export + _import;
          var solarIn = generate - _export;
          var inUseFlat = Number(data.get("Current2"));
          var inUseHouse = inUse - inUseFlat;

          var spill = inUseHouse - fb1;

          var fb2 = spill/2;
          var fb3 = spill/2;

          console.log(Number(data.get("CurrentHouse")));

          var electric = {
              solar: {
                  generate: pv,
                  export: _export,
                  consume: solarIn
              },
              grid: {
                  import: grid>0?grid:0,
                  export: grid<0?-grid:0
              },
              location: {
                  use: inUse,
                  flat: { 
                      use: inUseFlat
                  },
                  house: {
                      use: inUseHouse,
                      fuseboxes: [
                          { use: fb1},
                          { use: fb2},
                          { use: fb3}
                      ],
                      smartplugs: [
                          { use: Number(data.get("SmartPlug1_Power"))},
                          { use: Number(data.get("SmartPlug2_Power"))},
                          { use: Number(data.get("SmartPlug3_Power"))},
                      ]
                  }
              }
          };

          console.log(electric);
          
          setItems(electric);

        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log("Badness");
          console.log(error);
          setIsLoaded(true);
          setError(error);
        }
      )
  };

  

  return (
    <div className="App">
      
      <br/>
      { items && <PowerPanel view={items}></PowerPanel> }
        
     
    </div>
  );
}

export default App;
