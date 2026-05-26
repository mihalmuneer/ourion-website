import { motion } from "framer-motion";
import {
  BarChart3,
  MessageSquareOff,
  Puzzle,
  TableProperties,
} from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import { PROBLEMS } from "../../data/content";

const iconMap = {
  spreadsheet: TableProperties,
  message: MessageSquareOff,
  chart: BarChart3,
  puzzle: Puzzle,
};

export default function Problem() {
  return (
    <section id="problem" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          label="Sound familiar?"
          title="Growing businesses often outgrow the tools they started with"
          description="If your team is juggling chats, spreadsheets, and phone calls just to stay on top of work—you are not alone. A proper system brings calm and clarity."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROBLEMS.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.06 }}
                className="rounded-xl border border-ourion-light-border bg-ourion-light-card p-6 shadow-sm"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-ourion-blue/10 text-ourion-blue">
                  <Icon size={22} />
                </div>
                <h3 className="text-base font-bold text-ourion-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ourion-ink-muted">
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
