# Home Page Specification

## URL
`/`

## Purpose
Create a strong first impression. Communicate what Softgrid does, why it matters, and establish trust through social proof.

## Page Sections

---

### Section 1: Hero

**Layout**: Full viewport height (100vh), centered content

**Content**:
- **Tagline** (small, above headline): `AI-Driven Facility Operating System`
- **Headline**: `The Platform That Runs Your Facility Operations`
- **Subheadline**: `From lift monitoring to building management—one intelligent platform for predictive maintenance, real-time control, and operational excellence.`
- **CTA Buttons**: 
  - Primary: `Contact Us` → links to /contact
  - Secondary: `Learn More` → scrolls to #platform section on homepage

**Visual**:
- Dark background with subtle grid pattern
- Optional: Animated data visualization or particle effect (keep subtle)
- No image required, or abstract tech visualization

**Responsive**:
- On mobile, reduce headline size
- Stack buttons vertically on mobile

---

### Section 2: The Shift

**Layout**: Two-column comparison (left vs right) or animated transition

**Content**:
- **Section Title**: `The Shift`
- **Subtitle**: `Facility operations are changing. Are you ready?`

**Comparison Grid**:

| Traditional Approach | The Softgrid Way |
|---------------------|------------------|
| Reactive maintenance | Predictive maintenance |
| Monthly routine checks | Condition-based intervention |
| People running processes | Technology running processes |
| Siloed systems | Unified platform |
| Respond after failure | Prevent before failure |

**Visual**:
- Use icons for each row
- Show a visual "transformation" from left to right
- Consider animated arrows or transition effect

---

### Section 3: Platform at a Glance

**Layout**: Centered diagram with text explanation

**Content**:
- **Section Title**: `One Platform, End-to-End`
- **Subtitle**: `From hardware sensors to cloud analytics to mobile apps—fully integrated.`

**Architecture Diagram** (simplified):
```
[Hardware] → [Edge Processing] → [Cloud Platform] → [Applications]
   LMD         Local AI          FOS Engine        Dashboard
   LBB         Resilient         Analytics         Mobile App
   Sensors     Logic             AI/ML             Alerts
```

**Below diagram, 4 capability cards**:
1. **Data Integration** - Connect any asset, any brand
2. **AI Analytics** - 85%+ fault prediction accuracy
3. **Workflow Automation** - From alert to work order to verification
4. **Digital Twin** - Real-time visualization and simulation

**CTA**: `Explore Solutions →` → links to /solutions

---

### Section 4: Key Numbers

**Layout**: 4-column stat grid (2x2 on mobile)

**Stats**:
| Number | Label |
|--------|-------|
| 10,000+ | Assets Monitored |
| 85%+ | Prediction Accuracy |
| 8 | Years in Singapore |
| BCA | Certified |

**Visual**:
- Large numbers in accent color (cyan)
- Labels in muted text
- Optional: subtle count-up animation on scroll

---

### Section 5: Solutions Preview

**Layout**: 3-4 cards in a row (stacked on mobile)

**Content**:
- **Section Title**: `Solutions for Every Domain`
- **Subtitle**: `Deep expertise across vertical transport, facilities, and infrastructure.`

**Cards**:

1. **Lift Monitoring & Compliance**
   - Icon: Elevator icon
   - Brief: `BCA-certified remote monitoring and predictive maintenance for lifts.`
   - Link: `Learn More →` → /solutions/lift-monitoring

2. **Smart Facility Management**
   - Icon: Building icon
   - Brief: `Unified platform for building operations, work orders, and asset tracking.`
   - Link: `Learn More →` → /solutions/facility-management

3. **Digital Twin & Visualization**
   - Icon: 3D cube icon
   - Brief: `Real-time simulation and structural health monitoring for high-value assets.`
   - Link: `Learn More →` → /solutions/digital-twin

4. **Environmental Monitoring** (optional)
   - Icon: Leaf/satellite icon
   - Brief: `Remote sensing and AI analysis for land cover and environmental tracking.`
   - Link: `Learn More →` → /solutions/environmental-monitoring

---

### Section 6: Trusted By

**Layout**: Logo grid, centered

**Content**:
- **Section Title**: `Trusted by Industry Leaders`
- No subtitle needed

**Logos** (in grayscale or muted, hover to color):
- HDB
- BCA
- NRF
- Chevalier
- Midea
- A*STAR / SIMTech
- Mandai Wildlife Group
- JTC
- Town Councils

**Note**: Use placeholder logos initially. Real logos need to be obtained.

---

### Section 7: CTA Section

**Layout**: Full-width banner with centered content

**Content**:
- **Headline**: `Ready to Transform Your Operations?`
- **Subheadline**: `Let's discuss how Softgrid can help you move from reactive to predictive.`
- **CTA Buttons**:
  - Primary: `Contact Us` → /contact
  - Secondary: `Book a Demo` → /contact (or separate booking link)

**Visual**:
- Slightly lighter background (bg-navy-800)
- Optional gradient accent

---

## Technical Notes

### SEO
- **Title**: `Softgrid Sensing | AI-Powered Facility Operating System`
- **Meta Description**: `Softgrid provides AI-driven facility operating systems for predictive maintenance, lift monitoring, and smart building management. Trusted by HDB with 10,000+ assets monitored.`
- **H1**: The main headline in Hero section

### Performance
- Hero section should load instantly (no heavy images)
- Lazy load images below the fold
- Consider using next/image for optimization

### Interactions
- Smooth scroll to sections if using anchor links
- Subtle hover effects on cards and buttons
- Stats section: optional count-up animation (use intersection observer)

### Accessibility
- Ensure sufficient color contrast
- All images need alt text
- Buttons should have descriptive text (not just "Learn More")
