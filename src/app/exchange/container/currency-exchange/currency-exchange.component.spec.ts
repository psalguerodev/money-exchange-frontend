import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyExchangeComponent } from './currency-exchange.component';
import { CalculatorExchangeComponent } from '../../components/calculator-exchange/calculator-exchange.component';

describe('CurrencyExchangeComponent', () => {
  let component: CurrencyExchangeComponent;
  let fixture: ComponentFixture<CurrencyExchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyExchangeComponent, CalculatorExchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyExchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
