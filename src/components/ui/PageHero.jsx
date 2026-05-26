import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "./Button";

export default function PageHero({
  label,
  title,
  description,
  primaryCta,
  primaryHref,
  primaryTo,
  secondaryCta,
  secondaryHref,
  secondaryTo,
  theme = "dark",
  align = "center",
  className = "",
  children,
}) {
  const isLight = theme === "light";
  const alignClass =
    align === "left"
      ? "text-left items-start"
      : "mx-auto text-center items-center";

  return (
    <section
      className={`border-b border-ourion-border pt-[5.5rem] pb-14 sm:pt-28 sm:pb-16 lg:pb-20 ${
        isLight ? "bg-ourion-light" : "bg-ourion-black"
      } ${className}`}
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className={`flex max-w-3xl flex-col gap-4 ${alignClass}`}
        >
          {label && (
            <span
              className={`text-xs font-bold uppercase tracking-[0.2em] ${
                isLight ? "text-ourion-blue" : "text-ourion-blue-bright"
              }`}
            >
              {label}
            </span>
          )}
          <h1
            className={`text-[1.75rem] font-bold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl ${
              isLight ? "text-ourion-ink" : "text-ourion-white"
            }`}
          >
            {title}
          </h1>
          {description && (
            <p
              className={`max-w-2xl text-base leading-relaxed sm:text-lg ${
                isLight ? "text-ourion-ink-muted" : "text-ourion-silver"
              }`}
            >
              {description}
            </p>
          )}
          {(primaryCta || secondaryCta) && (
            <div
              className={`mt-2 flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap ${
                align === "left" ? "sm:justify-start" : "sm:justify-center"
              }`}
            >
              {primaryCta && (primaryHref || primaryTo) && (
                <Button
                  href={primaryHref}
                  to={primaryTo}
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  {primaryCta}
                  <ArrowRight size={17} />
                </Button>
              )}
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
          )}
          {children}
        </motion.div>
      </div>
    </section>
  );
}
