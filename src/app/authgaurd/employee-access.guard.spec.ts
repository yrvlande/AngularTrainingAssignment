import { TestBed } from '@angular/core/testing';

import { EmployeeAccessGuard } from './employee-access.guard';

describe('EmployeeAccessGuard', () => {
  let guard: EmployeeAccessGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EmployeeAccessGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
