import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeViewAllModule } from '@syncfusion/ej2-angular-navigations';
import { SyncIconHrefComponent } from 'src/app/shared/base-components/views/sync-icon-href/sync-icon-href.component';

@Component({
  selector: 'sync-tree-view',
  standalone: true,
  imports: [CommonModule, TreeViewAllModule, SyncIconHrefComponent],
  templateUrl: './sync-tree-view.component.html',
  styleUrls: ['./sync-tree-view.component.scss'],
})
export class SyncTreeViewComponent {
  public localData: Object[] = [
    {
      id: 1,
      name: 'Project Name',
      eimg: 'files',
      hasChild: true,
      expanded: true,
    },
    {
      id: 2,
      pid: 1,
      name: 'Main Project Model',
      eimg: 'flow-diagram',
      hasChild: false,
    },
    {
      id: 3,
      pid: 1,
      name: 'Problem Statement',
      eimg: 'diagram-icon',
      hasChild: false,
    },
    {
      id: 5,
      pid: 1,
      name: 'People Work Together',
      eimg: 'flow-chart',
      hasChild: false,
    },
    {
      id: 6,
      pid: 1,
      name: 'Operating Principle',
      eimg: 'structure',
      hasChild: false,
    },
    { id: 7, pid: 1, name: 'What We Do Model', eimg: 'diagram-3', hasChild: false },
    {
      id: 8,
      pid: 1,
      name: 'Error Give Rise To Problem',
      eimg: 'uml',
      hasChild: false,
    },
    { id: 9, pid: 1, name: 'Other Model', eimg: 'structure', hasChild: false },
    { id: 10, pid: 1, name: 'Group People & Group Function', eimg: 'diagram-5', hasChild: true },
    { id: 11, pid: 10, name: 'Group of People Defined', eimg: 'people', hasChild: false },
    { id: 12, pid: 10, name: 'Group of People Function', eimg: 'flow-chart-1', hasChild: false },

    { id: 13, pid: 1, name: 'Change Of Application', eimg: 'diagram-3', hasChild: true },
    { id: 30, pid: 13, name: 'Graphical Change', eimg: 'monitoring', hasChild: false },
    { id: 15, pid: 13, name: 'Tabulated Change', eimg: 'diagram-4', hasChild: false },

    { id: 16, pid: 1, name: 'Timeline & Schedule', eimg: 'timetable', hasChild: true },
    { id: 17, pid: 16, name: 'Project Timeline', eimg: 'performance', hasChild: false },
    { id: 18, pid: 16, name: 'Project Schedule', eimg: 'timetable', hasChild: false },
    { id: 19, pid: 16, name: 'People Schedule', eimg: 'people', hasChild: false },
    { id: 20, pid: 16, name: 'Graphical Project Status', eimg: 'diagram-3', hasChild: false },

    { id: 21, pid: 1, name: 'Support Models', eimg: 'structure', hasChild: true },
    { id: 22, pid: 21, name: 'Entity Support Model', eimg: 'diagram-1', hasChild: false },
    { id: 23, pid: 21, name: 'Error Accumulator', eimg: 'symbol', hasChild: false },
    { id: 24, pid: 21, name: 'Sum of Compensator', eimg: 'the-sum-of', hasChild: false },
    { id: 25, pid: 21, name: 'List of Analysis', eimg: 'note-123', hasChild: false },
    { id: 26, pid: 21, name: 'Total Timeline', eimg: 'monitoring', hasChild: false },
    { id: 27, pid: 21, name: 'Problem Report', eimg: 'checklist', hasChild: false },
    { id: 28, pid: 21, name: 'Entity Produced and Function', eimg: 'planning', hasChild: false },
    { id: 29, pid: 21, name: 'Function Status', eimg: 'report', hasChild: false },
    { id: 30, pid: 21, name: 'List of Test Result ', eimg: 'flow-chart-1', hasChild: false },

    { id: 31, pid: 1, name: 'Entity Usage & Function', eimg: 'diagram-1', hasChild: true },
    { id: 32, pid: 31, name: 'List of Entity Usage ', eimg: 'flow-chart-1', hasChild: false },
    { id: 33, pid: 31, name: 'Actual Entity Used by People ', eimg: 'flow-chart-1', hasChild: false },
    { id: 34, pid: 31, name: 'Function of Entity Used', eimg: 'flow-chart-1', hasChild: false },

    { id: 35, pid: 1, name: 'Area & Site Of Operation', eimg: 'house', hasChild: true },
    { id: 36, pid: 35, name: 'Area of Operation', eimg: 'house', hasChild: false },
    { id: 37, pid: 35, name: 'Site of Operation', eimg: 'diagram-4', hasChild: false },

  ];
  public field: Object = {
    dataSource: this.localData,
    id: 'id',
    parentID: 'pid',
    text: 'name',
    hasChildren: 'hasChild',
  };
}
