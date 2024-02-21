import {ConnectorConstraints, NodeConstraints, NodeModel, PortVisibility} from "@syncfusion/ej2-angular-diagrams";
import { rectPorts } from "src/app/features/modules/sync-content-left/components/constants/communication/common";
import { getShapeByType } from "src/app/utils/constants";

export function getOtherCommunicationElementShapes() {
  let otherCommunicationElement = [
    {
      id: "separationLineComm",
      addInfo: {menuId: "edit", title: "Separation Line", tooltip: "Separation Line"},
      shape: {
        type: "Native",
        content: `
        <g  transform="translate(2, 2)">
                    <g>
                        <rect width="5" height="10" fill="transparent" stroke-width="0"/>
                        <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" stroke-dasharray="10 5" d="M 2.5 0 L 2.5 10"/>
                    </g>
                </g>`,
      },
      width: 30,
      height: 400,
      constraints: NodeConstraints.Default | NodeConstraints.Tooltip | NodeConstraints.AllowDrop | NodeConstraints.ResizeNorth,
      tooltip: {
        content: 'Use to Show Separation',
        position: 'TopRight'
      }
    },
    {
      id: "time",
      addInfo: {menuId: "edit", title: "Time", tooltip: "Time"},
      type: 'Straight',
      sourcePoint: {
        x: 30,
        y: 40,
      },
      targetPoint: {
        x: 50,
        y: 40,
      },
      sourceDecorator: {
        shape: "Arrow",
      },
      targetDecorator: {
        shape: 'Arrow',
        style: {
          fill: 'black',
          strokeColor: 'black'
        }
      },
      annotations: [
        {
          content: "Time",
          alignment: "Before",
        },
      ],
      constraints: ConnectorConstraints.Tooltip | ConnectorConstraints.Default | ConnectorConstraints.AllowDrop,
      tooltip: {
        content: 'Identify a Time',
        position: 'TopRight'
      }
    },
    {
      id: "progress",
      addInfo: {menuId: "edit", title: "Progress", tooltip: "Progress"},
      shape: {
        type: "Native",
        content: `
        <g transform="translate(2,2)">
                    <rect vector-effect="non-scaling-stroke" height="${20}" width="${400}" stroke="black" stroke-width="1" fill="transparent" />
                    <foreignObject class="symbol-text-container" x="${(0.25 * 400) / 2}" width="${400 * 0.75}" height="${20}" visibility="hidden">
                        <div style="height: ${20}px" class="flex-container">
                            <div width="${400 * 0.75}" class="symbol-text-element">
                              % Completed
                            </div>
                        </div>
                    </foreignObject>
                    </g>`,
      },
      width: 400,
      height: 20,
      ports: rectPorts,
      annotations: [
        {
          content: "% Completed",
        },
      ],
      constraints: NodeConstraints.Default | NodeConstraints.Tooltip | NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Use to Show Progress',
        position: 'TopRight'
      },
      style: {
        fill: "white",
        fontSize: 10
      }
    },
    {
      id: "timeLine",
      addInfo: {menuId: "edit", title: "Time Line", tooltip: "Time Line"},
      shape: {
        type: "Native",
        content: `
        <g  transform="translate(2, 2)">
                    <g>
                        <rect width="10" height="5" fill="transparent" stroke-width="0"/>
                        <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" stroke-dasharray="${""}" d="M 0 2.5 L 10 2.5"/>
                    </g>
                </g>`,
      },
      width: 600,
      height: 30,
      annotations: [
        {
          content: "Time",
          offset: {x: 1, y: 0.5},
          margin: {left: 20},
        },
      ],
      constraints: NodeConstraints.Default | NodeConstraints.Tooltip | NodeConstraints.AllowDrop | NodeConstraints.ResizeNorth,
      tooltip: {
        content: 'Use For Graph or Chart',
        position: 'TopRight'
      }
    },
    {
      id: "dateLine",
      addInfo: {menuId: "edit", title: "Date Line", tooltip: "Date Line"},
      shape: {
        type: "Native",
        content: `
        <g  transform="translate(2, 2)">
                    <g>
                        <rect width="5" height="10" fill="transparent" stroke-width="0"/>
                        <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" stroke-dasharray="" d="M 2.5 0 L 2.5 10"/>
                    </g>
                </g>`,
      },
      width: 30,
      height: 600,
      annotations: [
        {
          content: "Date",
          offset: {x: 0, y: 1},
          margin: {top: 20, left: 10},
        },
      ],
      constraints: NodeConstraints.Default | NodeConstraints.Tooltip | NodeConstraints.AllowDrop | NodeConstraints.ResizeNorth,
      tooltip: {
        content: 'Insert a Date Line',
        position: 'TopRight'
      }
    },
    {
      id: "principleLineOthers",
      addInfo: {menuId: "edit", title: "PrincipleLine", tooltip: "PrincipleLine"},
      shape: {
        type: "Native",
        content: `
        <g  transform="translate(2, 2)">\n                    <g>\n                        <rect width="10" height="5" fill="transparent" stroke-width="0"/>\n                        <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" stroke-dasharray="" d="M 0 2.5 L 10 2.5"/>\n                    </g>                    \n                </g>`,
      },
      width: 30,
      height: 600,
      ports: [
        {
          id: "Center",
          offset: {
            x: 0.5,
            y: 0.5,
          },
          visibility: 1,
          shape: "X",
          width: 4,
          height: 4,
        },
        {
          id: "Left",
          offset: {
            x: 0,
            y: 0.5,
          },
          visibility: 1,
          shape: "X",
          width: 4,
          height: 4,
        },
        {
          id: "Right",
          offset: {
            x: 1,
            y: 0.5,
          },
          visibility: 1,
          shape: "X",
          width: 4,
          height: 4,
        },
      ],
      constraints: NodeConstraints.Default | NodeConstraints.Tooltip | NodeConstraints.AllowDrop | NodeConstraints.ResizeNorth,
      tooltip: {
        content: 'Principle of Operation Line',
        position: 'TopRight'
      }
    },
    {
      id: "note",
      addInfo: {menuId: "edit", title: "Note", tooltip: "Note"},
      shape: {
        type: "Native",
        content: `
        <g transfrom="translate(2,2)">\n                    <rect height="120" width="120" stroke-width="0" fill="transparent" />\n                    <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="white" d = "M 0 0 L 0 120 L 120 120 L 120 20 L 100 0 L 0 0"/>\n                    <polygon vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="white" points="100,0 100,20 120,20"/>\n                    <foreignObject class="symbol-text-container" x="15" width="90" height="120" visibility="hidden">\n                        <div style="height: 120px" class="flex-container">\n                            <div width="90" class="symbol-text-element">\n                                My Note\n                            </div>\n                        </div>\n                    </foreignObject>\n                </g>`,
      },
      width: 120,
      height: 120,
      annotations: [
        {
          content: "My Note",
        },
      ],
      constraints: NodeConstraints.Default | NodeConstraints.Tooltip | NodeConstraints.AllowDrop | NodeConstraints.ResizeNorth,
      tooltip: {
        content: 'Represent a Note',
        position: 'TopRight'
      }
    },
    {
      id: "nodeOthers",
      addInfo: {menuId: "edit", title: "Node", tooltip: "Node"},
      shape: {
        type: "Native",
        content: `
        <g   transform="translate(2, 2)">\n                        <rect height="30" width="30" fill="transparent" stroke-width="0" /> \n                        <circle vector-effect="non-scaling-stroke" cx="15" cy="15" r="15" fill="White" stroke="black" stroke-width="1"/>\n                        <foreignObject class="symbol-text-container" x="3.75" width="22.5" height="30" visibility="hidden">\n                        <div style="height: 30px" class="flex-container">\n                            <div width="22.5" class="symbol-text-element">\n                                1\n                            </div>\n                        </div>\n                    </foreignObject>\n                    </g>`,
      },
      width: 30,
      height: 30,
      annotations: [
        {
          content: "1",
        },
      ],
      ports: null,
      constraints: NodeConstraints.Default | NodeConstraints.Tooltip | NodeConstraints.AllowDrop | NodeConstraints.ResizeNorth,
      tooltip: {
        content: 'Represent a Node',
        position: 'TopRight'
      },
      style: {
        fill: "none",
        fontSize: 10,
      }
    },
    {
      id: "callOut",
      addInfo: {menuId: "edit", title: "Callout", tooltip: "Callout"},
      shape: {
        type: "Native",
        content: `
        <g  transform="translate(2, 2)">\n                    <rect height="250" width="350" fill="transparent" stroke-width="0"/> \n                    <path fill="white" stroke="black" stroke-width="1" vector-effect="non-scaling-stroke" d="M 0 0 L 350 0 L 350 200 L 120 200 L 100 250 L 100 200 L 0 200 L 0 0"/>\n                    <foreignObject class="symbol-text-container" x="43.75" width="262.5" height="250" visibility="hidden">\n                    <div style="height: 250px" class="flex-container">\n                        <div width="262.5" class="symbol-text-element">\n                            My Text\n                        </div>\n                    </div>\n                </foreignObject>        \n                </g>`,
      },
      width: 350,
      height: 250,
      annotations: [
        {
          content: "My Text",
          offset: {
            x: 0.5,
            y: 0.4,
          },
        },
      ],
      ports: null,
      constraints: NodeConstraints.Default | NodeConstraints.Tooltip | NodeConstraints.AllowDrop | NodeConstraints.ResizeNorth,
      tooltip: {
        content: 'Represent a Callout',
        position: 'TopRight'
      }
    },
    {
      ...getShapeByType('Table', 'nodeTableComm', { menuId: "edit", title: 'Node Table', tooltip: 'Node Table' }, {
        content: ["Node Number", "Information", "1", ""],
        columnNo: 2,
      }),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Represents a Table of Node',
        position: 'TopRight',
      }
    },
    {
      id: "statement",
      addInfo: {menuId: "edit", title: "Statement", tooltip: "Statement"},
      shape: {
        type: "Native",
        content: `
        <g>\n                    <rect height="30" width="100" fill="transparent" stroke-width="0"/>\n                    <foreignObject class="symbol-text-container" x="0" y="25" width="100" height="30" visibility="hidden">\n                    <div style="height: 30px" class="flex-container">\n                        <div width="100" class="symbol-text-element">\n                            Statement\n                        </div>\n                    </div>\n                    </foreignObject>     \n                </g>`,
      },
      width: 100,
      height: 30,
      annotations: [
        {
          content: "Statement",
          style: {
            bold: true,
            fontSize: 15,
            italic: true,
          },
        },
      ],
      ports: null,
      constraints: NodeConstraints.Default | NodeConstraints.Tooltip | NodeConstraints.AllowDrop | NodeConstraints.ResizeNorth,
      tooltip: {
        content: 'Represents a Table of Node',
        position: 'TopRight'
      }
    },
    {
      id: "numberIdentification",
      addInfo: {menuId: "edit", title: "Number Identification", tooltip: "Number Identification"},
      shape: {
        type: "Native",
        content: `
        <g>\n                    <rect height="30" width="100" fill="transparent" stroke-width="0"/>\n                    <foreignObject class="symbol-text-container" x="0" y="25" width="100" height="30" visibility="hidden">\n                    <div style="height: 30px" class="flex-container">\n                        <div width="100" class="symbol-text-element">\n                            #1\n                        </div>\n                    </div>\n                    </foreignObject>     \n                </g>`,
      },
      width: 100,
      height: 30,
      annotations: [
        {
          content: "#1",
          style: {
            bold: true,
            fontSize: 15,
            italic: true,
          },
        },
      ],
      ports: null,
      constraints: NodeConstraints.Default | NodeConstraints.Tooltip | NodeConstraints.AllowDrop | NodeConstraints.ResizeNorth,
      tooltip: {
        content: 'Use to Identify Entity',
        position: 'TopRight'
      }
    },
    {
      id: "entityInclusionLineHorizontal",
      addInfo: {menuId: "edit", title: "Entity Inclusion Line Horizontal", tooltip: "Entity Inclusion Line Horizontal"},
      shape: {
        type: "Native",
        content: `
        <g  transform="translate(2, 2)">\n                    <g>\n                        <rect width="10" height="5" fill="transparent" stroke-width="0"/>\n                        <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" stroke-dasharray="" d="M 0 2.5 L 10 2.5"/>\n                    </g>                    \n                </g>`,
      },
      width: 600,
      height: 30,
      ports: [
        {
          id: "Center",
          offset: {
            x: 0.5,
            y: 0.5,
          },
          visibility: 1,
          shape: "X",
          width: 4,
          height: 4,
        },
        {
          id: "Left",
          offset: {
            x: 0,
            y: 0.5,
          },
          visibility: 1,
          shape: "X",
          width: 4,
          height: 4,
        },
        {
          id: "Right",
          offset: {
            x: 1,
            y: 0.5,
          },
          visibility: 1,
          shape: "X",
          width: 4,
          height: 4,
        },
      ],
      constraints: NodeConstraints.Default | NodeConstraints.Tooltip | NodeConstraints.AllowDrop | NodeConstraints.ResizeNorth,
      tooltip: {
        content: 'Entity has Entities',
        position: 'TopRight'
      }
    },
    {
      id: "entityInclusionLineVertical",
      addInfo: {menuId: "edit", title: "Entity Inclusion Line Vertical", tooltip: "Entity Inclusion Line Vertical"},
      shape: {
        type: "Native",
        content: `
        <g  transform="translate(2, 2)">\n                    <g>\n                        <rect width="5" height="10" fill="transparent" stroke-width="0"/>\n                        <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" stroke-dasharray="" d="M 2.5 0 L 2.5 10"/> \n                    </g>                    \n                </g>`,
      },
      width: 30,
      height: 600,
      ports: [
        {
          id: "Center",
          offset: {
            x: 0.5,
            y: 0.5,
          },
          visibility: 1,
          shape: "X",
          width: 4,
          height: 4,
        },
        {
          id: "Top",
          offset: {
            x: 0.5,
            y: 0,
          },
          visibility: 1,
          shape: "X",
          width: 4,
          height: 4,
        },
        {
          id: "Right",
          offset: {
            x: 0.5,
            y: 1,
          },
          visibility: 1,
          shape: "X",
          width: 4,
          height: 4,
        },
      ],
      constraints: NodeConstraints.Default | NodeConstraints.Tooltip | NodeConstraints.AllowDrop | NodeConstraints.ResizeNorth,
      tooltip: {
        content: 'Entity has Entities',
        position: 'TopRight'
      }
    },
    {
      id: "changeofApplication",
      addInfo: {menuId: "edit", title: "Change of Application", tooltip: "Change of Application"},
      shape: {
        type: "Native",
        content: `
        <g  transform="translate(2, 2)">\n                            <rect height="100" width="300" fill="transparent" stroke-width="0"/>\n                            undefined<g transform="translate(0)">\n            <rect vector-effect="non-scaling-stroke" fill="white" stroke-width="1" stroke="black" height="100" width="100"/>\n            <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" d="M 0 50 L 100 50"/>\n            <text class="symbol-text-container" visibility="hidden" lengthAdjust="spacingAndGlyphs" font-size="10px" font-weight="bold"><tspan x="20" y="30">Title</tspan></text>\n            <text class="symbol-text-container" visibility="hidden" lengthAdjust="spacingAndGlyphs" font-size="10px" font-weight="bold"><tspan x="20" y="80">Value</tspan></text> \n            </g><g transform="translate(100)">\n            <rect vector-effect="non-scaling-stroke" fill="white" stroke-width="1" stroke="black" height="100" width="100"/>\n            <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" d="M 0 50 L 100 50"/>\n            <text class="symbol-text-container" visibility="hidden" lengthAdjust="spacingAndGlyphs" font-size="10px" font-weight="bold"><tspan x="20" y="30">Title</tspan></text>\n            <text class="symbol-text-container" visibility="hidden" lengthAdjust="spacingAndGlyphs" font-size="10px" font-weight="bold"><tspan x="20" y="80">Value</tspan></text> \n            </g><g transform="translate(200)">\n            <rect vector-effect="non-scaling-stroke" fill="white" stroke-width="1" stroke="black" height="100" width="100"/>\n            <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" d="M 0 50 L 100 50"/>\n            <text class="symbol-text-container" visibility="hidden" lengthAdjust="spacingAndGlyphs" font-size="10px" font-weight="bold"><tspan x="20" y="30">Title</tspan></text>\n            <text class="symbol-text-container" visibility="hidden" lengthAdjust="spacingAndGlyphs" font-size="10px" font-weight="bold"><tspan x="20" y="80">Value</tspan></text> \n            </g>\n                        </g>`,
      },
      width: 300,
      height: 100,
      annotations: [
        {
          content: "Communication",
          width: 100,
          offset: {
            x: 0.16666666666666666,
            y: 0.25,
          },
        },
        {
          content: "",
          width: 100,
          offset: {
            x: 0.16666666666666666,
            y: 0.75,
          },
        },
        {
          content: "Application Value",
          width: 100,
          offset: {
            x: 0.5,
            y: 0.25,
          },
        },
        {
          content: "",
          width: 100,
          offset: {
            x: 0.5,
            y: 0.75,
          },
        },
        {
          content: "Communication Function",
          width: 100,
          offset: {
            x: 0.8333333333333333,
            y: 0.25,
          },
        },
        {
          content: "",
          width: 100,
          offset: {
            x: 0.8333333333333333,
            y: 0.75,
          },
        },
      ],
      constraints: NodeConstraints.Default | NodeConstraints.Tooltip | NodeConstraints.AllowDrop | NodeConstraints.ResizeNorth,
      tooltip: {
        content: 'Communication change Application Tabulated Form',
        position: 'TopRight'
      }
    },
    {
      id: "changeofApplication1",
      addInfo: {menuId: "edit", title: "Change of Application", tooltip: "Change of Application"},
      shape: {
        type: "Native",
        content: `
        <g  transform="translate(2, 2)">\n                        <rect width="10" height="10" fill="transparent" stroke-width="0" />\n                        <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1.5" fill="transparent" d="M 0.5 10 L 0.5 0 M 0 9.5 L 10 9.5" />\n                    </g>`,
      },
      width: 600,
      height: 600,
      annotations: [
        {
          content: "Communication",
          offset: {
            x: 0.5,
            y: 1,
          },
          margin: {
            top: 10,
          },
        },
        {
          content: "Application",
          offset: {
            x: 0,
            y: 0.5,
          },
          margin: {
            right: 10,
          },
        },
      ],
      constraints: NodeConstraints.Default | NodeConstraints.Tooltip | NodeConstraints.AllowDrop | NodeConstraints.ResizeNorth,
      tooltip: {
        content: 'Communication Change Application Graphical Form',
        position: 'TopRight'
      }
    },
    {
      id: 'graphLine',
      addInfo: { menuId: "edit", title: 'Graph Line', tooltip: 'Graph Line' },
      type: 'Straight',
      sourcePoint: {
        x: 30,
        y: 40,
      },
      targetPoint: {
        x: 50,
        y: 40,
      },
      sourceDecorator: {
        shape: "None",
      },
      targetDecorator: {
        shape: 'None',
        style: null
      },
      tooltip: {
        content: 'Use to Draw Graph',
        position: 'RightCenter'
      },
      style: null,
      constraints: ConnectorConstraints.Tooltip | ConnectorConstraints.Default | ConnectorConstraints.AllowDrop,
    },
    {
      id: "graphPoint",
      addInfo: [
        {
          menuId: "edit", title: "Graph Point",
          toolTip: "Use to Draw Graph",
        },
      ],
      shape: {
        type: "Native",
        content: `
        <g  class="point-circle" transform="translate(2, 2)">\n                        <rect height="10" width="10" fill="transparent" stroke-width="0" /> \n                        <circle vector-effect="non-scaling-stroke" cx="5" cy="5" r="5" fill="black" stroke="black" stroke-width="1"/>\n                        <foreignObject class="symbol-text-container" x="1.25" width="7.5" height="10" visibility="hidden">\n                        <div style="height: 10px" class="flex-container">\n                            <div width="7.5" class="symbol-text-element">\n                                \n                            </div>\n                        </div>\n                    </foreignObject>\n                    </g>`,
      },
      ports: null,
      height: 10,
      width: 10,
      annotations: null,
      constraints: NodeConstraints.Default | NodeConstraints.Tooltip | NodeConstraints.AllowDrop | NodeConstraints.ResizeNorth,
      tooltip: {
        content: 'Use to Draw Graph',
        position: 'TopRight'
      }
    },
    {
      id: 'graphLineAndPoint',
      addInfo: { menuId: "edit", title: 'Graph Line and Point', tooltip: 'Graph Line and Point' },
      type: 'Straight',
      sourcePoint: {
        x: 30,
        y: 40,
      },
      targetPoint: {
        x: 50,
        y: 40,
      },
      sourceDecorator: {
        shape: "None",
      },
      targetDecorator: {
        shape: 'Circle',
        style: null
      },
      tooltip: {
        content: 'Use to Draw Graph',
        position: 'RightCenter'
      },
      style: null,
      constraints: ConnectorConstraints.Tooltip | ConnectorConstraints.Default | ConnectorConstraints.AllowDrop,
    },
    {
      id: "xAxis",
      addInfo: [
        {
          menuId: "edit", title: "X-Axis",
          toolTip: "X-Axis",
        },
      ],
      shape: {
        type: "Native",
        content: `
        <g  transform="translate(2, 2)">\n                    <g>\n                        <rect width="10" height="5" fill="transparent" stroke-width="0"/>\n                        <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" stroke-dasharray="" d="M 0 2.5 L 10 2.5"/>\n                    </g>                    \n                </g>`,
      },
      ports: null,
      height: 30,
      width: 600,
      annotations: [
        {
          content: "X-Axis",
          offset: {
            x: 0.5,
            y: 1,
          },
          margin: {
            top: 15,
          },
        },
      ],
      constraints: NodeConstraints.Default | NodeConstraints.Tooltip | NodeConstraints.AllowDrop | NodeConstraints.ResizeNorth,
      tooltip: {
        content: 'Use to Graph',
        position: 'TopRight'
      }
    },
    {
      id: "yAxis",
      addInfo: [
        {
          menuId: "edit", title: "Y-Axis",
          toolTip: "Y-Axis",
        },
      ],
      shape: {
        type: "Native",
        content: `
        <g  transform="translate(2, 2)">\n                    <g>\n                        <rect width="5" height="10" fill="transparent" stroke-width="0"/>\n                        <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" stroke-dasharray="" d="M 2.5 0 L 2.5 10"/> \n                    </g>                    \n                </g>`,
      },
      ports: null,
      height: 600,
      width: 30,
      annotations: [
        {
          content: "Y-Axis",
          offset: {
            x: 0,
            y: 0.5,
          },
          margin: {
            right: 15,
          },
        },
      ],
      constraints: NodeConstraints.Default | NodeConstraints.Tooltip | NodeConstraints.AllowDrop | NodeConstraints.ResizeNorth,
      tooltip: {
        content: 'Use to Graph',
        position: 'TopRight'
      }
    },
  ];
  return otherCommunicationElement;
}
