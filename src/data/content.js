export const CONTACT_EMAIL = "info@ourion.co.uk";

export const WEB3FORMS_ACCESS_KEY = "939191c0-d3a5-4c6f-8acd-5f6440de8000";
export const WEB3FORMS_SUBMIT_URL = "https://api.web3forms.com/submit";
export const WEB3FORMS_SUBJECT = "New Ourion Website Enquiry";

/** Update with your business WhatsApp number (country code, no + or spaces) */
export const WHATSAPP_PHONE = "447000000000";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent("Hi Ourion, I'd like to discuss a project.")}`;

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
