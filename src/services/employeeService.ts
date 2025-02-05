import * as EmployeeRepo from '../repositories/employeeRepository.js';

export const fetchEmployees = async () => EmployeeRepo.getAllEmployees();
export const fetchEmployeeById = async (id: number) => EmployeeRepo.getEmployeeById(id);
export const addEmployee = async (data: any) => EmployeeRepo.createEmployee(data);
export const modifyEmployee = async (id: number, data: any) => EmployeeRepo.updateEmployee(id, data);
export const removeEmployee = async (id: number) => EmployeeRepo.deleteEmployee(id);