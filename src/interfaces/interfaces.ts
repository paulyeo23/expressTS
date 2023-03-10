export enum departmentEnum {
  HR = "HR",
  PS = "PS",
}

export interface employeeData {
  id: number;
  name: string;
  salary: number;
  department: departmentEnum;
}

export interface newEmployeeData {
  name: string;
  salary: number;
  department: departmentEnum;
}

export interface Data {
  employees: employeeData[];
}

export interface crud {
  getAllEmployees: Function;
  createNewEmployee: Function;
  getOneEmployee: Function;
  updateEmployee: Function;
  deleteEmployee: Function;
}
