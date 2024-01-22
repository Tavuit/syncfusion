import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyncContentDetailComponent } from './sync-content-detail.component';

describe('SyncContentDetailComponent', () => {
  let component: SyncContentDetailComponent;
  let fixture: ComponentFixture<SyncContentDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SyncContentDetailComponent]
    });
    fixture = TestBed.createComponent(SyncContentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
