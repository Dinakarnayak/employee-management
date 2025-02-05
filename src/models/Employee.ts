import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../loaders/database';

// Define the attributes for the Employee model
interface EmployeeAttributes {
  id: number;
  name: string;
  position: string;
  salary: number;
}

// Define the optional attributes for the Employee model (for creation)
interface EmployeeCreationAttributes extends Optional<EmployeeAttributes, 'id'> {}

// Define the Employee class
class Employee extends Model<EmployeeAttributes, EmployeeCreationAttributes> implements EmployeeAttributes {
  public id!: number;
  public name!: string;
  public position!: string;
  public salary!: number;

  // Getter for full name
  get fullName(): string {
    return `${this.name} (${this.position})`;
  }

  // Optional: Add methods for the model instance if necessary
}

Employee.init(
  {
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
        isFloat: true,  // Ensures that salary is a valid float number
        min: 0,  // Salary must be greater than or equal to 0
      },
    },
  },
  {
    sequelize,
    modelName: 'Employee',
  }
);

export default Employee;
