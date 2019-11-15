import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorExchangeComponent } from './calculator-exchange.component';

describe('CalculatorExchangeComponent', () => {
  let component: CalculatorExchangeComponent;
  let fixture: ComponentFixture<CalculatorExchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatorExchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorExchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
