import { getShapeByType } from 'src/app/utils/constants';
import { PortVisibility } from '@syncfusion/ej2-angular-diagrams';

let fundamentalData = [
  {
    id: "fundamentalTheory",
    title: "Fundamental Theory",
    annotation: "Fundamental Theory",
    menuId: "fundamentalTheory",
    toolTip: "Identify The Fundamental of Theory",
  },
  {
    id: "fundamentalCommunication",
    title: "Fundamental Commmunication",
    annotation: "Fundamental Communication",
    menuId: "fundamentalTheory",
    toolTip: "Identify The Fundamental of Communication Theory",
  },
  {
    id: "fundamentalInformationTheory",
    title: "Fundamental Information Theory",
    annotation: "Fundamental Information Theory",
    menuId: "fundamentalTheory",
    toolTip: "Identify The Fundamental of Information Theory",
  },
  {
    id: "fundamentalInstrumentationTheory",
    title: "Fundamental Instrumentation Theory",
    annotation: "Fundamental Instrumentation Theory",
    menuId: "fundamentalTheory",
    toolTip: "Identify The Fundamental of Instrumentation Theory",
  },
  {
    id: "fundamentalEducation",
    title: "Fundamental Education Theory",
    annotation: "Fundamental Education Theory",
    menuId: "fundamentalTheory",
    toolTip: "Identify The Fundamental of Education Theory",
  },
  {
    id: "fundamentalPower",
    title: "Fundamental Power Theorem",
    annotation: "Fundamental Power Theorem",
    menuId: "fundamentalTheory",
    toolTip: "Identify The Fundamental of The Power Theorem",
  },
  {
    id: "fundamentalMarketingTheory",
    title: "Fundamental Marketing Theory",
    annotation: "Fundamental Marketing Theory",
    menuId: "fundamentalTheory",
    toolTip: "Identify The Fundamanetal of Theory of Marketing",
  },
  {
    id: "fundamentalExchangeSystemTheory",
    title: "Fundamental Exchange System Theory",
    annotation: "Fundamental Exchange System Theory",
    menuId: "fundamentalTheory",
    toolTip: "Identify The Fundamental of Exchange System Theory",
  },
  {
    id: "fundamentalGammingTheory",
    title: "Fundamental Gamming Theory",
    annotation: "Fundamental Gamming Theory",
    menuId: "fundamentalTheory",
    toolTip: "Identify The Fundamental of The Gamming Theory",
  },
  {
    id: "fundamentalWorkTheory",
    title: "Fundamental Work Theory",
    annotation: "Fundamental Work Theory",
    menuId: "fundamentalTheory",
    toolTip: "Identify The Fundamental of Work Theory",
  },
  {
    id: "fundamentalReproductionTheory",
    title: "Fundamental Reproduction Theory",
    annotation: "Fundamental Reproduction Theory",
    menuId: "fundamentalTheory",
    toolTip: "Identify The Fundamental Reporoduction Theory",
  },
  {
    id: "fundamentalUtilizationTheoryFirst",
    title: "Fundamental Utilization Theory",
    annotation: "Fundamental Utilization Theory",
    menuId: "fundamentalTheory",
    toolTip: "Identify The Fundamental of Our Utilization Theory",
  },
  {
    id: "fundamentalPresentedTheory",
    title: "Fundamental Presented Theory",
    annotation: "Fundamental Presented Theory",
    menuId: "fundamentalTheory",
    toolTip: "Identify The Fundamental of a Presented Theory",
  },
  {
    id: "fundamentalInterpretedTheory",
    title: "Fundamental Interpreted Theory",
    annotation: "Fundamental Interpreted Theory",
    menuId: "fundamentalTheory",
    toolTip: "Identify The Fundamental of a Interpreted Theory",
  },
  {
    id: "groupFundamental",
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
    menuId: "commMix",
    toolTip: "Use to Group or Add Entities",
  },
  {
    id: "linkednodefundamental",
    title: "Linked Node",
    toolTip: "Linked Node",
    menuId: "linkedNode",
    type: "linkednode",
  },
  {
    id: "fundamentalTheory1",
    title: "Fundamental Theory",
    annotation: "fT",
    menuId: "fundamentalTheory",
    toolTip: "Identify The Fundamental Theory",
  },
  {
    id: "fundamentalCommunicationTheory1",
    title: "Fundamental Communication Theory",
    annotation: "fKT",
    menuId: "fundamentalTheory",
    toolTip: "Identify The Fundamental of Communication Theory",
  },
  {
    id: "fundamentalUtilizationTheory1",
    title: "Fundamental Utilization Theory",
    annotation: "fUT",
    menuId: "fundamentalTheory",
    toolTip: "Identify The Fundamental of Our Utilization Theory",
  },
];

export function getTheoryFundamentalShapes() {
  return fundamentalData.map((value) => ({
    ...getShapeByType(value.type, value.id, { title: value.title, tooltip: value.toolTip}, value.annotation)
  }))
}
