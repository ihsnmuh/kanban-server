# Kanban'Mu App Server

Kanban'Mu App adalah aplikasi web dengan Single Page Application (SPA) yang berfungsi sebagai memanaje segala aktifitas yang akan atau sedang dilakukan sampai aktifitas tersebut selesai. Aplikasi ini memungkinkan anda untuk memantau seluruh task, bisa menambakan task baru serta mengeditnya sesuai keinginan.

Aplikasi ini memiliki konfigurasi antara lain :

- RESTful endpoint dengan operasi CRUD
- Format response berupa JSON
- Memiliki assosiasi "one-to-many" dimana satu User dapat memiliki banyak Task

&nbsp;

### RESTful endpoints list

- `GET /task`
- `POST /task`
- `GET /task/:id`
- `PUT /task/:id`
- `PATCH /task/:id`
- `DELETE /task/:id`

- `POST /register`
- `POST /login`
- `POST /googleLogin`

&nbsp;

## RESTful endpoint

### GET /task

> Get all Tasks

_Request Header_

```
{
  "access_token": "<your access token>"
}
```

_Request Body_

```
Not needed
```

_Response (200 - Ok)_

```
[
  {
    "id": 1,
    "title": "<task title>",
    "description": "<task description>",
    "category": "<task category>",
    "UserId": <user Id>,
    "priority": "<task level priority>",
    "createdAt": "2021-04-06T13:16:23.226Z",
    "updatedAt": "2021-04-06T13:16:23.226Z",
    "User": {
      "username": "<user username>",
      "email": "<user email>"
    }
  },
  {
    "id": 2,
    "title": "<task title>",
    "description": "<task description>",
    "category": "<task category>",
    "UserId": <user Id>,
    "priority": "<task level priority>",
    "createdAt": "2021-04-06T13:05:31.900Z",
    "updatedAt": "2021-04-06T13:05:31.900Z",
    "User": {
      "username": "<user username>",
      "email": "<user email>"
    }
  }
]
```

_Response (500 - Internal server error)_

```
{
  "message": "Internal server error"
}
```

---

### POST /task

> Post new Tasks / Create a new task

_Request Header_

```
{
  "access_token": "<your access token>"
}
```

_Request Body_

```
{
  "title": "<task name>",
  "description": "<task description>",
  "category": "<task category>",
  "priority": "<task level priority>"
}
```

_Response (201 - Created)_

```

{
    "id": 1,
    "title": "<task title>",
    "description": "<task description>",
    "category": "<task category>",
    "UserId": <user Id>,
    "priority": "<task level priority>",
    "createdAt": "2021-04-06T13:16:23.226Z",
    "updatedAt": "2021-04-06T13:16:23.226Z",
}

```

_Response (400 - Bad Request)_

```
{
    "message": "<err.name> is required!"
}

```

_Response (500 - Internal server error)_

```
{
  "message": "Internal server error"
}
```

---

### GET /task/:id/

> Get selected Task by TaskId

_Request Header_

```
{
  "access_token": "<your access token>"
}
```

_Request Body_

```
No needed
```

_Request Params_

```
id = <id task>
```

_Response (200 - Ok)_

```
{
    "id": 1,
    "title": "<task title>",
    "description": "<task description>",
    "category": "<task category>",
    "UserId": <user Id>,
    "priority": "<task level priority>",
    "createdAt": "2021-04-06T13:16:23.226Z",
    "updatedAt": "2021-04-06T13:16:23.226Z",
    "User": {
      "username": "<user username>",
      "email": "<user email>"
    }
}
```

_Response (404 - Not Found)_

```
{
  "message": "Task Not Found"
}
```

_Response (500 - Internal server error)_

```
{
  "message": "Internal server error"
}
```

---

### PUT /task/:id/

> Update selected Task (title, description, category, priority)

_Request Header_

```
{
  "access_token": "<your access token>"
}
```

_Request Body_

```
{
    "title": "<task title>",
    "description": "<task description>",
    "category": "<task category>",
    "priority": "<task level priority>",
}
```

_Request Params_

```
id = <id task>
```

_Response (200 - Ok)_

```
{
    "id": 1,
    "title": "<task title>",
    "description": "<task description>",
    "category": "<task category>",
    "UserId": <user Id>,
    "priority": "<task level priority>",
    "createdAt": "2021-04-06T13:16:23.226Z",
    "updatedAt": "2021-04-06T13:16:23.226Z",
}
```

_Response (401 - Unauthorize)_

```
{
  "message": "Unauthorized Access"
}
```

_Response (404 - Not Found)_

```
{
  "message": "Task Not Found"
}
```

_Response (500 - Internal server error)_

```
{
  "message": "Internal server error"
}
```

---

### PATCH /task/:id/

> Update selected Task (only category)

_Request Header_

```
{
  "access_token": "<your access token>"
}
```

_Request Body_

```
{
    "category": "<task category>",
}
```

_Request Params_

```
id = <id task>
```

_Response (200 - Ok)_

```
{
    "id": 1,
    "title": "<task title>",
    "description": "<task description>",
    "category": "<task category>",
    "UserId": <user Id>,
    "priority": "<task level priority>",
    "createdAt": "2021-04-06T13:16:23.226Z",
    "updatedAt": "2021-04-06T13:16:23.226Z",
}
```

_Response (401 - Unauthorize)_

```
{
  "message": "Unauthorized Access"
}
```

_Response (404 - Not Found)_

```
{
  "message": "Task Not Found"
}
```

_Response (500 - Internal server error)_

```
{
  "message": "Internal server error"
}
```

---

### DELETE /task/:id/

> Delete selected Task

_Request Header_

```
{
  "access_token": "<your access token>"
}
```

_Request Body_

```
No needed
```

_Request Params_

```
id = <id task>
```

_Response (200 - Ok)_

```
{
    "message": "Task success to delete"
}
```

_Response (401 - Unauthorize)_

```
{
  "message": "Unauthorized Access"
}
```

_Response (404 - Not Found)_

```
{
  "message": "Task Not Found"
}
```

_Response (500 - Internal server error)_

```
{
  "message": "Internal server error"
}
```

---

### POST /register

> Register New User

_Request Header_

```
No needed
```

_Request Body_

```
{
    "username": "<username User>",
    "email": "<email User>",
    "password": "<password User>"
}
```

_Response (201 - Created)_

```
{
    "id": "<user.id registed>",
    "username": "<user.username registed>",
    "email": "<user.email registed>"
}
```

_Response (400 - Bad Request)_

```
{
    "message": "<err name> already exists!"
}
```

_Response (500 - Internal server error)_

```
{
     "message": "Internal server error"
}
```

---

### POST /login

> Login User

_Request Header_

```
No needed
```

_Request Body_

```
{
    "email": "<email User>",
    "password": "<password User>"
}
```

_Response (200 - Ok)_

```
{
    "id": "<id login>",
    "username": "<username login>",
    "email": "<email login>"
    "access_token": "<access_token login>"
}
```

_Response (400 - Bad Request)_

```
{
    message: "Invalid Email or Password"
}
```

_Response (500 - Internal server error)_

```
{
     "message": "Internal server error"
}
```

---

### POST /googleLogin

> Login User with GoogleOauth

_Request Header_

```
No needed
```

_Request Body_

```
{
    "email": "<email User>",
}
```

_Response (200 - Ok)_

```
{
    "id": "<id login>",
    "username": "<username login>",
    "email": "<email login>"
    "access_token": "<access_token login>"
}
```

_Response (400 - Bad Request)_

```
{
    message: "Invalid Email or Password"
}
```

_Response (500 - Internal server error)_

```
{
     "message": "Internal server error"
}
```

---
