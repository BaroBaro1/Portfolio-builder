# 08 - Database Architecture

# Database Architecture

Version: 1.0

Status: Approved

---

# Purpose

This document defines the official database architecture of the project.

Its purpose is to ensure that every backend feature is built on a stable and scalable data model.

Once approved, the database structure is considered frozen for Version 1.

---

# Design Philosophy

The database follows these principles:

* Single Responsibility
* No Data Duplication
* Separation between Data and Presentation
* Simplicity before Complexity
* Future Scalability
* Laravel Best Practices

Every table must represent exactly one business entity.

---

# Core Concept

The platform is **not** a Portfolio Builder.

It is a **Professional Identity Platform**.

The portfolio page is only the public representation of the user's professional identity.

Therefore:

* User owns the data.
* Profile presents the data.
* Profile Settings customize the presentation.

---

# Entity Relationship Diagram

```
Users
│
├── Profile (1:1)
│       └── Profile Settings (1:1)
│
├── Projects (1:N)
│       └── Project Images (1:N)
│
├── Experiences (1:N)
│
├── Certificates (1:N)
│
├── Social Links (1:N)
│
└── Profile Skills (1:N)
        │
        ▼
      Skills
```

---

# Tables

## Users

Purpose:

Authentication only.

Contains:

* id
* name
* email
* password
* email_verified_at
* remember_token
* timestamps

This table must never contain profile information.

---

## Profiles

Represents the user's professional identity.

Contains:

* user_id
* display_name
* slug
* headline
* bio
* avatar
* location
* website
* status
* timestamps

Responsibilities:

* Public identity
* Public URL
* Personal information

---

## Profile Settings

Stores presentation preferences.

Contains:

* profile_id
* theme
* accent_color
* language
* dark_mode
* sections_order (JSON)
* show_projects
* show_skills
* show_experience
* show_certificates
* timestamps

Responsibilities:

* UI configuration
* Portfolio appearance
* Section visibility

No business data belongs here.

---

## Projects

Represents professional projects.

Contains:

* user_id
* title
* slug
* description
* thumbnail
* github_url
* live_url
* featured
* status
* display_order
* published_at
* timestamps

Projects belong to the User.

---

## Project Images

Stores project gallery images.

Contains:

* project_id
* image
* alt
* display_order
* timestamps

Each project may contain multiple images.

---

## Experiences

Professional work experience.

Contains:

* user_id
* company
* position
* location
* description
* start_date
* end_date
* is_current
* display_order
* timestamps

---

## Certificates

Professional certifications.

Contains:

* user_id
* title
* issuer
* issue_date
* expiration_date
* credential_url
* image
* display_order
* timestamps

Each certificate has one image.

---

## Skills

Global skills catalog.

Contains:

* id
* name
* slug
* category
* icon
* timestamps

This table prevents duplicated skills.

Examples:

* Laravel
* PHP
* Docker
* React

---

## Profile Skills

Links users with skills.

Contains:

* user_id
* skill_id
* level
* display_order
* timestamps

Level:

0 → 100

Display order controls visual arrangement.

---

## Social Links

Professional social accounts.

Contains:

* user_id
* platform
* url
* display_order
* timestamps

Platform is stored as text to allow future services without database changes.

Examples:

* GitHub
* LinkedIn
* Facebook
* Instagram
* Behance

---

# Ownership Rules

Authentication

→ Users

Professional Identity

→ Profile

Presentation

→ Profile Settings

Professional Data

→ User

---

# Status Values

Profiles

* draft
* published

Projects

* draft
* published

Only stable values may use enums.

---

# Display Order

The following entities support manual ordering:

* Projects
* Skills
* Experiences
* Certificates
* Social Links
* Project Images

Display order must never depend on creation date.

---

# Images

Avatar

→ Profile

Certificate Image

→ Certificate

Project Gallery

→ Project Images

No generic media table is required for Version 1.

---

# Future Compatibility

The architecture allows future support for:

* Multiple Themes
* Analytics
* Resume Builder
* GitHub Integration
* LinkedIn Integration
* AI Features
* QR Codes
* Custom Domains
* Portfolio Templates

without redesigning existing tables.

---

# Naming Convention

Tables:

snake_case plural

Examples:

* users
* profile_settings
* project_images

Columns:

snake_case

Primary Keys:

id

Foreign Keys:

entity_id

Examples:

* user_id
* profile_id
* project_id
* skill_id

---

# Delete Policy

Users

Soft Delete

Profiles

Cascade with User

Projects

Cascade with User

Project Images

Cascade with Project

Experiences

Cascade with User

Certificates

Cascade with User

Social Links

Cascade with User

Profile Skills

Cascade with User

---

# Version 1 Database

Official Tables

1. users
2. profiles
3. profile_settings
4. projects
5. project_images
6. experiences
7. certificates
8. skills
9. profile_skills
10. social_links

---

# Database Freeze

This document defines the official Version 1 database architecture.

No new tables may be introduced during Version 1 unless an approved business requirement cannot be implemented using the existing schema.

Status:

**Database Freeze v1.0**
