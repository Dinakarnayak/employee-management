import * as EmployeeRepo from '../repositories/employeeRepository';
export const fetchEmployees = async () => EmployeeRepo.getAllEmployees();
export const fetchEmployeeById = async (id) => EmployeeRepo.getEmployeeById(id);
export const addEmployee = async (data) => EmployeeRepo.createEmployee(data);
export const modifyEmployee = async (id, data) => EmployeeRepo.updateEmployee(id, data);
export const removeEmployee = async (id) => EmployeeRepo.deleteEmployee(id);
