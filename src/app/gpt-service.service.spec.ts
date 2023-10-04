import { TestBed } from '@angular/core/testing';

import { GptServiceService } from './gpt-service.service';

describe('GptServiceService', () => {
  let service: GptServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GptServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
