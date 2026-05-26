import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "../ui/Button";
import { NavbarLogo } from "../ui/Logo";
import { NAV_LINKS, WORKFLOW_REVIEW_MAIL } from "../../data/content";

const SCROLL_THRESHOLD = 32;

const navClass = ({ isActive }) =>
  `block rounded-md px-3 py-3 text-xs font-semibold uppercase tracking-wider transition-colors min-h-[44px] flex items-center md:inline-flex md:min-h-0 md:px-0 md:py-0 ${
    isActive
      ? "text-ourion-white md:text-ourion-blue-bright"
      : "text-ourion-silver hover:text-ourion-white"
  }`;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl transition-[background-color,box-shadow] duration-300 ${
        scrolled
          ? "border-ourion-border bg-ourion-black/95 shadow-[0_8px_32px_rgba(0,0,0,0.45)]"
          : "border-ourion-border/80 bg-ourion-black/90"
      }`}
    >
      <div
        className={`mx-auto flex max-w-[88rem] items-center justify-between gap-3 px-4 transition-[height] duration-300 sm:gap-4 sm:px-6 lg:px-12 xl:px-16 ${
          scrolled ? "h-[60px] sm:h-[64px]" : "h-[72px] sm:h-[76px] lg:h-[80px]"
        }`}
      >
        <Link
          to="/"
          className="inline-flex shrink-0 items-center transition-opacity hover:opacity-90"
          onClick={() => setOpen(false)}
        >
          <NavbarLogo compact={scrolled} />
        </Link>

        <nav className="hidden items-center gap-7 md:flex lg:gap-9">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} className={navClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden shrink-0 md:block">
          <Button href={WORKFLOW_REVIEW_MAIL} size="sm">
            Workflow Review
          </Button>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md text-ourion-silver md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
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
            <nav className="flex flex-col gap-1 px-4 py-4">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={navClass}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </NavLink>
              ))}
              <Button
                href={WORKFLOW_REVIEW_MAIL}
                size="md"
                className="mt-3 w-full"
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
