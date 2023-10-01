import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SyncDiagramComponent } from 'src/app/features/modules/sync-content-detail/components/sync-diagram/sync-diagram.component';

@Component({
  selector: 'sync-content-detail',
  standalone: true,
  imports: [CommonModule, SyncDiagramComponent],
  templateUrl: './sync-content-detail.component.html',
  styleUrls: ['./sync-content-detail.component.scss']
})
export class SyncContentDetailComponent {

}
