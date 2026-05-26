import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "../ui/Button";
import { NavbarLogo } from "../ui/Logo";
import { NAV_LINKS, WHATSAPP_LINK } from "../../data/content";

const SCROLL_THRESHOLD = 32;

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl transition-[background-color,box-shadow] duration-300 ${
        scrolled
          ? "border-ourion-border bg-ourion-black/95 shadow-[0_8px_32px_rgba(0,0,0,0.45)]"
          : "border-ourion-border/80 bg-ourion-black/90"
      }`}
    >
      <div
        className={`mx-auto flex max-w-[88rem] items-center justify-between gap-4 px-6 transition-[height] duration-300 lg:px-12 xl:px-16 ${
          scrolled ? "h-[60px] sm:h-[64px]" : "h-[72px] sm:h-[76px] lg:h-[80px]"
        }`}
      >
        <a
          href="#"
          className="inline-flex shrink-0 items-center transition-opacity hover:opacity-90"
        >
          <NavbarLogo compact={scrolled} />
        </a>

        <nav className="hidden items-center gap-8 lg:gap-9 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-semibold uppercase tracking-wider text-ourion-silver transition-colors hover:text-ourion-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden shrink-0 md:block">
          <Button
            href={WHATSAPP_LINK}
            size="sm"
          >
            Workflow Review
          </Button>
        </div>

        <button
          type="button"
          className="shrink-0 rounded-md p-2 text-ourion-silver md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-ourion-border bg-ourion-surface md:hidden"
          >
            <nav className="flex flex-col gap-1 px-5 py-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2.5 text-xs font-semibold uppercase tracking-wider text-ourion-silver hover:bg-ourion-card hover:text-ourion-white"
                >
                  {link.label}
                </a>
              ))}
              <Button
                href={WHATSAPP_LINK}
                size="sm"
                className="mt-2 w-full"
              >
                Workflow Review
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
