import { LoginService } from './../../services/login/login.service';
import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  isValid: boolean;
  showErrorMessage: boolean;
  errorMessage = 'Invalid Credentials';

  form: FormGroup = new FormGroup({
    userID: new FormControl(''),
    userPassword: new FormControl(''),
  });

  constructor(private loginService: LoginService, private router: Router) {
   }

  ngOnInit(): void {
    this.showErrorMessage = false;
  }

  isLoginValid(userID: string, userPassword: string) {
    this.loginService.isValidUser(userID, userPassword).subscribe(obj =>
      {
        if (obj.isValid) {
         this.isValid = true;
         this.router.navigate(['/app-shell'], {state: {authPasscode: this.form.value.userPassword}});
      } else {
        this.showErrorMessage = true;
      }
    });
  }

  submit() {
    if (this.form.valid) {
      this.isLoginValid(this.form.value.userID, this.form.value.userPassword);
     }
    }
  }
