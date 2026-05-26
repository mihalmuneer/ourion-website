import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "./Button";

export default function SectionIntro({
  label,
  title,
  description,
  primaryCta,
  primaryHref,
  secondaryCta,
  secondaryHref,
  theme = "dark",
  align = "center",
  className = "",
  showCtAs = true,
}) {
  const isLight = theme === "light";
  const alignClass =
    align === "left" ? "text-left items-start" : "text-center items-center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className={`mx-auto flex max-w-3xl flex-col gap-4 ${alignClass} ${className}`}
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
      <h2
        className={`text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem] ${
          isLight ? "text-ourion-ink" : "text-ourion-white"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`max-w-2xl text-base leading-relaxed sm:text-lg ${
            isLight ? "text-ourion-ink-muted" : "text-ourion-silver"
          }`}
        >
          {description}
        </p>
      )}
      {showCtAs && (primaryCta || secondaryCta) && (
        <div
          className={`mt-4 flex flex-col gap-3 sm:flex-row ${
            align === "left" ? "sm:justify-start" : "sm:justify-center"
          }`}
        >
          {primaryCta && primaryHref && (
            <Button href={primaryHref} size="lg">
              {primaryCta}
              <ArrowRight size={17} />
            </Button>
          )}
          {secondaryCta && secondaryHref && (
            <Button href={secondaryHref} variant="secondary" size="lg">
              {secondaryCta}
            </Button>
          )}
        </div>
      )}
    </motion.div>
  );
}
