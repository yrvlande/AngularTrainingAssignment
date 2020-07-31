import { ActionReducerMap } from '@ngrx/store';
import { employeeReducer, EmpState } from './employee/employee/employee.reducer';
export interface AppState {
employeesState: EmpState;
}
export const AppReducer: ActionReducerMap<AppState> = {
employeesState: employeeReducer
};
