import { TestBed } from '@angular/core/testing';

import { ExchangeService } from './exchange.service';
import { HttpClientModule } from '@angular/common/http';

describe('ExchangeService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: ExchangeService = TestBed.get(ExchangeService);
    expect(service).toBeTruthy();
  });
});
