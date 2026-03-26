# CLAUDE.md

## Project Context

Softgrid Sensing is a Singapore-based IoT + AI company repositioning as an **AI-Powered Facility Operating System (FOS) platform company**. The website serves customers, investors and partners.

## Tech Stack

| Component | Technology                                                        |
| --------- | ----------------------------------------------------------------- |
| Framework | Next.js (App Router) + TypeScript                                 |
| Styling   | Tailwind CSS                                                      |
| Content   | Markdown files in Git                                             |
| Images    | Git repo (small) + AWS S3 (large files)                           |
| Hosting   | GitHub Pages                                                      |
| Domain    | softgridsensing.com (DNS at Siteground, pointing to GitHub Pages) |
| SSL       | Automatic via GitHub Pages (Let's Encrypt)    

## Commands

```bash
pnpm dev      # Start Next.js dev server
pnpm build    # Build (static export to /out)
```
## Design

A customized `frontend-design` skill at `.claude/skills/frontend-design/SKILL.md` auto-activates for frontend work. It already incorporates our design system.

**Aesthetic**: "Industrial tech premium" — confident, sophisticated, trustworthy. Not generic corporate. Not startup playful.

---

## Documentation

| File | Purpose |
|------|---------|
| `PROGRESS.md` | Current phase, session logs, project status |
| `docs/04-design-system.md` | Colors, typography, components, spacing, animations |
| `.claude/rules/session-protocol.md` | Session workflow and verification rules |
| `.claude/rules/coding-style.md` | TypeScript, React, Next.js coding patterns |
| `.claude/rules/git-workflow.md` | Commit conventions |
