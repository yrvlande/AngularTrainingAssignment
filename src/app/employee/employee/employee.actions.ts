import { Action } from '@ngrx/store';
import { Employee } from './employee.model';

export const ADD_EMPLOYEE = '[Employee] Add Employee';
export const UPDATE_EMPLOYEE = '[Employee] Update Employee';
export const DELETE_EMPLOYEE = '[Employee] Delete Employee';

export class AddEmployee implements Action {
readonly type = ADD_EMPLOYEE;
constructor(public payload: Employee) {}
}

export class UpdateEmployee implements Action {
readonly type = UPDATE_EMPLOYEE;
constructor(
public payload: { id: string; empName: string; empProfile: string }
) {}
}

export class DeleteEmployee implements Action {
readonly type = DELETE_EMPLOYEE;
constructor(public payload: string) {}
}

export type EmployeeActions =
| AddEmployee
| UpdateEmployee
| DeleteEmployee;
