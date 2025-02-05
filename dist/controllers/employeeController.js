"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEmployee = exports.updateEmployee = exports.createEmployee = exports.getEmployee = exports.getEmployees = void 0;
const Employee_1 = __importDefault(require("../models/Employee")); // Assuming you're using Sequelize or any ORM
const express_validator_1 = require("express-validator");
const winston_1 = __importDefault(require("winston"));
// Logger setup
const logger = winston_1.default.createLogger({
    level: 'info',
    format: winston_1.default.format.combine(winston_1.default.format.timestamp(), winston_1.default.format.json()),
    transports: [
        new winston_1.default.transports.Console(),
        new winston_1.default.transports.File({ filename: 'logs/app.log' })
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
const getEmployees = async (req, res) => {
    try {
        const employees = await Employee_1.default.findAll(); // Direct query to the database
        res.status(200).json(employees);
    }
    catch (error) {
        handleError(error, res, 'Failed to fetch employees');
    }
};
exports.getEmployees = getEmployees;
// Get a specific employee by ID
const getEmployee = async (req, res) => {
    try {
        const employee = await Employee_1.default.findByPk(Number(req.params.id)); // Fetch by primary key
        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        res.status(200).json(employee);
    }
    catch (error) {
        handleError(error, res, 'Failed to fetch employee');
    }
};
exports.getEmployee = getEmployee;
// Create a new employee
const createEmployee = async (req, res) => {
    // Input validation
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const newEmployee = await Employee_1.default.create(req.body); // Direct query to create employee
        res.status(201).json(newEmployee);
    }
    catch (error) {
        handleError(error, res, 'Failed to create employee');
    }
};
exports.createEmployee = createEmployee;
// Update an existing employee
const updateEmployee = async (req, res) => {
    // Input validation (optional for update, depending on your needs)
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const updatedEmployee = await Employee_1.default.findByPk(Number(req.params.id));
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
exports.updateEmployee = updateEmployee;
// Delete an employee
const deleteEmployee = async (req, res) => {
    try {
        const employee = await Employee_1.default.findByPk(Number(req.params.id));
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
exports.deleteEmployee = deleteEmployee;
