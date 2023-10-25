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
      constraints: NodeConstraints.Default | NodeConstraints.Tooltip | NodeConstraints.AllowDrop
    },
    {
      id: 'Site of Operator',
      addInfo: {title: "Site of Operator", tooltip: "Site of Operator"},
      shape: {
        type: "Native",
        content: `<g transform="translate(2,2)">\n
                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n
                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n
                      <div style="height: 100px" class="flex-container">\n
                        <div width="157.5" class="symbol-text-element">\n
                         Site\n
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
                  Site
                </math-field>
            </div>
          `,
      }],
      constraints: NodeConstraints.Default | NodeConstraints.Tooltip | NodeConstraints.AllowDrop
    },
    {
      id: 'Main Area',
      addInfo: {title: "Main Area", tooltip: "Main Area"},
      shape: {
        type: "Native",
        content: `<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="200" width="800" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="100" width="600" height="200" visibility="hidden">\n                        <div style="height: 200px" class="flex-container">\n                            <div width="600" class="symbol-text-element">\n                                Main Area\n                            </div>\n                        </div>\n                    </foreignObject></g>`,
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
      constraints: NodeConstraints.Default | NodeConstraints.Tooltip | NodeConstraints.AllowDrop
    },
    {
      id: 'Working Area',
      addInfo: {title: "Working Area", tooltip: "Working Area"},
      shape: {
        type: "Native",
        content: `<g   transform="translate(2, 2)">\n                        <rect height="150" width="150" fill="transparent" stroke-width="0" /> \n                        <circle vector-effect="non-scaling-stroke" cx="75" cy="75" r="75" fill="none" stroke="black" stroke-width="1"/>\n                        <foreignObject class="symbol-text-container" x="18.75" width="112.5" height="150" visibility="hidden">\n                        <div style="height: 150px" class="flex-container">\n                            <div width="112.5" class="symbol-text-element">\n                                Working Area\n                            </div>\n                        </div>\n                    </foreignObject>\n                    </g>`,
      },
      width: width,
      height: height,
      ports: rectPorts,
      annotations: [{
        template: `
            <div class="input-wrapper">
                <math-field style=";border: unset;background: transparent; text-align: center" id="mathquill-mathquill-input-border">
                  Working Area
                </math-field>
            </div>
          `,
      }],
      constraints: NodeConstraints.Default | NodeConstraints.Tooltip | NodeConstraints.AllowDrop
    },
  ];
  return areaAndLocation;
}
