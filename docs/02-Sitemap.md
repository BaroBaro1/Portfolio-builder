# 02 - Sitemap

# Purpose

This document defines the complete structure of the application.

It describes all pages available in Version 1 and how users navigate between them.

Detailed functionality is documented separately in **03-Features.md**.

---

# Public Area

```
Landing Page
│
├── Login
├── Register
├── Public Portfolio
└── 404
```

---

# Studio

The Studio is the workspace where users build and manage their professional identity.

```
Studio
│
├── Welcome
├── Overview
├── Personal Information
├── Projects
├── Skills
├── Experience
├── Certificates
├── Publish
└── Settings
```

---

# Admin Panel

```
Admin
│
├── Dashboard
├── Users
└── Settings
```

---

# Navigation Flow

## Visitor

Landing Page

↓

Register / Login

↓

Studio

↓

Publish Portfolio

↓

Public Portfolio

---

## Registered User

Login

↓

Studio

↓

Manage Portfolio

↓

Publish Changes

↓

Public Portfolio

---

## Administrator

Login

↓

Admin Dashboard

↓

Manage Users

↓

System Settings

---

# Notes

* The Studio replaces the traditional Dashboard.
* The Public Portfolio is accessible without authentication.
* Every user has only one portfolio.
* Every portfolio belongs to exactly one user.
* Features are intentionally kept minimal for Version 1.
