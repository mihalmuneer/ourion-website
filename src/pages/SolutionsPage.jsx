import Button from "../components/ui/Button";
import CardGrid from "../components/ui/CardGrid";
import CTASection from "../components/ui/CTASection";
import PageHero from "../components/ui/PageHero";
import ProcessCard from "../components/ui/ProcessCard";
import ServiceCard from "../components/ui/ServiceCard";
import { CONTACT_EMAIL, WHATSAPP_LINK } from "../data/content";
import { packages, PACKAGES_PRICING_NOTE } from "../data/packages";
import { processSteps } from "../data/process";
import { services } from "../data/services";

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        label="Solutions"
        title="Your business deserves better systems."
        description="Whether you need operations software, CRM, logistics tracking, WhatsApp workflows, dashboards, or custom internal tools, Ourion designs systems around how your business actually works."
        primaryCta="Discuss a Project"
        primaryHref={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Project discussion")}`}
        secondaryCta="Request a Workflow Review"
        secondaryHref={WHATSAPP_LINK}
      />

      <section id="process" className="scroll-mt-24 border-b border-ourion-border bg-ourion-light py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-ourion-blue">
            Our process
          </p>
          <h2 className="mt-3 text-2xl font-bold text-ourion-ink sm:text-3xl lg:text-4xl">
            Review → Build → Improve
          </h2>
          <p className="mt-4 max-w-2xl text-base text-ourion-ink-muted sm:text-lg">
            A clear path from understanding your workflows to building systems
            that keep improving as you grow.
          </p>
          <CardGrid columns={3} className="mt-12">
            {processSteps.map((step, i) => (
              <ProcessCard key={step.title} {...step} index={i} theme="light" />
            ))}
          </CardGrid>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-ourion-blue-bright">
            What we build
          </p>
          <h2 className="mt-3 text-2xl font-bold text-ourion-white sm:text-3xl lg:text-4xl">
            Solution areas
          </h2>
          <CardGrid columns={2} className="mt-12 lg:gap-8">
            {services.map((service, i) => (
              <ServiceCard key={service.title} service={service} index={i} />
            ))}
          </CardGrid>
        </div>
      </section>

      <section className="border-t border-ourion-border bg-ourion-surface py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-ourion-blue-bright">
            Engagement models
          </p>
          <h2 className="mt-3 text-2xl font-bold text-ourion-white sm:text-3xl">
            How we work with you
          </h2>
          <p className="mt-4 max-w-2xl text-ourion-silver">
            Scoped individually for your business—no fixed public pricing or
            one-size packages.
          </p>

          <CardGrid columns={3} className="mt-12">
            {packages.map((pkg, i) => (
              <article
                key={pkg.name}
                className={`relative flex flex-col rounded-xl border p-6 lg:p-8 ${
                  pkg.highlighted
                    ? "border-ourion-blue/50 bg-ourion-card shadow-[0_0_40px_rgba(43,140,238,0.12)]"
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
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ourion-silver sm:text-base">
                  {pkg.description}
                </p>
                <Button
                  href={
                    pkg.opensWhatsApp
                      ? WHATSAPP_LINK
                      : `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(pkg.mailSubject)}`
                  }
                  variant={pkg.highlighted ? "primary" : "secondary"}
                  className="mt-8 w-full"
                >
                  {pkg.cta}
                </Button>
              </article>
            ))}
          </CardGrid>

          <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-ourion-silver-dim sm:text-base">
            {PACKAGES_PRICING_NOTE}
          </p>
        </div>
      </section>

      <CTASection
        title="Not sure where to start?"
        description="Begin with a workflow review. We will map bottlenecks and recommend the right systems to build first."
        primaryHref={WHATSAPP_LINK}
        secondaryCta="View active builds"
        secondaryTo="/projects"
      />
    </>
  );
}
