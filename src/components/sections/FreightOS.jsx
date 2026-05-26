import { motion } from "framer-motion";
import {
  BarChart3,
  ChevronRight,
  FileText,
  Package,
  QrCode,
  Globe,
  Warehouse,
} from "lucide-react";
import SectionIntro from "../ui/SectionIntro";
import FreightOSDashboard from "../ui/FreightOSDashboard";
import { FREIGHTOS_FEATURES, FREIGHTOS_WORKFLOW } from "../../data/content";
import { sectionCopy } from "../../data/sectionCopy";

const featureIcons = {
  package: Package,
  file: FileText,
  scan: QrCode,
  portal: Globe,
  warehouse: Warehouse,
  chart: BarChart3,
};

export default function FreightOS() {
  const copy = sectionCopy.freightos;

  return (
    <section id="freightos" className="bg-ourion-light py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionIntro
          label={copy.label}
          title={copy.title}
          description={copy.description}
          primaryCta={copy.primaryCta}
          primaryHref={copy.primaryHref}
          secondaryCta={copy.secondaryCta}
          secondaryHref={copy.secondaryHref}
          theme="light"
          align="left"
          className="mx-0 max-w-3xl"
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 rounded-2xl border border-ourion-light-border bg-ourion-light p-6 shadow-sm lg:p-10"
        >
          <p className="text-xs font-bold uppercase tracking-wider text-ourion-ink-soft">
            Shipment journey
          </p>
          <div className="mt-4 overflow-x-auto">
            <div className="flex min-w-[600px] items-center gap-1">
              {FREIGHTOS_WORKFLOW.map((step, i) => (
                <div key={step} className="flex flex-1 items-center">
                  <div
                    className={`flex h-10 w-full max-w-[80px] items-center justify-center rounded-lg border px-1 text-center text-[9px] font-bold uppercase leading-tight sm:text-[10px] ${
                      i === 0 || i === FREIGHTOS_WORKFLOW.length - 1
                        ? "border-ourion-blue bg-ourion-blue text-white"
                        : "border-ourion-light-border bg-white text-ourion-ink"
                    }`}
                  >
                    {step}
                  </div>
                  {i < FREIGHTOS_WORKFLOW.length - 1 && (
                    <ChevronRight
                      size={14}
                      className="shrink-0 text-ourion-ink-soft"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div
            id="freightos-features"
            className="mt-8 grid gap-4 scroll-mt-28 sm:grid-cols-2 lg:grid-cols-3"
          >
            {FREIGHTOS_FEATURES.map((feature) => {
              const Icon = featureIcons[feature.icon];
              return (
                <article
                  key={feature.title}
                  className="rounded-xl border border-ourion-light-border bg-ourion-light-card p-5 shadow-sm"
                >
                  <Icon size={22} className="text-ourion-blue" strokeWidth={1.75} />
                  <h3 className="mt-3 text-sm font-bold text-ourion-ink">
                    {feature.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-ourion-ink-muted">
                    {feature.description}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="mt-10">
            <FreightOSDashboard />
          </div>

          <p className="mt-8 text-sm text-ourion-ink-muted">
            Built for freight forwarders, cargo agents, and growing logistics
            teams.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
