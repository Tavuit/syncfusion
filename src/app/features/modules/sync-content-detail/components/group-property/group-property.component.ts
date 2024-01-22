import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropFormService } from 'src/app/features/modules/sync-content-detail/services/drag-drop-form.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-group-property',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './group-property.component.html',
  styleUrls: ['./group-property.component.scss']
})
export class GroupPropertyComponent {
  constructor(private dragDropFormService: DragDropFormService) {}

  ngOnInit(): void {
    this.dragDropFormService.setCustomComponentForm(new FormGroup({
      numberInput: new FormControl(2, Validators.required)
    }));
  }

  get customComponentForm() {
    return this.dragDropFormService.getCustomComponentForm;
  }

  public getValueForm() {
    return this.customComponentForm.get('numberInput').value;
  }
}
