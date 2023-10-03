import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeViewAllModule } from '@syncfusion/ej2-angular-navigations';

@Component({
  selector: 'sync-tree-view',
  standalone: true,
  imports: [CommonModule, TreeViewAllModule],
  templateUrl: './sync-tree-view.component.html',
  styleUrls: ['./sync-tree-view.component.scss'],
})
export class SyncTreeViewComponent {
  public localData: Object[] = [
    {
      id: 1,
      name: 'Project Name',
      eimg: '10',
      hasChild: true,
      expanded: true,
    },
    {
      id: 2,
      pid: 1,
      name: 'Main Project Model',
      eimg: '2',
      hasChild: false,
    },
    {
      id: 3,
      pid: 1,
      name: 'Problem Statement',
      eimg: '7',
      hasChild: false,
    },
    {
      id: 5,
      pid: 1,
      name: 'People Work Together',
      eimg: '4',
      hasChild: false,
    },
    {
      id: 6,
      pid: 1,
      name: 'Operating Principle',
      eimg: '9',
      hasChild: false,
    },
    { id: 7, pid: 1, name: 'What We Do Model', eimg: '8', hasChild: false },
    {
      id: 8,
      pid: 1,
      name: 'Error Give Rise To Problem',
      eimg: '6',
      hasChild: false,
    },
    { id: 9, pid: 1, name: 'Other Model', eimg: '3', hasChild: false },
    { id: 10, pid: 1, name: 'Group People & Group Function', eimg: '3', hasChild: true },
    { id: 11, pid: 10, name: 'Group of People Defined', eimg: '3', hasChild: false },
    { id: 12, pid: 10, name: 'Group of People Function', eimg: '3', hasChild: false },

    { id: 13, pid: 1, name: 'Change Of Application', eimg: '3', hasChild: true },
    { id: 30, pid: 13, name: 'Graphical Change', eimg: '3', hasChild: false },
    { id: 15, pid: 13, name: 'Tabulated Change', eimg: '3', hasChild: false },

    { id: 16, pid: 1, name: 'Timeline & Schedule', eimg: '3', hasChild: true },
    { id: 17, pid: 16, name: 'Project Timeline', eimg: '6', hasChild: false },
    { id: 18, pid: 16, name: 'Project Schedule', eimg: '3', hasChild: false },
    { id: 19, pid: 16, name: 'People Schedule', eimg: '3', hasChild: false },
    { id: 20, pid: 16, name: 'Graphical Project Status', eimg: '3', hasChild: false },

    { id: 21, pid: 1, name: 'Support Models', eimg: '3', hasChild: true },
    { id: 22, pid: 21, name: 'Entity Support Model', eimg: '6', hasChild: false },
    { id: 23, pid: 21, name: 'Error Accumulator', eimg: '6', hasChild: false },
    { id: 24, pid: 21, name: 'Sum of Compensator', eimg: '6', hasChild: false },
    { id: 25, pid: 21, name: 'List of Analysis', eimg: '6', hasChild: false },
    { id: 26, pid: 21, name: 'Total Timeline', eimg: '6', hasChild: false },
    { id: 27, pid: 21, name: 'Problem Report', eimg: '6', hasChild: false },
    { id: 28, pid: 21, name: 'Entity Produced and Function', eimg: '6', hasChild: false },
    { id: 29, pid: 21, name: 'Function Status', eimg: '6', hasChild: false },
    { id: 30, pid: 21, name: 'List of Test Result ', eimg: '6', hasChild: false },

    { id: 31, pid: 1, name: 'Entity Usage & Function', eimg: '3', hasChild: true },
    { id: 32, pid: 31, name: 'List of Entity Usage ', eimg: '6', hasChild: false },
    { id: 33, pid: 31, name: 'Actual Entity Used by People ', eimg: '6', hasChild: false },
    { id: 34, pid: 31, name: 'Function of Entity Used', eimg: '6', hasChild: false },

    { id: 35, pid: 1, name: 'Area & Site Of Operation', eimg: '3', hasChild: true },
    { id: 36, pid: 35, name: 'Area of Operation', eimg: '6', hasChild: false },
    { id: 37, pid: 35, name: 'Site of Operation', eimg: '6', hasChild: false },

  ];
  public field: Object = {
    dataSource: this.localData,
    id: 'id',
    parentID: 'pid',
    text: 'name',
    hasChildren: 'hasChild',
  };
}
