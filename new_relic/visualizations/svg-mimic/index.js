import React from "react";
import PropTypes from "prop-types";

import {
  Card,
  CardBody,
  HeadingText,
  NrqlQuery,
  Spinner,
  AutoSizer,
  PlatformStateContext
} from "nr1";
import Mimic from "./data";
import { timeRangeToNrql } from '@newrelic/nr-labs-components';




export default class SvgMimicVisualization extends React.Component {
  // Custom props you wish to be configurable in the UI must also be defined in
  // the nr1.json file for the visualization. See docs for more details.
  static propTypes = {
    /**
     * A fill color to override the default fill color. This is an example of
     * a custom chart configuration.
     */
    fill: PropTypes.string,

    /**
     * A stroke color to override the default stroke color. This is an example of
     * a custom chart configuration.
     */
    stroke: PropTypes.string,
    /**
     * An array of objects consisting of a nrql `query` and `accountId`.
     * This should be a standard prop for any NRQL based visualizations.
     */
    nrqlQueries: PropTypes.arrayOf(
      PropTypes.shape({
        accountId: PropTypes.number,
        query: PropTypes.string,
      })
    ),
  };

  /**
   * Restructure the data for a non-time-series, facet-based NRQL query into a
   * form accepted by the Recharts library's RadarChart.
   * (https://recharts.org/api/RadarChart).
   */
  transformData = (rawData, m, c) => {
    console.log(m);

    let incoming = {
      total: rawData[0].data[0].y,
      homepage: rawData[1].data[0].y,
      homepage_percent: (
        (rawData[1].data[0].y / rawData[0].data[0].y) *
        100
      ).toFixed(1),
      not_homepage: rawData[0].data[0].y - rawData[1].data[0].y,
      not_homepage_percent: (
        ((rawData[0].data[0].y - rawData[1].data[0].y) / rawData[0].data[0].y) *
        100
      ).toFixed(1),
    };

    let mesh = {
      total: m[0].data[0].y,
      homepage_total: m[1].data[0].y * 5,
      not_homepage_total: m[0].data[0].y - m[1].data[0].y * 5,
    };


    let contentful = {
        total: c[0].data[0].y
    }

    let data = {
      incoming: incoming,
      akamai: {
        homepage: {
          hit: rawData[2].data[0].y,
          miss: rawData[1].data[0].y - rawData[2].data[0].y,
          hit_percent: (
            (rawData[2].data[0].y / rawData[1].data[0].y) *
            100
          ).toFixed(1),
          miss_percent: (
            (1 - rawData[2].data[0].y / rawData[1].data[0].y) *
            100
          ).toFixed(1),
        },
        others: {
          hit: rawData[3].data[0].y,
          miss: incoming.not_homepage - rawData[3].data[0].y,
          hit_percent: (
            (rawData[3].data[0].y / incoming.not_homepage) *
            100
          ).toFixed(1),
          miss_percent: (
            (1 - rawData[3].data[0].y / incoming.not_homepage) *
            100
          ).toFixed(1),
        },
        total: {
          miss:
            rawData[1].data[0].y -
            rawData[2].data[0].y +
            (incoming.not_homepage - rawData[3].data[0].y),
        },
      },
      mesh: mesh,
      contentful: contentful
    };

    return data;

    // console.log(rawData);

    //         return rawData.map((entry) => ({
    //             name: entry.metadata.name,
    //             // Only grabbing the first data value because this is not time-series data.
    //             value: entry.data[0].y,
    //         }));
  };

  /**
   * Format the given axis tick's numeric value into a string for display.
   */
  formatTick = (value) => {
    return value.toLocaleString();
  };

  render() {
    const { nrqlQueries, stroke, fill } = this.props;

    const nrqlQueryPropsAvailable =
      nrqlQueries &&
      nrqlQueries[0] &&
      nrqlQueries[0].accountId &&
      nrqlQueries[0].query;

    if (!nrqlQueryPropsAvailable) {
      return <EmptyState />;
    }

    console.log(JSON.stringify(nrqlQueries));

    return (
        <PlatformStateContext.Consumer>
    {(platformState) => {
console.log(platformState);
const since = timeRangeToNrql(platformState);
console.log(nrqlQueries[0].query + since);

return (
      <AutoSizer>
        {({ width, height }) => (
          <NrqlQuery
            query={nrqlQueries[0].query + " " + since}
            accountId={parseInt(nrqlQueries[0].accountId)}
            pollInterval={NrqlQuery.AUTO_POLL_INTERVAL}
          >
            {({ data, loading, error }) => {
              const cacheData = data;
              if (loading) {
                return <Spinner />;
              }

              if (error) {
                return <ErrorState />;
              }

              return (
                <NrqlQuery
                  query={nrqlQueries[1].query + " " + since}
                  accountId={parseInt(nrqlQueries[0].accountId)}
                  pollInterval={NrqlQuery.AUTO_POLL_INTERVAL}
                >
                  {({ data, loading, error }) => {
                    
                    const meshData = data

                    if (loading) {
                      return <Spinner />;
                    }

                    if (error) {
                      return <ErrorState />;
                    }

                    return (
                        <NrqlQuery
                          query={nrqlQueries[2].query + " " + since}
                          accountId={parseInt(nrqlQueries[0].accountId)}
                          pollInterval={NrqlQuery.AUTO_POLL_INTERVAL}
                        >
                          {({ data, loading, error }) => {
                            
                          
        
                            if (loading) {
                              return <Spinner />;
                            }
        
                            if (error) {
                              return <ErrorState />;
                            }
        
                            return (
                              <Mimic data={this.transformData(cacheData, meshData, data)}></Mimic>
                            );
                          }}
                        </NrqlQuery>
                      );
                  }}
                </NrqlQuery>
              );
            }}
          </NrqlQuery>
        )}
      </AutoSizer>)
}}
</PlatformStateContext.Consumer>
    );
  }
}

const EmptyState = () => (
  <Card className="EmptyState">
    <CardBody className="EmptyState-cardBody">
      <HeadingText
        spacingType={[HeadingText.SPACING_TYPE.LARGE]}
        type={HeadingText.TYPE.HEADING_3}
      >
        Please provide at least one NRQL query & account ID pair
      </HeadingText>
      <HeadingText
        spacingType={[HeadingText.SPACING_TYPE.MEDIUM]}
        type={HeadingText.TYPE.HEADING_4}
      >
        An example NRQL query you can try is:
      </HeadingText>
      <code>FROM NrUsage SELECT sum(usage) FACET metric SINCE 1 week ago</code>
    </CardBody>
  </Card>
);

const ErrorState = () => (
  <Card className="ErrorState">
    <CardBody className="ErrorState-cardBody">
      <HeadingText
        className="ErrorState-headingText"
        spacingType={[HeadingText.SPACING_TYPE.LARGE]}
        type={HeadingText.TYPE.HEADING_3}
      >
        Oops! Something went wrong.
      </HeadingText>
    </CardBody>
  </Card>
);
