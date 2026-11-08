import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { bySlug, industries, pick, products, services, solutions } from "../data/site.js";
import { Symbol } from "../components/Logo.jsx";
import { Chip, CtaBand, PageHero, Section, SectionHead, StepNo } from "../components/ui.jsx";
import NotFound from "./NotFound.jsx";

export function Solutions() {
  useEffect(() => {
    document.title = "Solutions | Techclick";
  }, []);

  return (
    <>
      <PageHero
        crumbs={[{ to: "/", label: "Home" }, { label: "Solutions" }]}
        eyebrow="Services and platforms"
        title="Solutions"
        lead="Each solution brings together the practices and platforms a specific problem needs, with a delivery plan and measures agreed at the start."
      />
      <Section tone="smoke">
        <div className="grid gap-5">
          {solutions.map((solution, index) => (
            <Link
              key={solution.slug}
              to={`/solutions/${solution.slug}`}
              className="card group flex items-start gap-4 p-6"
            >
              <StepNo index={index} />
              <span className="min-w-0">
                <span className="text-2xl font-semibold tracking-tight group-hover:text-blue">{solution.name}</span>
                <span className="mt-2 block max-w-2xl text-muted">{solution.summary}</span>
                <span className="mt-4 flex flex-wrap gap-2">
                  {pick(services, solution.serviceSlugs).map((service) => (
                    <Chip key={service.slug}>{service.name}</Chip>
                  ))}
                  {pick(products, solution.productSlugs).map((product) => (
                    <Chip key={product.slug} kind="product">
                      {product.name}
                    </Chip>
                  ))}
                </span>
              </span>
            </Link>
          ))}
        </div>
      </Section>
      <CtaBand />
    </>
  );
}

export function SolutionDetail() {
  const { slug } = useParams();
  const solution = bySlug(solutions, slug);
  useEffect(() => {
    document.title = solution ? `${solution.name} | Techclick` : "Not found | Techclick";
  }, [solution]);
  if (!solution) return <NotFound />;

  const includedServices = pick(services, solution.serviceSlugs);
  const includedProducts = pick(products, solution.productSlugs);
  const relatedIndustries = pick(industries, solution.industrySlugs);

  return (
    <>
      <PageHero
        crumbs={[{ to: "/", label: "Home" }, { to: "/solutions", label: "Solutions" }, { label: solution.name }]}
        eyebrow="Solution"
        title={solution.name}
        lead={solution.summary}
      />
      <Section>
        <SectionHead title="The problem" text={solution.problem} />
      </Section>
      <Section tone="white">
        <SectionHead title="What is included" />
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-semibold text-blue">
              Consulting and services
            </p>
            <div className="grid gap-3">
              {includedServices.map((service) => (
                <Link key={service.slug} to={`/services/${service.slug}`} className="card block p-5">
                  <p className="font-semibold">{service.name}</p>
                  <p className="mt-1 text-sm text-muted">{service.summary}</p>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-4 text-sm font-semibold text-blue">
              Proprietary products
            </p>
            <div className="grid gap-3">
              {includedProducts.map((product) => (
                <Link key={product.slug} to={`/products/${product.slug}`} className="card flex gap-4 p-5">
                  <Symbol>{product.mark}</Symbol>
                  <span>
                    <span className="block font-semibold">{product.name}</span>
                    <span className="text-xs text-muted">{product.category}</span>
                    <span className="mt-2 block text-sm text-muted">{product.summary}</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Section>
      <Section tone="smoke">
        <SectionHead title="How it is delivered" />
        <ol className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {solution.phases.map((phase, index) => (
            <li key={phase.title} className="card flex items-start gap-3 p-5">
              <StepNo index={index} />
              <div className="min-w-0">
                <p className="font-semibold">{phase.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted">{phase.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>
      <Section tone="white">
        <SectionHead title="How success is measured" text="We take a baseline in the first phase and report against it at every stage." />
        <div className="grid gap-4 md:grid-cols-3">
          {solution.measures.map((measure) => (
            <p key={measure} className="card p-6 text-lg font-semibold leading-snug">
              {measure}
            </p>
          ))}
        </div>
      </Section>
      <Section tone="smoke">
        <SectionHead title="Industries where this applies" />
        <div className="grid gap-4 md:grid-cols-2">
          {relatedIndustries.map((industry) => (
            <Link key={industry.slug} to={`/industries/${industry.slug}`} className="card block p-5">
              <p className="font-semibold">{industry.name}</p>
              <p className="mt-2 text-sm text-muted">{industry.summary}</p>
            </Link>
          ))}
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
