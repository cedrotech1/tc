import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { bySlug, industries, pick, products, solutions } from "../data/site.js";
import { Symbol } from "../components/Logo.jsx";
import { CtaBand, PageHero, Section, SectionHead, StepNo } from "../components/ui.jsx";
import NotFound from "./NotFound.jsx";

export function Industries() {
  useEffect(() => {
    document.title = "Industries | Techclick";
  }, []);

  return (
    <>
      <PageHero
        crumbs={[{ to: "/", label: "Home" }, { label: "Industries" }]}
        eyebrow="Where we work"
        title="Industries"
        lead="Teams that know each sector's systems and regulations, and the priorities we are most often asked to help with."
      />
      <Section tone="smoke">
        <SectionHead title="Industries we serve" />
        <div className="grid gap-4 md:grid-cols-2">
          {industries.map((industry) => (
            <Link key={industry.slug} to={`/industries/${industry.slug}`} className="card industry-card group block p-6">
              <h2 className="text-xl font-semibold group-hover:text-blue">{industry.name}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{industry.summary}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {industry.priorities.map((priority) => (
                  <li key={priority} className="rounded-full bg-smoke px-3 py-1 text-xs text-muted">
                    {priority}
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </Section>
      <CtaBand />
    </>
  );
}

export function IndustryDetail() {
  const { slug } = useParams();
  const industry = bySlug(industries, slug);
  useEffect(() => {
    document.title = industry ? `${industry.name} | Techclick` : "Not found | Techclick";
  }, [industry]);
  if (!industry) return <NotFound />;

  const recommended = pick(solutions, industry.solutionSlugs);
  const relevant = pick(products, industry.productSlugs);

  return (
    <>
      <PageHero
        crumbs={[{ to: "/", label: "Home" }, { to: "/industries", label: "Industries" }, { label: industry.name }]}
        eyebrow="Industry"
        title={industry.name}
        lead={industry.summary}
        aside={
          <aside className="card p-6">
            <p className="text-sm font-semibold text-blue">Regulatory context</p>
            <p className="mt-3 text-sm leading-relaxed text-ink">{industry.regulation}</p>
          </aside>
        }
      />
      <Section tone="smoke">
        <SectionHead title="Priorities we help with" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industry.priorities.map((priority, index) => (
            <article key={priority} className="card flex items-start gap-3 p-6">
              <StepNo index={index} />
              <p className="min-w-0 text-lg font-semibold leading-snug">{priority}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section tone="white">
        <SectionHead title="Recommended solutions" />
        <div className="grid gap-4 md:grid-cols-2">
          {recommended.map((solution) => (
            <Link key={solution.slug} to={`/solutions/${solution.slug}`} className="card block p-6">
              <p className="text-lg font-semibold">{solution.name}</p>
              <p className="mt-2 text-sm text-muted">{solution.summary}</p>
            </Link>
          ))}
        </div>
      </Section>
      <Section tone="smoke">
        <SectionHead title="Relevant products" />
        <div className="grid gap-4 md:grid-cols-3">
          {relevant.map((product) => (
            <Link key={product.slug} to={`/products/${product.slug}`} className="card block p-5">
              <Symbol>{product.mark}</Symbol>
              <p className="mt-4 font-semibold">{product.name}</p>
              <p className="mt-1 text-xs text-muted">{product.category}</p>
              <p className="mt-3 text-sm text-muted">{product.summary}</p>
            </Link>
          ))}
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
