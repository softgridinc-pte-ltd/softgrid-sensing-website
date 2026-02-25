# Softgrid Sensing Website Project

## Project Overview

This is the corporate website for **Softgrid Sensing**, a Singapore-based AI-driven Facility Operating System (FOS) platform company. The website serves as the company's digital presence for potential customers and investors.

## Company Quick Summary

- **Company**: Softgrid Sensing Pte. Ltd. (subsidiary of Softgrid)
- **Founded**: 2017, Singapore
- **Core Business**: AI-driven Industrial IoT, Predictive Maintenance, Digital Twin
- **Key Achievement**: 10,000+ lifts monitored across Singapore (HDB & private sector)
- **Positioning**: AI-Driven Facility Operating System (FOS) Platform

## Tech Stack

| Component | Technology                                                        |
| --------- | ----------------------------------------------------------------- |
| Framework | Next.js (App Router) + TypeScript                                 |
| Styling   | Tailwind CSS                                                      |
| Content   | Markdown files in Git                                             |
| Images    | Git repo (small) + AWS S3 (large files)                           |
| Hosting   | GitHub Pages                                                      |
| Domain    | softgridsensing.com (DNS at Siteground, pointing to GitHub Pages) |
| SSL       | Automatic via GitHub Pages (Let's Encrypt)                        |

## Design Direction

- **Theme**: Dark mode, industrial tech aesthetic
- **Primary Background**: Deep blue-black (#0d1b2a or similar)
- **Accent Color**: Cyan/teal (similar to logo, approximately #00b4d8)
- **Style References**: PTC, Siemens, Uptake

## Project Structure

```
softgrid-website/
├── app/
│   ├── layout.tsx          # Root layout with Header/Footer
│   ├── page.tsx            # Home page
│   ├── solutions/
│   │   ├── page.tsx
│   │   ├── lift-monitoring/
│   │   ├── facility-management/
│   │   ├── digital-twin/
│   │   └── environmental-monitoring/
│   ├── products/
│   │   ├── page.tsx
│   │   ├── hardware/
│   │   └── software/
│   ├── case-studies/
│   │   └── page.tsx
│   ├── about/
│   │   └── page.tsx
│   └── contact/
│       └── page.tsx
├── components/
│   ├── ui/                 # Reusable UI components
│   ├── layout/             # Header, Footer, Navigation
│   └── sections/           # Page-specific sections
├── content/                # Markdown content files
├── public/
│   └── images/
├── styles/
│   └── globals.css
└── tailwind.config.ts
```

## Navigation Structure

```
Home | Solutions | Products | Case Studies | About | Contact
```

## Important Context

This company wants to position itself as a **platform company** (not a project-based services company). The website should convey:

1. **Technology depth** — They have real products (hardware + software), not just consulting
2. **Proven at scale** — 10,000+ assets monitored, not just POC
3. **End-to-end capability** — From sensors to cloud platform to mobile app
4. **R&D strength** — In-house R&D, A\*STAR collaboration, NRF grant
5. **Industry belonging** — Part of Singapore's lift/facility management ecosystem

The core narrative is "The Shift": from people-driven processes to technology-driven processes.
