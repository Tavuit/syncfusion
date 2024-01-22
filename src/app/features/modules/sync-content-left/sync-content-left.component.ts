import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SyncSymbolPaletteComponent } from 'src/app/features/modules/sync-content-left/components/sync-symbol-palette/sync-symbol-palette.component';

@Component({
  selector: 'sync-content-left',
  standalone: true,
  imports: [CommonModule, SyncSymbolPaletteComponent],
  templateUrl: './sync-content-left.component.html',
  styleUrls: ['./sync-content-left.component.scss']
})
export class SyncContentLeftComponent {

}
