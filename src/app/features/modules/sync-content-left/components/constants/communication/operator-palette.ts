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
      ...getShapeByType('', 'operatorTheoryGroup', { menuId: "commMix", title: 'Group', tooltip: 'Group' }, {
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
        NodeConstraints.AllowDrop |
        NodeConstraints.Rotate
    },
    {
      ...getShapeByType('', 'operatorTheoryComMix', { menuId: "commMix", title: 'Com Mix', tooltip: 'Com Mix' }, {
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
        NodeConstraints.AllowDrop |
        NodeConstraints.Rotate
    },
    {
      ...getShapeByType('Circle', 'operatorTheoryComAppMix', { menuId: "commMix", title: 'Com App Mix', tooltip: 'Com App Mix' }, {
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
        NodeConstraints.AllowDrop |
        NodeConstraints.Rotate
    },
    {
      ...getShapeByType('Circle', 'operatorTheorySimilar', { menuId: "commMix", title: 'Similar', tooltip: 'Similar' }, {
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
        NodeConstraints.AllowDrop |
        NodeConstraints.Rotate
    },
    {
      ...getShapeByType('Circle', 'operatorTheorySimilar1', { menuId: "commMix", title: 'Similar', tooltip: 'Similar' }, {
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
        NodeConstraints.AllowDrop |
        NodeConstraints.Rotate
    },
    {
      ...getShapeByType('', 'operatorTheoryGreater', { menuId: "commMix", title: 'Greater', tooltip: 'Greater' }, {
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
        NodeConstraints.AllowDrop |
        NodeConstraints.Rotate
    },
    {
      ...getShapeByType('', 'operatorTheoryLess', { menuId: "commMix", title: 'Less', tooltip: 'Less' }, {
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
        NodeConstraints.AllowDrop |
        NodeConstraints.Rotate
    },
    {
      ...getShapeByType('', 'operatorTheoryLessOrEqual', { menuId: "commMix", title: 'Less Or Equal', tooltip: 'Less Or Equal' }, {
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
        NodeConstraints.AllowDrop |
        NodeConstraints.Rotate
    },
    {
      ...getShapeByType('', 'operatorTheoryGreaterOrEqual', { menuId: "commMix", title: 'Greater Or Equal', tooltip: 'Greater Or Equal' }, {
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
        NodeConstraints.AllowDrop |
        NodeConstraints.Rotate
    },
    {
      ...getShapeByType('', 'operatorTheoryNotEqual', { menuId: "commMix", title: 'Not Equal', tooltip: 'Not Equal' }, {
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
        NodeConstraints.AllowDrop |
        NodeConstraints.Rotate
    },
    {
      ...getShapeByType('', 'operatorTheoryNotEqual', { menuId: "commMix", title: 'Not Equal', tooltip: 'Not Equal' }, {
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
        NodeConstraints.AllowDrop |
        NodeConstraints.Rotate
    },
    {
      ...getShapeByType('', 'operatorTheoryAdd', { menuId: "commMix", title: 'Add', tooltip: 'Add' }, {
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
        NodeConstraints.AllowDrop |
        NodeConstraints.Rotate
    },
    {
      ...getShapeByType('', 'operatorTheoryDivide', { menuId: "commMix", title: 'Divide', tooltip: 'Divide' }, {
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
        NodeConstraints.AllowDrop |
        NodeConstraints.Rotate
    },
    {
      ...getShapeByType('', 'operatorTheoryMultiply', { menuId: "commMix", title: 'Multiply', tooltip: 'Multiply' }, {
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
        NodeConstraints.AllowDrop |
        NodeConstraints.Rotate
    },
    {
      ...getShapeByType('', 'operatorTheorySubtract', { menuId: "commMix", title: 'Subtract', tooltip: 'Subtract' }, {
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
        NodeConstraints.AllowDrop |
        NodeConstraints.Rotate
    },
    {
      ...getShapeByType('', 'operatorTheoryEqual', { menuId: "commMix", title: 'Equal', tooltip: 'Equal' }, {
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
        NodeConstraints.AllowDrop |
        NodeConstraints.Rotate
    },
    {
      ...getShapeByType('', 'operatorTheorySum', { menuId: "commMix", title: 'Sum', tooltip: 'Sum' }, {
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
        NodeConstraints.AllowDrop |
        NodeConstraints.Rotate
    },
    {
      ...getShapeByType('Circle', 'operatorTheoryRelationship', { menuId: "commMix", title: 'Relationship', tooltip: 'Relationship' }, {
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
        NodeConstraints.AllowDrop |
        NodeConstraints.Rotate
    },
    {
      ...getShapeByType('', 'operatorTheoryProportional', { menuId: "commMix", title: 'Proportional', tooltip: 'Proportional' }, {
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
        NodeConstraints.AllowDrop |
        NodeConstraints.Rotate
    },
    {
      ...getShapeByType('RawAnnotationContent', 'operatorTheoryInstrumentDerivative', { menuId: "commMix", title: 'Instrument Derivative', tooltip: 'Instrument Derivative' }, {
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
        NodeConstraints.AllowDrop |
        NodeConstraints.Rotate
    },
    {
      ...getShapeByType('', 'operatorTheoryMethodDerivative', { menuId: "commMix", title: 'Method Derivative', tooltip: 'Method Derivative' }, {
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
        NodeConstraints.AllowDrop |
        NodeConstraints.Rotate
    },
    {
      ...getShapeByType('linkednode', 'operatorTheoryLinkedNode', { menuId: "commMix", title: 'Linked Node', tooltip: 'Linked Node' }, {
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
        NodeConstraints.AllowDrop |
        NodeConstraints.Rotate
    },
  ];

  return operatorShapes;
}
