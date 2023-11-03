import {ConnectorConstraints, ConnectorModel, NodeConstraints, NodeModel} from "@syncfusion/ej2-angular-diagrams";

export function getLabelShapes() {
  let labelsShape = [
    {
      id: 'informationlabel',
      addInfo: { title: 'Information Label', tooltip: 'Information Label' },
      type: 'Bezier',
      sourcePoint: {
        x: 30,
        y: 40,
      },
      targetPoint: {
        x: 100,
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
          content: "Label",
          alignment: "Before"
        },
      ],

      tooltip: {
        content: 'Show More Entity Info',
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
      id: 'communication12',
      addInfo: { title: 'Communication', tooltip: 'Communication' },
      type: 'Bezier',
      sourcePoint: {
        x: 30,
        y: 40,
      },
      targetPoint: {
        x: 100,
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
          alignment: "Before"
        },
      ],

      tooltip: {
        content: 'Communication Work Related',
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
      id: 'toDO',
      addInfo: { title: 'To Do', tooltip: 'To Do' },
      type: 'Straight',
      sourcePoint: {
        x: 30,
        y: 40,
      },
      targetPoint: {
        x: 100,
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
          content: "To Do",
          alignment: "Before"
        },
      ],

      tooltip: {
        content: 'Use With Other Entity',
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
      id: 'pointTo',
      addInfo: { title: 'Point To', tooltip: 'Point To' },
      type: 'Straight',
      sourcePoint: {
        x: 30,
        y: 40,
      },
      targetPoint: {
        x: 100,
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
          content: "Point To",
          alignment: "Before"
        },
      ],

      tooltip: {
        content: 'Word Point To Entity',
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
      id: 'giveRiseTo',
      addInfo: { title: 'Give Rise To', tooltip: 'Give Rise To' },
      type: 'Straight',
      sourcePoint: {
        x: -5, y: 800,
      },
      targetPoint: {
        x: -5, y: -80,
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
          content: "Give Rise To",
          alignment: "Before"
        },
      ],
      tooltip: {
        content: 'Entity Give Rise to Entity',
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
      id: 'errorToProblem',
      addInfo: { title: 'Error to Problem', tooltip: 'Error to Problem' },
      type: 'Straight',
      sourcePoint: {
        x: -5, y: 800,
      },
      targetPoint: {
        x: -5, y: -80,
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
          content: "giveRiseTo",
          alignment: "Before"
        },
      ],

      tooltip: {
        content: 'Comm Error Rise to Problem',
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
      id: 'relatedTo',
      addInfo: { title: 'Related To', tooltip: 'Related To' },
      type: 'Straight',
      sourcePoint: {
        x: 30,
        y: 40,
      },
      targetPoint: {
        x: 100,
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
          content: "Related To",
          alignment: "Before"
        },
      ],

      tooltip: {
        content: 'Entity Related to Entity',
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
      id: 'by',
      addInfo: { title: 'by', tooltip: 'by' },
      type: 'Straight',
      sourcePoint: {
        x: 30,
        y: 40,
      },
      targetPoint: {
        x: 100,
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
          content: "Related To",
          alignment: "Before"
        },
      ],

      tooltip: {
        content: 'Entity Related to Entity By Entity',
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
      id: 'depend',
      addInfo: { title: 'Depend', tooltip: 'by' },
      type: 'Straight',
      sourcePoint: {
        x: 30,
        y: 40,
      },
      targetPoint: {
        x: 100,
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
          content: "Depend",
          alignment: "Before"
        },
      ],

      tooltip: {
        content: 'Entity Depend on Entity',
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
      id: 'agree',
      addInfo: { title: 'Agree', tooltip: 'Agree' },
      type: 'Straight',
      sourcePoint: {
        x: 30,
        y: 40,
      },
      targetPoint: {
        x: 100,
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
          content: "Agree",
          alignment: "Before"
        },
      ],

      tooltip: {
        content: 'Entity Agree With Entity',
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
      id: 'match',
      addInfo: { title: 'Match', tooltip: 'Match' },
      type: 'Straight',
      sourcePoint: {
        x: 30,
        y: 40,
      },
      targetPoint: {
        x: 100,
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
          content: "Match",
          alignment: "Before"
        },
      ],

      tooltip: {
        content: 'Entity Match With Entity',
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
      id: 'have',
      addInfo: { title: 'Have', tooltip: 'Have' },
      type: 'Straight',
      sourcePoint: {
        x: 30,
        y: 40,
      },
      targetPoint: {
        x: 100,
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
          content: "Have",
          alignment: "Before"
        },
      ],

      tooltip: {
        content: 'Entity Have Entity',
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
      id: 'Interact',
      addInfo: { title: 'Interact', tooltip: 'Interact' },
      type: 'Straight',
      sourcePoint: {
        x: 30,
        y: 40,
      },
      targetPoint: {
        x: 100,
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
          content: "Have",
          alignment: "Before"
        },
      ],

      tooltip: {
        content: 'Entity Interact Entity',
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
      id: 'Use',
      addInfo: { title: 'Use', tooltip: 'Use' },
      type: 'Straight',
      sourcePoint: {
        x: 30,
        y: 40,
      },
      targetPoint: {
        x: 100,
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
          content: "Use",
          alignment: "Before"
        },
      ],

      tooltip: {
        content: 'Entity Use Entity',
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
      id: 'compare',
      addInfo: { title: 'Compare', tooltip: 'Compare' },
      type: 'Straight',
      sourcePoint: {
        x: 30,
        y: 40,
      },
      targetPoint: {
        x: 100,
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
          content: "Compare",
          alignment: "Before"
        },
      ],

      tooltip: {
        content: 'Entity Compare Entity',
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
      id: 'attach',
      addInfo: { title: 'Attach', tooltip: 'Attach' },
      type: 'Straight',
      sourcePoint: {
        x: 30,
        y: 40,
      },
      targetPoint: {
        x: 100,
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
          content: "Attach",
          alignment: "Before"
        },
      ],

      tooltip: {
        content: 'Entity Attach To Entity',
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
      id: 'identify',
      addInfo: { title: 'Identify', tooltip: 'Identify' },
      type: 'Straight',
      sourcePoint: {
        x: 30,
        y: 40,
      },
      targetPoint: {
        x: 100,
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
          content: "Identify",
          alignment: "Before"
        },
      ],

      tooltip: {
        content: 'Entity Identify To Entity',
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
      id: 'define',
      addInfo: { title: 'Define', tooltip: 'Define' },
      type: 'Straight',
      sourcePoint: {
        x: 30,
        y: 40,
      },
      targetPoint: {
        x: 100,
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
          content: "Define",
          alignment: "Before"
        },
      ],

      tooltip: {
        content: 'Entity Define To Entity',
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
      id: 'visuallyIdentify',
      addInfo: { title: 'Usually Identify', tooltip: 'Usually Identify' },
      type: 'Straight',
      sourcePoint: {
        x: 30,
        y: 40,
      },
      targetPoint: {
        x: 100,
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
          content: "Usually Identify",
          alignment: "Before"
        },
      ],

      tooltip: {
        content: 'Entity Usually Identify to Entity',
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
      id: "curlBracesLeft1",
      addInfo: {title: "Curl Braces", tooltip: "Curl Braces"},
      shape: {
        type: "Native",
        content: '<g  transform="translate(2,2)">\n                    <rect height="120" width="30" stroke-width="1" stroke="1" fill="transparent"/>\n                    <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" d="M 30 0 A 15 20 0 0 0 15 20 L 15 50 A 15 10 0 0 1 0 60 A 15 10 0 0 1 15 70 L 15 100 A 15 20 0 0 0 30 120"/>\n                </g>',
      },
      width: 40,
      height: 120,
      annotations: [
        {
          content: "Text",
          offset: {
            x: 0,
            y: 0.5,
          },
          margin: {
            right: 15,
          }
        },
      ],
      constraints: NodeConstraints.Default | NodeConstraints.Tooltip | NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Left Braces',
        position: 'TopRight'
      }
    },
    {
      id: "curlBracesRight2",
      addInfo: {title: "Curl Braces", tooltip: "Curl Braces"},
      shape: {
        type: "Native",
        content: '<g transform="translate(2,2)">\n                    <rect height="120" width="30" stroke-width="1" stroke="1" fill="transparent"/>\n                    <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" d="M 0 0 A 15 20 0 0 1 15 20 L 15 50 A 15 10 0 0 0 30 60 A 15 10 0 0 0 15 70 L 15 100 A 15 20 0 0 1 0 120" />\n                </g>',
      },
      width: 40,
      height: 120,
      annotations: [
        {
          content: "Text",
          offset: {
            x: 1,
            y: 0.5,
          },
          margin: {
            left: 15,
          },
        },
      ],
      constraints: NodeConstraints.Default | NodeConstraints.Tooltip | NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Right Braces',
        position: 'TopRight'
      }
    },
  ]
  return labelsShape;
}
