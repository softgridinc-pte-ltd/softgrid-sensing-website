# Products Pages Specification

## Overview

The Products section consists of:

- `/products` - Parent page (overview of all products)
- `/products/hardware` - Hardware products overview
- `/products/software` - Software products overview
- Individual product pages (optional, Phase 2)

---

# Products Parent Page

## URL

`/products`

## Purpose

Showcase the complete product portfolio. Demonstrate that Softgrid is a product company (not just services).

## Sections

### Section 1: Hero

**Content**:

- **Tagline**: `Product Portfolio`
- **Headline**: `End-to-End Products, Built In-House`
- **Subheadline**: `From hardware sensors to cloud platforms—we design, develop, and deploy the full stack.`

### Section 2: Why This Matters

**Layout**: Short text block

**Content**:

> "We're not a system integrator reselling other vendors' products. Every component in our stack is designed and built by our team. This means seamless integration, full control, and the ability to customize for your specific needs."

### Section 3: Hardware Products

**Layout**: 2 product cards side by side

**Section Title**: `Hardware`

**Products**:

1. **LMD Series**
   - Image: Device photo/render
   - Tagline: `Lift Monitoring Device`
   - Brief: `Non-intrusive IoT sensors for elevator monitoring. Edge processing, 4G connectivity, resilient operation.`
   - Variants: LMD6000, LMDC
   - Link: `/products/hardware` or `/products/hardware/lmd`

2. **LBB (Lift BlackBox)**
   - Image: Device photo/render
   - Tagline: `Lift Event Recorder`
   - Brief: `Records elevator events for incident analysis and compliance documentation.`
   - Link: `/products/hardware` or `/products/hardware/lbb`

### Section 4: Software Products

**Layout**: Grid of 5 product cards (3+2 or responsive grid)

**Section Title**: `Software`

**Products**:

1. **LTMS**
   - Icon: Monitor icon
   - Full Name: `Lift Telemonitoring System`
   - Brief: `Monitoring backend for public sector lift operations. Deployed on 10,000+ HDB lifts.`
   - Target: Town Councils, HDB
   - Link: `/products/software` or `/products/software/ltms`

2. **RM&D System**
   - Icon: Shield/compliance icon
   - Full Name: `Remote Monitoring & Diagnostics`
   - Brief: `BCA-certified compliance solution for private sector lift monitoring.`
   - Target: Lift companies, private buildings
   - Link: `/products/software` or `/products/software/rmd`

3. **IRIS**
   - Icon: Grid/workflow icon
   - Full Name: `Integrated Resource & Information System`
   - Brief: `CMMS platform for facility management—work orders, asset tracking, mobile workforce.`
   - Target: Managing agents, property companies
   - Link: `/products/software` or `/products/software/iris`

4. **Cloud BMS**
   - Icon: Building icon
   - Full Name: `Cloud Building Management System`
   - Brief: `Unified monitoring for building systems. Integrates with Tridium, Midea, and other BMS platforms.`
   - Target: Building owners, facility managers
   - Link: `/products/software` or `/products/software/cloud-bms`

5. **Digital Twin Platform**
   - Icon: 3D cube icon
   - Full Name: `Web-Based Digital Twin`
   - Brief: `Real-time FEA visualization powered by Unreal Engine. 300,000+ updates/second.`
   - Target: Engineering firms, infrastructure owners
   - Link: `/products/software` or `/products/software/digital-twin`

### Section 5: Integration Capabilities

**Layout**: Text block with icons

**Content**:

- **Section Title**: `Built to Integrate`
- **Body**: `Our products are designed to work together—and with your existing systems.`

**Integration Points**:

- Midea iBuilding / iEasyCare
- Tridium Niagara
- BACnet / Modbus protocols
- REST APIs for custom integration
- Cloud-to-cloud for government systems

### Section 6: CTA

**Content**:

- **Headline**: `Want to See Our Products in Action?`
- **CTA**: `Request a Demo` → /contact

---

# Hardware Overview Page

## URL

`/products/hardware`

## Sections

### Hero

- **Headline**: `Hardware Products`
- **Subheadline**: `Industrial-grade IoT devices designed for reliability and ease of deployment.`

### Product: LMD Series

**Content**:

- **Name**: LMD Series (LMD6000, LMDC)
- **Tagline**: `Lift Monitoring Device`
- **Description**:
  > Non-intrusive IoT sensors for elevator monitoring. Installs without voiding manufacturer warranties. Edge processing handles data locally, reducing bandwidth and ensuring operation even during internet outages.

**Key Features**:
| Feature | Description |
|---------|-------------|
| Non-Intrusive | Installs without modifying lift controller |
| Edge Processing | Local AI inference, reduces cloud dependency |
| Resilient | Continues operating during internet blackouts |
| Secure | 4G/LTE tunnel (HDB LSS standard) |
| Multi-Sensor | Vibration, acceleration, temperature |

**Specifications** (example):
| Spec | Value |
|------|-------|
| Connectivity | 4G/LTE |
| Sensors | 3-axis accelerometer, vibration, temperature |
| Processing | ARM-based edge compute |
| Power | 24V DC |
| Certifications | BCA RM&D certified |

### Product: LBB

**Content**:

- **Name**: LBB (Lift BlackBox)
- **Tagline**: `Lift Event Recorder`
- **Description**:
  > Records elevator events for incident analysis, compliance documentation, and dispute resolution. Like a flight recorder for lifts.

**Key Features**:
| Feature | Description |
|---------|-------------|
| Event Recording | Captures all lift events with timestamps |
| Incident Analysis | Replay events for troubleshooting |
| Compliance | Documentation for regulatory requirements |
| Tamper-Proof | Secure storage |

---

# Software Overview Page

## URL

`/products/software`

## Sections

### Hero

- **Headline**: `Software Products`
- **Subheadline**: `Cloud-native platforms for monitoring, analytics, and operations.`

### Products Grid

Display all 5 software products with more detail than the parent page:

**For each product include**:

- Full name and tagline
- 2-3 sentence description
- Key features (3-4 bullet points)
- Target customer
- Screenshot/UI preview (if available)

### Product Details

**LTMS - Lift Telemonitoring System**

- Target: Public sector (HDB, Town Councils)
- Key Features:
  - Real-time lift status monitoring
  - Alert management and escalation
  - Historical analytics and reporting
  - Integration with HDB systems
- Deployment: 10,000+ lifts monitored

**RM&D System - Remote Monitoring & Diagnostics**

- Target: Private sector lift companies
- Key Features:
  - BCA Code of Practice compliant
  - Predictive maintenance alerts
  - Compliance reporting
  - Mobile technician app
- Certification: BCA Sandbox certified

**IRIS - Integrated Resource & Information System**

- Target: Managing agents, property companies
- Key Features:
  - Work order management
  - Asset lifecycle tracking
  - Mobile workforce app
  - Reporting and analytics
- Status: Pilot deployed, SaaS planned

**Cloud BMS - Cloud Building Management System**

- Target: Building owners, facility managers
- Key Features:
  - Unified dashboard for all building systems
  - Integration with Tridium, Midea platforms
  - Energy monitoring
  - Bi-directional control (MQTT QoS 2)

**Digital Twin Platform**

- Target: Engineering firms, infrastructure owners
- Key Features:
  - Web-based (no installation)
  - Unreal Engine + Pixel Streaming
  - Real-time FEA visualization
  - 300,000+ data updates/second
- Applications: Offshore, marine, rail assets

---

## Individual Product Pages (Phase 2)

If needed, create deep-dive pages for each product:

- `/products/hardware/lmd`
- `/products/hardware/lbb`
- `/products/software/ltms`
- `/products/software/rmd`
- `/products/software/iris`
- `/products/software/cloud-bms`
- `/products/software/digital-twin`

Each would include:

- Full specifications
- Screenshots/demos
- Use cases
- Pricing model (if public)
- Related solutions
- Related case studies

---

## SEO Notes

| Page               | Title                         | Meta Description                                                                                                       |
| ------------------ | ----------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| /products          | Products \| Softgrid Sensing  | Explore Softgrid's end-to-end product portfolio—IoT hardware and cloud software for facility operations.               |
| /products/hardware | Hardware Products \| Softgrid | Industrial IoT devices for lift monitoring—LMD Series and Lift BlackBox. Non-intrusive, edge-processed, BCA certified. |
| /products/software | Software Products \| Softgrid | Cloud platforms for facility operations—LTMS, RM&D, IRIS CMMS, Cloud BMS, and Digital Twin.                            |
