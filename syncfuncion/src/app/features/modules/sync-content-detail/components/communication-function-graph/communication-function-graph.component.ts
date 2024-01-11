import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DragDropFormService } from 'src/app/features/modules/sync-content-detail/services/drag-drop-form.service';

@Component({
  selector: 'app-communication-function-graph',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './communication-function-graph.component.html',
  styleUrls: ['./communication-function-graph.component.scss']
})
export class CommunicationFunctionGraphComponent {
  constructor(private dragDropFormService: DragDropFormService) {
    this.dragDropFormService.setCustomComponentForm(
      new FormGroup({
        yAxis: new FormControl(null),
        xAxis: new FormControl(null),
      })
    );
  }

  get customComponentForm() {
    return this.dragDropFormService.getCustomComponentForm;
  }
}
