# 09 - User Flows

Version: 1.0

Status: ✅ Approved

---

# Purpose

This document defines the user journeys for Version 1.

It describes how users navigate through the application and interact with its features.

These flows are the reference for frontend navigation, backend integration, and user experience.

---

# User Types

Visitor

- Can view published portfolios.
- Cannot access the dashboard.

User

- Can manage only their own portfolio.

Administrator

- Full access.

---

# Flow 1 — User Registration

Goal

Create a new account.

Flow

Home
    ↓
Register
    ↓
Fill Registration Form
    ↓
Submit
    ↓
Email Validation (optional for V1)
    ↓
Login
    ↓
Dashboard

Expected Result

The user is authenticated and redirected to the Dashboard.

---

# Flow 2 — User Login

Goal

Authenticate an existing user.

Flow

Home
    ↓
Login
    ↓
Enter Email & Password
    ↓
Success
    ↓
Dashboard

Failure

Display validation message.

---

# Flow 3 — Portfolio Setup

Goal

Complete the public profile.

Flow

Dashboard
    ↓
Portfolio
    ↓
Edit Personal Information
    ↓
Upload Profile Image
    ↓
Upload Resume (Optional)
    ↓
Save
    ↓
Preview Portfolio
    ↓
Publish

Expected Result

Portfolio becomes publicly accessible.

---

# Flow 4 — Manage Projects

Goal

Create and manage portfolio projects.

Flow

Dashboard
    ↓
Projects
    ↓
Create Project
    ↓
Fill Project Information
    ↓
Upload Cover Image
    ↓
Upload Gallery Images
    ↓
Save
    ↓
Project List

Actions

- Edit
- Delete
- Feature
- Reorder

---

# Flow 5 — Manage Skills

Dashboard
    ↓
Skills
    ↓
Create Category
    ↓
Add Skills
    ↓
Save

Actions

- Edit
- Delete
- Reorder

---

# Flow 6 — Manage Experience

Dashboard
    ↓
Experience
    ↓
Create Experience
    ↓
Save

Actions

- Edit
- Delete
- Reorder

---

# Flow 7 — Manage Certificates

Dashboard
    ↓
Certificates
    ↓
Create Certificate
    ↓
Upload Certificate Image
    ↓
Save

Actions

- Edit
- Delete
- Reorder

---

# Flow 8 — Manage Social Links

Dashboard
    ↓
Social Links
    ↓
Choose Platform
    ↓
Paste URL
    ↓
Save

Actions

- Edit
- Delete
- Reorder

---

# Flow 9 — Public Portfolio

Visitor
    ↓
Open Portfolio URL
    ↓
View Portfolio
    ↓
Open Project
    ↓
Visit GitHub
OR
Visit Live Demo
OR
Download Resume

Expected Result

Visitor can explore the portfolio without authentication.

---

# Flow 10 — Logout

Dashboard
    ↓
Logout
    ↓
Home Page

Expected Result

Session terminated successfully.

---

# Error Flows

Examples

Invalid login

↓

Validation message

Portfolio not published

↓

404 or "Portfolio not available"

Unauthorized action

↓

403 Forbidden

Server error

↓

Friendly error message

---

# UX Rules

Users should never lose entered data accidentally.

Every successful action should display a toast notification.

Every destructive action requires confirmation.

Loading indicators must be visible during API requests.

Empty states should guide the user.

---

# User Flow Status

Status

✅ Approved