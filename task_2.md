# Task 2. Build CRUD application using n8n

## 1- What does it mean CRUD?
CRUD=
- Create: Add data
- Read: list data
- Update: update data
- Delete: delete data

## 2- Data Model
### Example entity: Projects
- Fields:
  - id (number)    
  - name (string)
  - description (string)
  - createdAt (date)

## 3- General Architecture
```pgsql
Browser (HTML Form)
   ↓
HTTP Request
   ↓
n8n Webhook
   ↓
Logic (Create / Read / Update / Delete)
   ↓
DataTables
   ↓
HTML Response
   ↓
Browser
```

## 4- n8n Workflow
### 4.1 Webhook Node
- Method GET and POST
- Path: /projects
- This node takes every request from browser.
This is backend enpoint.

### 4.2 Separating Action (Logic of CRUD)
I send the following from the browser:
- action = create
- action = read
- action = update
- action = delete
For separate:
- Use IF node
- Separate paths according to the action value

## 5- How to perform CRUD operations?
### CREATE (POST)
- The **name** and **description** come from the HTML form
- DataTables → **Insert Row**
- creadAt = now()
- Final HTML response:
  - "Project created successfully"

### READ (GET)
- DataTables → Get All Rows
- Convert the incoming data to an HTML table
- Return a complete HTML page as a response

### UPDATE
- sends **id**
- DataTables → Update Row
- Writes new **name**/**descripton**

### DELETE
- sends **id**
- DataTables → Delete Row

## 6- HTML RESPONSE
```html
<!DOCTYPE html>
<html>
<head>
  <title>Projects</title>
</head>
<body>
  <h1>Projects</h1>

  <form method="POST">
    <input type="hidden" name="action" value="create" />
    <input name="name" placeholder="Project name" />
    <input name="description" placeholder="Description" />
    <button type="submit">Create</button>
  </form>

  <table>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Description</th>
    </tr>
    
  </table>
</body>
</html>

```



























