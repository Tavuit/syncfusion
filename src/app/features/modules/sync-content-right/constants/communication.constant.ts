import { EDiagramModel } from "src/app/shared/enums/diagram.enum";
import {
  ITreeViewDataSourceType
} from "../../../../shared/base-components/views/sync-tree-view/sync-tree-view.component";

export const CTreeViewDataComm: ITreeViewDataSourceType[] = [
  {
    id: 1,
    name: 'Project Name',
    iconName: 'files',
    hasChild: true,
    expanded: true,
  },
  {
    id: 2,
    pid: 1,
    name: 'Main Project Model',
    iconName: 'flow-diagram',
    hasChild: false,
    enums: EDiagramModel.COMM_MAIN_PROJECT_MODEL
  },
  {
    id: 3,
    pid: 1,
    name: 'Problem Statement',
    iconName: 'diagram-icon',
    hasChild: false,
    enums: EDiagramModel.COMM_PROBLEM_STATEMENT
  },
  {
    id: 5,
    pid: 1,
    name: 'People Work Together',
    iconName: 'flow-chart',
    hasChild: false,
  },
  {
    id: 6,
    pid: 1,
    name: 'Operating Principle',
    iconName: 'structure',
    hasChild: false,
  },
  { id: 7, pid: 1, name: 'What We Do Model', iconName: 'diagram-3', hasChild: false },
  {
    id: 8,
    pid: 1,
    name: 'Error Give Rise To Problem',
    iconName: 'uml',
    hasChild: false,
  },
  { id: 9, pid: 1, name: 'Other Model', iconName: 'structure', hasChild: false },
  { id: 10, pid: 1, name: 'Group People & Group Function', iconName: 'diagram-5', hasChild: true },
  { id: 11, pid: 10, name: 'Group of People Defined', iconName: 'people', hasChild: false },
  { id: 12, pid: 10, name: 'Group of People Function', iconName: 'flow-chart-1', hasChild: false },

  { id: 13, pid: 1, name: 'Change Of Application', iconName: 'diagram-3', hasChild: true },
  { id: 30, pid: 13, name: 'Graphical Change', iconName: 'monitoring', hasChild: false },
  { id: 15, pid: 13, name: 'Tabulated Change', iconName: 'diagram-4', hasChild: false },

  { id: 16, pid: 1, name: 'Timeline & Schedule', iconName: 'timetable', hasChild: true },
  { id: 17, pid: 16, name: 'Project Timeline', iconName: 'performance', hasChild: false },
  { id: 18, pid: 16, name: 'Project Schedule', iconName: 'timetable', hasChild: false },
  { id: 19, pid: 16, name: 'People Schedule', iconName: 'people', hasChild: false },
  { id: 20, pid: 16, name: 'Graphical Project Status', iconName: 'diagram-3', hasChild: false },

  { id: 21, pid: 1, name: 'Support Models', iconName: 'structure', hasChild: true },
  { id: 22, pid: 21, name: 'Entity Support Model', iconName: 'diagram-1', hasChild: false },
  { id: 23, pid: 21, name: 'Error Accumulator', iconName: 'symbol', hasChild: false },
  { id: 24, pid: 21, name: 'Sum of Compensator', iconName: 'the-sum-of', hasChild: false },
  { id: 25, pid: 21, name: 'List of Analysis', iconName: 'note-123', hasChild: false },
  { id: 26, pid: 21, name: 'Total Timeline', iconName: 'monitoring', hasChild: false },
  { id: 27, pid: 21, name: 'Problem Report', iconName: 'checklist', hasChild: false },
  { id: 28, pid: 21, name: 'Entity Produced and Function', iconName: 'planning', hasChild: false },
  { id: 29, pid: 21, name: 'Function Status', iconName: 'report', hasChild: false },
  { id: 30, pid: 21, name: 'List of Test Result ', iconName: 'flow-chart-1', hasChild: false },

  { id: 31, pid: 1, name: 'Entity Usage & Function', iconName: 'diagram-1', hasChild: true },
  { id: 32, pid: 31, name: 'List of Entity Usage ', iconName: 'flow-chart-1', hasChild: false },
  { id: 33, pid: 31, name: 'Actual Entity Used by People ', iconName: 'flow-chart-1', hasChild: false },
  { id: 34, pid: 31, name: 'Function of Entity Used', iconName: 'flow-chart-1', hasChild: false },

  { id: 35, pid: 1, name: 'Area & Site Of Operation', iconName: 'house', hasChild: true },
  { id: 36, pid: 35, name: 'Area of Operation', iconName: 'house', hasChild: false },
  { id: 37, pid: 35, name: 'Site of Operation', iconName: 'diagram-4', hasChild: false },
]

//TODO UPDATE FUNCTION WHEN CTREE VIEW ELEMENTS HAVE CHILD

export const COMM_PROJECT_MODEL_MAP = CTreeViewDataComm.reduce((prev, curr) => {
  return {
    ...prev,
    [curr.enums] : curr
  }
}, {})

console.log(COMM_PROJECT_MODEL_MAP)