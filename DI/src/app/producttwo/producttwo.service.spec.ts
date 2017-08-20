import { TestBed, inject } from '@angular/core/testing';

import { ProducttwoService } from './producttwo.service';

describe('ProducttwoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProducttwoService]
    });
  });

  it('should be created', inject([ProducttwoService], (service: ProducttwoService) => {
    expect(service).toBeTruthy();
  }));
});
