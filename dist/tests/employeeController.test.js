"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const chai_1 = require("chai"); // Import expect from chai
const app_1 = __importDefault(require("../app")); // Path to your Express app
describe('Employee API Tests', () => {
    // Test GET /api/employees
    it('should fetch all employees', (done) => {
        (0, supertest_1.default)(app_1.default)
            .get('/api/employees')
            .expect(200)
            .expect('Content-Type', /json/)
            .end((err, res) => {
            if (err)
                return done(err);
            (0, chai_1.expect)(res.body).to.be.an('array');
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
        (0, supertest_1.default)(app_1.default)
            .post('/api/employees')
            .send(employee)
            .expect(201)
            .expect('Content-Type', /json/)
            .end((err, res) => {
            if (err)
                return done(err);
            (0, chai_1.expect)(res.body).to.have.property('name', 'Alice');
            (0, chai_1.expect)(res.body).to.have.property('position', 'Developer');
            (0, chai_1.expect)(res.body).to.have.property('salary', 70000);
            done();
        });
    });
    // Test GET /api/employees/:id
    it('should fetch an employee by ID', (done) => {
        const employeeId = 1; // Replace with a valid ID from your database
        (0, supertest_1.default)(app_1.default)
            .get(`/api/employees/${employeeId}`)
            .expect(200)
            .expect('Content-Type', /json/)
            .end((err, res) => {
            if (err)
                return done(err);
            (0, chai_1.expect)(res.body).to.have.property('id', employeeId);
            done();
        });
    });
    // Test PUT /api/employees/:id
    it('should update an existing employee', (done) => {
        const employeeId = 1; // Replace with a valid ID
        const updatedEmployee = {
            name: 'Alice',
            position: 'Senior Developer',
            salary: 80000
        };
        (0, supertest_1.default)(app_1.default)
            .put(`/api/employees/${employeeId}`)
            .send(updatedEmployee)
            .expect(200)
            .expect('Content-Type', /json/)
            .end((err, res) => {
            if (err)
                return done(err);
            (0, chai_1.expect)(res.text).to.equal('Employee updated successfully');
            done();
        });
    });
    // Test DELETE /api/employees/:id
    it('should delete an employee by ID', (done) => {
        const employeeId = 1; // Replace with a valid ID
        (0, supertest_1.default)(app_1.default)
            .delete(`/api/employees/${employeeId}`)
            .expect(200)
            .expect('Content-Type', /json/)
            .end((err, res) => {
            if (err)
                return done(err);
            (0, chai_1.expect)(res.text).to.equal('Employee deleted successfully');
            done();
        });
    });
});
