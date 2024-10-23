# Sewing Repair Project

Welcome to the **Sewing Repair Project**, a web application designed to manage and track the repair history of sewing machines. This project aims to help sewing machine technicians, shop owners, and customers efficiently log repairs, view detailed machine information, and maintain a comprehensive repair history database.

## Table of Contents
- [Project Description](#project-description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Authentication](#authentication)
- [Database Structure](#database-structure)
- [Testing](#testing)
- [Deployment](#deployment)
- [License](#license)

---

## Project Description

The Sewing Repair Project is a full-stack web application that provides a platform for users to register their sewing machines, log repair records, and view detailed information about each machine and its repair history. The system enables user authentication, secure data handling, and a user-friendly interface designed for sewing machine repair technicians, shop owners, and customers.

### Key Features:
- **User Authentication**: Secure login and registration with role-based authorization.
- **Customer Management**: CRUD operations for managing customer profiles.
- **Sewing Machine Management**: Ability to add, edit, delete, and view details of sewing machines, including brand, model, and serial number.
- **Repair Log Tracking**: Log repair records, including repair date, description, and costs.
- **Database Integration**: Powered by PostgreSQL and Sequelize ORM to manage machine and repair data.
- **RESTful API**: Backend API designed with Express.js for seamless data communication.
- **Responsive Frontend**: Developed with React and TypeScript for a responsive, modern user interface.
- **Environment Configuration**: Manage sensitive data securely with dotenv.
- **Future Enhancements**:
  - Automated testing using Jest, Mocha, or Supertest.
  - Continuous Integration (CI) and Continuous Deployment (CD) setup using GitHub Actions, CircleCI, or Travis CI.
  - Cloud-based database and storage integration for scalable infrastructure.

---

## Technologies Used

### Backend:
- **Node.js & Express.js**: Handles API logic, routing, and server-side operations.
- **PostgreSQL**: Relational database used for storing customer, machine, and repair information.
- **Sequelize ORM**: An Object-Relational Mapper (ORM) for managing PostgreSQL database operations.
- **dotenv**: Environment variable management for secure and flexible configurations.
- **JWT (JSON Web Tokens)**: Token-based authentication for user sessions.

### Frontend:
- **React**: A powerful JavaScript library for building dynamic user interfaces.
- **TypeScript**: Adds type safety to JavaScript, improving code maintainability and reducing errors.
- **React Router**: Enables smooth navigation between different views and components.
- **Axios**: For making HTTP requests to the backend API.
- **Material-UI** (Optional): To ensure a consistent, responsive UI/UX across different devices.

### DevOps & Testing:
- **Jest / Mocha**: For unit testing and integration testing.
- **Supertest**: To test API endpoints.
- **ESLint & Prettier**: Ensures code quality and consistent formatting.
- **Heroku / AWS**: Deployment options for hosting the backend and database.

---

## Installation

### Prerequisites:
- **Node.js** (v14 or later)
- **PostgreSQL** (installed and running locally or via a cloud service)
- **Git** for version control

### Steps to Install Locally:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/sewing-repair-project.git
   cd sewing-repair-project
   ```

2. **Backend Setup**:
   - Navigate to the backend folder:
     ```bash
     cd server
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Set up your environment variables:
     - Create a `.env` file and include your database and JWT secrets:
       ```
       DB_USER=your_db_username
       DB_PASS=your_db_password
       DB_NAME=sewing_repair_db
       JWT_SECRET=your_secret_key
       ```
   - Run database migrations and seeds:
     ```bash
     npx sequelize db:migrate
     npx sequelize db:seed:all
     ```
   - Start the backend server:
     ```bash
     npm run dev
     ```

3. **Frontend Setup**:
   - Navigate to the frontend folder:
     ```bash
     cd client
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the frontend server:
     ```bash
     npm run dev
     ```

4. **Access the App**:
   Open your browser and navigate to `http://localhost:5173` to view the app.

---

## Usage

### Frontend:
- **Customers**: Users can view, create, edit, and delete customers. Each customer can be associated with multiple sewing machines.
- **Sewing Machines**: Manage sewing machine details including model, serial number, and brand. Each machine can have multiple repair records.
- **Repair Records**: Log repairs with a detailed description, cost, and repair date.

### Backend:
- The backend serves the API endpoints that the frontend interacts with. All endpoints require authentication, and different roles have access to different resources (e.g., only admins can delete users).

---

## API Endpoints

### Customers
- **GET /api/customers**: Retrieve all customers.
- **POST /api/customers**: Add a new customer.
- **GET /api/customers/:id**: Retrieve a specific customer by ID.
- **PUT /api/customers/:id**: Update a customer's information.
- **DELETE /api/customers/:id**: Remove a customer.

### Sewing Machines
- **GET /api/machines**: Retrieve all sewing machines.
- **POST /api/machines**: Add a new sewing machine.
- **GET /api/machines/:id**: Retrieve a specific sewing machine by ID.
- **PUT /api/machines/:id**: Update a machine's details.
- **DELETE /api/machines/:id**: Delete a sewing machine.

### Repair Records
- **POST /api/repairs**: Log a new repair record.
- **GET /api/repairs/:id**: Retrieve repair records for a specific machine.
- **DELETE /api/repairs/:id**: Remove a repair record.

---

## Authentication

The app uses **JWT (JSON Web Token)** for authentication. Users must log in to access protected routes, such as adding or editing customers, machines, and repair records.

- **Register**: Create a new account.
- **Login**: Authenticate with email and password.
- **Logout**: Invalidate the JWT token.
- **Role-based Authorization**: Different user roles (admin, technician) can access specific functionalities.

---

## Database Structure

- **Customers Table**:
  - `id`: UUID (Primary Key)
  - `firstName`: STRING
  - `lastName`: STRING
  - `email`: STRING (Unique)
  - `phone`: STRING

- **Sewing Machines Table**:
  - `id`: UUID (Primary Key)
  - `customerId`: UUID (Foreign Key)
  - `brand`: STRING
  - `modelNumber`: STRING
  - `serialNumber`: STRING (Unique)

- **Repair Records Table**:
  - `id`: UUID (Primary Key)
  - `sewingMachineId`: UUID (Foreign Key)
  - `repairDate`: DATE
  - `issueDescription`: TEXT
  - `repairDescription`: TEXT
  - `repairCost`: DECIMAL

---

## Testing

Unit tests and integration tests will be added to ensure functionality:
- **Unit Testing**: Using **Jest** and **Mocha** for both frontend and backend logic.
- **API Testing**: Using **Supertest** to verify the API endpoints.
- **Frontend Testing**: Using **React Testing Library** for component testing.

Run tests using:
```bash
npm test
```

---

## Deployment

The app will be deployed to cloud platforms such as **Heroku** (backend) and **Netlify** or **Vercel** (frontend). Continuous Integration and Continuous Deployment (CI/CD) will be set up using GitHub Actions or CircleCI.

- **Backend Deployment**: Heroku (PostgreSQL hosted on AWS RDS).
- **Frontend Deployment**: Vercel or Netlify.

---

## License

This project is licensed under the MIT License. Feel free to use, modify, and distribute the code for your own projects.

---

