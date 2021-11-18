import { TestBed } from '@angular/core/testing';

import { InitiateInterceptor } from './initiate.interceptor';

describe('InitiateInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      InitiateInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: InitiateInterceptor = TestBed.inject(InitiateInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
