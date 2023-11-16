import {ConnectorConstraints, ConnectorModel, NodeConstraints, NodeModel, PortVisibility} from "@syncfusion/ej2-angular-diagrams";
import { rectPorts } from 'src/app/features/modules/sync-content-left/components/constants/communication/common';
import { getShapeByType } from 'src/app/utils/constants';
export function getLabelShapes(): any {
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

export function getTheoryLabelShapes() {
  let theoryLabelShapes = [
    {
      ...getShapeByType(
        'Arrow',
        'label',
        { title: 'Label', tooltip: 'Label' },
        {
          type: "Bezier",
          shape: {
            target: "Arrow",
          },
          content: [
            {
              content: "label",
              alignment: "After",
            },
          ],
          style: {},
        }
      ),
      constraints:
        ConnectorConstraints.Default |
        ConnectorConstraints.Tooltip |
        ConnectorConstraints.AllowDrop,
      tooltip: {
        content: 'Information Label',
        position: 'TopRight',
      },
    },
    {
      ...getShapeByType(
        'Arrow',
        'label1',
        { title: 'Label', tooltip: 'Label' },
        {
          type: "Bezier",
          shape: {
            target: "Arrow",
          },
          content: [
            {
              content: "label",
              alignment: "After",
            },
          ],
          style: {},
        }
      ),
      constraints:
        ConnectorConstraints.Default |
        ConnectorConstraints.Tooltip |
        ConnectorConstraints.AllowDrop,
      tooltip: {
        content: 'Information Label',
        position: 'TopRight',
      },
    },
    {
      ...getShapeByType(
        'Arrow',
        'label2',
        { title: 'Label', tooltip: 'Label' },
        {
          type: "Bezier",
          shape: {
            target: "Arrow",
          },
          content: [
            {
              content: "label",
              alignment: "Before",
            },
          ],
          style: {},
        }
      ),
      constraints:
        ConnectorConstraints.Default |
        ConnectorConstraints.Tooltip |
        ConnectorConstraints.AllowDrop,
      tooltip: {
        content: 'Information Label',
        position: 'TopRight',
      },
    },
    {
      ...getShapeByType(
        'Arrow',
        'label3',
        { title: 'Label', tooltip: 'Label' },
        {
          type: "Bezier",
          shape: {
            target: "Arrow",
          },
          content: [
            {
              content: "label",
              alignment: "Before",
            },
          ],
          style: {},
        }
      ),
      constraints:
        ConnectorConstraints.Default |
        ConnectorConstraints.Tooltip |
        ConnectorConstraints.AllowDrop,
      tooltip: {
        content: 'Information Label',
        position: 'TopRight',
      },
    },
    {
      ...getShapeByType(
        'Arrow',
        'label4',
        { title: 'Label', tooltip: 'Label' },
        {
          type: "Bezier",
          shape: {
            target: "Arrow",
          },
          content: [
            {
              content: "label",
              alignment: "Before",
            },
          ],
          style: {},
        }
      ),
      constraints:
        ConnectorConstraints.Default |
        ConnectorConstraints.Tooltip |
        ConnectorConstraints.AllowDrop,
      tooltip: {
        content: 'Information Label',
        position: 'TopRight',
      },
    },
    {
      ...getShapeByType(
        'Arrow',
        'label5',
        { title: 'Label', tooltip: 'Label' },
        {
          type: "Bezier",
          shape: {
            target: "Arrow",
          },
          content: [
            {
              content: "label",
              alignment: "After",
            },
          ],
          style: {},
        }
      ),
      constraints:
        ConnectorConstraints.Default |
        ConnectorConstraints.Tooltip |
        ConnectorConstraints.AllowDrop,
      tooltip: {
        content: 'Information Label',
        position: 'TopRight',
      },
    },
    {
      ...getShapeByType(
        'Arrow',
        'expandTo',
        { title: 'Expand To', tooltip: 'Expand To' },
        {
          type: "Bezier",
          shape: {
            target: "Arrow",
          },
          content: [
            {
              content: "label",
              alignment: "Before",
            },
          ],
          style: {},
        }
      ),
      constraints:
        ConnectorConstraints.Default |
        ConnectorConstraints.Tooltip |
        ConnectorConstraints.AllowDrop,
      tooltip: {
        content: 'Information Label',
        position: 'TopRight',
      },
    },
    {
      ...getShapeByType(
        'Arrow',
        'expandTo1',
        { title: 'Expand To', tooltip: 'Expand To' },
        {
          type: "Bezier",
          shape: {
            target: "Arrow",
          },
          content: [
            {
              content: "label",
              alignment: "After",
            },
          ],
          style: {},
        }
      ),
      constraints:
        ConnectorConstraints.Default |
        ConnectorConstraints.Tooltip |
        ConnectorConstraints.AllowDrop,
      tooltip: {
        content: 'Information Label',
        position: 'TopRight',
      },
    },
    {
      ...getShapeByType(
        'Arrow',
        'allocate',
        { title: 'Allocate', tooltip: 'Allocate' },
        {
          shape: {
            source: "Arrow",
          },
          content: [],
          style: {},
        }
      ),
      constraints:
        ConnectorConstraints.Default |
        ConnectorConstraints.Tooltip |
        ConnectorConstraints.AllowDrop,
      tooltip: {
        content: 'Allocate Theorem in Theory',
        position: 'TopRight',
      },
    },
    {
      ...getShapeByType(
        'Arrow',
        'allocate1',
        { title: 'Allocate', tooltip: 'Allocate' },
        {
          shape: {
            source: "Arrow",
          },
          content: [],
          style: {},
        }
      ),
      constraints:
        ConnectorConstraints.Default |
        ConnectorConstraints.Tooltip |
        ConnectorConstraints.AllowDrop,
      tooltip: {
        content: 'Allocate Theorem in Theory',
        position: 'TopRight',
      },
    },
    {
      ...getShapeByType(
        'LeftLabel',
        'label123',
        { title: 'Label', tooltip: 'Label' },
        null
      ),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Symbol Identification Label',
        position: 'TopRight',
      },
    },
    {
      ...getShapeByType(
        'RightLabel',
        'label',
        { title: 'Label', tooltip: 'Label' },
        null
      ),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Symbol Identification Label',
        position: 'TopRight',
      },
    },
    {
      ...getShapeByType(
        'Arrow',
        'directionLeft',
        { title: 'DirectionLeft', tooltip: 'DirectionLeft' },
        {
          shape: {
            source: "Arrow",
          },
          content: [],
          style: {},
        }
      ),
      constraints:
        ConnectorConstraints.Default |
        ConnectorConstraints.Tooltip |
        ConnectorConstraints.AllowDrop,
      tooltip: {
        content: 'Identify Left Direction',
        position: 'TopRight',
      },
    },
    {
      ...getShapeByType(
        'Arrow',
        'directionRight',
        { title: 'Direction Right', tooltip: 'Direction Right' },
        {
          shape: {
            source: "Arrow",
          },
          content: [],
          style: {},
        }
      ),
      constraints:
        ConnectorConstraints.Default |
        ConnectorConstraints.Tooltip |
        ConnectorConstraints.AllowDrop,
      tooltip: {
        content: 'Identify Right Direction',
        position: 'TopRight',
      },
    },
    {
      ...getShapeByType(
        'redcross',
        'crossoutlabel',
        { title: 'Cross Out', tooltip: 'Cross Out' },
        null
      ),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'To Cross Out an Entity',
        position: 'TopRight',
      },
    },
    {
      ...getShapeByType(
        'Curly',
        'leftCurlBrace',
        { title: 'Left Curl Brace', tooltip: 'Left Curl Brace' },
        {
          content: [
            {
              content: "Text",
              offset: {
                x: 0,
                y: 0.5,
              },
              margin: {
                right: 15,
              },
            },
          ],
          orientation: "left",
        }
      ),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Use to Group Theorem',
        position: 'TopRight',
      },
    },
    {
      ...getShapeByType(
        'CurlyClose',
        'rightCurlBraces',
        { title: 'Right Curl Braces', tooltip: 'Right Curl Braces' },
        {
          content: [
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
          orientation: "right",
        }
      ),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Use to Group Theorem',
        position: 'TopRight',
      },
    },
    {
      ...getShapeByType(
        'Text',
        '#',
        { title: '#', tooltip: '#' },
        null
      ),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Use for Identification',
        position: 'TopRight',
      },
    },
    {
      ...getShapeByType(
        'Circle',
        'node',
        { title: 'Node', tooltip: 'Node' },
        {
          content: [
            {
              content: "1",
            },
          ],
          radius: 15,
          fill: "White",
        }
      ),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Use for Identification',
        position: 'TopRight',
      },
    },
    {
      ...getShapeByType(
        'Table',
        'nodeTable',
        { title: 'Node Table', tooltip: 'Node Table' },
        {
          content: ["Node Number", "Information", ""],
          columnNo: 2,
        }
      ),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Represents a Table of Node',
        position: 'TopRight',
      },
    },
    {
      ...getShapeByType(
        'VerticalLine',
        'separationLine',
        { title: 'Separation Line', tooltip: 'Separation Line' },
        {
          length: 400,
          style: {
            strokeDashArray: "10 5",
          },
        }
      ),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Use to Show Separation',
        position: 'TopRight',
      },
    },
    {
      ...getShapeByType(
        'PushUpRight',
        'pushUp',
        { title: 'Push Up', tooltip: 'Push Up' },
        null
      ),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Push Up',
        position: 'TopRight',
      },
    },
    {
      ...getShapeByType(
        'PushUpLeft',
        'pushUp1',
        { title: 'Push Up', tooltip: 'Push Up' },
        null
      ),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Selected to Apply',
        position: 'TopRight',
      },
    },
    {
      ...getShapeByType(
        'Arrow',
        'up',
        { title: 'Up', tooltip: 'Up' },
        {
          shape: {
            source: "Arrow",
          },
          content: [
            {
              content: "up",
              alignment: "before",
            },
          ],
          style: {},
        }
      ),
      constraints:
        ConnectorConstraints.Default |
        ConnectorConstraints.Tooltip |
        ConnectorConstraints.AllowDrop,
      tooltip: {
        content: 'Position Up',
        position: 'TopRight',
      },
    },
    {
      ...getShapeByType(
        'Arrow',
        'down',
        { title: 'Down', tooltip: 'Down' },
        {
          shape: {
            target: "Arrow",
          },
          content: [
            {
              content: "down",
              alignment: "before",
            },
          ],
          style: {},
        }
      ),
      constraints:
        ConnectorConstraints.Default |
        ConnectorConstraints.Tooltip |
        ConnectorConstraints.AllowDrop,
      tooltip: {
        content: 'Position Down',
        position: 'TopRight',
      },
    },
    {
      ...getShapeByType(
        'Arrow',
        'up1',
        { title: 'Up', tooltip: 'Up' },
        {
          shape: {
            target: "Arrow",
          },
          content: [
            {
              content: "up",
              alignment: "before",
            },
          ],
          style: {},
        }
      ),
      constraints:
        ConnectorConstraints.Default |
        ConnectorConstraints.Tooltip |
        ConnectorConstraints.AllowDrop,
      tooltip: {
        content: 'Position up',
        position: 'TopRight',
      },
    },
    {
      ...getShapeByType(
        'Arrow',
        'down1',
        { title: 'Down', tooltip: 'Down' },
        {
          shape: {
            target: "Arrow",
          },
          content: [
            {
              content: "down",
              alignment: "before",
            },
          ],
          style: {},
        }
      ),
      constraints:
        ConnectorConstraints.Default |
        ConnectorConstraints.Tooltip |
        ConnectorConstraints.AllowDrop,
      tooltip: {
        content: 'Position down',
        position: 'TopRight',
      },
    },
    {
      ...getShapeByType(
        'VerticalContinuity',
        'continuityLabel',
        { title: 'Continuity', tooltip: 'Continuity' },
        {
          strokeWidth: "0",
        }
      ),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Denote a Continuity',
        position: 'TopRight',
      },
    },
    {
      ...getShapeByType(
        'linkednode',
        'linkednodeLabel',
        { title: 'Linked Node', tooltip: 'Linked Node' },
        null
      ),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Linked Node',
        position: 'TopRight',
      },
    },
  ];
  return theoryLabelShapes;
}
