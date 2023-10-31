import { ConnectorConstraints, ConnectorModel, NodeConstraints, NodeModel } from '@syncfusion/ej2-angular-diagrams';
import { rectPorts } from 'src/app/features/modules/sync-content-left/components/constants/communication/common';

export function getCommunicationSignalShapes(): any {
  let communicationSignal = [
    {
      id: "greenCommSignal",
      addInfo: {title: "Green Comm Signal", tooltip: "Green Comm Signal"},
      shape: {
        type: "Native",
        content: `
        <g  class="point-circle" transform="translate(2, 2)">\n                        <rect height="25" width="25" fill="transparent" stroke-width="0" /> \n                        <circle vector-effect="non-scaling-stroke" cx="12.5" cy="12.5" r="12.5" fill="LimeGreen" stroke="black" stroke-width="1"/>\n                        <foreignObject class="symbol-text-container" x="3.125" width="18.75" height="25" visibility="hidden">\n                        <div style="height: 25px" class="flex-container">\n                            <div width="18.75" class="symbol-text-element">\n                                \n                            </div>\n                        </div>\n                    </foreignObject>\n                    </g>`,
      },
      width: 25,
      height: 25,
      ports: null,
      annotations: null,
      constraints: NodeConstraints.Default | NodeConstraints.Tooltip | NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Represents a Comm Without Error',
        position: 'TopRight'
      },
      style: {
        fill: 'none',
        fontSize: 10
      }
    },
    {
      id: "redCommSignal",
      addInfo: {title: "Red Comm Signal", tooltip: "Red Comm Signal"},
      shape: {
        type: "Native",
        content: `
        <g  class="point-circle" transform="translate(2, 2)">\n                        <rect height="25" width="25" fill="transparent" stroke-width="0" /> \n                        <circle vector-effect="non-scaling-stroke" cx="12.5" cy="12.5" r="12.5" fill="Red" stroke="black" stroke-width="1"/>\n                        <foreignObject class="symbol-text-container" x="3.125" width="18.75" height="25" visibility="hidden">\n                        <div style="height: 25px" class="flex-container">\n                            <div width="18.75" class="symbol-text-element">\n                                \n                            </div>\n                        </div>\n                    </foreignObject>\n                    </g>`,
      },
      width: 25,
      height: 25,
      ports: null,
      annotations: null,
      constraints: NodeConstraints.Default | NodeConstraints.Tooltip | NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Represents a Comm With Error',
        position: 'TopRight'
      },
      style: {
        fill: 'none',
        fontSize: 10
      }
    },
    {
      id: "blueCommSignal",
      addInfo: {title: "Blue Comm Signal", tooltip: "Blue Comm Signal"},
      shape: {
        type: "Native",
        content: `
        <g  class="point-circle" transform="translate(2, 2)">\n                        <rect height="25" width="25" fill="transparent" stroke-width="0" /> \n                        <circle vector-effect="non-scaling-stroke" cx="12.5" cy="12.5" r="12.5" fill="Blue" stroke="black" stroke-width="1"/>\n                        <foreignObject class="symbol-text-container" x="3.125" width="18.75" height="25" visibility="hidden">\n                        <div style="height: 25px" class="flex-container">\n                            <div width="18.75" class="symbol-text-element">\n                                \n                            </div>\n                        </div>\n                    </foreignObject>\n                    </g>`,
      },
      width: 25,
      height: 25,
      ports: null,
      annotations: null,
      constraints: NodeConstraints.Default | NodeConstraints.Tooltip | NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Represents a Comm as Feedback',
        position: 'TopRight'
      },
      style: {
        fill: 'none',
        fontSize: 10
      }
    },
    {
      id: 'greenSignalPath',
      addInfo: { title: 'Green Signal Path', tooltip: 'Green Signal Path' },
      type: 'Straight',
      sourcePoint: {
        x: 30,
        y: 40,
      },
      targetPoint: {
        x: 50,
        y: 40,
      },
      targetDecorator: {
        shape: 'Arrow',
        style: {
          fill: 'LimeGreen',
          strokeColor: 'LimeGreen'
        }
      },
      tooltip: {
        content: 'Show Green Communication Flow',
        position: 'RightCenter'
      },
      style: {
        fill: 'LimeGreen',
        strokeColor: 'LimeGreen',
        strokeWidth: 1
      },
      constraints: ConnectorConstraints.Tooltip | ConnectorConstraints.Default,
    },
    {
      id: 'redSignalPath',
      addInfo: { title: 'Red Signal Path', tooltip: 'Red Signal Path' },
      type: 'Straight',
      sourcePoint: {
        x: 30,
        y: 40,
      },
      targetPoint: {
        x: 50,
        y: 40,
      },
      targetDecorator: {
        shape: 'Arrow',
        style: {
          fill: 'Red',
          strokeColor: 'Red'
        }
      },
      tooltip: {
        content: 'Show Red Communication Flow',
        position: 'RightCenter'
      },
      style: {
        fill: 'Red',
        strokeColor: 'Red',
        strokeWidth: 1
      },
      sourceDecorator: {
        shape: "None",
      },
      constraints: ConnectorConstraints.Tooltip | ConnectorConstraints.Default,
    },
    {
      id: 'blueSignalPath',
      addInfo: { title: 'Blue Signal Path', tooltip: 'Blue Signal Path' },
      type: 'Straight',
      sourcePoint: {
        x: 30,
        y: 40,
      },
      targetPoint: {
        x: 50,
        y: 40,
      },
      targetDecorator: {
        shape: 'Arrow',
        style: {
          fill: 'Blue',
          strokeColor: 'Blue'
        }
      },
      tooltip: {
        content: 'Show Blue Communication Flow',
        position: 'RightCenter'
      },
      style: {
        fill: 'Blue',
        strokeColor: 'Blue',
        strokeWidth: 1
      },
      constraints: ConnectorConstraints.Tooltip | ConnectorConstraints.Default,
    }
  ];
  return communicationSignal;
}
