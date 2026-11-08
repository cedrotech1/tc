import { Link } from "react-router-dom";
import { useEffect } from "react";
import { cases, industries, insights, products, services, solutions } from "../data/site.js";
import { Symbol } from "../components/Logo.jsx";
import { AtlasScreen } from "../components/Screens.jsx";
import { Arrow, Chip, Container, CtaBand, Section, SectionHead, StepNo, TextLink } from "../components/ui.jsx";

const journeys = [
  {
    to: "/services",
    title: "Explore services",
    text: "Advisory, engineering and managed operations across seven practices.",
  },
  {
    to: "/products",
    title: "Discover products",
    text: "Four enterprise platforms we build, own and support.",
  },
  {
    to: "/solutions",
    title: "Find a solution",
    text: "Services and products combined for a specific business problem.",
  },
];

export default function Home() {
  useEffect(() => {
    document.title = "Techclick | Technology consulting and enterprise software";
  }, []);

  const lead = insights[0];

  return (
    <>
      <section className="bg-smoke">
        <Container className="grid items-stretch gap-4 pt-8 sm:pt-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="card section-head flex flex-col justify-center px-6 py-8 sm:px-10 sm:py-12">
            <p className="mb-3 text-sm font-semibold text-blue">Consulting and enterprise software</p>
            <h1 className="text-4xl leading-[1.08] font-semibold tracking-[-0.03em] text-balance sm:text-5xl">
              Technology consulting and enterprise software from one company.
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
              Our consultants help large organizations with data and AI, cloud, security and integration. Our product teams build the software platforms that many of those projects run on.
            </p>
          </div>
          <div className="min-h-full [&>*]:h-full">
            <AtlasScreen />
          </div>
        </Container>
        <Container className="pt-6">
          <nav aria-label="Where would you like to start?" className="grid gap-4 md:grid-cols-3">
            {journeys.map((item) => (
              <Link key={item.to} to={item.to} className="card group p-6">
                <span className="flex items-center gap-2 font-semibold group-hover:text-blue">
                  {item.title}
                  <Arrow className="h-4 w-4 text-blue transition group-hover:translate-x-0.5" />
                </span>
                <span className="mt-2 block text-sm leading-relaxed text-muted">{item.text}</span>
              </Link>
            ))}
          </nav>
        </Container>
      </section>

      <Section tone="white">
        <SectionHead
          eyebrow="One company"
          title="Consulting and products"
          text="You can work with our consultants, license our software, or combine both. The same company is accountable either way."
        />
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-4 text-sm font-semibold text-blue">Consulting and services</p>
            <ul className="grid gap-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link to={`/services/${service.slug}`} className="card group block p-4">
                    <span className="font-semibold group-hover:text-blue">{service.name}</span>
                    <span className="mt-1 block text-sm leading-relaxed text-muted">{service.summary}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-4 text-sm font-semibold text-blue">Proprietary products</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {products.map((product) => (
                <Link
                  key={product.slug}
                  to={`/products/${product.slug}`}
                  className="card group p-5"
                >
                  <span className="flex items-center gap-3">
                    <Symbol>{product.mark}</Symbol>
                    <span>
                      <span className="block font-semibold group-hover:text-blue">{product.name}</span>
                      <span className="block text-xs text-muted">{product.category}</span>
                    </span>
                  </span>
                  <span className="mt-4 block text-sm leading-relaxed text-muted">{product.summary}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section tone="smoke">
        <SectionHead
          eyebrow="Combined delivery"
          title="Solutions"
          text="Each solution combines specific practices with one or more of our platforms, under one plan and one set of measures."
          action={<TextLink to="/solutions">All solutions</TextLink>}
        />
        <ul className="grid gap-4">
          {solutions.map((solution) => (
            <li key={solution.slug}>
              <Link to={`/solutions/${solution.slug}`} className="card group grid gap-4 p-6 lg:grid-cols-[1fr_1.1fr_auto] lg:items-center">
                <span>
                  <span className="block text-lg font-semibold group-hover:text-blue">{solution.name}</span>
                  <span className="mt-1 block text-sm text-muted">{solution.summary}</span>
                </span>
                <span className="flex flex-wrap gap-2">
                  {solution.serviceSlugs.map((slug) => {
                    const service = services.find((item) => item.slug === slug);
                    return service ? <Chip key={slug}>{service.name}</Chip> : null;
                  })}
                  {solution.productSlugs.map((slug) => {
                    const product = products.find((item) => item.slug === slug);
                    return product ? (
                      <Chip key={slug} kind="product">
                        {product.name}
                      </Chip>
                    ) : null;
                  })}
                </span>
                <Arrow className="hidden text-muted transition group-hover:translate-x-0.5 group-hover:text-blue lg:block" />
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="white">
        <SectionHead eyebrow="Sectors" title="Industries" action={<TextLink to="/industries">All industries</TextLink>} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <Link
              key={industry.slug}
              to={`/industries/${industry.slug}`}
              className="card group flex items-start gap-3 p-6"
            >
              <StepNo index={index} />
              <span className="min-w-0">
                <span className="block text-lg font-semibold group-hover:text-blue">{industry.name}</span>
                <span className="mt-1 block text-sm leading-relaxed text-muted">{industry.summary}</span>
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section tone="smoke">
        <SectionHead eyebrow="Engagement profiles" title="How our engagements run" action={<TextLink to="/work">Our work</TextLink>} />
        <ul className="grid gap-4">
          {cases.map((item) => (
            <li key={item.slug}>
              <Link to={`/work/${item.slug}`} className="card group block p-6">
                <p className="font-mono text-xs text-muted">Engagement profile · {item.industry}</p>
                <p className="mt-2 text-xl font-semibold group-hover:text-blue">{item.name}</p>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">{item.summary}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="white">
        <SectionHead eyebrow="From our teams" title="Insights" action={<TextLink to="/insights">All insights</TextLink>} />
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <Link to={`/insights/${lead.slug}`} className="card group p-7">
            <p className="text-sm font-semibold text-blue">
              {lead.type} · {lead.practice} · {lead.minutes} min read
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight group-hover:text-blue">{lead.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{lead.summary}</p>
            <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-blue">
              Read the article
              <Arrow className="transition group-hover:translate-x-0.5" />
            </span>
          </Link>
          <ul className="grid gap-4">
            {insights.slice(1).map((item) => (
              <li key={item.slug}>
                <Link to={`/insights/${item.slug}`} className="card group grid gap-2 p-5 sm:grid-cols-[1fr_auto] sm:items-start">
                  <span>
                    <span className="font-mono text-xs text-muted">
                      {item.type} · {item.practice}
                    </span>
                    <span className="mt-1 block font-semibold group-hover:text-blue">{item.title}</span>
                    <span className="mt-1 block text-sm text-muted">{item.summary}</span>
                  </span>
                  <span className="font-mono text-xs text-muted">{item.minutes} min read</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
