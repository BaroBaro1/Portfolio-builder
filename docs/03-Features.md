# 03 - Features

# Purpose

This document defines all features included in Version 1 of the project.

Only features described in this document may be implemented.

Any additional idea must be added to **Backlog.md** and is considered out of scope for Version 1.

---

# User Roles

The platform has three roles:

* Visitor
* User
* Administrator

---

# Visitor Features

A visitor can:

* View the Landing Page.
* Register a new account.
* Login.
* View any public portfolio.
* Switch between Light and Dark Mode.

Restrictions:

* Cannot access the Studio.
* Cannot edit portfolios.
* Cannot access the Admin Panel.

---

# User Features

## Authentication

A user can:

* Register.
* Login.
* Logout.
* Reset password.
* Use "Remember Me".

---

## Profile

A user can:

* Upload a profile picture (optional).
* Edit full name.
* Edit professional title.
* Edit biography.
* Add location.
* Add email.
* Add phone number.
* Add personal website.
* Add social links:

  * GitHub
  * LinkedIn
  * X (Twitter)
  * Facebook
  * Instagram
  * Other custom links

If no profile picture is uploaded, the system displays a default avatar.

---

## Projects

A user can:

* Create projects.
* Edit projects.
* Delete projects.
* Upload a cover image.
* Upload multiple screenshots (Gallery).
* Add project description.
* Add technologies used.
* Add Live Demo URL.
* Add GitHub Repository URL.
* Mark projects as featured.
* Reorder projects.

---

## Skills

A user can:

* Create skill categories.
* Edit categories.
* Delete categories.
* Reorder categories.
* Add skills.
* Edit skills.
* Delete skills.
* Reorder skills inside categories.

Example:

Backend

* PHP
* Laravel

Frontend

* React
* JavaScript

Database

* MySQL

---

## Experience

A user can:

* Add work experience.
* Edit work experience.
* Delete work experience.

Each experience includes:

* Company
* Position
* Location
* Start Date
* End Date
* Currently Working Here
* Description

---

## Certificates

A user can:

* Add certificates.
* Edit certificates.
* Delete certificates.
* Upload a certificate image.
* Add an optional Credential URL.

Each certificate includes:

* Certificate Name
* Organization
* Issue Date
* Credential URL
* Certificate Image

---

## Portfolio

A user can:

* Preview the portfolio.
* Publish changes.
* Share the public portfolio URL.

---

## Settings

A user can:

* Update account information.
* Change password.
* Delete account.
* Toggle Light/Dark Mode.

---

# Administrator Features

An administrator can:

* Login.
* Access the Admin Dashboard.
* View all users.
* Suspend users.
* Restore suspended users.
* Delete users.
* Manage platform settings.

---

# General Rules

* Every user owns exactly one portfolio.
* Every portfolio belongs to exactly one user.
* Every portfolio is displayed as a single-page website.
* Empty sections are automatically hidden.
* Sections keep a predefined order.
* Items inside sections can be reordered.
* Profile picture is optional.
* Version 1 supports English only.
* The application must be ready for future localization.
* Dark Mode is included in Version 1.

---

# Out of Scope

The following features are intentionally excluded from Version 1:

* Multiple Portfolios
* AI Assistant
* GitHub Synchronization
* LinkedIn Synchronization
* Resume Builder
* Cover Letter Builder
* QR Code
* Analytics
* Payment System
* Notifications
* Team Accounts
* Multi-language Support

All postponed features must be documented in **Backlog.md**.

---

# Definition of Done

Version 1 is considered complete when every feature listed in this document has been implemented, tested, and works as expected.
