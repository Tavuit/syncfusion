import { Injectable } from '@angular/core';
import { menuItems } from 'src/app/features/modules/sync-content-detail/constants/diagram.constant';
import { camelize } from 'src/app/utils/constants';

@Injectable({
  providedIn: 'root'
})
export class DiagramContextMenuService {
  public mappedArrayContext = menuItems.reduce((arr, item) => {
    let listFilter = (item.list as any[]).reduce((brr, b) => {
      if (b?.text) {
        brr.push({
          ...b,
          id: camelize(item.id + b.text),
          parentId: item.id,
        });
      }
      return brr;
    }, []);
    // console.log('listFilter', listFilter);
    if (listFilter.length > 0) {
      arr.push(...listFilter);
    }
    return arr;
  }, []);

  // public mappedArrayContext = menuItems;
  constructor() { 
    console.log("🚀 ~ DiagramContextMenuService ~ mappedArrayContext=menuItems.reduce ~ mappedArrayContext:", this.mappedArrayContext)
  }
}
