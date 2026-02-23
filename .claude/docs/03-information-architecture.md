# Information Architecture

## Navigation Structure

```
┌─────────────────────────────────────────────────────────────────────────┐
│  Logo    Home   Platform   Solutions ▼   Products ▼   Case Studies   About   Contact  │
└─────────────────────────────────────────────────────────────────────────┘
                                  │              │
                                  │              ├── Hardware
                                  │              └── Software
                                  │
                                  ├── Lift Monitoring & Compliance
                                  ├── Smart Facility Management
                                  ├── Digital Twin & Visualization
                                  └── Environmental Monitoring (optional)
```

## Page Hierarchy

```
/                                   # Home
├── /platform                       # Platform (FOS Architecture)
├── /solutions                      # Solutions overview
│   ├── /solutions/lift-monitoring  # Vertical Transport
│   ├── /solutions/facility-management  # Smart FM
│   ├── /solutions/digital-twin     # Digital Twin
│   └── /solutions/environmental-monitoring  # Remote Sensing (optional)
├── /products                       # Products overview
│   ├── /products/hardware          # Hardware products
│   │   ├── /products/hardware/lmd  # LMD Series (optional deep page)
│   │   └── /products/hardware/lbb  # LBB (optional deep page)
│   └── /products/software          # Software products
│       ├── /products/software/ltms # LTMS (optional deep page)
│       ├── /products/software/rmd  # RM&D System
│       ├── /products/software/iris # IRIS
│       ├── /products/software/cloud-bms  # Cloud BMS
│       └── /products/software/digital-twin  # Digital Twin Platform
├── /case-studies                   # Case Studies overview
│   ├── /case-studies/hdb           # HDB case study
│   └── /case-studies/chevalier     # Chevalier case study
├── /about                          # About us
└── /contact                        # Contact
```

## Page Purposes

| Page                 | Purpose                                             | Priority |
| -------------------- | --------------------------------------------------- | -------- |
| Home                 | First impression, value proposition, trust building | P0       |
| Platform             | Explain FOS architecture for those who want depth   | P1       |
| Solutions (parent)   | Entry point to domain-specific solutions            | P1       |
| Solutions (children) | Detailed solution for each vertical                 | P1       |
| Products (parent)    | Overview of product portfolio                       | P1       |
| Products (children)  | Detailed product pages                              | P2       |
| Case Studies         | Proof of success                                    | P1       |
| About                | Company credibility, R&D, ecosystem                 | P1       |
| Contact              | Lead generation                                     | P0       |

## Home Page Structure

```
┌─────────────────────────────────────────────────────────────────────────┐
│                              HEADER                                     │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│                         HERO SECTION                                    │
│         "The AI-Powered Platform for Facility Operations"              │
│                    [Contact Us]  [Learn More]                          │
│                                                                         │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│                        THE SHIFT SECTION                                │
│              From reactive → predictive maintenance                     │
│         From people-driven → technology-driven processes                │
│                                                                         │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│                    PLATFORM AT A GLANCE                                 │
│                  [Architecture Diagram]                                 │
│           Hardware → Edge → Cloud → Applications                        │
│                                                                         │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│                      KEY NUMBERS                                        │
│   10,000+ assets   |   85%+ accuracy   |   8 years   |   BCA certified  │
│                                                                         │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│                     SOLUTIONS PREVIEW                                   │
│   [Lift Monitoring]  [Facility Mgmt]  [Digital Twin]  [Remote Sensing]  │
│                                                                         │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│                     TRUSTED BY                                          │
│       [HDB] [BCA] [Chevalier] [Midea] [NParks] [A*STAR] [NRF]           │
│                                                                         │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│                         CTA SECTION                                     │
│               Ready to transform your operations?                       │
│                     [Contact Us] [Book a Demo]                          │
│                                                                         │
├─────────────────────────────────────────────────────────────────────────┤
│                              FOOTER                                     │
└─────────────────────────────────────────────────────────────────────────┘
```

## Platform Page Structure

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         HERO                                            │
│            "The AI-Driven Facility Operating System"                    │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│                    ARCHITECTURE DIAGRAM                                 │
│                                                                         │
│   ┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐          │
│   │ Hardware │ →  │   Edge   │ →  │  Cloud   │ →  │ Platform │          │
│   │ Sensors  │    │Processing│    │Analytics │    │Dashboard │          │
│   └──────────┘    └──────────┘    └──────────┘    └──────────┘          │
│                                                                         │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│                     CORE CAPABILITIES                                   │
│   [Data Integration]  [AI Analytics]  [Workflow]  [Digital Twin]        │
│                                                                         │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│                    TECHNICAL HIGHLIGHTS                                 │
│         Edge processing  |  Multi-brand agnostic  |  Real-time FEA      │
│                                                                         │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│                    READY TO DEPLOY                                      │
│            "Not proof-of-concept. Production-ready."                    │
│                        [See Solutions]                                  │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

## Solutions Page Structure (Parent)

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         HERO                                            │
│                    "Solutions by Domain"                                │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│   ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐        │
│   │ Lift Monitoring │  │    Facility     │  │  Digital Twin   │        │
│   │  & Compliance   │  │   Management    │  │ & Visualization │        │
│   │                 │  │                 │  │                 │        │
│   │  [Learn More]   │  │  [Learn More]   │  │  [Learn More]   │        │
│   └─────────────────┘  └─────────────────┘  └─────────────────┘        │
│                                                                         │
│   ┌─────────────────┐                                                   │
│   │  Environmental  │   (optional, can be removed)                      │
│   │   Monitoring    │                                                   │
│   └─────────────────┘                                                   │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

## Solution Detail Page Structure

Each solution page follows this template:

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         HERO                                            │
│                   "[Solution Name]"                                     │
│                   Brief description                                     │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│                      THE CHALLENGE                                      │
│               What pain points does this solve?                         │
│                                                                         │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│                      OUR APPROACH                                       │
│                 How do we solve it?                                     │
│                                                                         │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│                    PRODUCTS INVOLVED                                    │
│              Which products power this solution?                        │
│                                                                         │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│                     CASE STUDY PREVIEW                                  │
│                  Link to relevant case study                            │
│                                                                         │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│                          CTA                                            │
│                   [Contact Us] [See Products]                           │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

## Products Page Structure

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         HERO                                            │
│                  "End-to-End Product Portfolio"                         │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│                        HARDWARE                                         │
│   ┌─────────────────┐  ┌─────────────────┐                             │
│   │   LMD Series    │  │      LBB        │                             │
│   │   [Details]     │  │   [Details]     │                             │
│   └─────────────────┘  └─────────────────┘                             │
│                                                                         │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│                        SOFTWARE                                         │
│   ┌───────┐ ┌───────┐ ┌───────┐ ┌───────┐ ┌───────┐                   │
│   │ LTMS  │ │ RM&D  │ │ IRIS  │ │Cloud  │ │Digital│                   │
│   │       │ │       │ │       │ │ BMS   │ │ Twin  │                   │
│   └───────┘ └───────┘ └───────┘ └───────┘ └───────┘                   │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

## About Page Structure

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         HERO                                            │
│                      "About Softgrid"                                   │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│                      COMPANY STORY                                      │
│         From lift monitoring (2017) to AI-driven FOS platform          │
│                                                                         │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│                      R&D STRENGTH                                       │
│   In-house R&D  |  A*STAR Collaboration  |  S$2.1M NRF Grant          │
│                                                                         │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│                       ECOSYSTEM                                         │
│   Part of Singapore's lift community  |  BCA certified  |  Partners    │
│                                                                         │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│                   WHY SOFTGRID (4 pillars)                              │
│   [Battle-tested] [Deep Tech] [End-to-End] [Regulatory Aligned]        │
│                                                                         │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│                   PARTNERS & CERTIFICATIONS                             │
│                        [Logo grid]                                      │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

## Contact Page Structure

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         HERO                                            │
│                      "Get in Touch"                                     │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│   ┌─────────────────────────┐  ┌─────────────────────────┐             │
│   │                         │  │                         │             │
│   │      CONTACT FORM       │  │    COMPANY INFO         │             │
│   │                         │  │                         │             │
│   │   Name                  │  │   Address               │             │
│   │   Email                 │  │   Email                 │             │
│   │   Company               │  │   Phone                 │             │
│   │   Message               │  │                         │             │
│   │                         │  │   [Book a Demo] button  │             │
│   │   [Submit]              │  │                         │             │
│   │                         │  │                         │             │
│   └─────────────────────────┘  └─────────────────────────┘             │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

## Footer Structure

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│   LOGO                                                                  │
│                                                                         │
│   Solutions          Products          Company          Contact         │
│   ─────────          ────────          ───────          ───────         │
│   Lift Monitoring    Hardware          About            Address         │
│   Facility Mgmt      Software          Case Studies     Email           │
│   Digital Twin       Platform          Contact          Phone           │
│                                                                         │
│   ─────────────────────────────────────────────────────────────────     │
│                                                                         │
│   © 2026 Softgrid Sensing Pte. Ltd.          [LinkedIn] [Email]        │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

## Mobile Navigation

On mobile, the navigation collapses into a hamburger menu:

```
┌─────────────────────────────────────┐
│  LOGO              ☰ (hamburger)   │
└─────────────────────────────────────┘

When opened:
┌─────────────────────────────────────┐
│  Home                               │
│  Platform                           │
│  Solutions                      ▼   │
│    └─ Lift Monitoring               │
│    └─ Facility Management           │
│    └─ Digital Twin                  │
│  Products                       ▼   │
│    └─ Hardware                      │
│    └─ Software                      │
│  Case Studies                       │
│  About                              │
│  Contact                            │
└─────────────────────────────────────┘
```
