import {Component, OnDestroy} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  ITreeViewDataSourceType,
  SyncTreeViewComponent
} from 'src/app/shared/base-components/views/sync-tree-view/sync-tree-view.component';
import {CTreeViewDataComm} from "./constants/communication.constant";
import {CTreeViewDataTheory} from "./constants/theory.constant";
import {CoreService, TDiagramModel} from 'src/app/shared/services/core.service';
import {map, Subject, takeUntil} from "rxjs";
import {EDomain} from "../../../shared/enums/core.enum";

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

  constructor(
    private coreService: CoreService,
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
      .subscribe((diagramProject)=> this._diagramProject = diagramProject);
  }

  public handleClickTreeItem(data: ITreeViewDataSourceType) {
    const updatedData = this._diagramProject[this._domain];
    if (!!data?.enums && !updatedData?.includes(data.enums)) {
      updatedData?.push(data.enums);
    }
    this.coreService.setModel({...this._diagramProject, [this._domain]: updatedData});
    this.coreService.setCurrentModel(data.enums);
  }

  ngOnDestroy() {
    this._destroyed.next();
    this._destroyed.complete();
  }
}
