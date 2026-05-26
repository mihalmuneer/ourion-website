import { motion } from "framer-motion";
import { ClipboardList, Hammer, TrendingUp } from "lucide-react";

const icons = {
  review: ClipboardList,
  build: Hammer,
  improve: TrendingUp,
};

export default function ProcessCard({
  step,
  title,
  description,
  icon = "review",
  theme = "light",
  index = 0,
}) {
  const Icon = icons[icon] ?? ClipboardList;
  const isLight = theme === "light";

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.08 }}
      className={`flex flex-col rounded-xl border p-6 sm:p-8 ${
        isLight
          ? "border-ourion-light-border bg-ourion-light-card shadow-sm"
          : "border-ourion-border-bright bg-ourion-card"
      }`}
    >
      <span
        className={`text-xs font-bold uppercase tracking-widest ${
          isLight ? "text-ourion-blue" : "text-ourion-blue-bright"
        }`}
      >
        Step {step}
      </span>
      <div
        className={`mt-4 flex h-12 w-12 items-center justify-center rounded-xl ${
          isLight ? "bg-ourion-blue/10 text-ourion-blue" : "bg-ourion-blue/15 text-ourion-blue-bright"
        }`}
      >
        <Icon size={24} strokeWidth={1.75} />
      </div>
      <h3
        className={`mt-4 text-lg font-bold sm:text-xl ${
          isLight ? "text-ourion-ink" : "text-ourion-white"
        }`}
      >
        {title}
      </h3>
      <p
        className={`mt-3 flex-1 text-sm leading-relaxed sm:text-base ${
          isLight ? "text-ourion-ink-muted" : "text-ourion-silver"
        }`}
      >
        {description}
      </p>
    </motion.article>
  );
}
