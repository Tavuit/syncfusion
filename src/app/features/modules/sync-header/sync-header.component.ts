import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SyncRibbonComponent } from 'src/app/features/modules/sync-header/components/sync-ribbon/sync-ribbon.component';

@Component({
  selector: 'sync-header',
  standalone: true,
  imports: [CommonModule, SyncRibbonComponent],
  templateUrl: './sync-header.component.html',
  styleUrls: ['./sync-header.component.scss']
})
export class SyncHeaderComponent {

}
