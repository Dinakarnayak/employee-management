import request from 'supertest';
import { Response } from 'supertest'; // Import Supertest Response type
import app from '../app';  // Path to your Express app

describe('Employee API Tests', () => {

  // Test GET /api/employees
  it('should fetch all employees', (done) => {
    request(app)
      .get('/api/employees')
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err: Error, res: Response) => {  
        if (err) throw err;
        expect(res.body).toBeInstanceOf(Array);
        done();
      });
  });

  // Test POST /api/employees
  it('should create a new employee', (done) => {
    const employee = {
      name: 'Alice',
      position: 'Developer',
      salary: 70000
    };

    request(app)
      .post('/api/employees')
      .send(employee)
      .expect(201)
      .expect('Content-Type', /json/)
      .end((err: Error, res: Response) => {  
        if (err) throw err;
        expect(res.body).toHaveProperty('name', 'Alice');
        expect(res.body).toHaveProperty('position', 'Developer');
        expect(res.body).toHaveProperty('salary', 70000);
        done();
      });
  });

  // Test GET /api/employees/:id
  it('should fetch an employee by ID', (done) => {
    const employeeId = 1;  // Replace with a valid ID from your database

    request(app)
      .get(`/api/employees/${employeeId}`)
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err: Error, res: Response) => {  
        if (err) throw err;
        expect(res.body).toHaveProperty('id', employeeId);
        done();
      });
  });

  // Test PUT /api/employees/:id
  it('should update an existing employee', (done) => {
    const employeeId = 1;  // Replace with a valid ID
    const updatedEmployee = {
      name: 'Alice',
      position: 'Senior Developer',
      salary: 80000
    };

    request(app)
      .put(`/api/employees/${employeeId}`)
      .send(updatedEmployee)
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err: Error, res: Response) => {  
        if (err) throw err;
        expect(res.text).toBe('Employee updated successfully');
        done();
      });
  });

  // Test DELETE /api/employees/:id
  it('should delete an employee by ID', (done) => {
    const employeeId = 1;  // Replace with a valid ID

    request(app)
      .delete(`/api/employees/${employeeId}`)
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err: Error, res: Response) => {  
        if (err) throw err;
        expect(res.text).toBe('Employee deleted successfully');
        done();
      });
  });

});
