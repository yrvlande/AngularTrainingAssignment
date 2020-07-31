import { LoginService } from './../../services/login/login.service';

import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router' ;
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root'})
export class LoginGaurdService implements CanActivate {

constructor(private router: Router, private loginService: LoginService) {}

canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
 return false;
}

}
