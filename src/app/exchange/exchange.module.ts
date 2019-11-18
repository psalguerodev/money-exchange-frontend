import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalculatorExchangeComponent } from './components/calculator-exchange/calculator-exchange.component';
import { CurrencyExchangeComponent } from './container/currency-exchange/currency-exchange.component';
import { ExchangeRoutingModule } from './exchange-routing.module';
import { ExchangeService } from './exchange.service';

@NgModule({
  declarations: [
    CalculatorExchangeComponent,
    CurrencyExchangeComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ExchangeRoutingModule,
    FormsModule,
  ],
  providers: [ExchangeService]
})
export class ExchangeModule { }
