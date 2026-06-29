# 05 - API Design

# Purpose

This document defines the REST API for Version 1.

The API is frontend-independent and can be consumed by any client application.

Base URL

/api

Authentication

Laravel Sanctum

Response Format

All responses use JSON.

Successful Response

{
    "success": true,
    "message": "Success",
    "data": {}
}

Error Response

{
    "success": false,
    "message": "Validation failed",
    "errors": {}
}

---

# Authentication

POST   /register

POST   /login

POST   /logout

POST   /forgot-password

POST   /reset-password

GET    /me

---

# Portfolio

GET    /portfolio

PUT    /portfolio

PATCH  /portfolio/publish

PATCH  /portfolio/unpublish

GET    /portfolio/{slug}

---

# Projects

GET    /projects

POST   /projects

GET    /projects/{project}

PUT    /projects/{project}

DELETE /projects/{project}

PATCH  /projects/reorder

---

# Project Images

POST   /projects/{project}/images

DELETE /project-images/{image}

PATCH  /project-images/reorder

---

# Skill Categories

GET

POST

PUT

DELETE

PATCH reorder

---

# Skills

GET

POST

PUT

DELETE

PATCH reorder

---

# Experiences

GET

POST

PUT

DELETE

PATCH reorder

---

# Certificates

GET

POST

PUT

DELETE

PATCH reorder

---

# Social Links

GET

POST

PUT

DELETE

PATCH reorder

---

# Resume

POST /resume

DELETE /resume

GET /resume

---

# Admin

GET /admin/dashboard

GET /admin/users

GET /admin/users/{id}

PATCH /admin/users/{id}/suspend

PATCH /admin/users/{id}/restore

DELETE /admin/users/{id}

---

# Authorization

Visitor

- View public portfolios.

User

- Manage own portfolio only.

Administrator

- Full access.

---

# Status Codes

200 OK

201 Created

204 No Content

400 Bad Request

401 Unauthorized

403 Forbidden

404 Not Found

422 Validation Error

500 Server Error

---

# Versioning

Current Version

v1

Future versions should use:

/api/v2

without breaking Version 1.