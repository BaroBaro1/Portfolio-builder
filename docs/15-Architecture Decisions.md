
# 15 - Architecture Decisions

Version: 1.0

Status: Active

---
Decision 001

Theme System

Rejected:
next-themes

Accepted:
Custom Theme Context

Reason:
React Router project
Better maintainability
Less dependency

# ADR-001 — Frontend Architecture

Status: Accepted

Decision:

The frontend follows a Feature-Based Architecture.

Each feature owns its components, hooks, services and logic.

Reason:

* Better scalability
* Easier maintenance
* Clear ownership
* Independent development

---

# ADR-002 — Backend Architecture

Status: Accepted

Decision:

The backend follows a Feature-Based Architecture instead of Laravel's default Controller-centric structure.

Each business feature contains its own:

* Controllers
* Requests
* Actions
* DTOs
* Resources
* Services

Reason:

As the project grows, keeping all controllers and requests in global folders becomes difficult to maintain.

Grouping code by business feature improves readability and scalability.

---

# ADR-003 — Keep It Simple

Status: Accepted

Decision:

Do not introduce Repository Pattern, CQRS, or Domain Layers unless they solve a real problem.

Reason:

The project aims to remain clean, maintainable, and understandable while avoiding unnecessary complexity.

---

Current Decisions:

* ADR-001 ✅
* ADR-002 ✅
* ADR-003 ✅
