import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";
import Logo from "../ui/Logo";
import { PROCESS_LINE } from "../../data/brand";
import { CONTACT_EMAIL, NAV_LINKS } from "../../data/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ourion-border bg-ourion-surface">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo variant="footer" />
            <p className="mt-5 max-w-md text-sm leading-relaxed text-ourion-silver">
              We review how you work, build the right systems, and improve them
              over time—so your team runs on software, not scattered chats and
              spreadsheets.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-ourion-white">
              Navigate
            </p>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="inline-block py-1 text-sm text-ourion-silver transition-colors hover:text-ourion-blue"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-ourion-white">
              Contact
            </p>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="flex items-center gap-2 py-1 text-sm text-ourion-silver transition-colors hover:text-ourion-blue"
                >
                  <Mail size={16} className="shrink-0 text-ourion-blue" />
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-ourion-silver">
                <MapPin size={16} className="mt-0.5 shrink-0 text-ourion-blue" />
                <span>UK · India · UAE · Saudi Arabia · Qatar</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-ourion-border pt-8 text-sm text-ourion-silver-dim sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Ourion Ltd. All rights reserved.</p>
          <p>{PROCESS_LINE}</p>
        </div>
      </div>
    </footer>
  );
}
