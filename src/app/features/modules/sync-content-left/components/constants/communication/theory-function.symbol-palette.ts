import {
  NodeConstraints,
  NodeModel,
  PortVisibility,
  ConnectorConstraints
} from '@syncfusion/ej2-angular-diagrams';
import { rectPorts } from 'src/app/features/modules/sync-content-left/components/constants/communication/common';
import { getShapeByType } from 'src/app/utils/constants';

const theoryFunctions = [
  {
    id: "functionSystem",
    title: "Functional System",
    annotation: {
      radius: 150,
      fill: "Transparent",
      content: [
        {
          content: "Functional System",
          offset: {x: 0.5, y: 1},
          margin: {top: 20},
        },
      ],
    },
    menuId: "functionSystem",
    toolTip: "Represents Life",
    type: "Circle",
  },
  {
    id: "life",
    title: "Life",
    annotation: ["Existing Function Area", "Added Function Area", "Life"],
    toolTip: "Represent The Functional System",
    menuId: "life",
    type: "LifeCircle",
  },
  {
    id: "functionalSystem1",
    title: "Functional System",
    annotation: {
      content: [
        {
          content: "Functional System",
        },
      ],
      style: {
        strokeWidth: 2,
      },
      height: 400,
      width: 200,
    },
    menuId: "functionSystem",
    toolTip: "Represents Life",
  },
  {
    id: "lifeBox",
    title: "Life",
    annotation: ["Existing Functions", "Added Functions", "Life"],
    menuId: "life",
    toolTip: "Represent The Functional System",
    type: "LifeBox",
  },
  {
    id: "existingFunction",
    title: "Existing Function",
    annotation: "Existing Function",
    menuId: "addedFunction",
    toolTip: "Identify An Existing Funciton",
  },
  {
    id: "addedFunction",
    title: "Added Function",
    annotation: "Added Function",
    menuId: "addedFunction",
    toolTip: "Identify An Added Function",
  },
  {
    id: "existingFunction1",
    title: "Existing Function",
    annotation: "Existing Function",
    toolTip: "Identify An Existing Function",
    menuId: "addedFunction",
    type: "Ellipse",
  },
  {
    id: "addedFunction1",
    title: "Added Function",
    annotation: "Added Function",
    menuId: "addedFunction",
    toolTip: "Identify An Added Function",
    type: "Ellipse",
  },
  {
    id: "existingFunction2",
    title: "Existing Function",
    annotation: {
      fill: "white",
      radius: 35,
      content: [
        {
          content: "Existing Function",
        },
      ],
    },
    menuId: "addedFunction",
    toolTip: "Identify An Existing Function",
    type: "Circle",
  },
  {
    id: "addedFunction2",
    title: "Added Function",
    annotation: {
      content: [
        {
          content: "Added Function",
        },
      ],
      radius: 35,
      fill: "White",
    },
    menuId: "addedFunction",
    toolTip: "Identify an Added Function",
    type: "Circle",
  },
  {
    id: "existingFunction3",
    title: "Existing Function",
    annotation: {
      content: [
        {
          content: "h(x)",
        },
      ],
      radius: 35,
      fill: "White",
    },
    menuId: "addedFunction",
    toolTip: "Identify An Existing Function",
    type: "Circle",
  },
  {
    id: "addedFunction3",
    title: "Added Function",
    annotation: {
      content: [
        {
          content: "u(x)",
        },
      ],
      radius: 35,
      fill: "White",
    },
    menuId: "addedFunction",
    toolTip: "Identify An Added Function",
    type: "Circle",
  },
  {
    id: "addedFunction4",
    title: "Added Function",
    annotation: {
      content: [
        {
          content: "function",
        },
      ],
      radius: 35,
      fill: "White",
    },
    menuId: "addedFunction",
    toolTip: "Multi Inputs Added Function",
    type: "Circle",
  },
  {
    id: "addedFunction5",
    title: "Added Function",
    annotation: {
      content: [
        {
          content: "u(x)",
        },
      ],
      radius: 35,
      fill: "White",
    },
    menuId: "addedFunction",
    toolTip: "Multi Input Added Function",
    type: "Circle",
  },
  {
    id: "externalFunction",
    title: "External Function",
    annotation: "External Function",
    menuId: "addedFunction",
    toolTip: "Identify An External Function",
  },
  {
    id: "stopFunction",
    title: "Stop Function",
    annotation: "Stop Function",
    menuId: "addedFunction",
    toolTip: "Identify a Stop Function",
  },
  {
    id: "functionContainer",
    title: "Function Container",
    annotation: {
      height: 200,
      width: 100,
      content: [{content: ""}],
      style: {
        strokeWidth: 3,
      },
      ports: [],
    },
    menuId: "addedFunction",
    toolTip: "Identify A Function Container",
  },
  {
    id: "eFunction",
    title: "eFunction",
    annotation: "eFunction",
    toolTip: "Identify An Existing Function",
    menuId: "empty",
    type: "Text",
  },
  {
    id: "aFunction",
    title: "aFunction",
    annotation: "aFunction",
    toolTip: "Identify An Added Function",
    menuId: "empty",
    type: "Text",
  },
  {
    id: "groupFunctionTheory",
    title: "Group",
    annotation: {
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
      height: 75,
      width: 50,
    },
    menuId: "empty",
    toolTip: "Use to Group or Add Entities",
  },
  {
    id: "continuityFunction",
    title: "Continuity",
    annotation: {
      strokeWidth: 0,
      fill: "transparent",
      ports: [],
    },
    menuId: "empty",
    toolTip: "Show Continuity of Entity",
    type: "Continuity",
  },
  {
    id: "linkednodefunciton",
    title: "Linked Node",
    toolTip: "Linked Node",
    menuId: "linkedNode",
    type: "linkednode",
  },
  {
    id: "h(t)Function",
    title: "h(t)",
    annotation: "h(t)",
    menuId: "addedFunction",
    toolTip: "Identidy an Existing Function",
  },
  {
    id: "u(t)function",
    title: "u(t)",
    annotation: "u(t)",
    menuId: "addedFunction",
    toolTip: "Identify an Added Function",
  },
  {
    id: "h(t)",
    title: "h(t)",
    annotation: "h(t)",
    toolTip: "Identify an Existing Function",
    menuId: "empty",
    type: "text",
  },
  {
    id: "u(t)",
    title: "u(t)",
    annotation: "u(t)",
    toolTip: "Identify an Added Function",
    menuId: "empty",
    type: "text",
  },
  {
    id: "life1",
    title: "Life",
    annotation: {
      radius: 70,
      content: [
        {
          content: "Life",
        },
      ],
      fill: "White",
    },
    toolTip: "Life as a Function of Time",
    menuId: "life",
    type: "Circle",
  },
  {
    id: "life2",
    title: "Life",
    annotation: "Life",
    toolTip: "Life as a Function",
    menuId: "empty",
    type: "Text",
  },
  {
    id: "L(t)",
    title: "L(t)",
    annotation: {
      content: [
        {
          content: "L(t)",
        },
      ],
      radius: 70,
      fill: "White",
    },
    menuId: "l(t)",
    toolTip: "Life as a Function of Time",
    type: "Circle",
  },
  {
    id: "L(t)1",
    title: "L(t)",
    annotation: "L(t)",
    toolTip: "Life as a Function of Time",
    menuId: "empty",
    type: "Text",
  },
];

export function getTheoryFunctionShapes() {
  return theoryFunctions.map((value) => ({
    ...getShapeByType(value.type, value.id, { title: value.title, tooltip: value.toolTip}, value.annotation)
  }))
}
