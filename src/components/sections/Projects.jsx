import { motion } from "framer-motion";
import SectionIntro from "../ui/SectionIntro";
import { projects } from "../../data/projects";
import { sectionCopy } from "../../data/sectionCopy";

export default function Projects() {
  const copy = sectionCopy.projects;

  return (
    <section id="projects" className="bg-ourion-light py-24 lg:py-32">
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

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08 }}
              className="flex flex-col rounded-xl border border-ourion-light-border bg-ourion-light-card p-6 shadow-sm"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-ourion-light-muted px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-ourion-ink-muted">
                  {project.region}
                </span>
                <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-[10px] font-semibold text-amber-800">
                  In progress
                </span>
              </div>

              <h3 className="mt-4 text-xl font-bold text-ourion-ink">
                {project.name}
              </h3>
              <p className="mt-2 text-sm font-medium text-ourion-blue">
                {project.label}
              </p>

              <p className="mt-4 flex-1 text-sm leading-relaxed text-ourion-ink-muted">
                {project.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
