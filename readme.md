# Project Overview

This project provides a complete solution for user management with CRUD operations (Create, Read, Update, Delete). Built with Node.js, TypeScript, Express.js, and TypeORM, it offers a robust and type-safe backend for managing user data in a MySQL database.

Technologies Used
Backend: Node.js with TypeScript
ORM: TypeORM
Database: MySQL
API Framework: Express.js

# Setup Instructions

Prerequisites

- Node.js (v14 or higher)
- MySQL server
- Git

Installation

1. Clone the repository and to cd it:
   git clone https://github.com/rimarnavaja1231/api_typeorm.git
   cd api_typeorm

2. Install dependencies:
   npm install

Update ormconfig.json with your MySQL credentials.
In my case (Rimar):
{
"type": "mysql",
"host": "localhost",
"port": 3306,
"username": "root",
"password": "1010",
"database": "user_management",
"synchronize": true,
"logging": false,
"entities": ["src/entities/**/*.ts"],
"migrations": ["src/migrations/**/*.ts"],
"subscribers": ["src/subscribers/**/*.ts"],
"cli": {
"entitiesDir": "src/entities",
"migrationsDir": "src/migrations",
"subscribersDir": "src/subscribers"
}
}

# API Documentation

Create a User
POST /api/users

Request body:
{
"firstName": "Rimar",
"lastName": "Navaja",
"email": "rimarnavaja@example.com",
"phone": "09090990099"
}

Response:
{
"success": true,
"data": {
"firstName": "Rimar",
"lastName": "Navaja",
"email": "rimarnavaja@example.com",
"phone": "09090990099",
"id": 1,
"isActive": true,
"createdAt": "2025-03-29T14:46:47.288Z",
"updatedAt": "2025-03-29T14:46:47.288Z"
}
}

Get All Users
GET /api/users

Response:
Response:
{
"success": true,
"data": [
{
"id": 2,
"firstName": "Clyd",
"lastName": "Trapa",
"email": "clyd@example.com",
"phone": "096969000",
"isActive": true,
"createdAt": "2025-03-29T14:51:28.817Z",
"updatedAt": "2025-03-29T14:51:28.817Z"
},
{
"id": 1,
"firstName": "Rimar",
"lastName": "Navaja",
"email": "rimarnavaja@example.com",
"phone": "09090990099",
"isActive": true,
"createdAt": "2025-03-29T14:46:47.288Z",
"updatedAt": "2025-03-29T14:46:47.288Z"
}
],
"pagination": {
"currentPage": 1,
"itemsPerPage": 10,
"totalItems": 2,
"totalPages": 1
}
}

Get User by ID

- GET /api/users/:id

Response:
{
"success": true,
"data": {
"id": 1,
"firstName": "Rimar",
"lastName": "Navaja",
"email": "rimarnavaja@example.com",
"phone": "09090990099",
"isActive": true,
"createdAt": "2025-03-29T14:46:47.288Z",
"updatedAt": "2025-03-29T14:46:47.288Z"
}
}

Delete User

- DELETE /api/users/:id

Response:
{
"success": true,
"message": "User deleted successfully"
}
