import { Link } from "react-router-dom";

export function Logo({ onDark = false, className = "" }) {
  return (
    <Link to="/" aria-label="Techclick home" className={`inline-flex items-center ${className}`}>
      <img
        src="/logo.png"
        alt=""
        className={onDark ? "h-16 w-auto rounded-[12px] bg-white" : "h-14 w-auto mix-blend-multiply"}
      />
    </Link>
  );
}

export function Symbol({ children, size = "md" }) {
  const box =
    size === "lg" ? "h-14 w-14 text-lg" : size === "sm" ? "h-7 w-7 text-[10px]" : "h-11 w-11 text-sm";
  return (
    <span
      aria-hidden="true"
      className={`inline-grid shrink-0 place-items-center rounded-[10px] bg-blue font-mono font-medium tracking-tight text-white ${box}`}
    >
      {children}
    </span>
  );
}
