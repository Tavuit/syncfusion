import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SyncContentDetailComponent } from 'src/app/features/modules/sync-content-detail/sync-content-detail.component';
import { SyncContentLeftComponent } from 'src/app/features/modules/sync-content-left/sync-content-left.component';
import { SyncHeaderComponent } from 'src/app/features/modules/sync-header/sync-header.component';

@Component({
  selector: 'app-sync-main',
  standalone: true,
  imports: [CommonModule, SyncContentDetailComponent, SyncHeaderComponent, SyncContentLeftComponent],
  templateUrl: './sync-main.component.html',
  styleUrls: ['./sync-main.component.scss']
})
export class SyncMainComponent {
  public visible = false;



  ngOnInit(): void {

  }
}
