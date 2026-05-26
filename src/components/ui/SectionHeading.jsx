import { motion } from "framer-motion";

export default function SectionHeading({
  label,
  title,
  description,
  align = "center",
  theme = "dark",
  className = "",
}) {
  const alignClass =
    align === "left" ? "text-left items-start" : "text-center items-center";

  const isLight = theme === "light";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={`mx-auto flex max-w-3xl flex-col gap-3 ${alignClass} ${className}`}
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
    </motion.div>
  );
}
