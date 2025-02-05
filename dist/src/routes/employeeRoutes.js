import { Router } from 'express';
import * as EmployeeController from '../controllers/employeeController';
const router = Router();
// Define routes for employee-related operations
router.get('/employees', EmployeeController.getEmployees);
router.get('/employees/:id', EmployeeController.getEmployee);
router.post('/employees', EmployeeController.createEmployee);
router.put('/employees/:id', EmployeeController.updateEmployee);
router.delete('/employees/:id', EmployeeController.deleteEmployee);
export default router;
