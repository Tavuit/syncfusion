import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { PROJECT_MODEL_MAP } from 'src/app/features/modules/sync-content-right/constants/share-model.constant';
import { change } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'page-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.scss'],
})
export class PageListComponent {
  @Input() listPage = [];
  @Input() compareFunction: Function;
  @Input() activeItem;
  @Output() openPage = new EventEmitter();
  @Output() closePage = new EventEmitter();
  public _items = [];
  public readonly PROJECT_MODEL_MAP = PROJECT_MODEL_MAP;
  /**
   *
   */
  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    if (
      changes['listPage']?.currentValue ||
      changes['compareFunction']?.currentValue ||
      changes['activeItem']?.currentValue
    ) {
      this._items = this.listPage.map(data => ({
        ...data,
        active: this.compareFunction(data, this.activeItem),
      }));
    }
  }

  handleClose(data) {
    this.closePage.emit(data);
  }

  handleOpen(data) {
    this.openPage.emit(data);
  }
}
