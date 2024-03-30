import { TestBed } from '@angular/core/testing';

import { ReservasVendedorService } from './reservas-vendedor.service';

describe('ReservasVendedorService', () => {
  let service: ReservasVendedorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReservasVendedorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
