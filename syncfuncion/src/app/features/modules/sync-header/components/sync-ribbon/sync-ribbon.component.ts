import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DisplayMode, RibbonAllModule, RibbonItemSize,} from '@syncfusion/ej2-angular-ribbon';
import {ListViewAllModule} from '@syncfusion/ej2-angular-lists';
import {EDomain} from 'src/app/shared/enums/core.enum';
import {CoreService} from 'src/app/shared/services/core.service';
import {Observable} from 'rxjs';
import {IRibbon} from 'src/app/shared/interfaces/ribbon.interface';
import {RibbonService} from './services/ribbon.service';

@Component({
  selector: 'sync-ribbon',
  standalone: true,
  imports: [CommonModule, RibbonAllModule, ListViewAllModule],
  templateUrl: './sync-ribbon.component.html',
  styleUrls: ['./sync-ribbon.component.scss'],
})
export class SyncRibbonComponent implements OnInit {
  public selectedTabIndex = 0;
  public ribbon: IRibbon = this.ribbonService.ribbon;
  public EDomain = EDomain;
  public largeSize: RibbonItemSize = RibbonItemSize.Large;
  public smallSize: RibbonItemSize = RibbonItemSize.Small;

  public Simplified: DisplayMode = DisplayMode.Simplified;
  public Overflow: DisplayMode = DisplayMode.Overflow;

  constructor(
    private coreService: CoreService,
    private ribbonService: RibbonService
  ) {
  }

  ngOnInit() {
  }

  get domain$(): Observable<EDomain> {
    return this.coreService.getDomain();
  }

  tabSelected(value: any) {
    this.selectedTabIndex = value?.selectedIndex;
  }

  created(value: Event) {
  }
}
