import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyncRibbonComponent } from './sync-ribbon.component';

describe('SyncRibbonComponent', () => {
  let component: SyncRibbonComponent;
  let fixture: ComponentFixture<SyncRibbonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SyncRibbonComponent]
    });
    fixture = TestBed.createComponent(SyncRibbonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
