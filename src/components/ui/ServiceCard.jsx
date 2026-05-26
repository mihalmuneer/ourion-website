import { motion } from "framer-motion";
import {
  BarChart3,
  LayoutDashboard,
  MessageSquare,
  Settings2,
  Truck,
  Users,
} from "lucide-react";

const iconMap = {
  operations: LayoutDashboard,
  logistics: Truck,
  crm: Users,
  whatsapp: MessageSquare,
  dashboard: BarChart3,
  custom: Settings2,
};

export default function ServiceCard({ service, index = 0, theme = "dark" }) {
  const Icon = iconMap[service.icon] ?? LayoutDashboard;
  const isLight = theme === "light";

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.06 }}
      className={`rounded-xl border p-6 sm:p-8 ${
        isLight
          ? "border-ourion-light-border bg-ourion-light-card shadow-sm"
          : "border-ourion-border-bright bg-ourion-card transition-colors hover:border-ourion-blue/35"
      }`}
    >
      <div
        className={`mb-5 flex h-12 w-12 items-center justify-center rounded-lg border ${
          isLight
            ? "border-ourion-blue/20 bg-ourion-blue/10 text-ourion-blue"
            : "border-ourion-blue/25 bg-ourion-blue/10 text-ourion-blue-bright"
        }`}
      >
        <Icon size={24} strokeWidth={1.75} />
      </div>
      <h3
        className={`text-lg font-bold sm:text-xl ${
          isLight ? "text-ourion-ink" : "text-ourion-white"
        }`}
      >
        {service.title}
      </h3>
      <p
        className={`mt-3 text-sm leading-relaxed sm:text-base ${
          isLight ? "text-ourion-ink-muted" : "text-ourion-silver"
        }`}
      >
        {service.description}
      </p>
    </motion.article>
  );
}
