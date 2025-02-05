import express from 'express';
import employeeRouter from '../src/routes/employeeRoutes.js';
const app = express();
// Middleware
app.use(express.json());
// Use the employee router with a prefix like '/api' to handle all employee-related routes
app.use('/api', employeeRouter);
// Root route for testing server is running
app.get('/', (req, res) => {
    res.send('Employee Management System is running ✅');
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
export default app;
