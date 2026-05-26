import { motion } from "framer-motion";
import {
  Bell,
  Calendar,
  ChevronRight,
  Filter,
  Inbox,
  MessageSquare,
  Truck,
  UserCheck,
} from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import {
  CONTACT_EMAIL,
  WHATSAPP_FEATURES,
  WHATSAPP_WORKFLOW,
} from "../../data/content";

const featureIcons = {
  inbox: Inbox,
  calendar: Calendar,
  filter: Filter,
  bell: Bell,
  truck: Truck,
  handover: UserCheck,
};

export default function WhatsAppAutomation() {
  return (
    <section id="whatsapp" className="border-y border-ourion-border bg-ourion-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div className="max-w-xl">
            <SectionHeading
              label="Practical automation"
              title="WhatsApp workflows that connect to your business"
              description="A focused automation offer—not our whole story. We help you turn WhatsApp into structured enquiries, bookings, and follow-ups linked to CRM and operations."
              align="left"
              className="mx-0 max-w-none"
            />

            <div className="mt-8 rounded-xl border border-ourion-border bg-ourion-card px-5 py-4">
              <p className="text-sm font-semibold text-ourion-white">
                Part of the Build phase
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-ourion-silver">
                WhatsApp automation is one layer inside a wider system—we do not
                sell chatbots in isolation. It connects to how your team already
                works.
              </p>
            </div>

            <div className="mt-8">
              <Button
                href={`mailto:${CONTACT_EMAIL}?subject=WhatsApp%20Automation%20Enquiry`}
              >
                Discuss WhatsApp Automation
              </Button>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-xl border border-ourion-light-border bg-ourion-light-card shadow-md"
          >
            <div className="flex items-center justify-between border-b border-ourion-light-border bg-ourion-light-muted px-4 py-3">
              <div className="flex items-center gap-2">
                <MessageSquare size={16} className="text-emerald-600" />
                <span className="text-sm font-semibold text-ourion-ink">
                  WhatsApp · business inbox
                </span>
              </div>
              <span className="rounded-full bg-ourion-blue/10 px-2.5 py-0.5 text-[10px] font-bold text-ourion-blue">
                Linked to CRM
              </span>
            </div>

            <div className="grid sm:grid-cols-2">
              <div className="space-y-2 border-b border-ourion-light-border p-4 sm:border-b-0 sm:border-r">
                <p className="text-xs font-medium text-ourion-ink-soft">
                  Customer chat
                </p>
                {[
                  { from: "customer", text: "Hi, can I book a detail this Friday?" },
                  { from: "system", text: "Thanks — checking availability for Friday…" },
                  { from: "system", text: "Booking saved · team notified" },
                ].map((msg, i) => (
                  <div
                    key={i}
                    className={`rounded-lg px-3 py-2 text-xs ${
                      msg.from === "customer"
                        ? "mr-3 bg-ourion-light-muted text-ourion-ink-muted"
                        : "ml-3 border border-ourion-blue/20 bg-blue-50 text-ourion-ink"
                    }`}
                  >
                    {msg.text}
                  </div>
                ))}
              </div>

              <div className="p-4">
                <p className="text-xs font-medium text-ourion-ink-soft">
                  What happens next
                </p>
                <ul className="mt-2 space-y-2">
                  {[
                    "Staff alert · front desk",
                    "CRM entry · new lead",
                    "Follow-up · tomorrow 10am",
                  ].map((action) => (
                    <li
                      key={action}
                      className="flex items-center gap-2 rounded-lg border border-ourion-light-border bg-ourion-light-muted px-3 py-2 text-xs text-ourion-ink-muted"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-ourion-blue" />
                      {action}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 overflow-x-auto rounded-xl border border-ourion-light-border bg-ourion-light-card p-6 shadow-sm lg:p-8"
        >
          <p className="mb-4 text-xs font-bold uppercase tracking-wider text-ourion-ink-soft">
            How a message becomes work
          </p>
          <div className="flex min-w-[520px] items-center gap-1">
            {WHATSAPP_WORKFLOW.map((step, i) => (
              <div key={step} className="flex flex-1 items-center">
                <div
                  className={`flex h-10 w-full max-w-[96px] items-center justify-center rounded-lg border px-1 text-center text-[9px] font-bold uppercase leading-tight sm:text-[10px] ${
                    i === 0 || i === WHATSAPP_WORKFLOW.length - 1
                      ? "border-ourion-blue/40 bg-ourion-blue/10 text-ourion-blue"
                      : "border-ourion-light-border bg-ourion-light-muted text-ourion-ink"
                  }`}
                >
                  {step}
                </div>
                {i < WHATSAPP_WORKFLOW.length - 1 && (
                  <ChevronRight size={14} className="shrink-0 text-ourion-ink-soft" />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {WHATSAPP_FEATURES.map((feature, i) => {
            const Icon = featureIcons[feature.icon];
            return (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="rounded-xl border border-ourion-light-border bg-ourion-light-card p-5 shadow-sm"
              >
                <Icon size={20} className="text-ourion-blue" />
                <h3 className="mt-3 text-sm font-bold text-ourion-ink">
                  {feature.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-ourion-ink-muted">
                  {feature.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
