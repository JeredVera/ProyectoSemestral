import { TestBed } from '@angular/core/testing';

import { ConductoresFavoritosService } from './conductores-favoritos.service';

describe('ConductoresFavoritosService', () => {
  let service: ConductoresFavoritosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConductoresFavoritosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
