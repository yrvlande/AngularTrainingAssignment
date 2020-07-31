import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { Employee } from '../employee/employee.model';
import { Observable } from 'rxjs';
import { AddEmployee, DeleteEmployee, UpdateEmployee } from '../employee/employee.actions';

@Component({
selector: 'app-employee',
templateUrl: './employee.component.html',
styleUrls: ['./employee.component.scss'],
})

export class EmployeeComponent implements OnInit {

employees: Observable<{ employees: Employee[] }>;
@ViewChild('empName') empname: ElementRef;
@ViewChild('empProfile') empProfile: ElementRef;
isEdit = false;
currentEmpId: string;

constructor(private store: Store<AppState>) {}

ngOnInit() {
this.employees = this.store.select('employeesState'); // employeeState: {employees: Employee[]}
}

addEmployee() {
this.store.dispatch(
new AddEmployee( new Employee( `EMP-${Math.floor(Math.random() * 1001)}`,
                                this.empname.nativeElement.value,
                                this.empProfile.nativeElement.value)));
this.onCancelEmployee();
}

onDelete(id: string) {
  this.store.dispatch(new DeleteEmployee(id));
  this.onCancelEmployee();
}

editEmployee(emp: Employee) {
this.empname.nativeElement.value = emp.name;
this.empProfile.nativeElement.value = emp.profile;
this.isEdit = true;
this.currentEmpId = emp.id;
}

onCancelEmployee() {this.empname.nativeElement.value = ''; this.empProfile.nativeElement.value = '';
                    this.isEdit = false; this.currentEmpId = ''; }

updateEmployee() {
this.store.dispatch(new UpdateEmployee({id: this.currentEmpId,
                                        empName: this.empname.nativeElement.value,
                                        empProfile: this.empProfile.nativeElement.value, }));
this.onCancelEmployee();
}

fetchEmployees() {
// will talk about this later in effects
}
}
