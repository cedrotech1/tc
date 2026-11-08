import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { bySlug, engageSteps, pick, products, services, solutions } from "../data/site.js";
import { Symbol } from "../components/Logo.jsx";
import { CheckList, CtaBand, FeatureCard, PageHero, Section, SectionHead, StepNo, TextLink } from "../components/ui.jsx";
import NotFound from "./NotFound.jsx";

export function Services() {
  useEffect(() => {
    document.title = "Services | Techclick";
  }, []);

  return (
    <>
      <PageHero
        crumbs={[{ to: "/", label: "Home" }, { label: "Services" }]}
        eyebrow="Practices"
        title="Services"
        lead="Seven practices covering strategy, delivery and day-to-day operations. Where one of our platforms shortens the work, we say so; where it does not, we work with the tools you already have."
      />
      <Section tone="smoke">
        <SectionHead title="Practices" />
        <div className="grid gap-4">
          {services.map((service, index) => (
            <Link
              key={service.slug}
              to={`/services/${service.slug}`}
              className="card group flex items-start gap-4 p-6"
            >
              <StepNo index={index} />
              <span className="min-w-0">
                <span className="text-xl font-semibold group-hover:text-blue">{service.name}</span>
                <span className="mt-2 block max-w-2xl text-sm leading-relaxed text-muted">{service.summary}</span>
                <span className="mt-4 flex flex-wrap gap-2">
                  {service.offerings.map((item) => (
                    <span key={item.title} className="rounded-full bg-smoke px-3 py-1 text-xs text-muted">
                      {item.title}
                    </span>
                  ))}
                </span>
              </span>
            </Link>
          ))}
        </div>
      </Section>
      <Section tone="white">
        <SectionHead eyebrow="Engagement" title="How we engage" />
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {engageSteps.map((step, index) => (
            <li key={step.title} className="card flex items-start gap-3 p-5">
              <StepNo index={index} />
              <div className="min-w-0">
                <p className="text-lg font-semibold">{step.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>
      <CtaBand />
    </>
  );
}

export function ServiceDetail() {
  const { slug } = useParams();
  const service = bySlug(services, slug);
  useEffect(() => {
    document.title = service ? `${service.name} | Techclick` : "Not found | Techclick";
  }, [service]);
  if (!service) return <NotFound />;

  const relatedProducts = pick(products, service.productSlugs);
  const relatedSolutions = pick(solutions, service.solutionSlugs);

  return (
    <>
      <PageHero
        crumbs={[{ to: "/", label: "Home" }, { to: "/services", label: "Services" }, { label: service.name }]}
        eyebrow="Service"
        title={service.name}
        lead={service.lead}
        aside={
          <aside className="card p-6">
            <p className="text-sm font-semibold text-blue">Typical starting points</p>
            <div className="mt-4">
              <CheckList items={service.starts} />
            </div>
          </aside>
        }
      />
      <Section tone="smoke">
        <SectionHead title="What we do" />
        <div className="grid gap-4 sm:grid-cols-2">
          {service.offerings.map((item, index) => (
            <FeatureCard key={item.title} index={index} title={item.title} text={item.text} />
          ))}
        </div>
      </Section>
      <Section tone="white">
        <SectionHead
          title="What we commit to"
          text="Measures are agreed at the start and reported throughout the engagement."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {service.commits.map((item, index) => (
            <article key={item} className="card flex items-start gap-3 p-6">
              <StepNo index={index} />
              <p className="min-w-0 text-lg leading-snug font-semibold">{item}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section tone="smoke">
        <SectionHead title="Products used in this work" action={<TextLink to="/products">All products</TextLink>} />
        <div className="grid gap-4 md:grid-cols-2">
          {relatedProducts.map((product) => (
            <Link key={product.slug} to={`/products/${product.slug}`} className="card group block p-5">
              <span className="flex items-center gap-3">
                <Symbol>{product.mark}</Symbol>
                <span>
                  <span className="block font-semibold group-hover:text-blue">{product.name}</span>
                  <span className="text-xs text-muted">{product.category}</span>
                </span>
              </span>
              <span className="mt-4 block text-sm text-muted">{product.summary}</span>
            </Link>
          ))}
        </div>
        {relatedSolutions.length > 0 && (
          <div className="mt-10">
            <SectionHead title="Related solutions" />
            <div className="grid gap-3">
              {relatedSolutions.map((solution) => (
                <Link key={solution.slug} to={`/solutions/${solution.slug}`} className="card block px-5 py-4">
                  <span className="block font-semibold">{solution.name}</span>
                  <span className="text-sm text-muted">{solution.summary}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </Section>
      <CtaBand title={service.cta} text="Tell us where you are starting from. A practice lead will reply within one business day." />
    </>
  );
}
