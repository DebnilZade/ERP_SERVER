# Node.js Authentication and Authorization App

## Description
This application is a basic structure for an ERP system that includes authentication and role-based access control. It is built using Node.js, Express.js, and MongoDB, and leverages JWT for secure token-based authentication.

---

## Table of Contents
1. [Features](#features)
2. [Installation](#installation)
3. [Usage](#usage)
4. [API Endpoints](#api-endpoints)
5. [Technologies Used](#technologies-used)
6. [Environment Variables](#environment-variables)
7. [Folder Structure](#folder-structure)
8. [Contributing](#contributing)
9. [License](#license)

---

## Features
- User registration with hashed passwords using bcrypt.
- Login functionality with JWT-based authentication.
- Role-based access control (Admin and User roles).
- Middleware for protecting routes and enforcing admin-specific access.
- Modular and scalable structure.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/your-repo-name.git

2. Navigate to the project directory:
   ```bash
    cd your-repo-name

3. Install dependencies:
   ```bash
    npm install

4. Set up the .env file (see Environment Variables).

5. Start the server:
   ```bash
    npm start

## Usage
    Register a user using the /api/auth/register endpoint.
    Log in with valid credentials via /api/auth/login to receive a JWT token.
    Use the token in the x-auth-token header to access protected routes.

## API Endpoints
        Base URL: http://localhost:5000/api/auth
        Register a User
        Method: POST
        Route: /register
        Description: Registers a new user.
        Request Body:
        json
        
        {
        "username": "testuser",
        "password": "password123",
        "role": "user"
        }
        Response:
        json
        
        {
        "token": "your-jwt-token"
        }
        Login
        Method: POST
        Route: /login
        Description: Logs in an existing user and returns a JWT token.
        Request Body:
        json
        
        {
        "username": "testuser",
        "password": "password123"
        }
        Response:
        
        
        {
        "token": "your-jwt-token"
        }
        
## Technologies Used
    Node.js: Server-side JavaScript runtime.
    Express.js: Web framework for building APIs.
    MongoDB: NoSQL database for storing user data.
    Mongoose: ODM for MongoDB.
    JWT (jsonwebtoken): Token-based authentication.
    bcryptjs: Secure password hashing.
    Express Validator: Middleware for input validation.
## Environment Variables
    Create a .env file in the root directory and include the following keys:

    ```env
    
        PORT=5000
        MONGO_URI=your-mongodb-uri
        JWT_SECRET=your-jwt-secret

## Folder Structure
   ```bash
    ├── config/
    │   └── db.js               # Database connection setup
    ├── controllers/
    │   └── authController.js   # Controller logic for authentication
    ├── middleware/
    │   └── authMiddleware.js   # Middleware for route protection
    ├── models/
    │   └── User.js             # Mongoose schema for User
    ├── routes/
    │   └── authRoutes.js       # Authentication-related routes
    ├── .env                    # Environment variables
    ├── app.js                  # Application entry point
    ├── package.json            # Project metadata and dependencies

## Contributing
    Contributions are welcome! Follow these steps to contribute:

    Fork the repository.
    Create a new branch: git checkout -b feature-name.
    Commit your changes: git commit -m "Add feature name".
    Push to the branch: git push origin feature-name.
    Open a pull request.
