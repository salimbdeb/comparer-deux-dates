import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeuxDatesAcomparerComponent } from './deux-dates-acomparer.component';

describe('DeuxDatesAcomparerComponent', () => {
  let component: DeuxDatesAcomparerComponent;
  let fixture: ComponentFixture<DeuxDatesAcomparerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeuxDatesAcomparerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeuxDatesAcomparerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
