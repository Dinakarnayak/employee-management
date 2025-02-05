import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../loaders/database';
// Define the Employee class
class Employee extends Model {
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
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    position: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    salary: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
            isFloat: true,
            min: 0, // Salary must be greater than or equal to 0
        },
    },
}, {
    sequelize,
    modelName: 'Employee',
});
export default Employee;
