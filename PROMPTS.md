# PROMPTS.md

# Purpose

This document contains reusable prompts for AI-assisted development.

Always use these prompts as templates.

Before executing any prompt, ensure the project documentation is available.

---

# General Rule

Always read the following documents before generating code:

- docs/00-Principles.md
- docs/01-Vision.md
- docs/03-Features.md
- docs/04-Database.md
- docs/05-API.md
- docs/06-Architecture.md
- docs/08-Design-System.md
- docs/09-User-Flows.md
- docs/10-Implementation-Plan.md
- CLAUDE.md

Never implement undocumented functionality.

---

# Prompt 1 — Implement a Complete Feature

Implement the complete "<Feature Name>" feature.

Requirements:

- Read all required documentation.
- Implement the backend.
- Implement the frontend.
- Connect the API.
- Implement validation.
- Implement authorization.
- Follow the Design System.
- Do not implement any undocumented functionality.

When finished:

- Verify the code.
- Stop and wait for review.

---

# Prompt 2 — Review Existing Code

Review the implementation of "<Feature Name>".

Check:

- Architecture
- Code quality
- Naming
- Security
- Validation
- Performance
- Readability

Return:

- Strengths
- Weaknesses
- Suggested improvements

Do not rewrite the entire feature unless necessary.

---

# Prompt 3 — Refactor a Feature

Refactor "<Feature Name>".

Requirements:

- Keep the same behavior.
- Do not change the API.
- Do not change the database.
- Improve maintainability.
- Reduce duplication.
- Improve readability.

---

# Prompt 4 — Fix a Bug

Fix the following bug:

"<Describe the bug>"

Requirements:

- Identify the root cause.
- Apply the smallest safe fix.
- Do not break existing functionality.
- Explain the cause briefly.

---

# Prompt 5 — Explain Existing Code

Explain the following code.

Include:

- Overall purpose
- Execution flow
- Important classes
- Potential improvements

Assume the reader is learning Laravel and React.

---

# Prompt 6 — Generate Tests

Generate tests for "<Feature Name>".

Include:

- Happy path
- Validation
- Authorization
- Edge cases

Do not modify production code.

---

# Prompt 7 — Improve Performance

Analyze "<Feature Name>".

Suggest improvements for:

- Database queries
- API performance
- Frontend rendering
- Bundle size
- Image optimization

Only recommend changes with measurable benefits.

---

# Prompt 8 — Improve UI

Improve the UI of "<Page Name>".

Requirements:

- Follow Design-System.md.
- Keep functionality unchanged.
- Improve spacing.
- Improve typography.
- Improve responsiveness.
- Improve accessibility.

---

# Prompt 9 — Update Documentation

Update the documentation after implementing "<Feature Name>".

Requirements:

- Keep all documents synchronized.
- Update only affected files.
- Do not introduce undocumented features.

---

# Prompt 10 — Pre-Deployment Review

Review the project before deployment.

Verify:

- Documentation
- Architecture
- API
- Security
- UI
- Performance
- Testing

List any remaining issues before release.

---

# Prompt Usage Rules

- One prompt = One objective.
- Complete the current objective before starting another.
- Never combine unrelated features.
- Follow the project documentation at all times.
- Stop after completing the requested objective.

---

# Final Rule

The documentation defines the project.

If documentation and generated code conflict, update the code—not the documentation.