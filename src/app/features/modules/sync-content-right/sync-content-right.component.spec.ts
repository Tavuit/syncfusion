import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyncContentRightComponent } from './sync-content-right.component';

describe('SyncContentRightComponent', () => {
  let component: SyncContentRightComponent;
  let fixture: ComponentFixture<SyncContentRightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SyncContentRightComponent]
    });
    fixture = TestBed.createComponent(SyncContentRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
