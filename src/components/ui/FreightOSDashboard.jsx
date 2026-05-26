import { motion } from "framer-motion";
import { Package, Search } from "lucide-react";

export default function FreightOSDashboard() {
  return (
    <div className="overflow-hidden rounded-xl border border-ourion-light-border bg-ourion-light-card shadow-[0_8px_40px_rgba(26,29,38,0.08)]">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-ourion-light-border bg-ourion-light-muted px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-ourion-blue text-sm font-bold text-white">
            F
          </div>
          <div>
            <p className="text-sm font-bold text-ourion-ink">FreightOS</p>
            <p className="text-xs text-ourion-ink-soft">Operations dashboard</p>
          </div>
        </div>
        <div className="flex items-center gap-2 rounded-lg border border-ourion-light-border bg-white px-3 py-2">
          <Search size={14} className="text-ourion-ink-soft" />
          <span className="text-xs text-ourion-ink-soft">Search AWB or customer…</span>
        </div>
      </div>

      <div className="grid gap-4 p-5 sm:grid-cols-3">
        {[
          { label: "Active shipments", value: "142", change: "+8 today" },
          { label: "At warehouse", value: "38", change: "Awaiting dispatch" },
          { label: "Delivered today", value: "67", change: "On schedule" },
        ].map((kpi) => (
          <div
            key={kpi.label}
            className="rounded-lg border border-ourion-light-border bg-ourion-light-muted p-4"
          >
            <p className="text-xs font-medium text-ourion-ink-soft">{kpi.label}</p>
            <p className="mt-1 text-2xl font-bold text-ourion-ink">{kpi.value}</p>
            <p className="mt-1 text-xs font-medium text-ourion-blue">{kpi.change}</p>
          </div>
        ))}
      </div>

      <div className="border-t border-ourion-light-border px-5 pb-5">
        <p className="py-3 text-xs font-bold uppercase tracking-wider text-ourion-ink-soft">
          Recent shipments
        </p>
        <div className="space-y-2">
          {[
            {
              awb: "AWB-UK-9021",
              route: "Heathrow → Doha",
              stage: "Warehouse",
              color: "bg-amber-100 text-amber-800",
            },
            {
              awb: "AWB-QA-4412",
              route: "Doha → Riyadh",
              stage: "In transit",
              color: "bg-blue-100 text-blue-800",
            },
            {
              awb: "AWB-IN-7780",
              route: "Mumbai → Dubai",
              stage: "Delivered",
              color: "bg-emerald-100 text-emerald-800",
            },
          ].map((row, i) => (
            <motion.div
              key={row.awb}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="flex items-center justify-between rounded-lg border border-ourion-light-border bg-white px-4 py-3"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-ourion-light-muted text-ourion-blue">
                  <Package size={16} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-ourion-ink">{row.awb}</p>
                  <p className="text-xs text-ourion-ink-soft">{row.route}</p>
                </div>
              </div>
              <span
                className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase ${row.color}`}
              >
                {row.stage}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
