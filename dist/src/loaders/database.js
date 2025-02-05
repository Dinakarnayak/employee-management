import { Sequelize } from 'sequelize';
import * as dotenv from 'dotenv';
dotenv.config();
const sequelize = new Sequelize({
    dialect: 'mysql',
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});
// Sync the database before tests run
const initializeDatabase = async () => {
    try {
        await sequelize.sync({ force: true }); // Ensure the tables are created and reset before tests
        console.log('✅ Database synchronized');
    }
    catch (error) {
        console.error('❌ Database connection failed:', error);
    }
};
export { sequelize, initializeDatabase };
