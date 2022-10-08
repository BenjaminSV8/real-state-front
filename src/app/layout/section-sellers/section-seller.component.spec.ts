import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSellerComponent } from './section-seller.component';

describe('SectionSellerComponent', () => {
  let component: SectionSellerComponent;
  let fixture: ComponentFixture<SectionSellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionSellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
