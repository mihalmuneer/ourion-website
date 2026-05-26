import { motion } from "framer-motion";
import { Globe2, Handshake, Layers, ShieldCheck } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import { WHY_OURION } from "../../data/content";

const icons = [Layers, ShieldCheck, Globe2, Handshake];

export default function WhyOurion() {
  return (
    <section id="why-ourion" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          <SectionHeading
            label="Why work with us"
            title="Practical software, explained in plain language"
            description="We talk with business owners who want less chaos—not more tech jargon. You will always know what we are building, why, and when."
            align="left"
            className="mx-0 max-w-none"
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {WHY_OURION.map((item, i) => {
              const Icon = icons[i];
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="rounded-xl border border-ourion-light-border bg-ourion-light-card p-5 shadow-sm"
                >
                  <Icon size={22} className="text-ourion-blue" />
                  <h3 className="mt-3 font-bold text-ourion-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ourion-ink-muted">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
