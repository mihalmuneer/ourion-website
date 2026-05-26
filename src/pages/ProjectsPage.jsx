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
import Button from "../components/ui/Button";
import CardGrid from "../components/ui/CardGrid";
import CTASection from "../components/ui/CTASection";
import PageHero from "../components/ui/PageHero";
import ProjectCard from "../components/ui/ProjectCard";
import FreightOSDashboard from "../components/ui/FreightOSDashboard";
import {
  CONTACT_EMAIL,
  FREIGHTOS_FEATURES,
  FREIGHTOS_WORKFLOW,
  WORKFLOW_REVIEW_MAIL,
} from "../data/content";
import { FREIGHTOS_BUILD } from "../data/freightos";
import { projects } from "../data/projects";

const featureIcons = {
  package: Package,
  file: FileText,
  scan: QrCode,
  portal: Globe,
  warehouse: Warehouse,
  chart: BarChart3,
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        label="Projects"
        title="Real builds. Real operations. Honest progress."
        description="A look at Ourion's active builds, ventures, and operational systems across logistics, automation, automotive, and interior design."
        primaryCta="Start Your Project"
        primaryHref={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("New project enquiry")}`}
        secondaryCta="Request a Workflow Review"
        secondaryHref={WORKFLOW_REVIEW_MAIL}
      />

      <section className="border-b border-ourion-border bg-ourion-light py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-ourion-blue">
            Featured build
          </p>
          <h2 className="mt-3 text-2xl font-bold text-ourion-ink sm:text-3xl lg:text-4xl">
            {FREIGHTOS_BUILD.name}
          </h2>
          <p className="mt-2 text-sm font-semibold text-ourion-blue">
            {FREIGHTOS_BUILD.label}
          </p>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-ourion-ink-muted sm:text-lg">
            {FREIGHTOS_BUILD.description}
          </p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 overflow-hidden rounded-2xl border border-ourion-light-border bg-white p-5 shadow-sm sm:p-8"
          >
            <p className="text-xs font-bold uppercase tracking-wider text-ourion-ink-soft">
              Workflow
            </p>
            <div className="mt-4 -mx-1 overflow-x-auto pb-1">
              <div className="flex min-w-0 items-center gap-1 sm:min-w-[640px]">
                {FREIGHTOS_WORKFLOW.map((step, i) => (
                  <div key={step} className="flex flex-1 items-center">
                    <div
                      className={`flex h-10 min-w-[4.5rem] flex-1 items-center justify-center rounded-lg border px-1 text-center text-[9px] font-bold uppercase leading-tight sm:text-[10px] ${
                        i === 0 || i === FREIGHTOS_WORKFLOW.length - 1
                          ? "border-ourion-blue bg-ourion-blue text-white"
                          : "border-ourion-light-border bg-ourion-light text-ourion-ink"
                      }`}
                    >
                      {step}
                    </div>
                    {i < FREIGHTOS_WORKFLOW.length - 1 && (
                      <ChevronRight
                        size={14}
                        className="shrink-0 text-ourion-ink-soft"
                        aria-hidden
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <CardGrid columns={3} className="mt-8">
              {FREIGHTOS_FEATURES.map((feature, i) => {
                const Icon = featureIcons[feature.icon];
                return (
                  <article
                    key={feature.title}
                    className="rounded-xl border border-ourion-light-border bg-ourion-light-card p-5"
                  >
                    <Icon size={22} className="text-ourion-blue" strokeWidth={1.75} />
                    <h3 className="mt-3 text-sm font-bold text-ourion-ink">
                      {feature.title}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-ourion-ink-muted sm:text-sm">
                      {feature.description}
                    </p>
                  </article>
                );
              })}
            </CardGrid>

            <div className="mt-8 min-w-0">
              <FreightOSDashboard />
            </div>

            <p className="mt-6 text-sm text-ourion-ink-muted">
              Concept and system in development—not a finished product launch.
            </p>
            <Button
              href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("FreightOS Demo enquiry")}`}
              className="mt-6"
            >
              Request FreightOS Demo
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-ourion-blue-bright">
            Active builds & ventures
          </p>
          <h2 className="mt-3 text-2xl font-bold text-ourion-white sm:text-3xl">
            Systems and ventures in progress
          </h2>
          <p className="mt-4 max-w-2xl text-ourion-silver">
            Honest snapshot of work underway—not completed case studies.
          </p>
          <CardGrid columns={2} className="mt-12">
            {projects.map((project, i) => (
              <ProjectCard
                key={project.name}
                project={project}
                index={i}
                theme="dark"
              />
            ))}
          </CardGrid>
        </div>
      </section>

      <CTASection
        title="Have a build or venture in mind?"
        description="Tell us what you are structuring, operating, or scaling. We will be direct about what is in scope and what is in progress."
        primaryHref={WORKFLOW_REVIEW_MAIL}
        secondaryCta="Contact us"
        secondaryTo="/contact"
      />
    </>
  );
}
