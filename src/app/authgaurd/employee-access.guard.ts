import { EmployeeAccessService } from 'src/app/services/access/employee-access.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeAccessGuard implements CanActivate {

  constructor(private employeeAccessService: EmployeeAccessService) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
     return this.employeeAccessService.canAccessEmployee;
   }
}
