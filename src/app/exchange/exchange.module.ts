import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalculatorExchangeComponent } from './components/calculator-exchange/calculator-exchange.component';
import { CurrencyExchangeComponent } from './container/currency-exchange/currency-exchange.component';
import { ExchangeRoutingModule } from './exchange-routing.module';
import { ExchangeService } from './exchange.service';
import { environment } from '../../environments/environment';

@NgModule({
  declarations: [
    CalculatorExchangeComponent,
    CurrencyExchangeComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ExchangeRoutingModule,
  ],
  providers: [ExchangeService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ExchangeModule {

  constructor() {
    const bioConf = environment.microfrontends.bio;
    this.loadMicrofrontend(bioConf.id, bioConf.url);
  }

  private loadMicrofrontend(elementId: string, microfrontendUrl: string): void {
    if (!document.getElementById(elementId)) {
      const script = document.createElement('script');
      script.src = microfrontendUrl;
      script.type = 'text/javascript';
      script.charset = 'utf-8';
      script.async = true;
      script.id = elementId;
      document.getElementsByTagName('body')[0].appendChild(script);
    }
  }

}
