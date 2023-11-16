import {
  NodeConstraints,
  NodeModel,
  PortVisibility,
} from '@syncfusion/ej2-angular-diagrams';
import { rectPorts } from 'src/app/features/modules/sync-content-left/components/constants/communication/common';
import { getShapeByType } from 'src/app/utils/constants';

export function getOperatorShapes() {
  let operatorShapes = [
    {
      ...getShapeByType('', 'operatorTheoryGroup', { title: 'Group', tooltip: 'Group' }, {
        content: [
          {
            content: "Group",
          },
        ],
        ports: [
          {
            id: "left-1",
            offset: {x: 0, y: 0.25},
            visibility: PortVisibility.Visible,
            shape: "X",
            width: 4,
            height: 4,
          },
          {
            id: "left-2",
            offset: {x: 0, y: 0.75},
            visibility: PortVisibility.Visible,
            shape: "X",
            width: 4,
            height: 4,
          },
          {
            id: "right",
            offset: {x: 1, y: 0.5},
            visibility: PortVisibility.Visible,
            shape: "X",
            width: 4,
            height: 4,
          },
        ],
        height: 50,
        width: 50,
      }),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop |
        NodeConstraints.Rotate,
      tooltip: {
        content: '',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('', 'operatorTheoryComMix', { title: 'Com Mix', tooltip: 'Com Mix' }, {
        content: [
          {
            content: "Com Mix",
          },
        ],
        ports: [
          {
            id: "left-1",
            offset: {x: 0, y: 0.25},
            visibility: PortVisibility.Visible,
            shape: "X",
            width: 4,
            height: 4,
          },
          {
            id: "left-2",
            offset: {x: 0, y: 0.75},
            visibility: PortVisibility.Visible,
            shape: "X",
            width: 4,
            height: 4,
          },
          {
            id: "right",
            offset: {x: 1, y: 0.5},
            visibility: PortVisibility.Visible,
            shape: "X",
            width: 4,
            height: 4,
          },
        ],
        height: 50,
        width: 50,
      }),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop |
        NodeConstraints.Rotate,
      tooltip: {
        content: '',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('Circle', 'operatorTheoryComAppMix', { title: 'Com App Mix', tooltip: 'Com App Mix' }, {
        content: [
          {
            content: "ComAppMix",
          },
        ],
        radius: 35,
        fill: "White",
        ports: rectPorts,
      }),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop |
        NodeConstraints.Rotate,
      tooltip: {
        content: '',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('Circle', 'operatorTheorySimilar', { title: 'Similar', tooltip: 'Similar' }, {
        content: [
          {
            content: "Similar",
          },
        ],
        radius: 35,
        fill: "White",
        ports: rectPorts,
        height: 50,
        width: 50,
      }),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop |
        NodeConstraints.Rotate,
      tooltip: {
        content: '',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('Circle', 'operatorTheorySimilar1', { title: 'Similar', tooltip: 'Similar' }, {
        content: [
          {
            content: "∼",
            style: {
              fontSize: 20,
            },
          },
        ],
        radius: 35,
        fill: "White",
        ports: rectPorts,
        height: 50,
        width: 50,
      }),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop |
        NodeConstraints.Rotate,
      tooltip: {
        content: '',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('', 'operatorTheoryGreater', { title: 'Greater', tooltip: 'Greater' }, {
        content: [
          {
            content: ">",
            style: {
              fontSize: 20,
            },
          },
        ],
        ports: rectPorts,
        height: 50,
        width: 50,
      }),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop |
        NodeConstraints.Rotate,
      tooltip: {
        content: '',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('', 'operatorTheoryLess', { title: 'Less', tooltip: 'Less' }, {
        content: [
          {
            content: "<",
            style: {
              fontSize: 20,
            },
          },
        ],
        ports: rectPorts,
        height: 50,
        width: 50,
      }),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop |
        NodeConstraints.Rotate,
      tooltip: {
        content: '',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('', 'operatorTheoryLessOrEqual', { title: 'Less Or Equal', tooltip: 'Less Or Equal' }, {
        content: [
          {
            content: "≤",
            style: {
              fontSize: 20,
            },
          },
        ],
        ports: rectPorts,
        height: 50,
        width: 50,
      }),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop |
        NodeConstraints.Rotate,
      tooltip: {
        content: '',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('', 'operatorTheoryGreaterOrEqual', { title: 'Greater Or Equal', tooltip: 'Greater Or Equal' }, {
        content: [
          {
            content: "≥",
            style: {
              fontSize: 20,
            },
          },
        ],
        ports: rectPorts,
        height: 50,
        width: 50,
      }),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop |
        NodeConstraints.Rotate,
      tooltip: {
        content: '',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('', 'operatorTheoryNotEqual', { title: 'Not Equal', tooltip: 'Not Equal' }, {
        content: [
          {
            content: "≠",
            style: {
              fontSize: 20,
            },
          },
        ],
        ports: rectPorts,
        height: 50,
        width: 50,
      }),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop |
        NodeConstraints.Rotate,
      tooltip: {
        content: '',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('', 'operatorTheoryNotEqual', { title: 'Not Equal', tooltip: 'Not Equal' }, {
        content: [
          {
            content: "≠",
            style: {
              fontSize: 20,
            },
          },
        ],
        ports: rectPorts,
        height: 50,
        width: 50,
      }),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop |
        NodeConstraints.Rotate,
      tooltip: {
        content: '',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('', 'operatorTheoryAdd', { title: 'Add', tooltip: 'Add' }, {
        content: [
          {
            content: "+",
            style: {
              fontSize: 20,
            },
          },
        ],
        ports: rectPorts,
        height: 50,
        width: 50,
      }),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop |
        NodeConstraints.Rotate,
      tooltip: {
        content: '',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('', 'operatorTheoryDivide', { title: 'Divide', tooltip: 'Divide' }, {
        content: [
          {
            content: "⌯",
            style: {
              fontSize: 20,
            },
          },
        ],
        ports: rectPorts,
        height: 50,
        width: 50,
      }),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop |
        NodeConstraints.Rotate,
      tooltip: {
        content: '',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('', 'operatorTheoryMultiply', { title: 'Multiply', tooltip: 'Multiply' }, {
        content: [
          {
            content: "x",
            style: {
              fontSize: 20,
            },
          },
        ],
        ports: rectPorts,
        height: 50,
        width: 50,
      }),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop |
        NodeConstraints.Rotate,
      tooltip: {
        content: '',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('', 'operatorTheorySubtract', { title: 'Subtract', tooltip: 'Subtract' }, {
        content: [
          {
            content: "-",
            style: {
              fontSize: 20,
            },
          },
        ],
        ports: rectPorts,
        height: 50,
        width: 50,
      }),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop |
        NodeConstraints.Rotate,
      tooltip: {
        content: '',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('', 'operatorTheoryEqual', { title: 'Equal', tooltip: 'Equal' }, {
        content: [
          {
            content: "=",
            style: {
              fontSize: 20,
            },
          },
        ],
        ports: rectPorts,
        height: 50,
        width: 50,
      }),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop |
        NodeConstraints.Rotate,
      tooltip: {
        content: '',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('', 'operatorTheorySum', { title: 'Sum', tooltip: 'Sum' }, {
        content: [
          {
            content: "+",
            style: {
              fontSize: 20,
            },
          },
        ],
        ports: rectPorts,
        height: 50,
        width: 50,
      }),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop |
        NodeConstraints.Rotate,
      tooltip: {
        content: '',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('Circle', 'operatorTheoryRelationship', { title: 'Relationship', tooltip: 'Relationship' }, {
        content: [
          {
            content: "Relationship",
          },
        ],
        radius: 35,
        fill: "White",
        ports: rectPorts,
        height: 50,
        width: 50,
      }),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop |
        NodeConstraints.Rotate,
      tooltip: {
        content: '',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('', 'operatorTheoryProportional', { title: 'Proportional', tooltip: 'Proportional' }, {
        content: [
          {
            content: "∝",
            style: {
              fontSize: 20,
            },
          },
        ],
        ports: rectPorts,
        height: 50,
        width: 50,
      }),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop |
        NodeConstraints.Rotate,
      tooltip: {
        content: '',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('RawAnnotationContent', 'operatorTheoryInstrumentDerivative', { title: 'Instrument Derivative', tooltip: 'Instrument Derivative' }, {
        content: [
          {
            type: "Custom",
            content: `<div style="border-bottom:solid black 1px; display:inline-block; float:left;">dI</div>
                          <div style="display:inline-block; clear:left; float:left; margin-top: 1px">dT</div>`,
            template: `<div style="width: 30px; margin: auto; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%)">
                              <input style="border: none; background-color: transparent; height: 23px; width: 30px; text-align:center; display:inline-block; margin-top: 3px; border-bottom:solid black 1px"  value="dI">
                              <input style="border: none; background-color: transparent; height: 23px; width: 30px; text-align:center; display:inline-block; margin-top: 1px; clear:left" value="dT">
                          </div>`,
            style: {
              fontSize: 20,
              position: "relative",
            },
          },
        ],
        ports: rectPorts,
        height: 50,
        width: 50,
      }),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop |
        NodeConstraints.Rotate,
      tooltip: {
        content: '',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('', 'operatorTheoryMethodDerivative', { title: 'Method Derivative', tooltip: 'Method Derivative' }, {
        content: [
          {
            content: `<div style="border-bottom:solid black 1px; display:inline-block; float:left;">dI</div>
                      <div style="display:inline-block; clear:left; float:left; margin-top: 1px">dT</div>`,
            template: `<div style="width: 30px; margin: auto; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%)">
                          <input style="border: none; background-color: transparent; height: 23px; width: 30px; text-align:center; display:inline-block; margin-top: 3px; border-bottom:solid black 1px"  value="dI">
                          <input style="border: none; background-color: transparent; height: 23px; width: 30px; text-align:center; display:inline-block; margin-top: 1px; clear:left" value="dT">
                      </div>`,
            style: {
              fontSize: 20,
            },
          },
        ],
        ports: rectPorts,
        height: 50,
        width: 50,
      }),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop |
        NodeConstraints.Rotate,
      tooltip: {
        content: '',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('linkednode', 'operatorTheoryLinkedNode', { title: 'Linked Node', tooltip: 'Linked Node' }, {
        content: [
          {
            content: "1",
            style: {
              fontSize: 20,
            },
          },
        ],
        ports: rectPorts,
        height: 50,
        width: 50,
      }),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop |
        NodeConstraints.Rotate,
      tooltip: {
        content: '',
        position: 'TopRight',
      }
    },
  ];

  return operatorShapes;
}
