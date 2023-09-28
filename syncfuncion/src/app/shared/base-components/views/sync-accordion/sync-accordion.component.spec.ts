import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyncAccordionComponent } from './sync-accordion.component';

describe('SyncAccordionComponent', () => {
  let component: SyncAccordionComponent;
  let fixture: ComponentFixture<SyncAccordionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SyncAccordionComponent]
    });
    fixture = TestBed.createComponent(SyncAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
