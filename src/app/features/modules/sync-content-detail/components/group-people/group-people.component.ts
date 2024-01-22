import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropFormService } from 'src/app/features/modules/sync-content-detail/services/drag-drop-form.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons';

@Component({
  selector: 'app-group-people',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CheckBoxModule],
  templateUrl: './group-people.component.html',
  styleUrls: ['./group-people.component.scss']
})
export class GroupPeopleComponent {
  public selectOptionsData = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
  public selectFormatData = ['Person', 'P'];
  constructor(private dragDropFormService: DragDropFormService) {
    this.dragDropFormService.setCustomComponentForm(new FormGroup({
      peopleOptions: new FormControl(this.selectOptionsData[0]),
      format: new FormControl(this.selectFormatData[0]),
      startNumber: new FormControl(2),
      groupName: new FormControl('Group Name'),
      hasFrame: new FormControl(true),
    }));
  }

  ngOnInit(): void {
  }

  get customComponentForm() {
    return this.dragDropFormService.getCustomComponentForm;
  }

  get peopleOptionControl() {
    return this.customComponentForm.get('peopleOptions');
  }

  get formatControl() {
    return this.customComponentForm.get('format');
  }

  get startNumberControl() {
    return this.customComponentForm.get('startNumber');
  }

  get groupNameControl() {
    return this.customComponentForm.get('groupName');
  }

  get hasFrameControl() {
    return this.customComponentForm.get('hasFrame');
  }
}
