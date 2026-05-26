import { Link } from "react-router-dom";

const variants = {
  primary:
    "bg-ourion-blue text-ourion-black hover:bg-ourion-blue-bright shadow-[0_0_40px_rgba(45,156,255,0.45)] border border-ourion-blue-bright/30",
  secondary:
    "border border-ourion-border-bright bg-ourion-elevated/90 text-ourion-white hover:border-ourion-blue/50 hover:bg-ourion-card",
  ghost: "text-ourion-silver hover:text-ourion-white",
};

const sizes = {
  sm: "px-4 py-2.5 text-xs font-bold uppercase tracking-wide min-h-[44px]",
  md: "px-6 py-3 text-sm font-bold uppercase tracking-wide min-h-[44px]",
  lg: "px-8 py-3.5 text-sm font-bold uppercase tracking-wide min-h-[48px] sm:px-10 sm:py-4 sm:text-base",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  to,
  className = "",
  type = "button",
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-md transition-all duration-200 whitespace-nowrap ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    const isExternal = /^https?:\/\//i.test(href);
    return (
      <a
        href={href}
        className={classes}
        {...(isExternal
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}
