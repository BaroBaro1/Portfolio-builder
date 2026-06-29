# 08 - Design System

Version: 1.0

Status: ✅ Approved

---

# Purpose

This document defines the visual identity and UI rules for Version 1.

The goal is to ensure a consistent, modern, responsive, and accessible user interface.

All frontend development must follow this design system.

---

# Dependencies

- 01-Vision.md
- 02-Sitemap.md
- 03-Features.md
- 06-Architecture.md

---

# Tech Stack

Frontend Framework

- React
- Vite
- TypeScript

UI

- Tailwind CSS
- shadcn/ui

Icons

- Lucide React

---

# Design Philosophy

The interface should be:

- Clean
- Modern
- Minimal
- Fast
- Responsive
- Accessible

Avoid unnecessary visual complexity.

---

# Color Palette

Primary

Used for:

- Main buttons
- Links
- Active elements

Secondary

Used for:

- Secondary actions

Success

Used for:

- Success messages

Warning

Used for:

- Warnings

Danger

Used for:

- Errors

Neutral

Used for:

- Backgrounds
- Borders
- Text

Dark Mode must provide equivalent colors.

---

# Typography

Font

Inter

Fallback

System UI

Rules

- Clear hierarchy
- Comfortable spacing
- Consistent font sizes

---

# Spacing

Use consistent spacing based on an 8px scale.

Examples:

8

16

24

32

40

48

---

# Border Radius

Use a consistent rounded style.

Avoid mixing different radius values.

---

# Components

Use shadcn/ui components whenever possible.

Main Components

- Button
- Input
- Textarea
- Card
- Badge
- Dialog
- Dropdown Menu
- Sheet
- Tabs
- Tooltip
- Avatar
- Toast
- Alert
- Skeleton

Avoid creating custom components unless necessary.

---

# Buttons

Supported Variants

- Primary
- Secondary
- Outline
- Ghost
- Destructive

Buttons must show loading state when required.

---

# Forms

Every form must include:

- Labels
- Validation messages
- Disabled state
- Loading state

Validation must be consistent across the application.

---

# Cards

Cards are used for:

- Projects
- Certificates
- Dashboard widgets

Cards should keep a consistent layout.

---

# Icons

Use Lucide React.

Avoid mixing multiple icon libraries.

---

# Responsive Design

Desktop

Tablet

Mobile

Mobile-first approach.

---

# Dark Mode

Supported in Version 1.

Requirements

- Theme persistence
- Smooth switching
- No layout changes

---

# Loading States

Use Skeleton components.

Avoid empty white pages during loading.

---

# Empty States

Every empty list must include:

- Illustration or icon
- Short explanation
- Call-to-action

Example:

"No projects yet."

---

# Notifications

Use Toast notifications.

Examples

Project created.

Portfolio updated.

Certificate deleted.

---

# Accessibility

Use semantic HTML.

Keyboard navigation.

Visible focus states.

Accessible labels.

---

# Animations

Keep animations subtle.

Avoid unnecessary motion.

---

# Design Rules

Consistency over creativity.

Reuse existing components.

Avoid duplicate UI patterns.

Keep interfaces simple.

---

# Design Status

Status:

✅ Approved