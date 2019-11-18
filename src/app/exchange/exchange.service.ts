import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { getHttpParamsByObject } from '../utils/params';
import { catchError } from 'rxjs/operators';


export enum CurrencyType {
  PEN = 'PEN',
  USD = 'USD',
  EUR = 'EUR'
}

export interface MoneyExchangeDto {
  currency: CurrencyType;
  amount: string;
  currencyTo: CurrencyType;
  amountCurrencyTo?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {

  private readonly exchangePath: string = `exchange`;

  constructor(private http: HttpClient) { }

  getMoneyExchange(moneyExchange: MoneyExchangeDto): Observable<MoneyExchangeDto> {
    const httpParams: HttpParams = getHttpParamsByObject<MoneyExchangeDto>(moneyExchange);
    return this.http
      .get<MoneyExchangeDto>(`${environment.baseApi}/${this.exchangePath}`, { params: httpParams })
      .pipe(catchError(error => throwError(error)));
  }
}
