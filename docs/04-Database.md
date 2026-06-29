# 04 - Database Design

# Purpose

This document defines the database structure for Version 1.

The database design is considered frozen after approval.
No structural changes should be made unless a critical issue is discovered.

---

# Database Overview

Entities:

- User
- Portfolio
- Project
- ProjectImage
- SkillCategory
- Skill
- Experience
- Certificate
- SocialLink

---

# Relationships

User
└── hasOne Portfolio

Portfolio
├── hasMany Projects
├── hasMany SkillCategories
├── hasMany Experiences
├── hasMany Certificates
└── hasMany SocialLinks

Project
└── hasMany ProjectImages

SkillCategory
└── hasMany Skills

---

# Tables

## users

| Field | Type | Notes |
|--------|------|-------|
| id | bigint | Primary Key |
| name | string | |
| email | string | Unique |
| password | string | |
| role | enum | admin / user |
| remember_token | string | Nullable |
| created_at | timestamp | |
| updated_at | timestamp | |

---

## portfolios

| Field | Type | Notes |
|--------|------|-------|
| id | bigint | Primary Key |
| user_id | foreignId | Unique |
| slug | string | Unique |
| professional_title | string | |
| bio | text | Nullable |
| location | string | Nullable |
| phone | string | Nullable |
| website | string | Nullable |
| profile_image | string | Nullable |
| resume_file | string | Nullable |
| is_published | boolean | Default false |
| created_at | timestamp | |
| updated_at | timestamp | |

---

## projects

| Field | Type | Notes |
|--------|------|-------|
| id | bigint | Primary Key |
| portfolio_id | foreignId | |
| title | string | |
| description | longText | |
| cover_image | string | Nullable |
| live_demo_url | string | Nullable |
| github_url | string | Nullable |
| featured | boolean | Default false |
| sort_order | integer | |
| created_at | timestamp | |
| updated_at | timestamp | |

---

## project_images

| Field | Type | Notes |
|--------|------|-------|
| id | bigint | Primary Key |
| project_id | foreignId | |
| image | string | |
| sort_order | integer | |
| created_at | timestamp | |
| updated_at | timestamp | |

---

## skill_categories

| Field | Type | Notes |
|--------|------|-------|
| id | bigint | Primary Key |
| portfolio_id | foreignId | |
| name | string | |
| sort_order | integer | |
| created_at | timestamp | |
| updated_at | timestamp | |

---

## skills

| Field | Type | Notes |
|--------|------|-------|
| id | bigint | Primary Key |
| category_id | foreignId | |
| name | string | |
| sort_order | integer | |
| created_at | timestamp | |
| updated_at | timestamp | |

---

## experiences

| Field | Type | Notes |
|--------|------|-------|
| id | bigint | Primary Key |
| portfolio_id | foreignId | |
| company | string | |
| position | string | |
| location | string | Nullable |
| description | longText | Nullable |
| start_date | date | |
| end_date | date | Nullable |
| is_current | boolean | Default false |
| sort_order | integer | |
| created_at | timestamp | |
| updated_at | timestamp | |

---

## certificates

| Field | Type | Notes |
|--------|------|-------|
| id | bigint | Primary Key |
| portfolio_id | foreignId | |
| name | string | |
| organization | string | |
| issue_date | date | |
| credential_url | string | Nullable |
| image | string | Nullable |
| sort_order | integer | |
| created_at | timestamp | |
| updated_at | timestamp | |

---

## social_links

| Field | Type | Notes |
|--------|------|-------|
| id | bigint | Primary Key |
| portfolio_id | foreignId | |
| platform | string | |
| url | string | |
| sort_order | integer | |
| created_at | timestamp | |
| updated_at | timestamp | |

---

# Constraints

- Email must be unique.
- Slug must be unique.
- One user owns exactly one portfolio.
- Every portfolio belongs to one user.
- Deleting a portfolio deletes all related records.
- Deleting a project deletes all project images.

---

# Naming Convention

- Table names use plural.
- Primary key: id
- Foreign keys: entity_id
- Timestamps enabled for all tables.

---

# Database Status

Status: ✅ Frozen

No schema changes are allowed after this document is approved.