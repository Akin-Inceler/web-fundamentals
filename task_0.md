# Task 0
## How does the web browser work?
1- URL entered
2- Browser learns domains IP adress
3- Browser sents HTTP request.
4- Server respond wtih HTML, CSS and JS
5- Browser process HTML, CSS and JS
6- The page is rendered. User can see the page.

## What is HTTP protocol?
This is the rules between browser and server.
Key features:
- It is based on the client-server model.
- It is Stateless (Each reqeust is independent).

## What are HTTP requests?
A request consist of parts.
### 1- Method
- It states what it wants to do (GET,POST,etc)
### 2- URL
- It states which source it wants
### 3- Headers
- Extra informations (Authorization, Content-Type)
### 4-Body (optional)
- Data sent

## What are HTTP responses?
### 1- Status Code
- Outcome of request (200, 404, 500,...)
### 2- Headers
- Information about server (Type of content, etc.).
### 3- Body
- Returned data (HTML, JSON, etc.)

## What are the most common request types?
### GET

```http
GET /index.html HTTP/1.1
Host: example.com
```