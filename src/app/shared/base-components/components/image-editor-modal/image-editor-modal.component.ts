import { Component, ElementRef, ViewChild, Input, AfterViewInit, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import ImageEditor from 'tui-image-editor';
import { EDialogSize, SyncDialogComponent } from 'src/app/shared/base-components/views/sync-dialog/sync-dialog.component';

export interface IImageFileDataType {
  url: File;
  fileName: string
}

@Component({
  selector: 'image-editor-modal',
  standalone: true,
  imports: [CommonModule, SyncDialogComponent],
  templateUrl: './image-editor-modal.component.html',
  styleUrls: ['./image-editor-modal.component.scss'],
})
export class ImageEditorModalComponent implements AfterViewInit, OnChanges {
  @Input() visible = false;
  @Input() imageFileData: IImageFileDataType;
  @Output() closeModal = new EventEmitter();
  private _tuiImageEditor!: ImageEditor;

  // Angular way of getting the element without getElementById.
  @ViewChild('tuiRef')
  private _tuiRef!: ElementRef<HTMLDivElement>;
  public EDialogSize = EDialogSize;

  public ngOnChanges(changes: SimpleChanges) {
    if (changes['imageFileData']?.currentValue) {
      console.log('on changes');
      if (this._tuiRef) {
        this._tuiImageEditor.loadImageFromFile(this.imageFileData.url, this.imageFileData.fileName);
      }
    }
  }

  public ngAfterViewInit() {
    this._createImageEditor();
  }

  private _createImageEditor() {
    if (this._tuiRef) {
      this._tuiImageEditor = new ImageEditor(this._tuiRef.nativeElement, {
        includeUI: {
          initMenu: 'filter',
          menuBarPosition: 'bottom',
        },
        cssMaxWidth: 700,
        cssMaxHeight: 500,
        selectionStyle: {
          cornerSize: 20,
          rotatingPointOffset: 70,
        },
      });
    }
  }

  public handleVisibleChange(value: boolean) {
    // this.visible = !this.visible;
    this.closeModal.emit(value);
  }
}
