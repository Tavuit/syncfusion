import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DragDropFormService } from 'src/app/features/modules/sync-content-detail/services/drag-drop-form.service';
import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
import { LIST_ITEM } from 'src/app/utils/constants';
@Component({
  selector: 'app-label-property',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CheckBoxModule],
  templateUrl: './label-property.component.html',
  styleUrls: ['./label-property.component.scss']
})
export class LabelPropertyComponent {
  public selectLabel1Data = [];
  public selectLabel2Data = [];
  constructor(private dragDropFormService: DragDropFormService) {
    this.dragDropFormService.setCustomComponentForm(new FormGroup({
      selectLabel1: new FormControl(null),
      selectLabel2: new FormControl(null),
      negateText: new FormControl(false),
      notNegateText: new FormControl(false)
    }));
  }

  ngOnInit(): void {
    this.dragDropFormService.actionPopUpIdBS.subscribe(res => {
      if (res !== null) {
        this.handleLabelTextOption(res);
      }
    })
    this.negateTextControl.valueChanges.subscribe(res => {
      if (res) {
        this.notNegateTextControl.setValue(false, { emitEvent: false });
      }
    });

    this.notNegateTextControl.valueChanges.subscribe(res => {
      if (res) {
        this.negateTextControl.setValue(false , { emitEvent: false});
      }
    })

  }

  get customComponentForm() {
    return this.dragDropFormService.getCustomComponentForm;
  }

  get negateTextControl() {
    return this.customComponentForm.get('negateText');
  }

  get notNegateTextControl() {
    return this.customComponentForm.get('notNegateText');
  }

  get selectLabel1Control() {
    return this.customComponentForm.get('selectLabel1');
  }

  get selectLabel2Control() {
    return this.customComponentForm.get('selectLabel2');
  }

  public handleLabelTextOption(actionPopUpId: string) {
    let mm = 0;
    if (actionPopUpId.startsWith('pointTo')) {
      mm = 1;
    }
    if (actionPopUpId.startsWith('giveRiseTo')) {
      mm = 1;
    }
    if (actionPopUpId.startsWith('relatedTo')) {
      mm = 1;
    }
    if (actionPopUpId.startsWith('by')) {
      mm = 1;
    }
    if (actionPopUpId.startsWith('depend')) {
      mm = 1;
    }
    if (actionPopUpId.startsWith('agree')) {
      mm = 1;
    }
    if (actionPopUpId.startsWith('have')) {
      mm = 1;
    }
    if (actionPopUpId.startsWith('Interact')) {
      mm = 1;
    }

    if (mm == 0) {
      this.customComponentForm.get('notNegateText').setValue(true);
      this.customComponentForm.get('negateText').setValue(false);
    }
    if (mm == 1) {
      this.customComponentForm.get('notNegateText').setValue(false);
      this.customComponentForm.get('negateText').setValue(true);
    }
    for (const i of LIST_ITEM[
      actionPopUpId.slice(0, actionPopUpId.length - 5)
      ]) {
        this.selectLabel1Data.push(i);
        this.selectLabel2Data.push("Not " + i);
    }
    this.selectLabel1Control.setValue(this.selectLabel1Data[0], { emitEvent: false });
    this.selectLabel2Control.setValue(this.selectLabel2Data[0], { emitEvent: false });
  }
}
