import { TestBed } from '@angular/core/testing';

import { TallaService } from './talla.service';

describe('TallaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TallaService = TestBed.get(TallaService);
    expect(service).toBeTruthy();
  });
});
