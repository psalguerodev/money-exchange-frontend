import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorExchangeComponent } from './calculator-exchange.component';
import { FormsModule } from '@angular/forms';
import { ExchangeService } from '../../exchange.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

describe('CalculatorExchangeComponent', () => {
  let component: CalculatorExchangeComponent;
  let fixture: ComponentFixture<CalculatorExchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        FormsModule,
        HttpClientModule
      ],
      declarations: [ CalculatorExchangeComponent ],
      providers: [ExchangeService]
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
