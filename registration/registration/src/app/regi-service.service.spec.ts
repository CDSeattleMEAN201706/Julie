import { TestBed, inject } from '@angular/core/testing';

import { RegiServiceService } from './regi-service.service';

describe('RegiServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegiServiceService]
    });
  });

  it('should be created', inject([RegiServiceService], (service: RegiServiceService) => {
    expect(service).toBeTruthy();
  }));
});
