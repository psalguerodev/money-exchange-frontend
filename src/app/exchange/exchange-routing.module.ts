import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrencyExchangeComponent } from './container/currency-exchange/currency-exchange.component';

const routes: Routes = [
  { path: 'exchange', component: CurrencyExchangeComponent },
  { path: '', redirectTo: 'exchange' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExchangeRoutingModule { }
