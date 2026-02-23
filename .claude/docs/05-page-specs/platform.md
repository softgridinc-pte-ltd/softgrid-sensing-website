# Platform Page Specification

## URL

`/platform`

## Purpose

Deep dive into the Facility Operating System (FOS) architecture for technical evaluators, serious customers, and investors who want to understand HOW the platform works.

## Page Sections

---

### Section 1: Hero

**Layout**: Centered content, less tall than home hero (70vh or auto)

**Content**:

- **Tagline**: `The Foundation`
- **Headline**: `AI-Driven Facility Operating System`
- **Subheadline**: `A unified platform that connects physical assets to digital intelligence—from edge sensors to cloud analytics to actionable insights.`

**Visual**:

- Abstract tech background or subtle animation
- No heavy imagery needed

---

### Section 2: Architecture Overview

**Layout**: Large diagram centered, with annotations

**Content**:

- **Section Title**: `End-to-End Architecture`
- **Subtitle**: `Four integrated layers working together.`

**Diagram** (horizontal flow):

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│  HARDWARE   │ →  │    EDGE     │ →  │   CLOUD     │ →  │   Platform  │
│   LAYER     │    │   LAYER     │    │   LAYER     │    │   LAYER     │
├─────────────┤    ├─────────────┤    ├─────────────┤    ├─────────────┤
│ LMD Series  │    │ Local AI    │    │ FOS Engine  │    │ Dashboard   │
│ LBB         │    │ Edge Logic  │    │ Analytics   │    │ Mobile App  │
│ IoT Sensors │    │ 4G/LTE      │    │ Data Lake   │    │ Alerts      │
│             │    │ Resilience  │    │ AI/ML       │    │ Reports     │
└─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘
```

**Below diagram, explain each layer**:

**Hardware Layer**

- Non-intrusive sensors (install without voiding warranties)
- Multi-brand compatible (works with any lift/equipment brand)
- Vibration, acceleration, temperature sensing

**Edge Layer**

- Local data processing reduces bandwidth
- Resilient logic: continues operating during internet outages
- Secure 4G/LTE tunnel (HDB LSS standard)

**Cloud Layer**

- Containerized, horizontally scalable
- AI/ML models for anomaly detection and fault prediction
- Real-time data streaming and historical analytics

**Application Layer**

- Web dashboard for operations managers
- Mobile app for technicians
- API for third-party integration

---

### Section 3: Core Capabilities

**Layout**: 4 feature cards in a 2x2 grid

**Cards**:

1. **Data Integration**
   - Icon: Plug/connection icon
   - Description: `Connect any asset—lifts, HVAC, pumps, sensors. Brand-agnostic with support for Modbus, BACnet, and proprietary protocols.`

2. **AI & Predictive Analytics**
   - Icon: Brain/AI icon
   - Description: `Unsupervised learning detects anomalies. Semi-supervised clustering predicts specific fault types. 85%+ accuracy target.`

3. **Workflow Automation**
   - Icon: Workflow/arrows icon
   - Description: `Closed-loop maintenance: fault detection triggers work order, technician receives mobile notification, completion is verified.`

4. **Digital Twin**
   - Icon: 3D cube icon
   - Description: `Real-time visualization powered by Unreal Engine. 300,000+ data updates per second. Web-based, no installation required.`

---

### Section 4: Technical Highlights

**Layout**: Horizontal scroll or 3-column layout

**Content**:

- **Section Title**: `Built for Enterprise`

**Highlights**:

| Feature                 | Detail                                                              |
| ----------------------- | ------------------------------------------------------------------- |
| **Edge Resilience**     | Devices continue operating schedules even during internet blackouts |
| **Secure Connectivity** | 4G/LTE tunnel architecture, proven at HDB scale                     |
| **Scalable Cloud**      | Containerized deployment, horizontal scaling                        |
| **Real-time Control**   | MQTT QoS Level 2 for guaranteed message delivery                    |
| **Interoperability**    | Cloud-to-cloud integration with government systems                  |
| **Multi-tenant**        | Single platform serves multiple customers securely                  |

---

### Section 5: R&D Foundation

**Layout**: Text + logos

**Content**:

- **Section Title**: `Technology You Can Trust`
- **Body**: `Our platform is backed by rigorous R&D, developed in collaboration with Singapore's leading research institutions.`

**Key Points**:

- In-house R&D team
- A\*STAR / SIMTech collaboration
- NRF Cities of Tomorrow grant (S$2.1M)
- BCA Sandbox certified

**Partner Logos**: A\*STAR, SIMTech, NRF

---

### Section 6: Not POC, Production-Ready

**Layout**: Statement block

**Content**:

- **Headline**: `Production-Ready at National Scale`
- **Body**: `This isn't a proof-of-concept. Our platform monitors 10,000+ lifts across Singapore—HDB public housing and private buildings. It's battle-tested infrastructure you can rely on.`

**CTA**: `See Case Studies →` → /case-studies

---

### Section 7: CTA

**Layout**: Banner

**Content**:

- **Headline**: `See the Platform in Action`
- **CTA**: `Request a Demo` → /contact

---

## Technical Notes

### SEO

- **Title**: `Platform | Softgrid Sensing`
- **Meta Description**: `Explore Softgrid's AI-driven Facility Operating System—edge computing, cloud analytics, predictive maintenance, and digital twin capabilities in one unified platform.`

### Images Needed

- Architecture diagram (can be SVG or designed component)
- Optional: Screenshots of dashboard/mobile app

### Interactions

- Architecture diagram could have hover states showing details for each layer
- Consider animated data flow between layers (subtle)
