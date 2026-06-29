# CLAUDE.md

# Documentation First

Documentation is the single source of truth.

If generated code conflicts with the documentation, the documentation always takes precedence.

Never invent requirements, features, or behaviors that are not documented.

---

# Project Overview

Project Name

Portfolio Builder

Project Type

Multi-user SaaS Platform

Goal

Allow users to build, manage, and publish professional online portfolios through a modern dashboard.

Current Version

Version 1

---

# Documentation

Always read these documents before implementing any feature.

Required

- docs/00-Principles.md
- docs/01-Vision.md
- docs/02-Sitemap.md
- docs/03-Features.md
- docs/04-Database.md
- docs/05-API.md
- docs/06-Architecture.md
- docs/08-Design-System.md
- docs/09-User-Flows.md
- docs/10-Implementation-Plan.md

Reference

- docs/07-Development-Roadmap.md
- docs/11-Deployment.md
- docs/12-Testing.md
- docs/13-Backlog.md

---

# Technology Stack

Backend

- Laravel 12
- PHP 8.4+
- MySQL
- Laravel Sanctum

Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui

Development

- Git
- GitHub
- ESLint
- Prettier

---

# General Development Rules

- Implement one complete feature at a time.
- Never implement undocumented functionality.
- Never skip implementation steps.
- Never modify unrelated files.
- Keep the code clean and maintainable.
- Prefer readability over clever solutions.
- Reuse existing code whenever possible.

---

# Backend Standards

- Use Form Requests for validation.
- Use API Resources for API responses.
- Keep Controllers lightweight.
- Move business logic into Services.
- Use Policies for authorization.
- Use Eloquent relationships correctly.
- Follow RESTful API conventions.

---

# Frontend Standards

- Use TypeScript in all files.
- Use functional React components.
- Keep components reusable.
- Use React Router for navigation.
- Use Axios for API communication.
- Prefer shadcn/ui components.
- Follow the Design System.

---

# Database Standards

- Respect all foreign keys.
- Use migrations for every schema change.
- Never edit production data manually.
- Preserve data integrity.

---

# API Standards

- Follow API.md exactly.
- Return consistent JSON structures.
- Use correct HTTP status codes.
- Never expose sensitive information.

---

# UI Standards

Every page must

- Be responsive.
- Support Dark Mode.
- Display loading states.
- Display empty states.
- Display validation errors.
- Display success notifications.

---

# Security Standards

- Validate every request.
- Never trust client-side validation.
- Protect authenticated routes.
- Validate uploaded files.
- Never expose secrets or credentials.

---

# Git Standards

Create meaningful commits.

Examples

feat: complete authentication feature

feat: implement portfolio management

fix: validate uploaded images

refactor: simplify project service

---

# Code Quality

- Follow SOLID principles whenever appropriate.
- Avoid duplicated code.
- Write self-explanatory code.
- Comment only when necessary.
- Prefer consistency over creativity.

---

# Feature Completion Checklist

A feature is considered complete only when

✓ Backend implemented

✓ Frontend implemented

✓ API connected

✓ Authorization completed

✓ Validation completed

✓ Responsive design verified

✓ Manual testing completed

✓ Documentation still matches implementation

✓ Changes committed to Git

---

# AI Assistant Instructions

Before generating code

- Read the required documentation.
- Understand the requested feature.
- Follow the project architecture.
- Respect the Design System.

During implementation

- Do not introduce undocumented features.
- Keep changes limited to the requested feature.
- Reuse existing components and services.

After implementation

- Verify code consistency.
- Verify naming consistency.
- Verify architecture consistency.
- Stop and wait for review.

---

# Final Principles

Build software that is

- Simple
- Maintainable
- Modular
- Consistent
- Production-ready

Always prioritize long-term maintainability over short-term speed.