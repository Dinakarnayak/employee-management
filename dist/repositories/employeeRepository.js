"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEmployee = exports.updateEmployee = exports.createEmployee = exports.getEmployeeById = exports.getAllEmployees = void 0;
const Employee_js_1 = __importDefault(require("../models/Employee.js"));
const getAllEmployees = async () => Employee_js_1.default.findAll();
exports.getAllEmployees = getAllEmployees;
const getEmployeeById = async (id) => Employee_js_1.default.findByPk(id);
exports.getEmployeeById = getEmployeeById;
const createEmployee = async (data) => Employee_js_1.default.create(data);
exports.createEmployee = createEmployee;
const updateEmployee = async (id, data) => Employee_js_1.default.update(data, { where: { id } });
exports.updateEmployee = updateEmployee;
const deleteEmployee = async (id) => Employee_js_1.default.destroy({ where: { id } });
exports.deleteEmployee = deleteEmployee;
