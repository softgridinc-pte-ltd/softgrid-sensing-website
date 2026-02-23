# Solutions Pages Specification

## Overview

The Solutions section consists of:
- `/solutions` - Parent page (overview of all solutions)
- `/solutions/lift-monitoring` - Lift Monitoring & Compliance
- `/solutions/facility-management` - Smart Facility Management
- `/solutions/digital-twin` - Digital Twin & Visualization
- `/solutions/environmental-monitoring` - Environmental Monitoring (optional)

---

# Solutions Parent Page

## URL
`/solutions`

## Purpose
Entry point that shows all solution domains at a glance. Helps visitors find the right solution for their needs.

## Sections

### Section 1: Hero

**Content**:
- **Tagline**: `Domain Expertise`
- **Headline**: `Solutions Built for Your Industry`
- **Subheadline**: `Whether you manage lifts, buildings, or infrastructure—we have a solution proven at scale.`

### Section 2: Solution Cards

**Layout**: Grid of 3-4 cards

**Cards** (each links to detail page):

1. **Lift Monitoring & Compliance**
   - Image: Lift/elevator machinery
   - Brief: `BCA-certified remote monitoring, predictive maintenance, and compliance reporting for vertical transport.`
   - Target: Lift companies, Town Councils, Property Managers
   - Link: `/solutions/lift-monitoring`

2. **Smart Facility Management**
   - Image: Building management/control room
   - Brief: `Unified platform for building operations—from work orders to asset tracking to energy monitoring.`
   - Target: Managing Agents, Property Companies
   - Link: `/solutions/facility-management`

3. **Digital Twin & Visualization**
   - Image: 3D visualization/FEA
   - Brief: `Real-time simulation and structural health monitoring for high-value assets.`
   - Target: Engineering Firms, Asset Owners
   - Link: `/solutions/digital-twin`

4. **Environmental Monitoring** (optional)
   - Image: Satellite/aerial view
   - Brief: `Remote sensing and AI analysis for land cover monitoring and environmental tracking.`
   - Target: Government Agencies
   - Link: `/solutions/environmental-monitoring`

### Section 3: CTA

**Content**:
- **Headline**: `Not Sure Which Solution Fits?`
- **Subheadline**: `Talk to our team. We'll help you find the right approach.`
- **CTA**: `Contact Us` → /contact

---

# Solution Detail Page Template

All solution detail pages follow the same structure:

## Sections

### Section 1: Hero

**Content**:
- **Tagline**: `[Solution Category]`
- **Headline**: `[Solution Name]`
- **Subheadline**: `[One-sentence value proposition]`
- **CTA**: `Contact Us` → /contact

### Section 2: The Challenge

**Content**:
- **Section Title**: `The Challenge`
- List 3-4 pain points this solution addresses

### Section 3: Our Approach

**Content**:
- **Section Title**: `Our Approach`
- Explain how Softgrid solves these challenges
- Include diagram if applicable

### Section 4: Products Involved

**Content**:
- **Section Title**: `Products That Power This Solution`
- List relevant products with brief descriptions
- Link to product pages

### Section 5: Key Benefits

**Layout**: 3-4 benefit cards

**Content**:
- Specific, measurable benefits where possible

### Section 6: Case Study Preview

**Content**:
- **Section Title**: `Proven in Production`
- Brief summary of relevant case study
- Link to full case study

### Section 7: CTA

**Content**:
- `Ready to get started?` + Contact button

---

# Lift Monitoring & Compliance

## URL
`/solutions/lift-monitoring`

## Hero
- **Tagline**: `Vertical Transport`
- **Headline**: `Lift Monitoring & Compliance`
- **Subheadline**: `BCA-certified remote monitoring, predictive maintenance, and compliance automation for elevators across Singapore.`

## The Challenge

| Pain Point | Description |
|------------|-------------|
| **Regulatory Compliance** | BCA's new Code of Practice requires Remote Monitoring & Diagnostics (RM&D) |
| **Aging Equipment** | Older lifts need more than routine monthly checks |
| **Manpower Shortage** | Traditional maintenance is labor-intensive; technicians are scarce |
| **Reactive Approach** | Current solutions lack true predictive capabilities; faults go undetected |

## Our Approach

**Hardware**
- LMD Series (LMD6000, LMDC) - non-intrusive sensors
- LBB (Lift BlackBox) - event recording

**Software**
- LTMS - Lift Telemonitoring System (for public sector/HDB)
- RM&D System - BCA-compliant (for private sector)

**AI**
- Vibration and acceleration analysis
- Anomaly detection and fault prediction
- 85%+ accuracy target

**Workflow**
- Automatic alert generation
- Work order creation
- Mobile app for technicians
- Compliance reporting

## Products Involved
- LMD Series (Hardware)
- LBB (Hardware)
- LTMS (Software)
- RM&D System (Software)

## Key Benefits
1. **BCA Compliance** - Certified RM&D solution
2. **Reduce Maintenance Costs** - Predictive approach reduces emergency callouts
3. **Extend Asset Life** - Early fault detection prevents major damage
4. **Less Manpower** - Remote monitoring reduces routine site visits

## Case Study
- HDB: 10,000+ lifts monitored
- Link to HDB case study

---

# Smart Facility Management

## URL
`/solutions/facility-management`

## Hero
- **Tagline**: `Building Operations`
- **Headline**: `Smart Facility Management`
- **Subheadline**: `Unified platform for building operations—work orders, asset tracking, energy monitoring, and more.`

## The Challenge

| Pain Point | Description |
|------------|-------------|
| **Siloed Systems** | Different systems for different equipment, no unified view |
| **Manual Processes** | Work orders on paper or spreadsheets |
| **No Visibility** | Can't see real-time status of assets |
| **Reactive Maintenance** | Fix when broken, not before |

## Our Approach

**Platform**
- IRIS CMMS - Work order management, asset tracking
- Cloud BMS - Building system monitoring

**Integration**
- Connects to existing BMS (Tridium, Midea, etc.)
- Unified dashboard for all assets

**Workflow**
- Fault detection → Auto work order → Technician mobile → Verification
- Closed-loop maintenance

## Products Involved
- IRIS (Software)
- Cloud BMS (Software)
- Softgrid Fusion Platform (Software)

## Key Benefits
1. **Single Pane of Glass** - One dashboard for all building systems
2. **Automated Workflows** - Reduce manual coordination
3. **Data-Driven Decisions** - Historical analytics for optimization
4. **Mobile-First** - Technicians work from their phones

## Case Study
- CPG FM pilot (if available)

---

# Digital Twin & Visualization

## URL
`/solutions/digital-twin`

## Hero
- **Tagline**: `Simulation & Visualization`
- **Headline**: `Digital Twin & Structural Health Monitoring`
- **Subheadline**: `Real-time 3D visualization and finite element analysis for high-value infrastructure assets.`

## The Challenge

| Pain Point | Description |
|------------|-------------|
| **Complex Assets** | Offshore platforms, bridges, rail infrastructure are hard to monitor |
| **Expensive Inspections** | Physical inspections are costly and disruptive |
| **Data Overload** | Sensor data is meaningless without visualization |
| **Traditional Digital Twin** | Most solutions are too expensive or require desktop software |

## Our Approach

**Technology**
- Unreal Engine + Pixel Streaming
- Real-time FEA (Finite Element Analysis)
- Web-based (no installation required)

**Performance**
- 300,000+ data updates per second
- Surpasses Unity/JavaScript limits

**Application**
- Structural health monitoring
- Stress visualization
- Predictive maintenance for high-value assets

## Products Involved
- Digital Twin Platform (Software)
- IoT Sensors (Hardware)

## Key Benefits
1. **Web-Based** - Access from any browser, no installation
2. **Real-Time FEA** - See stress and strain as it happens
3. **Cost-Effective** - Bring digital twin to mid-market, not just mega-projects
4. **Cloud GPU** - Heavy computation happens in the cloud

## Case Study
- FEA visualization project (if available)

---

# Environmental Monitoring (Optional)

## URL
`/solutions/environmental-monitoring`

## Hero
- **Tagline**: `Remote Sensing`
- **Headline**: `Environmental Monitoring`
- **Subheadline**: `Satellite imagery and AI analysis for land cover monitoring, green cover tracking, and environmental compliance.`

## The Challenge

| Pain Point | Description |
|------------|-------------|
| **Large Areas** | Impossible to survey large land areas manually |
| **Change Detection** | Need to track changes over time |
| **Manual Analysis** | Traditional methods are slow and labor-intensive |

## Our Approach

**Technology**
- Satellite imagery acquisition
- AI-based image analysis
- Change detection algorithms

**Application**
- Green cover monitoring
- Land use classification
- Environmental compliance tracking

## Products Involved
- Remote Sensing System (Software)

## Key Benefits
1. **Scalable** - Monitor large areas efficiently
2. **Automated** - AI reduces manual analysis
3. **Historical Tracking** - Compare changes over time

## Case Study
- NParks green cover monitoring (if available)

---

## SEO Notes

| Page | Title | Meta Description |
|------|-------|------------------|
| /solutions | Solutions \| Softgrid Sensing | Explore Softgrid's solutions for lift monitoring, facility management, digital twin, and environmental monitoring. Proven at scale across Singapore. |
| /solutions/lift-monitoring | Lift Monitoring & Compliance \| Softgrid | BCA-certified lift remote monitoring and predictive maintenance. 10,000+ lifts monitored across Singapore. |
| /solutions/facility-management | Smart Facility Management \| Softgrid | Unified platform for building operations—CMMS, BMS integration, automated workflows. |
| /solutions/digital-twin | Digital Twin & Visualization \| Softgrid | Real-time 3D visualization and FEA for structural health monitoring. Web-based, powered by Unreal Engine. |
