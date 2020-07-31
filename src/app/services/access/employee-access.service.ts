import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeAccessService {
canAccessEmployee = false;
authPasscode: string;

  constructor(private http: HttpClient) { }
}
