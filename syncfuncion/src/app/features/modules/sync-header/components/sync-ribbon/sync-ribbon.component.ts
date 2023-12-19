import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DisplayMode, RibbonAllModule, RibbonItemSize,} from '@syncfusion/ej2-angular-ribbon';
import {ListViewAllModule} from '@syncfusion/ej2-angular-lists';
import {EDomain} from 'src/app/shared/enums/core.enum';
import {CoreService} from 'src/app/shared/services/core.service';
import {filter, map, Observable, Subject, switchMap, takeUntil} from 'rxjs';
import {IRibbon} from 'src/app/shared/interfaces/ribbon.interface';
import {IAnnotationContent, RibbonService} from './services/ribbon.service';
import {DiagramService, TDiagramComponent, TDiagramAction} from 'src/app/shared/services/diagram.service';
import {DiagramActionService} from 'src/app/shared/services/diagram-action.service';
import { EDialogSize, SyncDialogComponent } from 'src/app/shared/base-components/views/sync-dialog/sync-dialog.component';
import { createCapture, recordScreen } from 'src/app/features/modules/sync-header/components/sync-ribbon/constants/header.constant';
import { IImageFileDataType, ImageEditorModalComponent } from 'src/app/shared/base-components/components/image-editor-modal/image-editor-modal.component';
import { ProjectSettingsModalComponent } from 'src/app/features/modules/sync-header/components/project-settings-modal/project-settings-modal.component';

@Component({
  selector: 'sync-ribbon',
  standalone: true,
  imports: [CommonModule, RibbonAllModule, ListViewAllModule, SyncDialogComponent, ImageEditorModalComponent, ProjectSettingsModalComponent],
  templateUrl: './sync-ribbon.component.html',
  styleUrls: ['./sync-ribbon.component.scss'],
})
export class SyncRibbonComponent implements OnInit, OnDestroy {
  @ViewChild('fileRef') fileRef: ElementRef;
  private _destroyed: Subject<void> = new Subject<void>();
  public selectedTabIndex = 0;
  public ribbon: IRibbon = this.ribbonService.ribbon;
  public EDomain = EDomain;
  public largeSize: RibbonItemSize = RibbonItemSize.Large;
  public smallSize: RibbonItemSize = RibbonItemSize.Small;

  public Simplified: DisplayMode = DisplayMode.Simplified;
  public Overflow: DisplayMode = DisplayMode.Overflow;
  public hiddenSpeakLogicCommunication = false;
  public isShowProjectFileActionModal = false;
  public isShowImageEditorModal = false;
  public isShowSettingsModal = false;
  public uploadedFile: IImageFileDataType;
  public fakeData = [
    {
      text: 'Image',
      img: '/assets/images/captureimageproject.png'
    },
    {
      text: 'Video',
      img: '/assets/images/reconrdvideoproject1.png'
    },
    {
      text: 'Audio',
      img: '/assets/images/recordaudioproject1.png'
    },
    {
      text: 'Edit Image',
      img: '/assets/images/editimageproject.png'
    },
    {
      text: 'Edit Video',
      img: '/assets/images/editvideoproject.png'
    },
    {
      text: 'Settings',
      img: '/assets/images/settingproject1.png'
    }];
  public EDialogSize = EDialogSize;

  constructor(
    private coreService: CoreService,
    private ribbonService: RibbonService,
    private diagramService: DiagramService,
    private diagramActionService: DiagramActionService
  ) {
  }

  ngOnInit() {
    this.handleRegister();

    this.coreService.getDomain().subscribe((res) => {
      if (res === EDomain.COMMUNICATION) {
        this.hiddenSpeakLogicCommunication = true;
        this.ribbon.theory1Dropdown = {
          iconCss: 'icon icon-Function_Icon1',
          content: 'Function',
          target: '#function-dropdown',
          createPopupOnClick: true
        };
        this.ribbon.theory2Dropdown = {
          iconCss: 'icon icon-Word_Icon1',
          content: 'Word',
          target: '#word-dropdown',
          createPopupOnClick: true
        };
        this.ribbon.fundamentalDropdown = {
          iconCss: 'icon icon-Application_Icon1',
          content: 'Application',
          target: '#application-dropdown',
          createPopupOnClick: true
        };
        this.ribbon.theoryFunctionDropdown = {
          iconCss: 'icon icon-Relationship_Icon1',
          content: 'Relationship',
          target: '#relationship-dropdown',
          createPopupOnClick: true
        };
      } else {
        this.hiddenSpeakLogicCommunication = false;
        this.ribbon.theory1Dropdown = {
          iconCss: 'icon icon-theory1',
          content: 'Theory',
          target: '#theory1-dropdown',
          createPopupOnClick: true
        };
        this.ribbon.theory2Dropdown = {
          iconCss: 'icon icon-theory2',
          content: 'Theory',
          target: '#theory2-dropdown',
          createPopupOnClick: true
        };
        this.ribbon.fundamentalDropdown = {
          iconCss: 'icon icon-fundamental1',
          content: 'Fundamental',
          target: '#fundamental1-dropdown',
          createPopupOnClick: true
        };
        this.ribbon.theoryFunctionDropdown = {
          iconCss: 'icon icon-function2',
          content: 'Function',
          target: '#function2-dropdown',
          createPopupOnClick: true
        };
      }
    });

    this.ribbonService.getTriggerDialog().subscribe((res) => {
      this.isShowProjectFileActionModal = !!res;
    })
  }

  get domain$(): Observable<EDomain> {
    return this.coreService.getDomain();
  }

  private handleRegister(): void {
    this.diagramService.getAction()
      .pipe(
        filter((action: TDiagramAction) => !!action),
        switchMap((action: TDiagramAction) => this.diagramService.getDiagram().pipe(
          filter((diagram: TDiagramComponent) => !!diagram),
          map((diagram: TDiagramComponent) => {
            return {
              action, diagram
            }
          })
        )),
        filter(({action, diagram}) => !!action && !!diagram),
        takeUntil(this._destroyed),
      )
      .subscribe(({action, diagram}) => {
        this.diagramActionService.actionHandler(action, diagram)
      })
  }

  tabSelected(value: any) {
    this.selectedTabIndex = value?.selectedIndex;
  }

  created(value: Event) {
  }

  public handleInsert(value) {
    this.ribbonService.setInsertAnnotationContent(value);
  }

  public async handleClickAction(action) {
    switch (action.text) {
      case 'Image':
        this.ribbonService.captureImage();
        break;
      case 'Video':
        this.ribbonService.recordVideo();
        break;
      case 'Audio':
        this.ribbonService.recordVoice();
        break;
      case 'Edit Image':
        if (this.fileRef) {
          this.fileRef.nativeElement.click();
        }
        break;
      case 'Settings':
        this.isShowSettingsModal = true;
        this.isShowProjectFileActionModal = false;
        break;
      default:
        break;
    }
  }

  public chooseFile(event) {
    const selectedFile = event.target.files[0];
    let fileName = selectedFile.name
    const idxDot = fileName.lastIndexOf(".") + 1;
    const extFile = fileName.substr(idxDot, fileName.length).toLowerCase();
    if (extFile == "jpg" || extFile == "jpeg" || extFile == "png") {
      fileName = fileName.split('.').slice(0, -1).join('.')
      this.uploadedFile = {
        fileName,
        url: selectedFile
      };
      this.isShowImageEditorModal = true;
      this.isShowProjectFileActionModal = false;
    } else {
      alert("Only jpg/jpeg and png files are allowed!");
    }
  }

  public handleImageEditorModal(value) {
    this.isShowProjectFileActionModal = true;
    this.isShowImageEditorModal = false;
  }

  public handleSettingsModal(value) {
    this.isShowSettingsModal = false;
    this.isShowProjectFileActionModal = true;
  }

  ngOnDestroy() {
    this._destroyed.next();
    this._destroyed.complete();
  }
}
