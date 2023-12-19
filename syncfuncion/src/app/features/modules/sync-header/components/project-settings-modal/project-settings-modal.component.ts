import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EDialogSize, SyncDialogComponent } from 'src/app/shared/base-components/views/sync-dialog/sync-dialog.component';

@Component({
  selector: 'project-settings-modal',
  standalone: true,
  imports: [CommonModule, SyncDialogComponent],
  templateUrl: './project-settings-modal.component.html',
  styleUrls: ['./project-settings-modal.component.scss']
})
export class ProjectSettingsModalComponent {
  @Input() visible = false;
  @Output() closeModal = new EventEmitter();


  public EDialogSize = EDialogSize;

  public handleVisibleChange(value: boolean) {
    this.closeModal.emit(value);
  }
}
