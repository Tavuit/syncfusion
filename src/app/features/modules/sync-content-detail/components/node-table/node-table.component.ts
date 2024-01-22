import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DragDropFormService } from 'src/app/features/modules/sync-content-detail/services/drag-drop-form.service';

@Component({
  selector: 'app-node-table',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './node-table.component.html',
  styleUrls: ['./node-table.component.scss']
})
export class NodeTableComponent implements OnInit {
  constructor(private dragDropFormService: DragDropFormService) {}

  ngOnInit(): void {
    this.dragDropFormService.setCustomComponentForm(new FormGroup({
      column: new FormControl(2, Validators.required)
    }));
  }

  get customComponentForm() {
    return this.dragDropFormService.getCustomComponentForm;
  }

  public getValueForm() {
    return this.customComponentForm.get('column').value;
  }
}
