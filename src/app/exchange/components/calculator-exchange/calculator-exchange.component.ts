import { Component, OnInit } from '@angular/core';
import { ExchangeService, MoneyExchangeDto, CurrencyType } from '../../exchange.service';

@Component({
  selector: 'app-calculator-exchange',
  templateUrl: './calculator-exchange.component.html',
  styleUrls: ['./calculator-exchange.component.scss']
})
export class CalculatorExchangeComponent implements OnInit {

  moneyExchangeDto: MoneyExchangeDto;
  isLoading: boolean;
  isError: boolean;

  constructor(
    private readonly exchangeService: ExchangeService) { }

  ngOnInit() {
    this.moneyExchangeDto = {
      amount: '',
      amountCurrencyTo: '',
      currency: CurrencyType.USD,
      currencyTo: CurrencyType.EUR
    };
  }

  calculateMoneyExchange() {
    this.isLoading = true;
    this.exchangeService.getMoneyExchange(this.moneyExchangeDto)
      .subscribe((data: MoneyExchangeDto) => {
        this.moneyExchangeDto.amountCurrencyTo = data.amountCurrencyTo;
        this.handleSuccessCalculate();
      }, _ => this.handleErrorCalculate());
  }

  handleSuccessCalculate() {
    this.isLoading = false;
    this.isError = false;
  }

  handleErrorCalculate() {
    this.isError = true;
    this.isLoading = false;
  }

}
