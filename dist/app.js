"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const employeeRoutes_1 = __importDefault(require("./routes/employeeRoutes"));
const app = (0, express_1.default)();
// Middleware
app.use(express_1.default.json());
// Use the employee router with a prefix like '/api' to handle all employee-related routes
app.use('/api', employeeRoutes_1.default);
// Root route for testing server is running
app.get('/', (req, res) => {
    res.send('Employee Management System is running ✅');
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
exports.default = app;
