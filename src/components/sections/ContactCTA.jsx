import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import Button from "../ui/Button";
import { CONTACT_EMAIL, WHATSAPP_LINK } from "../../data/content";
import { sectionCopy } from "../../data/sectionCopy";

export default function ContactCTA() {
  const copy = sectionCopy.contact;

  return (
    <section id="contact" className="bg-ourion-light py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-ourion-light-border bg-ourion-light-card px-6 py-14 text-center shadow-sm sm:px-12 sm:py-16 lg:px-16"
        >
          <p className="text-xs font-bold uppercase tracking-wider text-ourion-blue">
            {copy.label}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ourion-ink sm:text-4xl">
            {copy.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-ourion-ink-muted sm:text-lg">
            {copy.description}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href={copy.primaryHref} size="lg">
              {copy.primaryCta}
              <ArrowRight size={18} />
            </Button>
            <Button
              href={WHATSAPP_LINK}
              variant="secondary"
              size="lg"
              className="!border-emerald-600/40 !bg-emerald-50 !text-emerald-800 hover:!bg-emerald-100"
            >
              <MessageCircle size={18} />
              {copy.secondaryCta}
            </Button>
          </div>

          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-6 inline-block text-sm text-ourion-ink-soft transition-colors hover:text-ourion-blue"
          >
            {CONTACT_EMAIL}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
