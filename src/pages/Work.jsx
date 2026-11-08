import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { bySlug, cases, pick, products, services, solutions } from "../data/site.js";
import { Chip, CtaBand, PageHero, Section, SectionHead, StepNo } from "../components/ui.jsx";
import NotFound from "./NotFound.jsx";

export function Work() {
  useEffect(() => {
    document.title = "Our Work | Techclick";
  }, []);

  return (
    <>
      <PageHero
        crumbs={[{ to: "/", label: "Home" }, { label: "Our Work" }]}
        eyebrow="Engagements"
        title="Our Work"
        lead="We publish client case studies only with the client's approval, including the results they have confirmed. The engagement profiles below show how our work is typically structured."
      />
      <Section tone="smoke">
        <SectionHead title="Engagement profiles" />
        <div className="grid gap-4">
          {cases.map((item) => (
            <Link key={item.slug} to={`/work/${item.slug}`} className="card group block p-6">
              <p className="font-mono text-xs text-muted">Engagement profile · {item.industry}</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight group-hover:text-blue">{item.name}</h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">{item.summary}</p>
              <span className="mt-4 flex flex-wrap gap-2">
                {pick(services, item.serviceSlugs).map((service) => (
                  <Chip key={service.slug}>{service.name}</Chip>
                ))}
                {pick(products, item.productSlugs).map((product) => (
                  <Chip key={product.slug} kind="product">
                    {product.name}
                  </Chip>
                ))}
              </span>
            </Link>
          ))}
        </div>
      </Section>
      <CtaBand />
    </>
  );
}

export function CaseDetail() {
  const { slug } = useParams();
  const item = bySlug(cases, slug);
  useEffect(() => {
    document.title = item ? `${item.name} | Techclick` : "Not found | Techclick";
  }, [item]);
  if (!item) return <NotFound />;
  const solution = bySlug(solutions, item.solutionSlug);

  return (
    <>
      <PageHero
        crumbs={[{ to: "/", label: "Home" }, { to: "/work", label: "Our Work" }, { label: item.name }]}
        eyebrow={`Engagement profile · ${item.industry}`}
        title={item.name}
        lead={item.summary}
        aside={
          <aside className="card p-6">
            <p className="text-sm font-semibold text-blue">Services and products</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {pick(services, item.serviceSlugs).map((service) => (
                <Link key={service.slug} to={`/services/${service.slug}`}>
                  <Chip>{service.name}</Chip>
                </Link>
              ))}
              {pick(products, item.productSlugs).map((product) => (
                <Link key={product.slug} to={`/products/${product.slug}`}>
                  <Chip kind="product">{product.name}</Chip>
                </Link>
              ))}
            </div>
            {solution && (
              <p className="mt-5 text-sm">
                <span className="block font-mono text-xs text-muted">Related solution</span>
                <Link to={`/solutions/${solution.slug}`} className="mt-1 inline-block font-semibold text-blue">
                  {solution.name}
                </Link>
              </p>
            )}
          </aside>
        }
      />
      <Section>
        <SectionHead title="Where these engagements start" text={item.start} />
      </Section>
      <Section tone="white">
        <SectionHead title="How we approach it" />
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {item.approach.map((step, index) => (
            <li key={step} className="card flex items-start gap-3 p-6">
              <StepNo index={index} />
              <p className="min-w-0 leading-relaxed">{step}</p>
            </li>
          ))}
        </ol>
      </Section>
      <Section tone="smoke">
        <SectionHead title="What we measure" text="We agree a baseline in the first weeks and report against it throughout." />
        <div className="grid gap-4 md:grid-cols-3">
          {item.measures.map((measure) => (
            <p key={measure} className="card p-6 text-lg font-semibold leading-snug">
              {measure}
            </p>
          ))}
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
