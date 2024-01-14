import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DragDropFormService } from 'src/app/features/modules/sync-content-detail/services/drag-drop-form.service';
import { RadioButtonModule } from '@syncfusion/ej2-angular-buttons';
import { MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns';

@Component({
  selector: 'app-main-area',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RadioButtonModule,
    MultiSelectModule,
  ],
  templateUrl: './main-area.component.html',
  styleUrls: ['./main-area.component.scss'],
})
export class MainAreaComponent implements OnInit {
  public country = [];
  public placeholder: string = 'Select a country';
  public showTextField = true;
  constructor(private dragDropFormService: DragDropFormService) {
    this.dragDropFormService.setCustomComponentForm(
      new FormGroup({
        types: new FormControl('dialogMainAreahouse'),
        numbers: new FormControl(1),
        locations: new FormControl(null),
      })
    );
  }

  ngOnInit(): void {
    this.typesControl.valueChanges.subscribe((res) => {
      this.showTextField = [
        'dialogMainAreahouse',
        'dialogMainArearegular',
      ].includes(res);
    });
    this.showTextField = [
      'dialogMainAreahouse',
      'dialogMainArearegular',
    ].includes(this.typesControl.value);
    this.country = localStorage.getItem('location_country')
      ? JSON.parse(localStorage.getItem('location_country')).map((it) => (it.name))
      : [];
  }

  get customComponentForm() {
    return this.dragDropFormService.getCustomComponentForm;
  }

  get typesControl() {
    return this.customComponentForm.get('types');
  }
}
