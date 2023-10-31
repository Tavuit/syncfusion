import {ConnectorConstraints, NodeConstraints, NodeModel} from "@syncfusion/ej2-angular-diagrams";

export function getCommunicationLinksShapes() {
  let communicationLinks = [
    {
      id: 'communicationLink',
      addInfo: { title: 'Communication Link', tooltip: 'Communication Link' },
      type: 'Straight',
      sourcePoint: {
        x: 30,
        y: 40,
      },
      targetPoint: {
        x: -1000,
        y: 40,
      },
      targetDecorator: {
        shape: 'Arrow',
        style: {
          fill: 'black',
          strokeColor: 'black'
        }
      },
      sourceDecorator: {
        shape: "None",
      },
      annotations: [
        {
          content: "Communicate",
          alignment: "Before",
          margin: {
            top: 2,
            bottom: 2,
            left: 2,
            right: 2,
          },
        },
      ],
      tooltip: {
        content: 'Right Communication Flow',
        position: 'RightCenter'
      },
      style: {
        fill: 'black',
        strokeColor: 'black',
        strokeWidth: 1
      },
      constraints: ConnectorConstraints.Tooltip | ConnectorConstraints.Default | ConnectorConstraints.AllowDrop,
    },
    {
      id: 'communicationLinkLeft',
      addInfo: { title: 'Communication Link', tooltip: 'Communication Link' },
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
        shape: 'Arrow',
        style: {
          fill: 'black',
          strokeColor: 'black'
        }
      },
      annotations: [
        {
          content: "Communicate",
          alignment: "After",
          margin: {
            top: 2,
            bottom: 2,
            left: 2,
            right: 2,
          },
        },
      ],

      tooltip: {
        content: 'Left Communication Flow',
        position: 'RightCenter'
      },
      style: {
        fill: 'black',
        strokeColor: 'black',
        strokeWidth: 1
      },
      constraints: ConnectorConstraints.Tooltip | ConnectorConstraints.Default | ConnectorConstraints.AllowDrop,
    },
    {
      id: 'bidirectionalCommunicationLink',
      addInfo: { title: 'Bidirectional Communication Link', tooltip: 'Bidirectional Communication Link' },
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
          content: "Communicate",
          alignment: "Before",
          margin: {
            top: 2,
            bottom: 2,
            left: 2,
            right: 2,
          },
        },
      ],
      tooltip: {
        content: 'Left & RIght Communication Flow',
        position: 'RightCenter'
      },
      style: {
        fill: 'black',
        strokeColor: 'black',
        strokeWidth: 1
      },
      constraints: ConnectorConstraints.Tooltip | ConnectorConstraints.Default | ConnectorConstraints.AllowDrop,
    },
    {
      id: "rightCommunicationLink",
      addInfo: {title: "Right Communication Link", tooltip: "Right Communication Link"},
      shape: {
        type: "Native",
        content: '<g  transform="translate(2, 2)">\n                <g transform="rotate(0) translate(0,0)">\n                <rect height="70" width="200" fill="transparent" stroke-width="0"/>\n                <path vector-effect="non-scaling-stroke" fill="white" stroke="black" stroke-width="1" d="M 0 15 L 175 15 L 175 0 L 200 35 L 175 70 L 175 55 L 0 55 L 0 15"/>\n                </g>\n                <foreignObject class="symbol-text-container" x="25" width="150" height="70" visibility="hidden">\n                <div style="height: 70px" class="flex-container">\n                    <div width="150" class="symbol-text-element">\n                        Information\n                    </div>\n                </div>\n                </foreignObject>\n            </g>',
      },
      width: 200,
      height: 70,
      annotations: [
        {
          content: "Information",
        },
      ],
      constraints: NodeConstraints.Default | NodeConstraints.Tooltip | NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Communication Link With Information',
        position: 'TopRight'
      }
    },
    {
      id: "leftCommunicationLink",
      addInfo: {title: "Left Communication Link", tooltip: "Left Communication Link"},
      shape: {
        type: "Native",
        content: '<g  transform="translate(2, 2)">\n                <g transform="rotate(180) translate(-200,-70)">\n                <rect height="70" width="200" fill="transparent" stroke-width="0"/>\n                <path vector-effect="non-scaling-stroke" fill="white" stroke="black" stroke-width="1" d="M 0 15 L 175 15 L 175 0 L 200 35 L 175 70 L 175 55 L 0 55 L 0 15"/>\n                </g>\n                <foreignObject class="symbol-text-container" x="25" width="150" height="70" visibility="hidden">\n                <div style="height: 70px" class="flex-container">\n                    <div width="150" class="symbol-text-element">\n                        Information\n                    </div>\n                </div>\n                </foreignObject>\n            </g>',
      },
      width: 200,
      height: 70,
      annotations: [
        {
          content: "Information",
        },
      ],
      constraints: NodeConstraints.Default | NodeConstraints.Tooltip | NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Communication Link With Information',
        position: 'TopRight'
      }
    },
    {
      id: "biDirectionalArrow",
      addInfo: {title: "Bidirectional Arrow", tooltip: "Bidirectional Arrow"},
      shape: {
        type: "Native",
        content: '<g transform="translate(2, 2)">\n                    <g>\n                        <rect height="90" width="500" fill="none" stroke-width="0"/>\n                        <path vector-effect="non-scaling-stroke" fill="white" stroke="black" stroke-width="1" d="M 0 45 L 50 0 L 50 20 L 450 20 L 450 0 L 500 45 L 450 90 L 450 70 L 50 70 L 50 90 L 0 45"/>\n                        <foreignObject class="symbol-text-container" x="62.5" width="375" height="90" visibility="hidden">\n                        <div style="height: 90px" class="flex-container">\n                            <div width="375" class="symbol-text-element">\n                                Information\n                            </div>\n                        </div>\n                    </foreignObject>  \n                    </g>\n                </g>',
      },
      width: 500,
      height: 90,
      annotations: [
        {
          content: "Information",
        },
      ],
      constraints: NodeConstraints.Default | NodeConstraints.Tooltip | NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Communication Link With Information',
        position: 'TopRight'
      }
    },
    {
      id: "communicationLink1",
      addInfo: {title: "Communication Link", tooltip: "Communication Link"},
      shape: {
        type: "Native",
        content: '<g  transform="translate(2, 2)">\n                    <g fill="white">\n                        <rect height="50" width="550" fill="none" strole-width="0"/>\n                        <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" d="M 25 0 L 525 0 L 525 50 L 25 50 L 25 0"/>\n                        <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" cx="25" cy="25" r="25" />\n                        <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" cx="525" cy="25" r="25" />\n                    </g>\n                    <foreignObject class="symbol-text-container" x="68.75" width="412.5" height="50" visibility="hidden">\n                    <div style="height: 50px" class="flex-container">\n                        <div width="412.5" class="symbol-text-element">\n                            Information\n                        </div>\n                    </div>\n                </foreignObject>  \n                </g>',
      },
      width: 550,
      height: 50,
      annotations: [
        {
          content: "Information",
        },
      ],
      constraints: NodeConstraints.Default | NodeConstraints.Tooltip | NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Communication Link With Information',
        position: 'TopRight'
      }
    },
  ]
  return communicationLinks;
}
