import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import { CONTACT_EMAIL } from "../../data/content";
import { packages, PACKAGES_PRICING_NOTE } from "../../data/packages";

export default function Packages() {
  return (
    <section id="packages" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          label="Engagement models"
          title="Review → Build → Improve"
          description="Start with a workflow review, move into a custom build, then stay with us as your systems evolve—scoped and priced for your business, not a one-size package."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {packages.map((pkg, i) => (
            <motion.article
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`relative flex flex-col rounded-xl border p-6 lg:p-8 ${
                pkg.highlighted
                  ? "border-ourion-blue/50 bg-ourion-card shadow-[0_0_40px_rgba(45,156,255,0.1)]"
                  : "border-ourion-border-bright bg-ourion-card"
              }`}
            >
              {pkg.highlighted && (
                <span className="absolute -top-3 left-6 rounded-full bg-ourion-blue px-3 py-0.5 text-xs font-bold text-ourion-black">
                  Core engagement
                </span>
              )}

              <h3 className="text-xl font-bold text-ourion-white">{pkg.name}</h3>
              <p className="mt-2 text-sm font-semibold text-ourion-blue-bright">
                Custom project pricing
              </p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ourion-silver">
                {pkg.description}
              </p>

              <Button
                href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(pkg.mailSubject)}`}
                variant={pkg.highlighted ? "primary" : "secondary"}
                className="mt-8 w-full"
              >
                {pkg.cta}
              </Button>
            </motion.article>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-ourion-silver-dim sm:text-base">
          {PACKAGES_PRICING_NOTE}
        </p>
      </div>
    </section>
  );
}
