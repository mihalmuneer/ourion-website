import { motion } from "framer-motion";
import {
  BarChart3,
  FileText,
  Package,
  Users,
} from "lucide-react";

const modules = [
  { label: "Operations", icon: BarChart3, active: true },
  { label: "Logistics", icon: Package, active: false },
  { label: "CRM & Sales", icon: Users, active: false },
];

const activity = [
  { label: "Quotation sent", detail: "Lead #442 · awaiting reply", status: "live" },
  { label: "Shipment updated", detail: "SH-UK-2847 · warehouse scan", status: "done" },
  { label: "Follow-up reminder", detail: "Sales · scheduled 3pm", status: "scheduled" },
  { label: "Invoice approved", detail: "Ops · order confirmed", status: "done" },
];

const statusStyles = {
  done: "bg-emerald-100 text-emerald-700",
  scheduled: "bg-amber-100 text-amber-700",
  live: "bg-blue-100 text-blue-700",
};

export default function DashboardMock({
  className = "",
  variant = "dark",
  size = "default",
}) {
  const isLight = variant === "light";
  const isHero = size === "hero";

  return (
    <div
      className={`overflow-hidden border shadow-lg ${
        isHero ? "rounded-2xl" : "rounded-xl"
      } ${
        isLight
          ? "border-ourion-light-border bg-ourion-light-card shadow-[0_20px_60px_rgba(0,0,0,0.14)]"
          : "border-ourion-border-bright bg-ourion-card shadow-[0_24px_80px_rgba(0,0,0,0.5)]"
      } ${isHero ? "min-h-[420px] lg:min-h-[480px]" : ""} ${className}`}
    >
      <div
        className={`flex items-center justify-between border-b ${
          isHero ? "px-6 py-4 lg:px-7 lg:py-5" : "px-4 py-3"
        } ${
          isLight
            ? "border-ourion-light-border bg-ourion-light-muted"
            : "border-ourion-border bg-ourion-surface"
        }`}
      >
        <span
          className={`font-semibold ${
            isHero ? "text-sm" : "text-xs"
          } ${isLight ? "text-ourion-ink-soft" : "text-ourion-silver-dim"}`}
        >
          Business overview
        </span>
        <span
          className={`rounded-full bg-ourion-blue/15 font-bold text-ourion-blue ${
            isHero ? "px-3 py-1 text-xs" : "px-2.5 py-0.5 text-[10px]"
          }`}
        >
          Today
        </span>
      </div>

      <div className={`grid ${isHero ? "lg:min-h-[380px] lg:grid-cols-2" : "lg:grid-cols-2"}`}>
        <div
          className={`border-b lg:border-b-0 lg:border-r ${
            isHero ? "p-6 lg:p-7" : "p-4"
          } ${isLight ? "border-ourion-light-border" : "border-ourion-border"}`}
        >
          <ul className={isHero ? "space-y-2" : "space-y-1.5"}>
            {modules.map((mod) => {
              const Icon = mod.icon;
              return (
                <li
                  key={mod.label}
                  className={`flex items-center gap-3 rounded-lg font-medium ${
                    isHero ? "px-4 py-3 text-base" : "px-3 py-2 text-sm"
                  } ${
                    mod.active
                      ? "bg-ourion-blue text-white"
                      : isLight
                        ? "text-ourion-ink-muted hover:bg-ourion-light-muted"
                        : "text-ourion-silver"
                  }`}
                >
                  <Icon size={isHero ? 18 : 15} />
                  {mod.label}
                </li>
              );
            })}
          </ul>
          <div
            className={`grid grid-cols-2 gap-3 ${isHero ? "mt-6" : "mt-4"}`}
          >
            {[
              { label: "Open jobs", value: "24" },
              { label: "This week", value: "48 new" },
            ].map((stat) => (
              <div
                key={stat.label}
                className={`rounded-lg border ${
                  isHero ? "p-4 lg:p-5" : "p-3"
                } ${
                  isLight
                    ? "border-ourion-light-border bg-ourion-light-muted"
                    : "border-ourion-border bg-ourion-surface"
                }`}
              >
                <p
                  className={`font-medium ${
                    isHero ? "text-xs" : "text-[10px]"
                  } ${isLight ? "text-ourion-ink-soft" : "text-ourion-silver-dim"}`}
                >
                  {stat.label}
                </p>
                <p
                  className={`font-bold ${
                    isHero ? "mt-1.5 text-2xl lg:text-3xl" : "text-lg"
                  } ${isLight ? "text-ourion-ink" : "text-ourion-white"}`}
                >
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className={isHero ? "p-6 lg:p-7" : "p-4"}>
          <p
            className={`mb-3 flex items-center gap-1.5 font-bold uppercase tracking-wider ${
              isHero ? "text-xs" : "text-[10px]"
            } ${isLight ? "text-ourion-ink-soft" : "text-ourion-silver-dim"}`}
          >
            <FileText size={isHero ? 14 : 11} />
            Recent activity
          </p>
          <ul className={isHero ? "space-y-3" : "space-y-2"}>
            {activity.map((item, i) => (
              <motion.li
                key={item.label}
                initial={{ opacity: 0, x: 6 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className={`flex items-start justify-between gap-3 rounded-lg border ${
                  isHero ? "px-4 py-3" : "px-3 py-2"
                } ${
                  isLight
                    ? "border-ourion-light-border bg-ourion-light-muted"
                    : "border-ourion-border bg-ourion-surface"
                }`}
              >
                <div>
                  <p
                    className={`font-semibold ${
                      isHero ? "text-sm" : "text-xs"
                    } ${isLight ? "text-ourion-ink" : "text-ourion-white"}`}
                  >
                    {item.label}
                  </p>
                  <p
                    className={`mt-0.5 ${
                      isHero ? "text-xs" : "text-[10px]"
                    } ${isLight ? "text-ourion-ink-soft" : "text-ourion-silver-dim"}`}
                  >
                    {item.detail}
                  </p>
                </div>
                <span
                  className={`shrink-0 rounded font-bold uppercase ${
                    isHero ? "px-2 py-1 text-[10px]" : "px-1.5 py-0.5 text-[9px]"
                  } ${statusStyles[item.status]}`}
                >
                  {item.status}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
