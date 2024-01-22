import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyncContentLeftComponent } from './sync-content-left.component';

describe('SyncContentLeftComponent', () => {
  let component: SyncContentLeftComponent;
  let fixture: ComponentFixture<SyncContentLeftComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SyncContentLeftComponent]
    });
    fixture = TestBed.createComponent(SyncContentLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
