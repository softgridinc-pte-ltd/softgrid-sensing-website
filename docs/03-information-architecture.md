# Information Architecture

## Navigation Structure

```
┌─────────────────────────────────────────────────────────────────────────┐
│  Logo    Home   Solutions ▼   Products ▼   Case Studies   About   Contact  │
└─────────────────────────────────────────────────────────────────────────┘
                                  │              │
                                  │              ├── AFOS Sense
                                  │              ├── AFOS Fusion
                                  │              ├── AFOS Orches
                                  │              └── AFOS Cortex
                                  │
                                  ├── Smart Vertical Transport
                                  ├── Smart Building Management
                                  ├── Smart Facility Operations
                                  └── Infrastructure & Environmental
```

## Page Hierarchy

```
/                                   # Home
├── /solutions                      # Solutions overview
│   ├── /solutions/vertical-transport       # Smart Vertical Transport
│   ├── /solutions/building-management      # Smart Building Management
│   ├── /solutions/facility-operations      # Smart Facility Operations
│   └── /solutions/infrastructure-environmental  # Infrastructure & Environmental
├── /products                       # Products overview
│   ├── /products/sense             # AFOS Sense (Edge Devices)
│   ├── /products/fusion            # AFOS Fusion (Monitoring & Diagnostics)
│   ├── /products/orches            # AFOS Orches (Operations & Maintenance)
│   └── /products/cortex            # AFOS Cortex (Data & Intelligence)
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
│         "The AI-Driven Platform for Facility Operations"              │
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
│   [Vertical Transport]  [Building Mgmt]  [Facility Ops]  [Infrastructure]  │
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

## Solutions Page Structure (Parent)

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         HERO                                            │
│              "Solutions Built for How You Operate"                      │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│   ┌─────────────────────────────────────────────────────────────┐        │
│   │              Smart Vertical Transport (featured)            │        │
│   │                      [Learn More]                           │        │
│   └─────────────────────────────────────────────────────────────┘        │
│                                                                         │
│   ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐        │
│   │    Building     │  │    Facility     │  │ Infrastructure  │        │
│   │   Management    │  │   Operations    │  │ & Environmental │        │
│   │  [Learn More]   │  │  [Learn More]   │  │  [Learn More]   │        │
│   └─────────────────┘  └─────────────────┘  └─────────────────┘        │
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
│         "End-to-End Products. Built In-House. Powered by AFOS."         │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│              Four Product Series. One Platform.                         │
│                                                                         │
│   ┌─────────────────┐  ┌─────────────────┐                             │
│   │   AFOS Sense    │  │  AFOS Fusion    │                             │
│   │  Edge Devices   │  │  Monitoring &   │                             │
│   │ LMD · LBB · EMD │  │  Diagnostics    │                             │
│   └─────────────────┘  └─────────────────┘                             │
│   ┌─────────────────┐  ┌─────────────────┐                             │
│   │  AFOS Orches    │  │  AFOS Cortex    │                             │
│   │  Operations &   │  │  Data &         │                             │
│   │  Maintenance    │  │  Intelligence   │                             │
│   └─────────────────┘  └─────────────────┘                             │
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
│         From lift monitoring (2017) to AI-driven AFOS platform          │
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
│   Vertical Transport AFOS Sense        About            Address         │
│   Building Mgmt      AFOS Fusion       Case Studies     Email           │
│   Facility Ops       AFOS Orches       Contact          Phone           │
│   Infrastructure     AFOS Cortex                                        │
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
│  Solutions                      ▼   │
│    └─ Vertical Transport            │
│    └─ Building Management           │
│    └─ Facility Operations           │
│    └─ Infrastructure & Env.         │
│  Products                       ▼   │
│    └─ AFOS Sense                    │
│    └─ AFOS Fusion                   │
│    └─ AFOS Orches                   │
│    └─ AFOS Cortex                   │
│  Case Studies                       │
│  About                              │
│  Contact                            │
└─────────────────────────────────────┘
```
