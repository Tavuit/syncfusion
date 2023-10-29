import { height, rectPorts, width } from "./common";
import { NodeConstraints, NodeModel } from "@syncfusion/ej2-angular-diagrams";

export function getAreaAndLocationShapes(): NodeModel[] {
  let areaAndLocation: NodeModel[] = [
    {
      id: 'Location of Operator',
      addInfo: {title: "Location of Operator", tooltip: "Location of Operator"},
      shape: {
        type: "Native",
        content: `<g transform="translate(2,2)">\n
                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n
                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n
                      <div style="height: 100px" class="flex-container">\n
                        <div width="157.5" class="symbol-text-element">\n
                         Location\n
                        </div>\n
                      </div>\n
                    </foreignObject>
                  </g>`,
      },
      width: width,
      height: height,
      ports: rectPorts,
      annotations: [{
        template: `
            <div class="input-wrapper">
                <math-field style=";border: unset;background: transparent; text-align: center" id="mathquill-mathquill-input-border">
                  Location
                </math-field>
            </div>
          `,
      }],
      constraints: NodeConstraints.Default | NodeConstraints.Tooltip | NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Identify Operation Location',
        position: 'TopRight'
      }
    },
    {
      id: 'Site of Operator',
      addInfo: {title: "Site of Operator", tooltip: "Site of Operator"},
      shape: {
        type: "Native",
        content: `<g  transform="translate(2, 2)"><rect height="50" width="50" fill="transparent" stroke-width="0" /><path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" d="M 25 0 L 0 25 M 25 0 L 50 25 M 5 20 L 45 20 M 10 20 L 10 50 L 40 50 L 40 20"/><rect vector-effect="non-scaling-stroke" x ="20" y = "25" height="22.5" width="10" fill="#e9eff7" stroke-width="1" stroke="black"/><rect vector-effect="non-scaling-stroke" x="10" y="47.5" width="30" height="2.5" fill="url(#Pattern1)" stroke="black" stroke-width="1"/></g>`,
      },
      width: 250,
      height: 250,
      ports: rectPorts,
      annotations: [{
        template: `
            <div class="input-wrapper">
                <math-field style=";border: unset;background: transparent; text-align: center" id="mathquill-mathquill-input-border">
                  Site
                </math-field>
            </div>
          `,
        verticalAlignment: 'Bottom',
        offset: {
          x: 0.5,
          y: 1,
        },
        margin: {
          top: 20
        }
      }],
      constraints: NodeConstraints.Default | NodeConstraints.Tooltip | NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Identify Operation Site',
        position: 'TopRight'
      }
    },
    {
      id: 'Main Area',
      addInfo: {title: "Main Area", tooltip: "Main Area"},
      shape: {
        type: "Native",
        content: `<g   transform="translate(2, 2)"><rect height="150" width="150" fill="transparent" stroke-width="0" /><circle vector-effect="non-scaling-stroke" cx="75" cy="75" r="75" fill="none" stroke="black" stroke-width="1"/><foreignObject class="symbol-text-container" x="18.75" width="112.5" height="150" visibility="hidden"><div style="height: 150px" class="flex-container"><div width="112.5" class="symbol-text-element">    Working Area                      </div>    </div></foreignObject></g>`,
      },
      width: width,
      height: height,
      ports: rectPorts,
      annotations: [{
        template: `
            <div class="input-wrapper">
                <math-field style=";border: unset;background: transparent; text-align: center" id="mathquill-mathquill-input-border">
                </math-field>
            </div>
          `,
      }],
      constraints: NodeConstraints.Default | NodeConstraints.Tooltip | NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Identify The Main Area',
        position: 'TopRight'
      }
    },
    {
      id: 'Working Area',
      addInfo: {title: "Working Area", tooltip: "Working Area"},
      shape: {
        type: "Native",
        content: `<g   transform="translate(2, 2)">   <rect height="150" width="150" fill="transparent" stroke-width="0" />    <circle vector-effect="non-scaling-stroke" cx="75" cy="75" r="75" fill="none" stroke="black" stroke-width="1"/>   <foreignObject class="symbol-text-container" x="18.75" width="112.5" height="150" visibility="hidden">   <div style="height: 150px" class="flex-container">       <div width="112.5" class="symbol-text-element">           Working Area       </div>       </div>   </foreignObject>   </g>`,
      },
      width: 150,
      height: 150,
      style: {
        fill: "none",
        fontSize: 10,
      },
      ports: [],
      annotations: [{
        template: `
            <div class="input-wrapper">
                <math-field style=";border: unset;background: transparent; text-align: center" id="mathquill-mathquill-input-border">
                  Working Area
                </math-field>
            </div>
          `,
      }],
      constraints: NodeConstraints.Default | NodeConstraints.Tooltip | NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Identify a Working Area',
        position: 'TopRight'
      }
    },
    {
      id: 'locationAl',
      addInfo: {title: "Location", tooltip: "Location"},
      shape: {
        type: "Native",
        content: `<g   transform="translate(2, 2)">\n                        <rect height="60" width="60" fill="transparent" stroke-width="0" /> \n                        <circle vector-effect="non-scaling-stroke" cx="30" cy="30" r="30" fill="none" stroke="black" stroke-width="1"/>\n                        <foreignObject class="symbol-text-container" x="7.5" width="45" height="60" visibility="hidden">\n                        <div style="height: 60px" class="flex-container">\n                            <div width="45" class="symbol-text-element">\n                                Location\n                            </div>\n                        </div>\n                    </foreignObject>\n                    </g>`,
      },
      width: 60,
      height: 60,
      style: {
        fill: "none",
        fontSize: 10,
      },
      ports: [],
      annotations: [{
        template: `
            <div class="input-wrapper">
                <math-field style=";border: unset;background: transparent; text-align: center" id="mathquill-mathquill-input-border">
                  Location
                </math-field>
            </div>
          `,
      }],
      constraints: NodeConstraints.Default | NodeConstraints.Tooltip | NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Identify a Location',
        position: 'TopRight'
      }
    },
    {
      id: 'mobilityAL',
      addInfo: {title: "Mobility", tooltip: "Mobility"},
      shape: {
        type: "Native",
        content: `<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="10" width="10" stroke="none" fill="none"/>\n                    <path d="M 0 4, S 2.5 1.5, 5 4 M 5 4, S 7.5 6.5, 10 4 M 0 6, S 2.5 3.5, 5 6 M 5 6, S 7.5 8.5, 10 6" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="none"/>\n                    </g>`,
      },
      width: 50,
      height: 50,
      constraints: NodeConstraints.Default | NodeConstraints.AllowDrop | NodeConstraints.Tooltip,
      tooltip: {
        content: 'Movement of a Person',
        position: 'TopRight'
      }
    },
  ];
  return areaAndLocation;
}
