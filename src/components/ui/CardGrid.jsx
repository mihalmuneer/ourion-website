export default function CardGrid({
  children,
  columns = 2,
  className = "",
}) {
  const colClass =
    columns === 3
      ? "sm:grid-cols-2 lg:grid-cols-3"
      : columns === 1
        ? "grid-cols-1"
        : "sm:grid-cols-2";

  return (
    <div
      className={`grid grid-cols-1 gap-5 sm:gap-6 ${colClass} ${className}`}
    >
      {children}
    </div>
  );
}
