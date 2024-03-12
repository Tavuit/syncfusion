import {
  Component,
  ComponentFactoryResolver,
  OnDestroy,
  OnInit,
  ViewContainerRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SyncDiagramComponent } from 'src/app/features/modules/sync-content-detail/components/sync-diagram/sync-diagram.component';
import { DiagramService } from 'src/app/shared/services/diagram.service';
import { distinctUntilChanged, map, Subject, switchMap, takeUntil } from 'rxjs';
import {
  CoreService,
  TDiagramModel,
} from 'src/app/shared/services/core.service';
import { isEqual } from 'lodash';
import {
  IDiagramModel,
  IDiagramProject,
  IProjectDiagramModel,
} from '../../../shared/interfaces/diagram.interface';
import { EDomain } from '../../../shared/enums/core.enum';
import { DiagramComponent } from '@syncfusion/ej2-angular-diagrams';
import {
  contextMenuSettings,
  rulerSettings,
  tooltipSettings,
} from './constants/diagram.constant';
import { PROJECT_MODEL_MAP } from 'src/app/features/modules/sync-content-right/constants/share-model.constant';
import { EDiagramModel } from 'src/app/shared/enums/diagram.enum';
import { PageListComponent } from 'src/app/features/modules/sync-content-detail/components/page-list/page-list.component';

@Component({
  selector: 'sync-content-detail',
  standalone: true,
  imports: [CommonModule, SyncDiagramComponent, PageListComponent],
  templateUrl: './sync-content-detail.component.html',
  styleUrls: ['./sync-content-detail.component.scss'],
})
export class SyncContentDetailComponent implements OnInit, OnDestroy {
  private _destroyed: Subject<void> = new Subject<void>();
  public currentDiagramModel: TDiagramModel;
  public currentModelDiagramList: IDiagramModel[];
  selectedDiagramModel: IDiagramModel;
  public currentDomain: EDomain;
  currentProjectDiagramModel: EDiagramModel;
  constructor(
    private diagramService: DiagramService,
    private coreService: CoreService
  ) {}

  ngOnInit() {
    this.coreService
      .getDomain()
      .pipe(takeUntil(this._destroyed))
      .pipe(distinctUntilChanged())
      .subscribe(domain => {
        this.currentDomain = domain;
        if (domain === EDomain.COMMUNICATION) {
          this.coreService.setCurrentModel(
            EDiagramModel.COMM_MAIN_PROJECT_MODEL
          );
        }
        if (domain === EDomain.THEORY) {
          this.coreService.setCurrentModel(
            EDiagramModel.THEORY_MAIN_APPLICATION_MODEL
          );
        }
      });

    this.coreService.getModel().subscribe(rs => {
      this.currentDiagramModel = rs;
    });

    this.coreService
      .getListProjectDiagramByDomain()
      .pipe(takeUntil(this._destroyed))
      .subscribe(rs => {
        this.currentModelDiagramList = rs;
      });

    this.coreService
      .getSelectedModel()
      .pipe(takeUntil(this._destroyed))
      .subscribe(rs => {
        this.selectedDiagramModel = rs;
        this.diagramService.setDiagram(rs?.DATA as any);
      });

    this.coreService
      .getCurrentModel()
      .pipe(takeUntil(this._destroyed))
      .subscribe(rs => {
        this.currentProjectDiagramModel = rs;
      });
  }

  openPage(data: IDiagramModel) {
    this.coreService.addOrUpdateDiagramByModel(
      this.selectedDiagramModel.LABEL,
      this.coreService.getDiagramModelByType(this.selectedDiagramModel.LABEL)
    );
    this.coreService.setCurrentModel(data.LABEL);
  }

  closePage(diagramModelType: IDiagramModel) {
    //Todo handle check logic when close page
    if (this.currentModelDiagramList.length === 1) {
      alert('Cannot close!!\nAt least one pages need to be open.');
      return;
    } else {
      //Remove tab;
      this.coreService.removeDiagramModel(
        this.currentDomain,
        diagramModelType.LABEL
      );
    }
  }

  public compareFunc(a, b) {
    return a?.LABEL === b?.LABEL;
  }

  ngOnDestroy() {
    this._destroyed.next();
    this._destroyed.complete();
  }
}
