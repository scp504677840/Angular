import { TestBed, inject } from '@angular/core/testing';

import { ProductoneService } from './productone.service';

describe('ProductoneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductoneService]
    });
  });

  it('should be created', inject([ProductoneService], (service: ProductoneService) => {
    expect(service).toBeTruthy();
  }));
});
