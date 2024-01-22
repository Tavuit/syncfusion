import { DragDropFormService } from './../../services/drag-drop-form.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons';

@Component({
  selector: 'app-application-function-table',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CheckBoxModule],
  templateUrl: './application-function-table.component.html',
  styleUrls: ['./application-function-table.component.scss']
})
export class ApplicationFunctionTableComponent {
  constructor(private dragDropFormService: DragDropFormService) {
    this.dragDropFormService.setCustomComponentForm(new FormGroup({
      communicationS1: new FormControl(false),
      applicationS2: new FormControl(false),
      communicationS3: new FormControl(false),
      communicationS4: new FormControl(false),
      communicationS5: new FormControl(false),
      applicationS6: new FormControl(false),
      applicationS7: new FormControl(false),
      communicationS8: new FormControl(false),
      communicationS9: new FormControl(false),
      communicationS10: new FormControl(false),
      communicationS11: new FormControl(false),
    }));
  }

  get customComponentForm() {
    return this.dragDropFormService.getCustomComponentForm;
  }
}
