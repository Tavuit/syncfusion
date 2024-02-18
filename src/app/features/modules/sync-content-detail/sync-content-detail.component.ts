import { Component, ComponentFactoryResolver, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  SyncDiagramComponent
} from 'src/app/features/modules/sync-content-detail/components/sync-diagram/sync-diagram.component';
import { DiagramService } from 'src/app/shared/services/diagram.service';
import { distinctUntilChanged, map, Subject, switchMap, takeUntil } from "rxjs";
import { CoreService } from 'src/app/shared/services/core.service';
import { isEqual } from 'lodash';
import { IDiagramModel, IDiagramProject, IProjectDiagramModel } from "../../../shared/interfaces/diagram.interface";
import { EDomain } from "../../../shared/enums/core.enum";
import { DiagramComponent } from "@syncfusion/ej2-angular-diagrams";
import { contextMenuSettings, rulerSettings, tooltipSettings } from "./constants/diagram.constant";
import { PROJECT_MODEL_MAP } from 'src/app/features/modules/sync-content-right/constants/share-model.constant';
import { EDiagramModel } from 'src/app/shared/enums/diagram.enum';

@Component({
  selector: 'sync-content-detail',
  standalone: true,
  imports: [CommonModule, SyncDiagramComponent],
  templateUrl: './sync-content-detail.component.html',
  styleUrls: ['./sync-content-detail.component.scss']
})
export class SyncContentDetailComponent implements OnInit, OnDestroy {
  private _destroyed: Subject<void> = new Subject<void>();
  public currentModelDiagramList = [];
  public readonly PROJECT_MODEL_MAP = PROJECT_MODEL_MAP;
  public currentDiagramModel;
  constructor(
    private diagramService: DiagramService,
    private coreService: CoreService,
  ) {
  }

  ngOnInit() {

    this.coreService.getDomain()
    .pipe(takeUntil(this._destroyed))
    .pipe(distinctUntilChanged())
    .subscribe((domain) => {
      if(domain === EDomain.COMMUNICATION) {
        this.coreService.setCurrentModel(EDiagramModel.COMM_MAIN_PROJECT_MODEL);
      }
      if(domain === EDomain.THEORY) {
        this.coreService.setCurrentModel(EDiagramModel.THEORY_MAIN_APPLICATION_MODEL);
      }
    })


    this.coreService.getModel().subscribe(rs => {
      this.currentDiagramModel = rs;
    })

    this.coreService.getCurrentModel()

    this.coreService.getListProjectDiagramByDomain().
    pipe(takeUntil(this._destroyed))
    .subscribe(rs => {
      this.currentModelDiagramList = rs;
    })

    this.coreService.getSelectedModel()
    .pipe(takeUntil(this._destroyed))
    .subscribe(rs => {
      this.diagramService.setDiagram(rs?.DATA as any);
    })
    
  }

  ngOnDestroy() {
    this._destroyed.next();
    this._destroyed.complete();
  }
}
