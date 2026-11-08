import { Link } from "react-router-dom";
import { useEffect } from "react";
import { careerTracks, hiringSteps, values } from "../data/site.js";
import { InquiryForm } from "../components/Forms.jsx";
import { Button, CtaBand, PageHero, Section, SectionHead, StepNo } from "../components/ui.jsx";

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
            <article key={label} className="card p-6">
              <p className="text-4xl font-semibold tracking-tight text-blue">{value}</p>
              <p className="mt-2 text-sm text-muted">{label}</p>
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
            <article key={value.title} className="card p-6">
              <h3 className="text-lg font-semibold">{value.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{value.text}</p>
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
