import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrencyExchangeComponent } from './container/currency-exchange/currency-exchange.component';

const routes: Routes = [
  { path: '', component: CurrencyExchangeComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExchangeRoutingModule { }
