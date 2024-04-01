import { TestBed } from '@angular/core/testing';

import { ReservasComercialService } from './reservas-comercial.service';

describe('ReservasComercialService', () => {
  let service: ReservasComercialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReservasComercialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
