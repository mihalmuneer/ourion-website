import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "./Button";

export default function CTASection({
  label = "Get started",
  title = "Ready to turn messy processes into clear systems?",
  description = "Tell us what you manage through chats, spreadsheets, or manual follow-ups. We will help you map a practical path forward.",
  primaryCta = "Request a Workflow Review",
  primaryHref,
  primaryTo = "/contact",
  secondaryCta,
  secondaryHref,
  secondaryTo,
  theme = "dark",
}) {
  const isLight = theme === "light";

  return (
    <section
      className={`py-20 lg:py-28 ${isLight ? "bg-ourion-light" : "bg-ourion-black"}`}
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`rounded-2xl border px-6 py-12 text-center sm:px-10 sm:py-14 lg:px-16 ${
            isLight
              ? "border-ourion-light-border bg-ourion-light-card shadow-sm"
              : "border-ourion-border-bright bg-gradient-to-b from-ourion-surface to-ourion-card"
          }`}
        >
          {label && (
            <p
              className={`text-xs font-bold uppercase tracking-[0.2em] ${
                isLight ? "text-ourion-blue" : "text-ourion-blue-bright"
              }`}
            >
              {label}
            </p>
          )}
          <h2
            className={`mt-3 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl ${
              isLight ? "text-ourion-ink" : "text-ourion-white"
            }`}
          >
            {title}
          </h2>
          <p
            className={`mx-auto mt-4 max-w-2xl text-base leading-relaxed sm:text-lg ${
              isLight ? "text-ourion-ink-muted" : "text-ourion-silver"
            }`}
          >
            {description}
          </p>
          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:justify-center">
            <Button
              href={primaryHref}
              to={primaryTo}
              size="lg"
              className="w-full sm:w-auto"
            >
              {primaryCta}
              <ArrowRight size={18} />
            </Button>
            {secondaryCta && (secondaryHref || secondaryTo) && (
              <Button
                href={secondaryHref}
                to={secondaryTo}
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                {secondaryCta}
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
