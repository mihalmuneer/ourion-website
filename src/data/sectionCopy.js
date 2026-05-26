import { CONTACT_EMAIL } from "./content";

const mail = (subject) =>
  `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`;

export const sectionCopy = {
  solutions: {
    label: "Solutions",
    title: "Your business deserves better systems.",
    description:
      "Whether you need operations software, CRM, logistics tracking, WhatsApp workflows, dashboards, or custom internal tools, Ourion designs systems around how your business actually works.",
    primaryCta: "Explore Solutions",
    primaryHref: "#solutions",
    secondaryCta: "Discuss a Project",
    secondaryHref: mail("Project discussion"),
  },
  process: {
    label: "Process",
    title: "We build the systems behind growing businesses.",
    description:
      "We review your workflows, design the right solution, build the system, and support it as your business grows. No overcomplication. No random tools. Just practical systems that improve daily operations.",
    primaryCta: "See Our Process",
    primaryHref: "#process",
    secondaryCta: "Request a Workflow Review",
    secondaryHref: mail("Workflow Review enquiry"),
  },
  freightos: {
    label: "What We Build",
    title: "Clear logistics operations from booking to delivery.",
    description:
      "FreightOS helps cargo and logistics teams manage shipments, AWB, QR tracking, customer updates, warehouse workflows, delivery status, and reports from one simple operating system.",
    primaryCta: "Request FreightOS Demo",
    primaryHref: mail("FreightOS Demo enquiry"),
    secondaryCta: "View Features",
    secondaryHref: "#freightos-features",
  },
  projects: {
    label: "Active Builds & Ventures",
    title: "Real builds. Real operations. Honest progress.",
    description:
      "A look at Ourion's active builds, ventures, and operational systems across logistics, automation, automotive, and interior design.",
    primaryCta: "View Active Builds",
    primaryHref: "#projects",
    secondaryCta: "Start Your Project",
    secondaryHref: mail("New project enquiry"),
  },
  contact: {
    label: "Contact",
    title: "Have a business process that feels messy?",
    description:
      "Tell us what you currently manage through WhatsApp, Excel, calls, or manual follow-ups. We'll help you turn it into a clear system.",
    primaryCta: "Request a Workflow Review",
    primaryHref: mail("Workflow Review enquiry"),
    secondaryCta: "WhatsApp Ourion",
    secondaryHref: null,
  },
};
