import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrchestationComponent } from './orchestation.component';

describe('OrchestationComponent', () => {
  let component: OrchestationComponent;
  let fixture: ComponentFixture<OrchestationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrchestationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrchestationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
