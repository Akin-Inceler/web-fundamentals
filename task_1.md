# Task 1

## 1- How to build backend server?
A backend server takes request from client, proccesses then and returns a response.

### Main tasks:
- Taking HTTP request
- To operate the business rules
- Talking to the database
- Returning an HTTP response

### How to build backend server?

1. Select one backend language and framework.asd
For example:
- Javascript → Node.js + Express / NestJS
- Python → Node.js + Express / NestJS
- Java → Spring Boot

2. Start Server
The server listens on a specific port (e.g., 3000, 8080).

3. Route (endpoint) is defined
- GET /users
- POST /login
- GET /expenses
Every route:
- a HTTP method
- a URL
- a handler function

4. Processing request
Server:
- Reading headers
- It parses the body
- Authenticates the user if necessary.

5. Returning response
- Status code
- JSON or different data
- Error message if there is

### Summary
Backend server = request → logic → response

---

## 2- What is a Database?
The database is where an application's data is permanently stored.
The data remains even if the backend shuts down.

### Why database is necessary?
- User information
- Expenses
- Orders
- Settings
All of these needs database to store.

### Basic database types
- Relational (SQL)
  - Tables
  - Row / column
  - Connections

- Examples:
  - PostgreSQL
  - MySQL
  - SQLite

- Non-relational (NoSQL)
  - JSON-like structures
  - Flexible schema

- Examples:
  - MongoDB
  - Redis

---

## 3- Basic SQL Commands
SQL is the language that communicates with relational databases.
Frequntly used commonads:
### CREATE
Creating Table
```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name TEXT,
  email TEXT
);
```
### INSERT
Adds data
```sql
INSERT INTO users (name, email)
VALUES ('Akin', 'akin@example.com');
```
### SELECT
Reads data
```sql
SELECT * FROM users;
```
With filter:
```sql
SELECT * FROM users WHERE email = 'akin@example.com';
```
### UPDATE
Updates data
```sql
UPDATE users
SET name = 'Akin Inceler'
WHERE id = 1;
```
### DELETE
Deletes data
```sql
DELETE FROM users WHERE id = 1;
```
- Important concepts in SQL:
  - WHERE
  - ORDER BY
  - LIMIT
  - PRIMARY KEY
  - FOREIGN KEY

---
 
## 4- Most Populer Backend Technologies
### Node.js(JavaScript)
- Reasons:
  - Same language with frontend
  - Using a lot in Startups
  - Ideal for full stack applications
- Common Framewors:
  - Express.js
  - NestJS

### Python
- Reasons:
  - Readeble
  - Compatible with backend + data + AI
- Frameworks:
  - Django
  - Flask
  - FastAPI
 
### Java (Spring Boot)
- Reasons:
  - Corporate companies
  - Strong architecture
- Disadvantage:
  - Hard to learn

### PHP (Laravel)
- Still common but not a first choise for modern backend













