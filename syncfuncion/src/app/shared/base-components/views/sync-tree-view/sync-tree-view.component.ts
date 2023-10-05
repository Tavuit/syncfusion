import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeViewAllModule } from '@syncfusion/ej2-angular-navigations';
import { SyncIconHrefComponent } from 'src/app/shared/base-components/views/sync-icon-href/sync-icon-href.component';

export interface ITreeViewDataSourceType {
  id: number;
  pid?: number;
  name: string;
  iconName: string;
  hasChild: boolean;
  expanded?: boolean;
}

@Component({
  selector: 'sync-tree-view',
  standalone: true,
  imports: [CommonModule, TreeViewAllModule, SyncIconHrefComponent],
  templateUrl: './sync-tree-view.component.html',
  styleUrls: ['./sync-tree-view.component.scss'],
})
export class SyncTreeViewComponent implements OnChanges {
  @Input() dataSource: ITreeViewDataSourceType[];
  @Output() clickTreeItem = new EventEmitter<ITreeViewDataSourceType>()
  public field: Object;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['dataSource']?.currentValue) {
      this.field = {
        dataSource: this.dataSource,
        id: 'id',
        parentID: 'pid',
        text: 'name',
        hasChildren: 'hasChild',
      }
    }
  }

  handleClickTreeItem(value: ITreeViewDataSourceType) {
    this.clickTreeItem.emit(value);
  }
}
