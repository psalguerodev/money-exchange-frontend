import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'exchange', pathMatch: 'full', loadChildren: './exchange/exchange.module#ExchangeModule' },
  { path: '', pathMatch: 'full',  redirectTo: 'exchange' },
  { path: '**', redirectTo: 'exchange' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
