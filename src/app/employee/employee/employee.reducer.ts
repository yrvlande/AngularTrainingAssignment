import {EmployeeActions, ADD_EMPLOYEE, UPDATE_EMPLOYEE, DELETE_EMPLOYEE } from './employee.actions';
import { Employee } from './employee.model';

export interface EmpState {
  employees: Employee[];
  }

const intialState: EmpState = {
  employees: [
  new Employee(`EMP-${1}`, 'Employee 1', 'Dot Net Developer'),
  new Employee(`EMP-${2}`, 'Employee 2', 'Java Developer'),
  new Employee(`EMP-${3}`, 'Employee 3', 'Python Developer'),
  ],
  };
export function employeeReducer(state: EmpState = intialState, action: EmployeeActions) {
  switch (action.type) {
  case ADD_EMPLOYEE:
  return { ...state, employees: [...state.employees, action.payload] };
  case UPDATE_EMPLOYEE:
  return {...state, employees: state.employees.map((x) => {
    if (x.id === action.payload.id) {
      return {id: x.id,
              name: action.payload.empName,
              profile: action.payload.empProfile,
  };
  } else {
      return x;
  }
  }),
  };
  case DELETE_EMPLOYEE:
  return {
  ...state,
  employees: state.employees.filter((x) => x.id !== action.payload),
  };
  default:
  return state;
  }
  }
