# 06 - Architecture

Version: 1.0

Status: ✅ Approved

---

# Purpose

This document defines the software architecture for Version 1.

It describes how the frontend, backend, business logic, and database interact together.

The goal is to keep the project clean, scalable, maintainable, and easy to understand.

This architecture is intentionally simple and avoids unnecessary complexity.

---

# Dependencies

- 00-Principles.md
- 01-Vision.md
- 03-Features.md
- 04-Database.md
- 05-API.md

---

# Architecture Overview

```
Browser
    │
    ▼
React + Vite
    │
    ▼
Axios
    │
    ▼
REST API
    │
    ▼
Laravel Routes
    │
    ▼
Controllers
    │
    ▼
Form Requests
    │
    ▼
Services
    │
    ▼
Policies
    │
    ▼
Eloquent Models
    │
    ▼
API Resources
    │
    ▼
MySQL Database
```

---

# Backend Architecture

```
app/

├── Http/
│   ├── Controllers/
│   ├── Requests/
│   └── Resources/
│
├── Models/
│
├── Services/
│
├── Policies/
│
├── Enums/
│
└── Providers/
```

---

# Frontend Architecture

```
src/

├── assets/
├── components/
├── contexts/
├── hooks/
├── layouts/
├── pages/
├── routes/
├── services/
├── types/
├── utils/
└── main.tsx
```

---

# Layer Responsibilities

## React

Responsible for:

- User Interface
- Navigation
- State Management
- Forms
- API Calls

React never communicates directly with the database.

---

## Axios

Responsible for:

- HTTP Requests
- Authentication Headers
- Error Handling
- API Communication

---

## Controllers

Responsible for:

- Receiving Requests
- Calling Services
- Returning Resources

Controllers must remain thin.

Business logic is NOT allowed inside Controllers.

---

## Form Requests

Responsible for:

- Validation
- Authorization

Validation rules must never be placed inside Controllers.

---

## Services

Responsible for:

- Business Logic
- Application Rules
- Complex Operations

Services communicate with Models.

---

## Policies

Responsible for:

- Authorization
- Ownership Verification

Example:

- User can edit only their own portfolio.
- User can delete only their own projects.

---

## Models

Responsible for:

- Database Relationships
- Query Scopes
- Eloquent Features

Models should not contain complex business logic.

---

## API Resources

Responsible for:

- JSON Formatting
- Data Transformation
- Consistent API Responses

Never return Eloquent Models directly.

---

# Authentication

Authentication uses:

Laravel Sanctum

No JWT.

---

# Storage

Uploaded files are stored inside:

storage/app/public

Laravel Storage is used for every uploaded file.

No files are stored directly inside the public folder.

---

# Enums

Application constants must use PHP Enums.

Examples:

- UserRole
- SocialPlatform

Do not hardcode constant values inside Controllers or Services.

---

# Error Handling

Validation errors:

422

Unauthorized:

401

Forbidden:

403

Not Found:

404

Unexpected Error:

500

All errors must return JSON.

---

# Coding Rules

Controllers must stay small.

Business logic belongs in Services.

Validation belongs in Form Requests.

Authorization belongs in Policies.

Formatting belongs in Resources.

Database logic belongs in Models.

Each class has one responsibility.

---

# What We Intentionally Avoid

Version 1 does NOT use:

- Repository Pattern
- CQRS
- Events
- Listeners
- DTOs
- Microservices
- GraphQL

Reason:

Keep Version 1 simple, maintainable, and fast to develop.

---

# Golden Rules

Use Laravel conventions whenever possible.

Do not reinvent existing Laravel features.

Keep the code readable.

Prefer simplicity over cleverness.

Every feature should have one clear responsibility.

---

# Future Evolution

Possible improvements after Version 1:

- Repository Pattern
- Caching
- Queue Jobs
- Notifications
- Search Engine
- Multi-language
- Analytics

These features are intentionally postponed.

---

# Architecture Status

Status:

✅ Approved

Architecture is considered frozen after approval.

### Backend Structure

The backend follows a Feature-Based Architecture.

```
app/
│
├── Core/
│
├── Features/
│   ├── Auth/
│   ├── Portfolio/
│   ├── Projects/
│   ├── Skills/
│   ├── Experience/
│   ├── Certificates/
│   └── SocialLinks/
│
├── Models/
└── Providers/
```

Each feature contains its own Controllers, Requests, Actions, DTOs, Services and Resources.

This architecture keeps every business module isolated and easy to maintain.
