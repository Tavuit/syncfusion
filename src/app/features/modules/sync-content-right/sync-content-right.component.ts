import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ITreeViewDataSourceType,
  SyncTreeViewComponent
} from 'src/app/shared/base-components/views/sync-tree-view/sync-tree-view.component';
import { CTreeViewDataComm } from "./constants/communication.constant";
import { CTreeViewDataTheory } from "./constants/theory.constant";
import { CoreService, TDiagramModel } from 'src/app/shared/services/core.service';
import { map, Subject, takeUntil } from "rxjs";
import { EDomain } from "../../../shared/enums/core.enum";
import { DiagramService } from 'src/app/shared/services/diagram.service';
import { EDiagramModel } from 'src/app/shared/enums/diagram.enum';

@Component({
  selector: 'sync-content-right',
  standalone: true,
  imports: [CommonModule, SyncTreeViewComponent],
  templateUrl: './sync-content-right.component.html',
  styleUrls: ['./sync-content-right.component.scss']
})
export class SyncContentRightComponent implements OnDestroy {
  private _destroyed: Subject<void> = new Subject<void>();
  private _domain: EDomain;
  private _diagramProject: TDiagramModel;

  public treeViewData: ITreeViewDataSourceType[] = [];
  public currentModel: EDiagramModel;

  constructor(
    private coreService: CoreService,
    private diagramService: DiagramService
  ) {
    this.coreService.getDomain()
      .pipe(
        map((domain: EDomain) => {
          this._domain = domain;
          if (domain === EDomain.COMMUNICATION) {
            return CTreeViewDataComm;
          }
          return CTreeViewDataTheory;
        }),
        takeUntil(this._destroyed)
      )
      .subscribe((treeViewData) => this.treeViewData = treeViewData);
    this.coreService.getModel()
      .pipe(
        takeUntil(this._destroyed)
      )
      .subscribe((diagramProject) => this._diagramProject = diagramProject);

    this.coreService.getCurrentModel()
      .pipe((takeUntil(this._destroyed)))
      .subscribe(rs => {
        this.currentModel = rs;
      })
  }

  public handleClickTreeItem(data: ITreeViewDataSourceType) {
    const diagramType = data?.enums;
    if (!!diagramType) {
      const diagramObject = this.coreService.getDiagramModelByType(diagramType);
      this.coreService.addOrUpdateDiagramByModel(diagramType, diagramObject);
      this.diagramService.setDiagram(diagramObject || {})
      this.coreService.setCurrentModel(diagramType)
    }
  }

  public activeItem = (itemName: string) => {
    return itemName === this.currentModel;
  }

  ngOnDestroy() {
    this._destroyed.next();
    this._destroyed.complete();
  }
}
