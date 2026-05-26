import { motion } from "framer-motion";
import {
  LayoutDashboard,
  MessageSquare,
  Truck,
  Users,
} from "lucide-react";
import SectionIntro from "../ui/SectionIntro";
import { services } from "../../data/services";
import { sectionCopy } from "../../data/sectionCopy";

const iconMap = {
  operations: LayoutDashboard,
  logistics: Truck,
  crm: Users,
  whatsapp: MessageSquare,
};

export default function Solutions() {
  const copy = sectionCopy.solutions;

  return (
    <section id="solutions" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionIntro
          label={copy.label}
          title={copy.title}
          description={copy.description}
          primaryCta={copy.primaryCta}
          primaryHref={copy.primaryHref}
          secondaryCta={copy.secondaryCta}
          secondaryHref={copy.secondaryHref}
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {services.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.08 }}
                className="rounded-xl border border-ourion-border-bright bg-ourion-card p-8 transition-colors hover:border-ourion-blue/35"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg border border-ourion-blue/25 bg-ourion-blue/10 text-ourion-blue">
                  <Icon size={24} strokeWidth={1.75} />
                </div>
                <h3 className="text-xl font-bold text-ourion-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ourion-silver sm:text-base">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
