# Contact Page Specification

## URL

`/contact`

## Purpose

Convert interest into leads. Make it easy for potential customers to reach out.

---

## Page Sections

### Section 1: Hero

**Layout**: Shorter hero than other pages

**Content**:

- **Headline**: `Get in Touch`
- **Subheadline**: `Whether you're exploring solutions or ready to deploy—we'd love to hear from you.`

---

### Section 2: Main Content

**Layout**: Two columns

**Left Column (60%)**: Contact Form
**Right Column (40%)**: Company Info & Direct Contact

---

### Contact Form

**Fields**:

| Field    | Type     | Required | Placeholder              |
| -------- | -------- | -------- | ------------------------ |
| Name     | Text     | Yes      | Your name                |
| Email    | Email    | Yes      | Work email               |
| Company  | Text     | Yes      | Company name             |
| Phone    | Tel      | No       | Phone number (optional)  |
| Interest | Select   | Yes      | [Dropdown options below] |
| Message  | Textarea | Yes      | How can we help?         |

**Interest Dropdown Options**:

- Lift Monitoring & Compliance
- Smart Facility Management
- Digital Twin & Visualization
- General Inquiry
- Partnership Opportunity
- Other

**Submit Button**: `Send Message`

**Form Behavior**:

- Client-side validation
- Show loading state on submit
- Success message: "Thank you! We'll be in touch within 1-2 business days."
- Error handling for failed submissions

**Technical Note**:
Form submissions can be handled via:

- Formspree (simple, free tier available)
- Netlify Forms (if hosted on Netlify)
- Custom API endpoint (if backend exists)
- Email via serverless function

---

### Company Info (Right Column)

**Section: Contact Details**

| Label   | Value                                                 |
| ------- | ----------------------------------------------------- |
| Email   | info@softgridsensing.com (or appropriate email)       |
| Phone   | [Phone number if public]                              |
| Address | 10 Woodlands Ave 8, #02-01, HDB CBR, Singapore 738973 |

**Section: Office Hours**

- Monday - Friday: 9:00 AM - 6:00 PM (SGT)

**Section: Quick Links**

- [Book a Demo] - Could link to Calendly or similar (if available)
- [LinkedIn] - Company LinkedIn page

---

### Section 3: Map (Optional)

**Layout**: Full-width embedded map

**Content**:

- Google Maps embed showing office location
- Or static map image if preferred

**Note**: Can be omitted for simplicity in Phase 1

---

### Section 4: FAQ or Common Questions (Optional)

**Layout**: Accordion or simple list

**Possible Questions**:

1. **How quickly can you deploy?**

   > Depending on the scope, typical deployments take 4-8 weeks from contract signing. For urgent needs, we can often accelerate timelines.

2. **Do you work with existing BMS systems?**

   > Yes, our platform integrates with major BMS platforms including Tridium Niagara and Midea. We support BACnet, Modbus, and other standard protocols.

3. **What's the minimum deployment size?**

   > We work with organizations of various sizes. Contact us to discuss your specific situation.

4. **Do you offer a pilot program?**
   > Yes, we can structure pilot deployments to help you evaluate our solutions before full rollout.

**Note**: This section is optional and can be added in Phase 2

---

## Mobile Considerations

- On mobile, stack the form above company info
- Ensure form fields are large enough for touch input
- Phone number should be tap-to-call
- Email should be tap-to-email
- Map can be hidden or shown as "View on Google Maps" link

---

## Form Submission Handling

### Option 1: Formspree (Recommended for Simplicity)

```jsx
<form action="https://formspree.io/f/{form-id}" method="POST">
  {/* form fields */}
</form>
```

Pros: No backend needed, free tier available
Cons: Limited customization

### Option 2: Server Action (Next.js)

```jsx
// app/contact/actions.ts
'use server'

export async function submitContactForm(formData: FormData) {
  // Send email via SendGrid, AWS SES, etc.
  // Store in database if needed
}
```

Pros: Full control, can integrate with CRM
Cons: Requires email service setup

### Recommended: Start with Formspree, migrate later if needed

---

## Thank You State

After successful form submission, either:

**Option A**: Show inline success message (stay on page)

```
✓ Message Sent
Thank you for reaching out. We'll get back to you within 1-2 business days.
[Send Another Message] button
```

**Option B**: Redirect to thank you page

```
/contact/thank-you
```

**Recommended**: Option A (simpler, no extra page needed)

---

## Tracking & Analytics

Consider tracking:

- Form submissions (as conversion event)
- Which "Interest" option is selected most
- Bounce rate on contact page

This can be implemented via Google Analytics or similar.

---

## SEO Notes

| Field            | Content                                                                                                                                        |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Title            | Contact Us \| Softgrid Sensing                                                                                                                 |
| Meta Description | Contact Softgrid Sensing for lift monitoring, facility management, or digital twin solutions. Based in Singapore, serving clients across Asia. |
| H1               | Get in Touch                                                                                                                                   |

---

## Design Notes

- Keep the form simple and not overwhelming
- Use adequate spacing between fields
- Clear labels above each field
- Show required indicator (\*) only where necessary
- Primary CTA button should stand out
- Consider adding a subtle "We typically respond within 24 hours" note

---

## Content Needed

1. Confirm contact email address
2. Confirm phone number (if to be displayed)
3. Confirm address is correct
4. LinkedIn company page URL
5. Decision on "Book a Demo" CTA (Calendly or similar?)
