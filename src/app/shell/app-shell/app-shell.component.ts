import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { EmployeeAccessService } from 'src/app/services/access/employee-access.service';

@Component({
  selector: 'app-app-shell',
  templateUrl: './app-shell.component.html',
  styleUrls: ['./app-shell.component.scss']
})
export class AppShellComponent implements OnInit {
  options: FormGroup;
  constructor(fb: FormBuilder, private router: Router, empAccessService: EmployeeAccessService) {
   empAccessService.authPasscode = this.router.getCurrentNavigation().extras.state.authPasscode;
   this.options = fb.group({
      bottom: 0,
      fixed: false,
      top: 0
    });
  }

  ngOnInit(): void {
  }

}
