import Employee from '../models/Employee.js';

export const getAllEmployees = async () => Employee.findAll();
export const getEmployeeById = async (id: number) => Employee.findByPk(id);
export const createEmployee = async (data: any) => Employee.create(data);
export const updateEmployee = async (id: number, data: any) => Employee.update(data, { where: { id } });
export const deleteEmployee = async (id: number) => Employee.destroy({ where: { id } });