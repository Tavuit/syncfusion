import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DragDropFormService } from 'src/app/features/modules/sync-content-detail/services/drag-drop-form.service';

@Component({
  selector: 'continuity-size',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './continuity-size.component.html',
  styleUrls: ['./continuity-size.component.scss']
})
export class ContinuitySizeComponent implements OnInit {
  constructor(private dragDropFormService: DragDropFormService) {}

  ngOnInit(): void {
    this.dragDropFormService.setCustomComponentForm(new FormGroup({
      size: new FormControl(0.5, Validators.required)
    }));
  }

  get customComponentForm() {
    return this.dragDropFormService.getCustomComponentForm;
  }

  public getValueForm() {
    return this.customComponentForm.get('size').value;
  }
}
