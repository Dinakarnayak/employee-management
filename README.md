# 📌 Employee Management System

🚀 A simple **Employee Management System** built using **Node.js** with **MySQL** integration. This project helps organizations manage employee records efficiently.

---

## 📖 Table of Contents  
- [🛠 Features](#-features)  
- [⚙️ Tech Stack](#️-tech-stack)  
- [🚀 Installation](#-installation)  
- [🎯 Usage](#-usage)  
- [📌 API Endpoints](#-api-endpoints)  
- [🛡 Security](#-security)  
- [📝 License](#-license)  
- [👨‍💻 Author](#-author)  

---

## 🛠 Features  
✔ Employee Registration & Management  
✔ Role-Based Access Control (RBAC)  
✔ Attendance Tracking  
✔ Payroll Management  
✔ Secure Authentication (JWT/Auth)  
✔ Admin Dashboard  
✔ RESTful API Integration  
✔ Export Reports (CSV, PDF)  

---

## ⚙️ Tech Stack  
🔹 **Backend:** Node.js / Express.js  
🔹 **Database:** MySQL  
🔹 **Authentication:** JWT / OAuth  
🔹 **Version Control:** Git & GitHub  
🔹 **Deployment:** AWS / Heroku / Vercel  

---

## 🚀 Installation  

1️⃣ **Clone the repository**  
```bash
git clone https://github.com/Dinakarnayak/employee-management.git
cd employee-management
```

2️⃣ **Install dependencies**  
```bash
npm install
```

3️⃣ **Setup environment variables** (`.env`)  
```plaintext
DB_CONNECTION=<your_mysql_database_url>
JWT_SECRET=<your_secret_key>
```

4️⃣ **Run the application**  
```bash
npm start
```

---

## 🎯 Usage  
- Admin can **add, edit, delete, and view** employees.  
- Employees can **log in and update their details**.  
- **Role-based access** ensures secure data handling.  
- Reports can be **exported in CSV/PDF formats**.  

---

## 📌 API Endpoints  
| Method | Endpoint | Description |
|--------|---------|-------------|
| POST | `/api/auth/login` | Employee login |
| GET | `/api/employees` | Fetch all employees |
| POST | `/api/employees` | Add a new employee |
| PUT | `/api/employees/:id` | Update employee details |
| DELETE | `/api/employees/:id` | Remove an employee |

---

## 🛡 Security  
✅ **JWT Authentication** for secure logins  
✅ **Data Encryption** for sensitive employee records  
✅ **Role-Based Access Control**  

---



## 👨‍💻 Author  
**Dinakar Nayak N**  
🔗 [GitHub](https://github.com/Dinakarnayak) | 🔗 [LinkedIn](https://www.linkedin.com/in/dinakar-nayak-n-125762232/)  

---

