import { Component, ViewChild, OnInit, ElementRef, Input, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent, DialogModule } from '@syncfusion/ej2-angular-popups';
import { EmitType } from '@syncfusion/ej2/base';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

@Component({
  selector: 'sync-dialog',
  standalone: true,
  imports: [CommonModule, DialogModule, ButtonModule],
  templateUrl: './sync-dialog.component.html',
  styleUrls: ['./sync-dialog.component.scss']
})
export class SyncDialogComponent implements OnInit {
  @ViewChild('ejDialog') ejDialog: DialogComponent;
  @ViewChild('container', { read: ElementRef, static: true }) container: ElementRef | any;
  @Input() title: string = '';
  @Input() headerTpl?: TemplateRef<void>;
  @Input() footerTpl?: TemplateRef<void>;


  public targetElement?: HTMLElement;
  ngOnInit() {
    this.initilaizeTarget();
  }

  public initilaizeTarget: EmitType<object> = () => {
    this.targetElement = this.container.nativeElement.parentElement;
  }

  public hideDialog: EmitType<object> = () => {
    this.ejDialog.hide();
  }

  public onOpenDialog = (event: any): void => {
    // Call the show method to open the Dialog
    this.ejDialog.show();
  };

  public onOverlayClick: EmitType<object> = () => {
    this.ejDialog.hide();
  }

  public buttons: Object = [
    {
      'click': this.hideDialog.bind(this),
      // Accessing button component properties by buttonModel property
        buttonModel:{
        content: 'OK',
        // Enables the primary button
        isPrimary: true
      }
    },
    {
      'click': this.hideDialog.bind(this),
      buttonModel: {
        content: 'Cancel'
      }
    }
  ];
}
