
export default function Mimic(props) {
    
    //const formatNumber = (num) => num.toLocaleString('en-US', { style: 'decimal', maximumFractionDigits : 0, minimumFractionDigits: 0, useGrouping: true }); 
    
    function formatNumber(num) {
        const digits = 1
        const lookup = [
          { value: 1, symbol: "" },
          { value: 1e3, symbol: "k" },
          { value: 1e6, symbol: "M" },
          { value: 1e9, symbol: "G" },
          { value: 1e12, symbol: "T" },
          { value: 1e15, symbol: "P" },
          { value: 1e18, symbol: "E" }
        ];
        const regexp = /\.0+$|(?<=\.[0-9]*[1-9])0+$/;
        const item = lookup.findLast(item => num >= item.value);
        return item ? (num / item.value).toFixed(digits).replace(regexp, "").concat(item.symbol) : "0";
      }

    return <>   
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1"  viewBox="199 179 1674 328" width="1674" height="328">
  <defs/>
  <g id="Canvas_1" stroke-dasharray="none" fill-opacity="1" fill="none" stroke="none" stroke-opacity="1">
    <title>Canvas 1</title>
    <rect fill="white" x="199" y="179" width="1674" height="328"/>
    <g id="Canvas_1_Layer_1">
      <title>Layer 1</title>
      <g id="Graphic_22">
        <rect x="401" y="223" width="386" height="247" fill="#ffc0c0"/>
        <rect x="401" y="223" width="386" height="247" stroke="gray" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
        <text transform="translate(406 228)" fill="black">
          <tspan font-family="Helvetica Neue" font-size="16" fill="black" x="161.472" y="15">Akamai</tspan>
        </text>
      </g>
      <g id="Graphic_21">
        <path d="M 200.44902 378.625 L 200.44902 302.875 L 388.449 302.875 L 388.449 265 L 399.449 340.75 L 388.449 416.5 L 388.449 378.625 Z" fill="white"/>
        <path d="M 200.44902 378.625 L 200.44902 302.875 L 388.449 302.875 L 388.449 265 L 399.449 340.75 L 388.449 416.5 L 388.449 378.625 Z" stroke="gray" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
        <text transform="translate(205.44902 331.526)" fill="black">
          <tspan font-family="Helvetica Neue" font-size="16" fill="black" x="71.964" y="15">{formatNumber(props.data.incoming.total)}</tspan>
        </text>
      </g>
      <g id="Graphic_20">
        <rect x="600" y="249" width="164" height="70" fill="#ff8080"/>
        <rect x="600" y="249" width="164" height="70" stroke="gray" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
        <text transform="translate(605 274.776)" fill="black">
          <tspan font-family="Helvetica Neue" font-size="16" fill="black" x="37.584" y="15">Homepage</tspan>
        </text>
      </g>
      <g id="Graphic_19">
        <rect x="600" y="380" width="164" height="70" fill="#ff8080"/>
        <rect x="600" y="380" width="164" height="70" stroke="gray" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
        <text transform="translate(605 405.776)" fill="black">
          <tspan font-family="Helvetica Neue" font-size="16" fill="black" x="22.776" y="15">Everything else</tspan>
        </text>
      </g>
      <g id="Graphic_18">
        <rect x="947" y="223" width="210" height="247" fill="#ffc0ff"/>
        <rect x="947" y="223" width="210" height="247" stroke="gray" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
        <text transform="translate(952 228)" fill="black">
          <tspan font-family="Helvetica Neue" font-size="16" fill="black" x="51.264" y="15">Onyx-Browse</tspan>
        </text>
      </g>
      <g id="Graphic_17">
        <rect x="970" y="249" width="164" height="70" fill="#ff80ff"/>
        <rect x="970" y="249" width="164" height="70" stroke="gray" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
        <text transform="translate(975 274.776)" fill="black">
          <tspan font-family="Helvetica Neue" font-size="16" fill="black" x="37.584" y="15">Homepage</tspan>
        </text>
      </g>
      <g id="Graphic_16">
        <rect x="970" y="340" width="164" height="70" fill="#ff80ff"/>
        <rect x="970" y="340" width="164" height="70" stroke="gray" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
        <text transform="translate(975 365.776)" fill="black">
          <tspan font-family="Helvetica Neue" font-size="16" fill="black" x="22.776" y="15">Everything else</tspan>
        </text>
      </g>
      <g id="Graphic_15">
        <rect x="1334" y="203.25" width="210" height="247" fill="#c0ffc0"/>
        <rect x="1334" y="203.25" width="210" height="247" stroke="gray" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
        <text transform="translate(1339 208.25)" fill="black">
          <tspan font-family="Helvetica Neue" font-size="16" fill="black" x="77.184" y="15">MESH</tspan>
        </text>
      </g>
      <g id="Graphic_14">
        <rect x="1357" y="255.42666" width="164" height="151.82334" fill="#80ff80"/>
        <rect x="1357" y="255.42666" width="164" height="151.82334" stroke="gray" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
        <text transform="translate(1362 322.11433)" fill="black">
          <tspan font-family="Helvetica Neue" font-size="16" fill="black" x="57.288" y="15">Mesh</tspan>
        </text>
      </g>
      <g id="Graphic_13">
        <path d="M 1134 317.375 L 1134 299.125 L 1222 299.125 L 1222 290 L 1233 308.25 L 1222 326.5 L 1222 317.375 Z" fill="white"/>
        <path d="M 1134 317.375 L 1134 299.125 L 1222 299.125 L 1222 290 L 1233 308.25 L 1222 326.5 L 1222 317.375 Z" stroke="gray" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
        <text transform="translate(1139 299.026)" fill="black">
          <tspan font-family="Helvetica Neue" font-size="16" fill="black" x="26.412" y="15">{formatNumber(props.data.mesh.homepage_total)}</tspan>
        </text>
      </g>
      <g id="Graphic_12">
        <path d="M 1134 383.5 L 1134 348.5 L 1222 348.5 L 1222 331 L 1233 366 L 1222 401 L 1222 383.5 Z" fill="white"/>
        <path d="M 1134 383.5 L 1134 348.5 L 1222 348.5 L 1222 331 L 1233 366 L 1222 401 L 1222 383.5 Z" stroke="gray" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
        <text transform="translate(1139 356.776)" fill="black">
          <tspan font-family="Helvetica Neue" font-size="16" fill="black" x="17.516" y="15">{formatNumber(props.data.mesh.not_homepage_total)}</tspan>
        </text>
      </g>
      <g id="Graphic_11">
        <path d="M 1233 365.5 L 1233 312.5 L 1346 312.5 L 1346 286 L 1357 339 L 1346 392 L 1346 365.5 Z" fill="white"/>
        <path d="M 1233 365.5 L 1233 312.5 L 1346 312.5 L 1346 286 L 1357 339 L 1346 392 L 1346 365.5 Z" stroke="gray" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
        <text transform="translate(1238 329.776)" fill="black">
          <tspan font-family="Helvetica Neue" font-size="16" fill="black" x="36.688" y="15">{formatNumber(props.data.mesh.total)}</tspan>
        </text>
      </g>
      <g id="Graphic_10">
        <path d="M 787 413.25 L 787 257.75 L 940 257.75 L 940 180 L 951 335.5 L 940 491 L 940 413.25 Z" fill="#ccc"/>
        <path d="M 787 413.25 L 787 257.75 L 940 257.75 L 940 180 L 951 335.5 L 940 491 L 940 413.25 Z" stroke="gray" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
        <text transform="translate(792 326.276)" fill="black">
          <tspan font-family="Helvetica Neue" font-size="16" fill="black" x="54.464" y="15">{formatNumber(props.data.akamai.total.miss)}</tspan>
        </text>
      </g>
      <g id="Graphic_9">
        <path d="M 764 292.375 L 764 274.125 L 952 274.125 L 952 265 L 963 283.25 L 952 301.5 L 952 292.375 Z" fill="white"/>
        <path d="M 764 292.375 L 764 274.125 L 952 274.125 L 952 265 L 963 283.25 L 952 301.5 L 952 292.375 Z" stroke="gray" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
        <text transform="translate(769 274.026)" fill="black">
          <tspan font-family="Helvetica Neue" font-size="16" fill="black" x="77.004" y="15">{formatNumber(props.data.akamai.homepage.miss)} ({props.data.akamai.homepage.miss_percent} %)</tspan>
        </text>
      </g>
      <g id="Graphic_8">
        <path d="M 764 405.125 L 764 382.375 L 952 382.375 L 952 371 L 963 393.75 L 952 416.5 L 952 405.125 Z" fill="white"/>
        <path d="M 764 405.125 L 764 382.375 L 952 382.375 L 952 371 L 963 393.75 L 952 416.5 L 952 405.125 Z" stroke="gray" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
        <text transform="translate(769 384.526)" fill="black">
          <tspan font-family="Helvetica Neue" font-size="16" fill="black" x="71.964" y="15">{formatNumber(props.data.akamai.others.miss)} ({props.data.akamai.others.miss_percent} %)</tspan>
        </text>
      </g>
      <g id="Graphic_7">
        <rect x="1662" y="203.25" width="210" height="247" fill="#c0c0ff"/>
        <rect x="1662" y="203.25" width="210" height="247" stroke="gray" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
        <text transform="translate(1667 208.25)" fill="black">
          <tspan font-family="Helvetica Neue" font-size="16" fill="black" x="62.808" y="15">Contentful</tspan>
        </text>
      </g>
      <g id="Graphic_6">
        <path d="M 1521 365.5 L 1521 312.5 L 1653 312.5 L 1653 286 L 1664 339 L 1653 392 L 1653 365.5 Z" fill="white"/>
        <path d="M 1521 365.5 L 1521 312.5 L 1653 312.5 L 1653 286 L 1664 339 L 1653 392 L 1653 365.5 Z" stroke="gray" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
        <text transform="translate(1526 329.776)" fill="black">
          <tspan font-family="Helvetica Neue" font-size="16" fill="black" x="43.964" y="15">{formatNumber(props.data.contentful.total)}</tspan>
        </text>
      </g>
      <g id="Graphic_5">
        <path d="M 597.8176 254.89193 L 593.4527 275.42693 L 312.45174 215.69833 L 310.2693 225.96583 L 303.87454 203.1438 L 318.999 184.89582 L 316.8166 195.16332 Z" fill="white"/>
        <path d="M 597.8176 254.89193 L 593.4527 275.42693 L 312.45174 215.69833 L 310.2693 225.96583 L 303.87454 203.1438 L 318.999 184.89582 L 316.8166 195.16332 Z" stroke="gray" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
        <text transform="translate(310.68305 195.16092) rotate(12)" fill="black">
          <tspan font-family="Helvetica Neue" font-size="16" fill="black" x="98.33936" y="15">{formatNumber(props.data.akamai.homepage.hit)} ({props.data.akamai.homepage.hit_percent} %)</tspan>
        </text>
      </g>
      <g id="Graphic_4">
        <path d="M 595.61735 433.39473 L 598.5391 454.1842 L 313.42428 494.25446 L 314.88516 504.6492 L 301.07045 485.39064 L 309.04163 463.0703 L 310.5025 473.465 Z" fill="white"/>
        <path d="M 595.61735 433.39473 L 598.5391 454.1842 L 313.42428 494.25446 L 314.88516 504.6492 L 301.07045 485.39064 L 309.04163 463.0703 L 310.5025 473.465 Z" stroke="gray" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
        <text transform="translate(304.73806 475.56054) rotate(-8)" fill="black">
          <tspan font-family="Helvetica Neue" font-size="16" fill="black" x="98.6584" y="15">{formatNumber(props.data.akamai.others.hit)} ({props.data.akamai.others.hit_percent} %)</tspan>
        </text>
      </g>
      <g id="Graphic_3">
        <path d="M 399.0307 375.5507 L 414.7666 329.85023 L 592.5241 391.05705 L 600.3921 368.2068 L 595.05685 417.48853 L 568.9202 459.60775 L 576.7882 436.7575 Z" fill="white"/>
        <path d="M 399.0307 375.5507 L 414.7666 329.85023 L 592.5241 391.05705 L 600.3921 368.2068 L 595.05685 417.48853 L 568.9202 459.60775 L 576.7882 436.7575 Z" stroke="gray" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
        <text transform="translate(414.6293 345.60685) rotate(19)" fill="black">
          <tspan font-family="Helvetica Neue" font-size="16" fill="black" x="71.964" y="15">{formatNumber(props.data.incoming.not_homepage)} ({props.data.incoming.not_homepage_percent} %)</tspan>
        </text>
      </g>
      <g id="Graphic_2">
        <path d="M 406.3892 334.9488 L 401.66665 314.4931 L 584.8482 272.2023 L 582.48694 261.97446 L 597.9276 279.9557 L 591.9321 302.88586 L 589.5708 292.658 Z" fill="white"/>
        <path d="M 406.3892 334.9488 L 401.66665 314.4931 L 584.8482 272.2023 L 582.48694 261.97446 L 597.9276 279.9557 L 591.9321 302.88586 L 589.5708 292.658 Z" stroke="gray" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
        <text transform="translate(406.82484 314.6086) rotate(-13)" fill="black">
          <tspan font-family="Helvetica Neue" font-size="16" fill="black" x="71.964" y="15">{formatNumber(props.data.incoming.homepage)} ({props.data.incoming.homepage_percent} %)</tspan>
        </text>
      </g>
    </g>
  </g>
</svg>
    
    </>;
} 