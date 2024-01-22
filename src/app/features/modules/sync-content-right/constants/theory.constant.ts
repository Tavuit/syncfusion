import {EDiagramModel} from "src/app/shared/enums/diagram.enum";
import {
  ITreeViewDataSourceType
} from "../../../../shared/base-components/views/sync-tree-view/sync-tree-view.component";

export const CTreeViewDataTheory: ITreeViewDataSourceType[] = [
  {
    id: 1,
    name: 'Project Name',
    iconName: 'flow-chart-1',
    hasChild: true,
    expanded: true,
  },
  {
    id: 2,
    pid: 1,
    name: 'Main Theory Application Model',
    iconName: 'flow-chart-1',
    hasChild: false,
    enums: EDiagramModel.THEORY_MAIN_APPLICATION_MODEL
  },
  {
    id: 3,
    pid: 1,
    name: 'System Apply Theory Circular',
    iconName: 'flow-chart-1',
    hasChild: false,
    enums: EDiagramModel.SYSTEM_APPLY_THEORY_MODEL
  },
  {
    id: 5,
    pid: 1,
    name: 'Function In Functional System',
    iconName: 'flow-chart-1',
    hasChild: false,
  },
  {
    id: 6,
    pid: 1,
    name: 'Other Theory Model',
    iconName: 'flow-chart-1',
    hasChild: false,
  },
  {
    id: 7,
    pid: 1,
    name: 'Support Model',
    iconName: 'flow-chart-1',
    hasChild: true
  },
  {
    id: 8,
    pid: 1,
    name: 'Stability',
    iconName: 'flow-chart-1',
    hasChild: true,
  },
  {id: 9, pid: 7, name: 'Parts of Function to Function', iconName: 'flow-chart-1', hasChild: false},
  {id: 10, pid: 7, name: 'Part of Instrument to Instrument', iconName: 'flow-chart-1', hasChild: false},
  {id: 11, pid: 7, name: 'Natural or Input Element Usage', iconName: 'flow-chart-1', hasChild: false},
  {id: 12, pid: 7, name: 'List of Identified Theorems', iconName: 'flow-chart-1', hasChild: false},
  {id: 13, pid: 7, name: 'List of Applied Theorems', iconName: 'flow-chart-1', hasChild: false},
  {id: 30, pid: 7, name: 'Instrument or Method Produced', iconName: 'flow-chart-1', hasChild: false},
  {id: 15, pid: 7, name: 'Function Produced from Theory Application', iconName: 'flow-chart-1', hasChild: false},
  {id: 16, pid: 7, name: 'Other Support Model', iconName: 'flow-chart-1', hasChild: false},

  {id: 17, pid: 8, name: 'System Understanding Theory', iconName: 'flow-chart-1', hasChild: false},
  {id: 18, pid: 8, name: 'Function on Theory Scale', iconName: 'flow-chart-1', hasChild: false},
  {id: 19, pid: 8, name: 'Functional Stability', iconName: 'flow-chart-1', hasChild: false},
  {id: 20, pid: 8, name: 'Graphical Project Status', iconName: 'flow-chart-1', hasChild: false},
  {id: 21, pid: 8, name: 'Project Direction and Destination', iconName: 'flow-chart-1', hasChild: false},
  {id: 22, pid: 8, name: 'Problem Development and Identification', iconName: 'flow-chart-1', hasChild: false},
  {id: 23, pid: 8, name: 'Philosophy Inheritance Chart', iconName: 'flow-chart-1', hasChild: false},
  {id: 24, pid: 8, name: 'Other Stability Model', iconName: 'flow-chart-1', hasChild: false}
]
