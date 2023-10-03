import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SyncTreeViewComponent } from 'src/app/shared/base-components/views/sync-tree-view/sync-tree-view.component';

@Component({
  selector: 'sync-content-right',
  standalone: true,
  imports: [CommonModule, SyncTreeViewComponent],
  templateUrl: './sync-content-right.component.html',
  styleUrls: ['./sync-content-right.component.scss']
})
export class SyncContentRightComponent {

}
