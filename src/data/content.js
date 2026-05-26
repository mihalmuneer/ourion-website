export const CONTACT_EMAIL = "info@ourion.co.uk";

export const WEB3FORMS_ACCESS_KEY = "939191c0-d3a5-4c6f-8acd-5f6440de8000";
export const WEB3FORMS_SUBMIT_URL = "https://api.web3forms.com/submit";
export const WEB3FORMS_SUBJECT = "New Ourion Website Enquiry";

/** WhatsApp business number (country code, no + or spaces) */
export const WHATSAPP_PHONE = "447770767380";

export const WHATSAPP_MESSAGE = "Hi Ourion, I'd like to discuss a project.";

/** Canonical WhatsApp URL — use for every WhatsApp CTA */
export const WHATSAPP_LINK =
  "https://wa.me/447770767380?text=Hi%20Ourion%2C%20I%27d%20like%20to%20discuss%20a%20project.";

/** Open WhatsApp links in a new tab (for raw <a> elements) */
export const WHATSAPP_LINK_PROPS = {
  href: WHATSAPP_LINK,
  target: "_blank",
  rel: "noopener noreferrer",
};

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Solutions", to: "/solutions" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
];

export const WORKFLOW_REVIEW_MAIL = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Workflow Review enquiry")}`;

export const FREIGHTOS_WORKFLOW = [
  "Booking",
  "AWB",
  "Pickup",
  "Warehouse",
  "Dispatch",
  "Tracking",
  "Delivery",
  "Report",
];

export const FREIGHTOS_FEATURES = [
  {
    title: "Shipment Management",
    description:
      "Create and monitor consignments from booking through delivery.",
    icon: "package",
  },
  {
    title: "AWB & Label Generation",
    description:
      "Produce air waybills and printable labels for your operations team.",
    icon: "file",
  },
  {
    title: "QR / Barcode Tracking",
    description:
      "Scan at warehouse and delivery points for accurate status updates.",
    icon: "scan",
  },
  {
    title: "Customer Tracking Page",
    description:
      "Give clients a simple page to check status without calling in.",
    icon: "portal",
  },
  {
    title: "Warehouse & Delivery Updates",
    description:
      "Record handoffs, dispatch, and proof of delivery in one flow.",
    icon: "warehouse",
  },
  {
    title: "Reports & Analytics",
    description:
      "Volume, on-time performance, and branch summaries you can export.",
    icon: "chart",
  },
];
