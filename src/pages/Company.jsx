import { Link } from "react-router-dom";
import { useEffect } from "react";
import { careerTracks, hiringSteps, values } from "../data/site.js";
import { InquiryForm } from "../components/Forms.jsx";
import { Symbol } from "../components/Logo.jsx";
import { Arrow, Button, CtaBand, PageHero, Section, SectionHead, StepNo } from "../components/ui.jsx";

function ValueIcon({ title }) {
  const common = {
    viewBox: "0 0 24 24",
    className: "h-5 w-5",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };
  if (title === "Accountable") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="8" />
        <path d="m8.5 12.2 2.4 2.4 4.6-5" />
      </svg>
    );
  }
  if (title === "Engineering-led") {
    return (
      <svg {...common}>
        <path d="M8 8 4.5 12 8 16" />
        <path d="m16 8 3.5 4-3.5 4" />
        <path d="m13 6-2 12" />
      </svg>
    );
  }
  if (title === "Secure by default") {
    return (
      <svg {...common}>
        <path d="M12 3.5 19 6.5v5.2c0 4.2-2.8 6.8-7 8.3-4.2-1.5-7-4.1-7-8.3V6.5z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M5 6.5h14a1 1 0 0 1 1 1V15a1 1 0 0 1-1 1H9l-4 3v-3.2" />
      <path d="M8.5 11h7M8.5 13.5h4" />
    </svg>
  );
}

const facts = [
  ["7", "Service practices"],
  ["4", "Products"],
  ["6", "Industries"],
  ["US", "Headquarters"],
];

export function About() {
  useEffect(() => {
    document.title = "About Us | Techclick";
  }, []);

  return (
    <>
      <PageHero
        crumbs={[{ to: "/", label: "Home" }, { label: "About Us" }]}
        eyebrow="The company"
        title="About Us"
        lead="Techclick is an American technology company. We provide consulting services and we develop our own enterprise software, so the advice we give is informed by the products we build and support."
      />
      <Section tone="smoke">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map(([value, label]) => (
            <article key={label} className="card industry-card flex items-center gap-4 px-5 py-5">
              <span className="inline-grid h-14 min-w-14 place-items-center rounded-[10px] bg-blue px-2 font-mono text-lg font-medium tracking-tight text-white">
                {value}
              </span>
              <p className="text-sm font-semibold leading-snug">{label}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section>
        <SectionHead
          title="Mission"
          text="To give organizations the advice, engineering and software they need to run technology with confidence."
        />
      </Section>
      <Section tone="smoke">
        <SectionHead title="Values" />
        <div className="grid gap-4 sm:grid-cols-2">
          {values.map((value) => (
            <article key={value.title} className="card industry-card flex items-start gap-4 p-5 sm:p-6">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[10px] bg-blue text-white">
                <ValueIcon title={value.title} />
              </span>
              <div className="min-w-0">
                <h3 className="text-lg font-semibold">{value.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{value.text}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>
      <Section>
        <SectionHead
          title="Careers"
          text="Consultants and engineers here work on client projects and on products used by large organizations."
          action={<Button to="/careers">See careers</Button>}
        />
      </Section>
      <CtaBand />
    </>
  );
}

export function Careers() {
  useEffect(() => {
    document.title = "Careers | Techclick";
  }, []);

  return (
    <>
      <PageHero
        crumbs={[{ to: "/", label: "Home" }, { to: "/about", label: "About Us" }, { label: "Careers" }]}
        eyebrow="People"
        title="Careers"
        lead="Our people work across client engagements and our own products, which makes for broader careers."
      />
      <Section tone="smoke">
        <SectionHead title="Where you could work" />
        <div className="grid gap-4 sm:grid-cols-2">
          {careerTracks.map((track) => (
            <article key={track.title} className="card p-6">
              <h3 className="text-lg font-semibold">{track.title}</h3>
              <p className="mt-2 text-sm text-muted">{track.text}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section tone="white">
        <SectionHead title="Open roles" />
        <div className="card p-8">
          <p className="max-w-2xl text-muted">
            Open roles are listed here when they are published. To be considered for future roles, send us a general inquiry with your background.
          </p>
          <div className="mt-5">
            <Button to="/contact#general">Send a general inquiry</Button>
          </div>
        </div>
      </Section>
      <Section tone="smoke">
        <SectionHead title="How we hire" />
        <ol className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {hiringSteps.map((step, index) => (
            <li key={step.title} className="card flex items-start gap-3 p-5">
              <StepNo index={index} />
              <div className="min-w-0">
                <p className="font-semibold">{step.title}</p>
                <p className="mt-1 text-sm text-muted">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>
    </>
  );
}

const contactFacts = [
  {
    kind: "mail",
    title: "Email",
    text: "info@techclick.rw",
    href: "mailto:info@techclick.rw",
  },
  {
    kind: "pin",
    title: "Headquarters",
    text: "Kigali City - Ikaze house/ kisiment",
    // strong: true,
  },
  {
    kind: "people",
    title: "Existing customers",
    text: "Product support is available through the customer portal.",
  },
  {
    kind: "media",
    title: "Media",
    text: "For media inquiries, use the general request and mention the story.",
  },
];

function ContactMark({ kind }) {
  const common = {
    viewBox: "0 0 24 24",
    className: "h-5 w-5",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };
  if (kind === "mail") {
    return (
      <svg {...common}>
        <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
        <path d="m4.5 7 7.5 6 7.5-6" />
      </svg>
    );
  }
  if (kind === "pin") {
    return (
      <svg {...common}>
        <path d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10z" />
        <circle cx="12" cy="11" r="2" />
      </svg>
    );
  }
  if (kind === "people") {
    return (
      <svg {...common}>
        <circle cx="9" cy="9" r="2.2" />
        <path d="M5.2 17.5c.5-2 2-3 3.8-3s3.3 1 3.8 3" />
        <circle cx="16" cy="9.2" r="1.7" />
        <path d="M15.2 14.6c1.3.2 2.3.9 2.8 2.3" />
      </svg>
    );
  }
  if (kind === "media") {
    return (
      <svg {...common}>
        <path d="M5 6.5h10a1 1 0 0 1 1 1V16l4 2.2V8.2" />
        <path d="M8 10.5h5M8 13.5h3" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <rect x="3.5" y="7" width="17" height="12" rx="2" />
      <path d="M8 7V5.5A1.5 1.5 0 0 1 9.5 4h5A1.5 1.5 0 0 1 16 5.5V7M3.5 12h17" />
    </svg>
  );
}

const socials = [
  { name: "LinkedIn", href: "https://www.linkedin.com", kind: "linkedin" },
  { name: "X", href: "https://x.com", kind: "x" },
  { name: "YouTube", href: "https://www.youtube.com", kind: "youtube" },
];

function SocialMark({ kind }) {
  const common = {
    viewBox: "0 0 24 24",
    className: "h-4 w-4",
    fill: "currentColor",
    "aria-hidden": true,
  };
  if (kind === "linkedin") {
    return (
      <svg {...common}>
        <path d="M5.7 9.2H8v9.3H5.7zM6.8 4.8a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8zM10.2 9.2h2.2v1.3h.1c.3-.6 1.1-1.3 2.3-1.3 2.5 0 3 1.6 3 3.7v5.6h-2.3v-5c0-1.2 0-2.7-1.7-2.7s-1.9 1.3-1.9 2.6v5.1H10.2z" />
      </svg>
    );
  }
  if (kind === "x") {
    return (
      <svg {...common}>
        <path d="M14.7 4.5h2.2l-4.8 5.5 5.6 7.5h-4.4l-3.4-4.5-3.9 4.5H4.8l5.1-5.9L4.5 4.5h4.5l3.1 4.1z" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M22 12.2s0-3.2-.4-4.6c-.2-.9-.9-1.6-1.8-1.8C18.2 5.4 12 5.4 12 5.4s-6.2 0-7.8.4c-.9.2-1.6.9-1.8 1.8C2 9 2 12.2 2 12.2s0 3.2.4 4.6c.2.9.9 1.6 1.8 1.8 1.6.4 7.8.4 7.8.4s6.2 0 7.8-.4c.9-.2 1.6-.9 1.8-1.8.4-1.4.4-4.6.4-4.6zM10 15.5V8.9l5.2 3.3z" />
    </svg>
  );
}

function SocialCard() {
  return (
    <aside className="card flex h-full flex-col p-5 sm:p-6">
      <div className="flex items-center justify-between gap-3">
        <span className="flex items-center gap-2.5">
          <Symbol size="sm">Tc</Symbol>
          <span className="font-semibold">Techclick</span>
        </span>
        <span className="font-mono text-[11px] tracking-wide text-muted">SOCIAL</span>
      </div>
      <ul className="mt-5 grid flex-1 content-center gap-3">
        {socials.map((item) => (
          <li key={item.name}>
            <a
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-3 rounded-[10px] bg-smoke px-3 py-3"
            >
              <span className="grid h-9 w-9 place-items-center rounded-[10px] bg-blue text-white transition group-hover:bg-blue-deep">
                <SocialMark kind={item.kind} />
              </span>
              <span className="font-semibold transition group-hover:text-blue">{item.name}</span>
              <Arrow className="ml-auto h-4 w-4 text-blue transition group-hover:translate-x-0.5" />
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export function Contact() {
  useEffect(() => {
    document.title = "Contact | Techclick";
  }, []);

  return (
    <>
      <PageHero
        crumbs={[{ to: "/", label: "Home" }, { label: "Contact" }]}
        eyebrow="Talk with us"
        title="Contact"
        lead="Choose the type of request so it reaches the right team. We reply within one business day."
        aside={<SocialCard />}
      />
      <Section id="form">
        <div className="grid items-start gap-4 lg:grid-cols-[1.5fr_0.6fr]">
          <div className="card p-6 sm:p-8">
            <InquiryForm />
          </div>
          <aside className="grid gap-4">
            {contactFacts.map((item) => (
              <article key={item.title} className="card flex items-start gap-3 p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[10px] bg-blue text-white">
                  <ContactMark kind={item.kind} />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold">{item.title}</p>
                  {item.href ? (
                    <a className="mt-1 block text-sm font-semibold break-all text-blue" href={item.href}>
                      {item.text}
                    </a>
                  ) : (
                    <p className={`mt-1 text-sm leading-relaxed ${item.strong ? "font-semibold text-ink" : "text-muted"}`}>
                      {item.text}
                    </p>
                  )}
                </div>
              </article>
            ))}
            <Link to="/careers" className="card group flex items-center gap-3 p-5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[10px] bg-blue text-white transition group-hover:bg-blue-deep">
                <ContactMark kind="careers" />
              </span>
              <span className="min-w-0 flex-1 font-semibold transition group-hover:text-blue">Looking for careers?</span>
              <Arrow className="h-4 w-4 shrink-0 text-blue transition group-hover:translate-x-0.5" />
            </Link>
          </aside>
        </div>
      </Section>
    </>
  );
}
