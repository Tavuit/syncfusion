import {ConnectorConstraints, NodeConstraints, NodeModel, PortVisibility} from "@syncfusion/ej2-angular-diagrams";
import { rectPorts } from "src/app/features/modules/sync-content-left/components/constants/communication/common";

export function getOtherCommunicationElementShapes() {
  let otherCommunicationElement = [
    {
      id: "separationLineComm",
      addInfo: {title: "Separation Line", tooltip: "Separation Line"},
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
      addInfo: {title: "Time", tooltip: "Time"},
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
      addInfo: {title: "Progress", tooltip: "Progress"},
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
      addInfo: {title: "Time Line", tooltip: "Time Line"},
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
      addInfo: {title: "Date Line", tooltip: "Date Line"},
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

  ];
  return otherCommunicationElement;
}
