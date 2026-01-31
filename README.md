# WorkFlow Lite

WorkFlow Lite is a full-stack work item management application built to demonstrate end-to-end development with a modern frontend and backend.

The project focuses on clean architecture, RESTful APIs, and practical React integration.

---

## Tech Stack

### Backend
- ASP.NET Core Web API (.NET)
- RESTful controllers
- Swagger / OpenAPI
- In-memory data store (database integration planned)

### Frontend
- React (Vite)
- JavaScript
- Fetch API

---

## Project Structure

```
workflow-lite/
├── client/   # React frontend
└── server/   # ASP.NET Core Web API
```

---

## Features

- Create, read, update, and delete work items
- REST API with proper HTTP status codes
- Interactive API documentation via Swagger
- React frontend consuming the API

---

## Running the Project Locally

### Backend (API)

```bash
cd server
dotnet run
```

The API will start on a local port and expose Swagger at:

```
http://localhost:<port>/swagger
```

---

### Frontend (React)

```bash
cd client
npm install
npm run dev
```

The React app will run on:

```
http://localhost:5173
```

---

## API Overview

Base route:
```
/api/workitems
```

Supported operations:
- `GET /api/workitems`
- `GET /api/workitems/{id}`
- `POST /api/workitems`
- `PUT /api/workitems/{id}`
- `DELETE /api/workitems/{id}`

---

## Notes

- This project is structured with a clear separation between frontend and backend.
- The frontend and backend are developed and run independently.
- The goal is clarity, correctness, and interview-readiness over unnecessary complexity.

---

## Future Improvements

- Database integration (SQL Server or PostgreSQL)
- Frontend status editing and filtering
- Authentication and authorization
- Deployment to cloud infrastructure
