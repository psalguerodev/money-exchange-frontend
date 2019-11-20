import { Component, OnInit } from '@angular/core';
import { ExchangeService, MoneyExchangeDto, CurrencyType } from '../../exchange.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-calculator-exchange',
  templateUrl: './calculator-exchange.component.html',
  styleUrls: ['./calculator-exchange.component.scss']
})
export class CalculatorExchangeComponent implements OnInit {

  moneyExchangeDto: MoneyExchangeDto;
  isLoading: boolean;
  isError: boolean;

  showWebComponent: boolean;
  showCalculator: boolean;

  constructor(
    private readonly exchangeService: ExchangeService) { }

  ngOnInit() {
    this.initWebComponent();
    this.moneyExchangeDto = {
      amount: '',
      amountCurrencyTo: '',
      currency: CurrencyType.USD,
      currencyTo: CurrencyType.EUR
    };
  }

  initWebComponent(): void {
    customElements.whenDefined(environment.microfrontends.bio.tagName)
      .then(() => {
        this.showWebComponent = true;
      });
  }

  calculateMoneyExchange(): void {
    this.isLoading = true;
    this.exchangeService.getMoneyExchange(this.moneyExchangeDto)
      .subscribe((data: MoneyExchangeDto) => {
        this.moneyExchangeDto.amountCurrencyTo = data.amountCurrencyTo;
        this.handleSuccessCalculate();
      }, _ => this.handleErrorCalculate());
  }

  handleSuccessCalculate(): void {
    this.isLoading = false;
    this.isError = false;
  }

  handleErrorCalculate(): void {
    this.isError = true;
    this.isLoading = false;
  }

  handlerFinishProcess(event): void {
    this.showCalculator = true;
  }

}
