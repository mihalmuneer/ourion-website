import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import Button from "../ui/Button";
import DashboardMock from "../ui/DashboardMock";
import { PROCESS_LINE, PROCESS_TAGLINE } from "../../data/brand";
import { WHATSAPP_LINK } from "../../data/content";

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-grid relative flex min-h-[calc(100svh-5rem)] flex-col justify-center overflow-hidden pt-28 pb-16 lg:min-h-[calc(100svh-5.25rem)] lg:pt-36 lg:pb-20"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-[600px] w-[1100px] -translate-x-1/2 rounded-full bg-ourion-blue/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto w-full max-w-[88rem] px-6 lg:px-12 xl:px-16">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20 xl:gap-28">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="lg:pr-4 xl:pr-8"
          >
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-ourion-blue-bright">
              {PROCESS_LINE}
            </p>

            <h1 className="max-w-2xl text-[2.35rem] font-bold leading-[1.05] tracking-tight text-ourion-white sm:text-5xl lg:text-6xl xl:text-[3.75rem]">
              From chaos to clarity.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ourion-silver sm:text-xl">
              Ourion helps growing businesses replace scattered chats,
              spreadsheets, and manual processes with clear software systems for
              operations, sales, logistics, customer communication, and
              reporting.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href={WHATSAPP_LINK} size="lg" className="sm:min-w-[260px]">
                Start With a Workflow Review
                <ArrowRight size={18} strokeWidth={2.5} />
              </Button>
              <Button href="#solutions" variant="secondary" size="lg">
                See What We Build
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <DashboardMock variant="light" size="hero" />
            <p className="mt-5 text-center text-sm text-ourion-silver-dim lg:text-right">
              Practical systems your team can run every day
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative mt-14 lg:mt-20"
        >
          <div className="pointer-events-none absolute -inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-ourion-blue/60 to-transparent" />
          <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-ourion-border-bright/50 bg-gradient-to-b from-ourion-surface/80 to-ourion-black/40 px-6 py-6 backdrop-blur-md sm:flex-row sm:px-10 lg:py-7">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
              {PROCESS_LINE.split("→").map((part, i, arr) => (
                <span key={part} className="flex items-center gap-2">
                  <span className="text-sm font-bold uppercase tracking-wide text-ourion-white sm:text-base">
                    {part.trim()}
                  </span>
                  {i < arr.length - 1 && (
                    <ChevronRight
                      size={16}
                      className="text-ourion-blue-bright"
                      aria-hidden
                    />
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
  );
}
