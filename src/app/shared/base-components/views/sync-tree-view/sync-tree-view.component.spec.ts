import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyncTreeViewComponent } from './sync-tree-view.component';

describe('SyncTreeViewComponent', () => {
  let component: SyncTreeViewComponent;
  let fixture: ComponentFixture<SyncTreeViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SyncTreeViewComponent]
    });
    fixture = TestBed.createComponent(SyncTreeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
