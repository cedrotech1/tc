import { Link } from "react-router-dom";
import { useEffect } from "react";
import { careerTracks, hiringSteps, values } from "../data/site.js";
import { InquiryForm } from "../components/Forms.jsx";
import { Button, CtaBand, PageHero, Section, SectionHead, StepNo } from "../components/ui.jsx";

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
      />
      <Section id="form">
        <div className="grid items-start gap-4 lg:grid-cols-[1.5fr_0.6fr]">
          <div className="card p-6 sm:p-8">
            <InquiryForm />
          </div>
          <aside className="card h-fit p-6">
            <dl className="grid gap-6">
              <div>
                <dt className="text-sm font-semibold text-blue">Email</dt>
                <dd className="mt-1">
                  <a className="font-semibold text-blue" href="mailto:contact@example.com">
                    contact@example.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-blue">Headquarters</dt>
                <dd className="mt-1 font-semibold">United States</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-blue">Existing customers</dt>
                <dd className="mt-1 text-sm leading-relaxed text-muted">
                  Product support is available through the customer portal.
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-blue">Media</dt>
                <dd className="mt-1 text-sm text-muted">
                  For media inquiries, use the general request and mention the story.
                </dd>
              </div>
            </dl>
            <Link to="/careers" className="mt-6 inline-block text-sm font-semibold text-blue">
              Looking for careers?
            </Link>
          </aside>
        </div>
      </Section>
    </>
  );
}
