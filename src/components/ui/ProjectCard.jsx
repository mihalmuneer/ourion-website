import { motion } from "framer-motion";

export default function ProjectCard({ project, index = 0, theme = "light" }) {
  const isLight = theme === "light";

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.08 }}
      className={`flex flex-col rounded-xl border p-6 ${
        isLight
          ? "border-ourion-light-border bg-ourion-light-card shadow-sm"
          : "border-ourion-border-bright bg-ourion-card"
      }`}
    >
      <div className="flex flex-wrap items-center gap-2">
        <span
          className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide ${
            isLight
              ? "bg-ourion-light-muted text-ourion-ink-muted"
              : "bg-ourion-elevated text-ourion-silver-dim"
          }`}
        >
          {project.region}
        </span>
        <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-[10px] font-semibold text-amber-800">
          In progress
        </span>
      </div>
      <h3
        className={`mt-4 text-xl font-bold ${
          isLight ? "text-ourion-ink" : "text-ourion-white"
        }`}
      >
        {project.name}
      </h3>
      <p
        className={`mt-2 text-sm font-medium ${
          isLight ? "text-ourion-blue" : "text-ourion-blue-bright"
        }`}
      >
        {project.label}
      </p>
      <p
        className={`mt-4 flex-1 text-sm leading-relaxed ${
          isLight ? "text-ourion-ink-muted" : "text-ourion-silver"
        }`}
      >
        {project.description}
      </p>
    </motion.article>
  );
}
