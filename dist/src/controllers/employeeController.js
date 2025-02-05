import Employee from '../models/Employee'; // Assuming you're using Sequelize or any ORM
import { validationResult } from 'express-validator';
import winston from 'winston';
// Logger setup
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'logs/app.log' })
    ]
});
// Centralized error handling function
const handleError = (error, res, message) => {
    if (error instanceof Error) {
        logger.error(`Error: ${error.message}`, { stack: error.stack }); // Log error stack trace
        res.status(500).json({ message, error: process.env.NODE_ENV === 'production' ? 'Internal server error' : error.message });
    }
    else {
        res.status(500).json({ message: 'An unknown error occurred' });
    }
};
// Get all employees
export const getEmployees = async (req, res) => {
    try {
        const employees = await Employee.findAll(); // Direct query to the database
        res.status(200).json(employees);
    }
    catch (error) {
        handleError(error, res, 'Failed to fetch employees');
    }
};
// Get a specific employee by ID
export const getEmployee = async (req, res) => {
    try {
        const employee = await Employee.findByPk(Number(req.params.id)); // Fetch by primary key
        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        res.status(200).json(employee);
    }
    catch (error) {
        handleError(error, res, 'Failed to fetch employee');
    }
};
// Create a new employee
export const createEmployee = async (req, res) => {
    // Input validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const newEmployee = await Employee.create(req.body); // Direct query to create employee
        res.status(201).json(newEmployee);
    }
    catch (error) {
        handleError(error, res, 'Failed to create employee');
    }
};
// Update an existing employee
export const updateEmployee = async (req, res) => {
    // Input validation (optional for update, depending on your needs)
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const updatedEmployee = await Employee.findByPk(Number(req.params.id));
        if (!updatedEmployee) {
            return res.status(404).json({ message: 'Employee not found to update' });
        }
        await updatedEmployee.update(req.body); // Update the employee data
        res.status(204).send(); // No content after successful update
    }
    catch (error) {
        handleError(error, res, 'Failed to update employee');
    }
};
// Delete an employee
export const deleteEmployee = async (req, res) => {
    try {
        const employee = await Employee.findByPk(Number(req.params.id));
        if (!employee) {
            return res.status(404).json({ message: 'Employee not found to delete' });
        }
        await employee.destroy(); // Delete the employee
        res.status(204).send(); // No content after successful deletion
    }
    catch (error) {
        handleError(error, res, 'Failed to delete employee');
    }
};
