import { Link } from "react-router-dom";

export function Container({ className = "", children }) {
  return (
    <div className={`mx-auto w-full max-w-[1180px] px-5 sm:px-8 ${className}`}>{children}</div>
  );
}

export function Arrow({ className = "h-4 w-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function Chevron({ open = false }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-4 w-4 transition ${open ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

const buttonStyles = {
  primary: "bg-blue text-white hover:bg-blue-deep",
  secondary: "bg-smoke text-blue hover:bg-white",
  quiet: "bg-smoke text-blue hover:bg-white",
  light: "bg-white text-blue hover:bg-smoke",
  ghost: "bg-white/15 text-white hover:bg-white/25",
};

export function Button({ to, children, variant = "primary", className = "", type = "button", onClick }) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-[10px] px-4 py-2.5 text-sm font-semibold transition ${buttonStyles[variant]} ${className}`;
  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

export function TextLink({ to, children, light = false }) {
  return (
    <Link
      to={to}
      className={`group inline-flex items-center gap-1.5 text-sm font-semibold ${
        light ? "text-white" : "text-blue"
      }`}
    >
      {children}
      <Arrow className="h-4 w-4 transition group-hover:translate-x-0.5" />
    </Link>
  );
}

export function Crumbs({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-5">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-muted">
        {items.map((item, index) => {
          const last = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              {index > 0 && <span aria-hidden="true">/</span>}
              {last || !item.to ? (
                <span className="text-ink" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link to={item.to} className="hover:text-blue">
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export function StepNo({ index }) {
  const label = String(index + 1).padStart(2, "0");
  return (
    <span className="inline-grid h-11 w-11 shrink-0 place-items-center rounded-[10px] bg-blue font-mono text-sm font-medium tracking-tight text-white">
      {label}
    </span>
  );
}

export function PageHero({ crumbs, eyebrow, title, lead, aside, children }) {
  return (
    <section className="bg-smoke">
      <Container className="pt-8 pb-4 sm:pt-10">
        <div className={`grid items-stretch gap-4 ${aside ? "lg:grid-cols-[1.15fr_0.85fr]" : ""}`}>
          <div className="card section-head flex flex-col justify-center px-6 py-8 sm:px-10 sm:py-12">
            {crumbs && <Crumbs items={crumbs} />}
            {eyebrow && <p className="mb-3 text-sm font-semibold text-blue">{eyebrow}</p>}
            <h1 className="max-w-3xl text-4xl leading-[1.08] font-semibold tracking-[-0.03em] text-balance sm:text-5xl">
              {title}
            </h1>
            {lead && <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">{lead}</p>}
            {children}
          </div>
          {aside && <div className="min-h-full [&>*]:h-full">{aside}</div>}
        </div>
      </Container>
    </section>
  );
}

export function Section({ id, children, className = "" }) {
  return (
    <section id={id} className={`bg-smoke pt-10 pb-2 sm:pt-12 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

function sectionMark(title = "") {
  const t = title.toLowerCase();
  if (/product|capabilit|edition|pric|build/.test(t)) return "box";
  if (/commit|measure|success|change/.test(t)) return "check";
  if (/industr|sector|priorit/.test(t)) return "building";
  if (/insight/.test(t)) return "doc";
  if (/career|role|hire|people|value/.test(t)) return "people";
  if (/problem/.test(t)) return "target";
  if (/demo|request/.test(t)) return "play";
  if (/mission/.test(t)) return "flag";
  if (/solution|includ|approach|deliver|engage|consult/.test(t)) return "nodes";
  return "grid";
}

function SectionMark({ title }) {
  const common = {
    viewBox: "0 0 24 24",
    className: "h-[18px] w-[18px]",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };
  const kind = sectionMark(title);
  if (kind === "box") {
    return (
      <svg {...common}>
        <path d="M4 8.5 12 4l8 4.5v7L12 20l-8-4.5z" />
        <path d="M12 12.2 20 8.5M12 12.2V20M12 12.2 4 8.5" />
      </svg>
    );
  }
  if (kind === "check") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="8" />
        <path d="m8.5 12.2 2.4 2.4 4.6-5" />
      </svg>
    );
  }
  if (kind === "building") {
    return (
      <svg {...common}>
        <path d="M4 20V9.5L12 5l8 4.5V20" />
        <path d="M9 20v-5h6v5M9 10.5h.01M12 10.5h.01M15 10.5h.01M9 14h.01M15 14h.01" />
      </svg>
    );
  }
  if (kind === "doc") {
    return (
      <svg {...common}>
        <path d="M7 3.5h7l4 4V20a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1z" />
        <path d="M14 3.5V8h4.5M8.5 12.5h7M8.5 16h5" />
      </svg>
    );
  }
  if (kind === "people") {
    return (
      <svg {...common}>
        <circle cx="9" cy="9" r="2.4" />
        <path d="M4.8 18.2c.6-2.3 2.2-3.4 4.2-3.4s3.6 1.1 4.2 3.4" />
        <circle cx="16" cy="9.5" r="1.8" />
        <path d="M15.2 14.8c1.5.2 2.6 1 3.2 2.6" />
      </svg>
    );
  }
  if (kind === "target") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  if (kind === "play") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="8" />
        <path d="m10.2 9.2 5 2.8-5 2.8z" />
      </svg>
    );
  }
  if (kind === "flag") {
    return (
      <svg {...common}>
        <path d="M6 20V4.5" />
        <path d="M6 5h10l-1.6 3.2L16 11.5H6" />
      </svg>
    );
  }
  if (kind === "nodes") {
    return (
      <svg {...common}>
        <circle cx="6" cy="12" r="2.2" />
        <circle cx="17.5" cy="6.5" r="2.2" />
        <circle cx="17.5" cy="17.5" r="2.2" />
        <path d="M8.1 11.2 15.4 7.6M8.1 12.8l7.3 3.6" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <rect x="4" y="4" width="6.5" height="6.5" rx="1.4" />
      <rect x="13.5" y="4" width="6.5" height="6.5" rx="1.4" />
      <rect x="4" y="13.5" width="6.5" height="6.5" rx="1.4" />
      <rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.4" />
    </svg>
  );
}

export function SectionHead({ eyebrow, title, text, action }) {
  return (
    <div className="mb-4 flex">
      <div className="section-head inline-flex max-w-full flex-wrap items-center gap-3 rounded-[12px] px-3.5 py-2.5 text-ink sm:max-w-2xl sm:px-4">
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[10px] bg-smoke text-blue">
          <SectionMark title={title} />
        </span>
        <div className="min-w-0">
          {eyebrow && <p className="text-xs font-semibold text-blue">{eyebrow}</p>}
          <h2 className="text-lg font-semibold tracking-[-0.02em] text-ink">{title}</h2>
          {text && <p className="mt-1 max-w-xl text-sm leading-relaxed text-muted">{text}</p>}
        </div>
        {action && <div className="shrink-0">{action}</div>}
      </div>
    </div>
  );
}

export function Chip({ children, kind = "service" }) {
  const styles = kind === "product" ? "bg-blue text-white" : "bg-smoke text-ink";
  return (
    <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${styles}`}>{children}</span>
  );
}

export function CtaBand({
  title = "Tell us what you are working on",
  text = "A consultant or product specialist will reply within one business day.",
}) {
  return (
    <section className="bg-smoke">
      <Container className="py-4 pb-10">
        <div className="flex flex-col items-start justify-between gap-8 rounded-[12px] bg-blue px-6 py-10 text-white sm:flex-row sm:items-center sm:px-10 sm:py-12">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
          <p className="mt-3 max-w-xl text-base text-white/70">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button to="/contact#consultation" variant="light">
            Book a consultation
          </Button>
          <Button to="/contact#demo" variant="ghost">
            Request a product demo
          </Button>
        </div>
        </div>
      </Container>
    </section>
  );
}

function CapIcon({ title }) {
  const t = title.toLowerCase();
  const kind = /workflow|visual/.test(t)
    ? "flow"
    : /api/.test(t)
      ? "api"
      : /event|stream/.test(t)
        ? "pulse"
        : /partner|onboard|desk|support/.test(t)
          ? "people"
          : /monitor|tracing|detect/.test(t)
            ? "radar"
            : /developer|sdk|tool|engineering/.test(t)
              ? "code"
              : /connector|integrat/.test(t)
                ? "plug"
                : /semantic|layer/.test(t)
                  ? "layers"
                  : /quality|govern|permission|secur|identity|risk|admin/.test(t)
                    ? "shield"
                    : /cloud|infrastructure/.test(t)
                      ? "cloud"
                      : /health|life science/.test(t)
                        ? "care"
                        : /manufactur/.test(t)
                          ? "factory"
                          : /retail|consumer/.test(t)
                            ? "bag"
                            : /analytic|self-service|report|touch|rate/.test(t)
                              ? "chart"
                              : /playbook|automat|task/.test(t)
                                ? "bolt"
                                : /evaluat|score/.test(t)
                                  ? "target"
                                  : "grid";
  const common = {
    viewBox: "0 0 24 24",
    className: "h-[18px] w-[18px]",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };
  const paths = {
    flow: <path d="M5 7h4v4H5zM15 13h4v4h-4zM9 9h6M15 15H9" />,
    api: <path d="M8 8 4.5 12 8 16M16 8l3.5 4L16 16M13 6l-2 12" />,
    pulse: <path d="M3 12h4l2-5 4 10 2-5h6" />,
    people: (
      <>
        <circle cx="9" cy="9" r="2.2" />
        <path d="M5.2 17.5c.5-2 2-3 3.8-3s3.3 1 3.8 3" />
        <circle cx="16" cy="9.2" r="1.7" />
        <path d="M15.2 14.6c1.3.2 2.3.9 2.8 2.3" />
      </>
    ),
    radar: (
      <>
        <circle cx="12" cy="12" r="7.5" />
        <path d="M12 12 16.5 8.5M12 8.5V12" />
      </>
    ),
    code: <path d="M8 8 4.5 12 8 16M16 8l3.5 4L16 16" />,
    plug: <path d="M8 8V4M16 8V4M7 8h10v4a5 5 0 0 1-10 0zM12 17v3" />,
    layers: <path d="m4 9 8-4 8 4-8 4zM4 14l8 4 8-4" />,
    shield: <path d="M12 3.5 19 6.5v5.2c0 4.2-2.8 6.8-7 8.3-4.2-1.5-7-4.1-7-8.3V6.5z" />,
    cloud: <path d="M7 18h10.2a3.8 3.8 0 0 0 .3-7.6A5.4 5.4 0 0 0 7.2 12 3.4 3.4 0 0 0 7 18z" />,
    care: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8.5v7M8.5 12h7" />
      </>
    ),
    factory: <path d="M3 20V10l5 3V10l5 3V8l8 4v8z" />,
    bag: <path d="M6.5 8h11l-1 12h-9zM9 8V6.5a3 3 0 0 1 6 0V8" />,
    chart: <path d="M5 19V10M12 19V5M19 19v-7" />,
    bolt: <path d="M13 3 6 13h5l-1 8 8-12h-5z" />,
    target: (
      <>
        <circle cx="12" cy="12" r="7.5" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),
    grid: (
      <>
        <rect x="4" y="4" width="6.5" height="6.5" rx="1.2" />
        <rect x="13.5" y="4" width="6.5" height="6.5" rx="1.2" />
        <rect x="4" y="13.5" width="6.5" height="6.5" rx="1.2" />
        <rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.2" />
      </>
    ),
  };
  return <svg {...common}>{paths[kind]}</svg>;
}

export function FeatureCard({ index, title, text, to }) {
  const className = "group card cap-card flex h-full flex-col overflow-hidden";
  const body = (
    <>
      <div className="section-head flex items-center justify-between px-4 py-3">
        <span className="grid h-9 w-9 place-items-center rounded-[10px] bg-blue text-white transition group-hover:bg-blue-deep">
          <CapIcon title={title} />
        </span>
        <span className="font-mono text-[11px] text-muted">{String(index + 1).padStart(2, "0")}</span>
      </div>
      <div className="industry-card flex flex-1 flex-col px-4 pt-4 pb-5">
        <h3 className="font-semibold transition group-hover:text-blue">{title}</h3>
        {text && <p className="mt-1.5 text-sm leading-relaxed text-muted">{text}</p>}
      </div>
      <span className="h-1 w-0 bg-blue transition-all duration-300 group-hover:w-full" />
    </>
  );
  if (to) {
    return (
      <Link to={to} className={className}>
        {body}
      </Link>
    );
  }
  return <article className={className}>{body}</article>;
}

export function CheckList({ items }) {
  return (
    <ul className="grid gap-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink">
          <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-smoke text-blue">
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
              <path d="m5 12 5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
