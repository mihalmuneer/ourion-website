import {
  LOGO_EMBLEM,
  LOGO_FOOTER_TAGLINE,
  LOGO_NAV,
} from "../../data/brand";

const logoSrc = {
  nav: LOGO_NAV,
  emblem: LOGO_EMBLEM,
  footer: LOGO_FOOTER_TAGLINE,
};

/** Fixed visual height; width follows aspect ratio via object-contain */
const sizeClasses = {
  nav: "h-[34px] w-auto max-w-[min(100%,220px)] sm:h-[38px] md:h-[44px] lg:h-[48px] xl:h-[50px]",
  emblem:
    "h-[34px] w-[34px] sm:h-[36px] sm:w-[36px] md:h-[40px] md:w-[40px]",
  footer:
    "h-[56px] w-auto max-w-[min(100%,320px)] sm:h-[64px] md:h-[72px]",
};

const imgBase =
  "block shrink-0 bg-transparent object-contain object-left select-none";

export default function Logo({
  variant = "nav",
  className = "",
  size,
}) {
  const resolved = size ?? (variant === "footer" ? "footer" : variant);
  const src = logoSrc[variant] ?? logoSrc.nav;

  return (
    <img
      src={src}
      alt="Ourion"
      decoding="async"
      className={`${imgBase} ${sizeClasses[resolved] ?? sizeClasses.nav} ${className}`}
      style={{ objectFit: "contain" }}
    />
  );
}

/** Crossfade horizontal ↔ emblem for sticky navbar */
export function NavbarLogo({ compact, className = "" }) {
  return (
    <span
      className={`logo-nav-slot relative inline-flex shrink-0 items-center transition-[width] duration-300 ease-out ${
        compact
          ? "h-[34px] w-[34px] sm:h-[36px] sm:w-[36px] md:h-[40px] md:w-[40px]"
          : "h-[34px] w-[128px] sm:h-[38px] sm:w-[140px] md:h-[44px] md:w-[168px] lg:h-[48px] lg:w-[180px] xl:h-[50px] xl:w-[190px]"
      } ${className}`}
    >
      <Logo
        variant="nav"
        className={`absolute left-0 top-1/2 max-h-full -translate-y-1/2 transition-opacity duration-300 ${
          compact ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      />
      <Logo
        variant="emblem"
        className={`absolute left-0 top-1/2 -translate-y-1/2 transition-opacity duration-300 ${
          compact ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
    </span>
  );
}
