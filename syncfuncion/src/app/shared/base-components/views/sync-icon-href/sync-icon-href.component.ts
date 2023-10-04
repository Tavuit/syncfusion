import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sync-icon-href',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sync-icon-href.component.html',
  styleUrls: ['./sync-icon-href.component.scss']
})
export class SyncIconHrefComponent {
  @Input() iconName: string;
}
