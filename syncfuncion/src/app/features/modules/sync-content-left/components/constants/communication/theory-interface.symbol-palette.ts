import { getShapeByType } from 'src/app/utils/constants';
import { PortVisibility } from '@syncfusion/ej2-angular-diagrams';

const theoryInterface = [
  {
    id: "rightInterface",
    title: "Right Interface",
    annotation: {
      content: [
        {
          content: "Right Interface",
          alignment: "Before",
        },
      ],
      decoration: "right",
    },
    menuId: "edit",
    toolTip: "Interface To The Right",
    type: "ConnectorArrow",
  },
  {
    id: "leftInterface",
    title: "Left Interface",
    annotation: {
      content: [
        {
          content: "Left Interface",
          alignment: "Before",
        },
      ],
      decoration: "left",
    },
    menuId: "edit",
    toolTip: "Interface To The Left",
    type: "ConnectorArrow",
  },
  {
    id: "upInterface",
    title: "Up Interface",
    annotation: {
      content: [
        {
          content: "Up Interface",
          alignment: "Before",
        },
      ],
      decoration: "up",
    },
    menuId: "edit",
    toolTip: "Interface To The Top",
    type: "ConnectorArrow",
  },
  {
    id: "downInterface",
    title: "Down Interface",
    annotation: {
      content: [
        {
          content: "Down Interface",
          alignment: "Before",
        },
      ],
      decoration: "down",
    },
    menuId: "edit",
    toolTip: "Interface Down",
    type: "ConnectorArrow",
  },
  {
    id: "dependencyInterface",
    title: "Dependency Interface",
    annotation: {
      content: [
        {
          content: "Depend",
          alignment: "Before",
        },
      ],
    },
    menuId: "edit",
    toolTip: "Identify Dependency Interface",
    type: "ConnectorArrow",
  },
  {
    id: "giveRiseInterface",
    title: "Give Rise Interface",
    annotation: {
      content: [
        {
          content: "Give Rise To",
          alignment: "Before",
        },
      ],
    },
    menuId: "edit",
    toolTip: "Identify Give Rise Interface",
    type: "ConnectorArrow",
  },
  {
    id: "pointToInterface",
    title: "Point to Interface",
    annotation: {
      content: [
        {
          content: "Point To",
          alignment: "Before",
        },
      ],
    },
    menuId: "edit",
    toolTip: "Identify Point to Interface",
    type: "ConnectorArrow",
  },
  {
    id: "apply",
    title: "Apply",
    annotation: {
      content: [
        {
          content: "Apply",
          alignment: "Before",
        },
      ],
    },
    menuId: "edit",
    toolTip: "Apply Interface",
    type: "ConnectorArrow",
  },
  {
    id: "execute",
    title: "Execute",
    annotation: {
      content: [
        {
          content: "Execute",
          alignment: "Before",
        },
      ],
    },
    menuId: "edit",
    toolTip: "Execute Interface",
    type: "ConnectorArrow",
  },
  {
    id: "contributeTo",
    title: "Contribute To",
    annotation: {
      content: [
        {
          content: "contribute to",
          alignment: "Before",
        },
      ],
    },
    menuId: "edit",
    toolTip: "Use to Show Contribution Interface",
    type: "ConnectorArrow",
  },
  {
    id: "associate",
    title: "Associate",
    annotation: {
      content: [
        {
          content: "associate",
          alignment: "Before",
        },
      ],
    },
    menuId: "edit",
    toolTip: "System Associates with Theory",
    type: "ConnectorArrow",
  },
  {
    id: "enable",
    title: "Enable",
    annotation: {
      content: [
        {
          content: "Enable",
          alignment: "Before",
        },
      ],
    },
    menuId: "edit",
    toolTip: "Use For Enable Relationship",
    type: "ConnectorArrow",
  },
  {
    id: "related",
    title: "Related",
    annotation: {
      content: [
        {
          content: "Related",
          alignment: "Before",
        },
      ],
    },
    menuId: "edit",
    toolTip: "System Related To Theory",
    type: "ConnectorArrow",
  },
  {
    id: "derrive",
    title: "Derrive",
    annotation: {
      content: [
        {
          content: "Derrive",
          alignment: "Before",
        },
      ],
    },
    menuId: "edit",
    toolTip: "Instrument Derive From Theory",
    type: "ConnectorArrow",
  },
  {
    id: "leftRightInteraction",
    title: "Left-Right Interaction",
    annotation: {
      content: [
        {
          content: "Interact",
        },
      ],
      decoration: "up",
    },
    menuId: "edit",
    toolTip: "Use For System Interaction",
    type: "ConnectorBezier",
  },
  {
    id: "rightLeftInteraction",
    title: "Right-Left Interaction",
    annotation: {
      content: [
        {
          content: "Interact",
          alignment: "Before",
        },
      ],
      shape: {},
      style: {},
    },
    menuId: "edit",
    toolTip: "Use For System Interaction",
    decoration: "up",
    type: "Arrow",
  },
  {
    id: "related",
    title: "Related",
    annotation: {
      content: [
        {
          content: "Related",
        },
      ],
      radius: 35,
      fill: "White",
    },
    menuId: "edit",
    toolTip: "Use For Related Entities",
    type: "Circle",
  },
  {
    id: "similarity",
    title: "Similarity",
    annotation: {
      content: [
        {
          content: "Similarity",
        },
      ],
      radius: 35,
      fill: "White",
    },
    menuId: "edit",
    toolTip: "Use For Similariry Entities",
    type: "Circle",
  },
  {
    id: "relationship",
    title: "Relationship",
    annotation: {
      content: [
        {
          content: "Alpha",
        },
      ],
      radius: 35,
      fill: "White",
    },
    menuId: "edit",
    toolTip: "Use For Related Entities",
    type: "Circle",
  },
  {
    id: "realtionshipBiArrow",
    title: "Relationship",
    annotation: "",
    menuId: "edit",
    toolTip: "Left And Right Relationship",
    type: "BiWideArrow",
  },
  {
    id: "realtionshipRightArrow",
    title: "Relationship",
    annotation: {
      direction: "Right",
      content: "",
    },
    menuId: "edit",
    toolTip: "Left to Right Relationship",
    type: "WideArrow",
  },
  {
    id: "realtionshipLeftArrow",
    title: "Relationship",
    annotation: {
      direction: "left",
      content: "",
    },
    menuId: "edit",
    toolTip: "Right to Left Relationship",
    type: "WideArrow",
  },
  {
    id: "linkednodeinterface",
    title: "Linked Node",
    toolTip: "Linked Node",
    menuId: "linkedNode",
    type: "linkednode",
  },
];

export function getTheoryInterfaceShapes() {
  return theoryInterface.map((value) => ({
    ...getShapeByType(value.type, value.id, { title: value.title, tooltip: value.toolTip}, value.annotation)
  }))
}
