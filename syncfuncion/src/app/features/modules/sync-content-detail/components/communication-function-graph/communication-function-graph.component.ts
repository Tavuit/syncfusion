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
  public yAxis = [
    'Communication Function',
    'Communication Executed Function',
    'Communication Result',
    'Application Executed Function',
    'Application Result'
  ];
  public xAxis = [
    'Communication',
    'Communication Name',
    'Communication Order',
    'Communication Date And Time',
    'Application Result'
  ]
  constructor(private dragDropFormService: DragDropFormService) {
    this.dragDropFormService.setCustomComponentForm(
      new FormGroup({
        s1: new FormControl(this.yAxis[0]),
        s2: new FormControl(this.xAxis[0]),
      })
    );
  }

  get customComponentForm() {
    return this.dragDropFormService.getCustomComponentForm;
  }
}
