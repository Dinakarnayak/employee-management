import Employee from '../models/Employee';
export const getAllEmployees = async () => Employee.findAll();
export const getEmployeeById = async (id) => Employee.findByPk(id);
export const createEmployee = async (data) => Employee.create(data);
export const updateEmployee = async (id, data) => Employee.update(data, { where: { id } });
export const deleteEmployee = async (id) => Employee.destroy({ where: { id } });
