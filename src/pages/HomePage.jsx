import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import Button from "../components/ui/Button";
import CardGrid from "../components/ui/CardGrid";
import CTASection from "../components/ui/CTASection";
import ProcessCard from "../components/ui/ProcessCard";
import ProjectCard from "../components/ui/ProjectCard";
import ServiceCard from "../components/ui/ServiceCard";
import DashboardMock from "../components/ui/DashboardMock";
import { PROCESS_LINE, PROCESS_TAGLINE } from "../data/brand";
import { WORKFLOW_REVIEW_MAIL } from "../data/content";
import { FREIGHTOS_BUILD } from "../data/freightos";
import { processSteps } from "../data/process";
import { projects } from "../data/projects";
import { services } from "../data/services";

export default function HomePage() {
  const previewServices = services.slice(0, 4);
  const previewProjects = projects.slice(0, 2);

  return (
    <>
      <section className="hero-grid relative overflow-hidden pt-[5.5rem] pb-16 sm:pt-28 sm:pb-20 lg:pb-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-1/2 h-[500px] w-full max-w-[1100px] -translate-x-1/2 rounded-full bg-ourion-blue/10 blur-[120px]" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-5 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-ourion-blue-bright">
                {PROCESS_LINE}
              </p>
              <h1 className="text-[1.85rem] font-bold leading-[1.08] tracking-tight text-ourion-white sm:text-4xl lg:text-5xl xl:text-[3.25rem]">
                From chaos to clarity.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-ourion-silver sm:text-lg">
                Ourion helps growing businesses replace scattered chats,
                spreadsheets, and manual processes with clear software systems
                for operations, sales, logistics, customer communication, and
                reporting.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button href={WORKFLOW_REVIEW_MAIL} size="lg" className="w-full sm:w-auto">
                  Start With a Workflow Review
                  <ArrowRight size={18} />
                </Button>
                <Button to="/solutions" variant="secondary" size="lg" className="w-full sm:w-auto">
                  See What We Build
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="min-w-0"
            >
              <DashboardMock variant="light" size="hero" />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-12 rounded-2xl border border-ourion-border-bright/50 bg-gradient-to-b from-ourion-surface/80 to-ourion-black/40 px-5 py-5 backdrop-blur-md sm:px-8 sm:py-6"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
                {PROCESS_LINE.split("→").map((part, i, arr) => (
                  <span key={part} className="flex items-center gap-1.5">
                    <span className="text-xs font-bold uppercase tracking-wide text-ourion-white sm:text-sm">
                      {part.trim()}
                    </span>
                    {i < arr.length - 1 && (
                      <ChevronRight size={14} className="text-ourion-blue-bright" aria-hidden />
                    )}
                  </span>
                ))}
              </div>
              <p className="text-center text-sm text-ourion-silver sm:text-right">
                {PROCESS_TAGLINE}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-t border-ourion-border bg-ourion-light py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-ourion-blue">
                How we work
              </p>
              <h2 className="mt-2 text-2xl font-bold text-ourion-ink sm:text-3xl">
                Review → Build → Improve
              </h2>
            </div>
            <Button to="/solutions#process" variant="secondary" size="sm" className="w-full sm:w-auto">
              See full process
            </Button>
          </div>
          <CardGrid columns={3} className="mt-10">
            {processSteps.map((step, i) => (
              <ProcessCard key={step.title} {...step} index={i} theme="light" />
            ))}
          </CardGrid>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-ourion-blue-bright">
                Solutions
              </p>
              <h2 className="mt-2 text-2xl font-bold text-ourion-white sm:text-3xl">
                Systems for real operations
              </h2>
            </div>
            <Button to="/solutions" variant="secondary" size="sm" className="w-full sm:w-auto">
              Explore solutions
            </Button>
          </div>
          <CardGrid columns={2} className="mt-10">
            {previewServices.map((service, i) => (
              <ServiceCard key={service.title} service={service} index={i} />
            ))}
          </CardGrid>
        </div>
      </section>

      <section className="border-t border-ourion-border bg-ourion-light py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-ourion-blue">
                Active builds
              </p>
              <h2 className="mt-2 text-2xl font-bold text-ourion-ink sm:text-3xl">
                Featured work in progress
              </h2>
            </div>
            <Button to="/projects" variant="secondary" size="sm" className="w-full sm:w-auto">
              View all projects
            </Button>
          </div>

          <article className="mt-10 rounded-xl border border-ourion-blue/25 bg-white p-6 shadow-sm sm:p-8">
            <span className="rounded-full bg-ourion-blue/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-ourion-blue">
              Featured build
            </span>
            <h3 className="mt-4 text-2xl font-bold text-ourion-ink">{FREIGHTOS_BUILD.name}</h3>
            <p className="mt-1 text-sm font-medium text-ourion-blue">{FREIGHTOS_BUILD.label}</p>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ourion-ink-muted sm:text-base">
              {FREIGHTOS_BUILD.description}
            </p>
            <Button to="/projects" className="mt-6" size="sm">
              View FreightOS
            </Button>
          </article>

          <CardGrid columns={2} className="mt-6">
            {previewProjects.map((project, i) => (
              <ProjectCard key={project.name} project={project} index={i} theme="light" />
            ))}
          </CardGrid>
        </div>
      </section>

      <CTASection
        primaryHref={WORKFLOW_REVIEW_MAIL}
        secondaryCta="Contact Ourion"
        secondaryTo="/contact"
      />
    </>
  );
}
