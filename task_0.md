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
- To take data
- Without body
```http
GET /users
```
### POST
- To create new data
```h
POST /users
```
### PUT
- To update all existing data.
### PATCH
- To update some of the existing data.
### DELETE
- To delete data.

## What are the most common response statuses?
### 200 OK
- Request successful
### 201 Created
- New source created
### 400 Bad Request
- Client sent wrong data
### 401 Unauthorized
- No login
### 403 Forbidden
- No authority
### 404 Not Found
- Source not found
### 500 Internal Server Error
- Error on the server side

## How browser can store data?
Browsers can store data in different ways:
### Cookies
- Small datas
- It is automatically sent to the server
- Commonly used for authentication
### LocalStorage
- Permenant
- It is not deleted when the browser is closed
- It can be store big data
### SessionStorage
- It is deleted when the tab is closed
- It is for temporary data

## How can you use DevTools to understand each of these?
DevTools are a developer's most important tool
### Network tab
- You will see the requests that have been sent (Method, URL, status code)
### Application / Storage tab
- Cookies
- LocalStorage
- SessionStorage
### What is it used for?
- Debugging
- Understanding API
- Finding errors

## Medium article
https://medium.com/@akin2001inceler/how-the-web-works-from-browser-to-server-with-devtools-ee26b692ba63

## Small quiz to test your knowledge 
https://web-fundamentals-quiz-ee7c03cb.base44.app
