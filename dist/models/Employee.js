"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_js_1 = require("../loaders/database.js");
// Define the Employee class
class Employee extends sequelize_1.Model {
    id;
    name;
    position;
    salary;
    // Getter for full name
    get fullName() {
        return `${this.name} (${this.position})`;
    }
}
Employee.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    position: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    salary: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
        validate: {
            isFloat: true,
            min: 0, // Salary must be greater than or equal to 0
        },
    },
}, {
    sequelize: database_js_1.sequelize,
    modelName: 'Employee',
});
exports.default = Employee;
