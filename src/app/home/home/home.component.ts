import { EmployeeAccessService } from 'src/app/services/access/employee-access.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  authPassCode: string;
  authFlag: boolean;
  errorFlag: boolean;
  employeeAccessService: EmployeeAccessService;
  authorizationForm: FormGroup = new FormGroup({
    authorizationPassword: new FormControl('')
  });

  constructor(employeeAccessService: EmployeeAccessService) {
    this.employeeAccessService = employeeAccessService;
    this.authPassCode = employeeAccessService.authPasscode;
  }

  ngOnInit(): void {
    this.authFlag = false;
    this.employeeAccessService.canAccessEmployee = false;
  }

  submit() {
    if (this.authorizationForm.valid) {
      if (this.authPassCode === this.authorizationForm.value.authorizationPassword){
         this.authFlag = true;
         this.employeeAccessService.canAccessEmployee = true;
         this.errorFlag = false;
      } else {
         this.errorFlag = true;
      }
    }
  }

  resetErrorFlag() {
    this.errorFlag = false;
  }

}
