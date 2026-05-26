import { motion } from "framer-motion";
import { ClipboardList, Hammer, TrendingUp } from "lucide-react";
import SectionIntro from "../ui/SectionIntro";
import { processSteps } from "../../data/process";
import { sectionCopy } from "../../data/sectionCopy";

const icons = {
  review: ClipboardList,
  build: Hammer,
  improve: TrendingUp,
};

export default function HowWeWork() {
  const copy = sectionCopy.process;

  return (
    <section id="process" className="bg-ourion-light py-24 lg:py-32">
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
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {processSteps.map((step, i) => {
            const Icon = icons[step.icon];
            return (
              <motion.article
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.1 }}
                className="relative flex flex-col rounded-xl border border-ourion-light-border bg-ourion-light-card p-8 shadow-sm"
              >
                <span className="text-xs font-bold uppercase tracking-widest text-ourion-blue">
                  Step {step.step}
                </span>
                <div className="mt-5 flex h-12 w-12 items-center justify-center rounded-xl bg-ourion-blue/10 text-ourion-blue">
                  <Icon size={24} strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 text-xl font-bold text-ourion-ink">
                  {step.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ourion-ink-muted sm:text-base">
                  {step.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
