import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropFormService } from 'src/app/features/modules/sync-content-detail/services/drag-drop-form.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-multiple-entities',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './multiple-entities.component.html',
  styleUrls: ['./multiple-entities.component.scss']
})
export class MultipleEntitiesComponent {
  constructor(private dragDropFormService: DragDropFormService) {}

  ngOnInit(): void {
    this.dragDropFormService.setCustomComponentForm(new FormGroup({
      numberEntity: new FormControl(2, Validators.required)
    }));
  }

  get customComponentForm() {
    return this.dragDropFormService.getCustomComponentForm;
  }

  public getValueForm() {
    return this.customComponentForm.get('numberEntity').value;
  }
}
