import { Link } from "react-router-dom";
import { useEffect } from "react";
import { cases, industries, insights, products, services, solutions } from "../data/site.js";
import { Symbol } from "../components/Logo.jsx";
import { AtlasScreen } from "../components/Screens.jsx";
import { Arrow, Chip, Container, CtaBand, Section, SectionHead, TextLink } from "../components/ui.jsx";

const journeys = [
  {
    to: "/services",
    title: "Explore services",
    text: "Advisory, engineering and managed operations across seven practices.",
    kind: "grid",
  },
  {
    to: "/products",
    title: "Discover products",
    text: "Four enterprise platforms we build, own and support.",
    kind: "layers",
  },
  {
    to: "/solutions",
    title: "Find a solution",
    text: "Services and products combined for a specific business problem.",
    kind: "target",
  },
];

const serviceKind = {
  "technology-consulting": "target",
  "software-development": "code",
  "ai-data": "chart",
  "cloud-infrastructure": "cloud",
  cybersecurity: "shield",
  "systems-integration": "plug",
  "managed-services": "people",
};

const solutionKind = {
  "data-ai-modernization": "chart",
  "cyber-resilience": "shield",
  "connected-enterprise": "plug",
  "cloud-operations": "cloud",
};

function Mark({ kind }) {
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
    grid: (
      <>
        <rect x="4" y="4" width="6.5" height="6.5" rx="1.2" />
        <rect x="13.5" y="4" width="6.5" height="6.5" rx="1.2" />
        <rect x="4" y="13.5" width="6.5" height="6.5" rx="1.2" />
        <rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.2" />
      </>
    ),
    layers: <path d="m4 9 8-4 8 4-8 4zM4 14l8 4 8-4" />,
    target: (
      <>
        <circle cx="12" cy="12" r="7.5" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),
    code: <path d="M8 8 4.5 12 8 16M16 8l3.5 4L16 16" />,
    chart: <path d="M5 19V10M12 19V5M19 19v-7" />,
    cloud: <path d="M7 18h10.2a3.8 3.8 0 0 0 .3-7.6A5.4 5.4 0 0 0 7.2 12 3.4 3.4 0 0 0 7 18z" />,
    shield: <path d="M12 3.5 19 6.5v5.2c0 4.2-2.8 6.8-7 8.3-4.2-1.5-7-4.1-7-8.3V6.5z" />,
    plug: <path d="M8 8V4M16 8V4M7 8h10v4a5 5 0 0 1-10 0zM12 17v3" />,
    people: (
      <>
        <circle cx="9" cy="9" r="2.2" />
        <path d="M5.2 17.5c.5-2 2-3 3.8-3s3.3 1 3.8 3" />
        <circle cx="16" cy="9.2" r="1.7" />
        <path d="M15.2 14.6c1.3.2 2.3.9 2.8 2.3" />
      </>
    ),
    care: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8.5v7M8.5 12h7" />
      </>
    ),
    factory: <path d="M3 20V10l5 3V10l5 3V8l8 4v8z" />,
    bolt: <path d="M13 3 6 13h5l-1 8 8-12h-5z" />,
    bag: <path d="M6.5 8h11l-1 12h-9zM9 8V6.5a3 3 0 0 1 6 0V8" />,
    building: <path d="M4 20V6l8-3 8 3v14M9 20v-4h6v4M9 9h.01M15 9h.01M9 13h.01M15 13h.01" />,
  };
  return <svg {...common}>{paths[kind] || paths.grid}</svg>;
}

function IconTile({ kind }) {
  return (
    <span className="grid h-9 w-9 place-items-center rounded-[10px] bg-blue text-white transition group-hover:bg-blue-deep">
      <Mark kind={kind} />
    </span>
  );
}

function HomeCard({ to, index, icon, title, meta, text, children }) {
  return (
    <Link to={to} className="group card cap-card flex h-full flex-col overflow-hidden">
      <div className="section-head flex items-center justify-between px-4 py-3">
        {icon}
        <span className="font-mono text-[11px] text-muted">{String(index + 1).padStart(2, "0")}</span>
      </div>
      <div className="industry-card flex flex-1 flex-col px-4 pt-4 pb-5">
        {meta && <p className="font-mono text-[11px] text-muted">{meta}</p>}
        <h3 className={`${meta ? "mt-2" : ""} font-semibold leading-snug transition group-hover:text-blue`}>{title}</h3>
        {text && <p className="mt-1.5 text-sm leading-relaxed text-muted">{text}</p>}
        {children}
      </div>
      <span className="h-1 w-0 bg-blue transition-all duration-300 group-hover:w-full" />
    </Link>
  );
}

function practiceKind(practice) {
  const name = practice.toLowerCase();
  if (/cyber|security/.test(name)) return "shield";
  if (/integrat/.test(name)) return "plug";
  if (/cloud/.test(name)) return "cloud";
  if (/health/.test(name)) return "care";
  if (/manufactur/.test(name)) return "factory";
  return "chart";
}

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
            {journeys.map((item, index) => (
              <HomeCard
                key={item.to}
                to={item.to}
                index={index}
                icon={<IconTile kind={item.kind} />}
                title={item.title}
                text={item.text}
              />
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
        <p className="mb-4 text-sm font-semibold text-blue">Consulting and services</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <HomeCard
              key={service.slug}
              to={`/services/${service.slug}`}
              index={index}
              icon={<IconTile kind={serviceKind[service.slug]} />}
              title={service.name}
              text={service.summary}
            />
          ))}
        </div>
        <p className="mt-8 mb-4 text-sm font-semibold text-blue">Proprietary products</p>
        <div className="grid gap-4 sm:grid-cols-2">
          {products.map((product, index) => (
            <Link
              key={product.slug}
              to={`/products/${product.slug}`}
              className="card industry-card group flex items-start gap-4 p-5"
            >
              <span className="flex shrink-0 flex-col items-center gap-2">
                <Symbol>{product.mark}</Symbol>
                <span className="font-mono text-[11px] text-muted">{String(index + 1).padStart(2, "0")}</span>
              </span>
              <span className="min-w-0">
                <span className="font-mono text-[11px] text-muted">{product.category}</span>
                <span className="mt-1 block font-semibold transition group-hover:text-blue">{product.name}</span>
                <span className="mt-1.5 block text-sm leading-relaxed text-muted">{product.summary}</span>
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section tone="smoke">
        <SectionHead
          eyebrow="Combined delivery"
          title="Solutions"
          text="Each solution combines specific practices with one or more of our platforms, under one plan and one set of measures."
          action={<TextLink to="/solutions">All solutions</TextLink>}
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {solutions.map((solution, index) => (
            <HomeCard
              key={solution.slug}
              to={`/solutions/${solution.slug}`}
              index={index}
              icon={<IconTile kind={solutionKind[solution.slug]} />}
              title={solution.name}
              text={solution.summary}
            >
              <span className="mt-4 flex flex-wrap gap-2">
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
            </HomeCard>
          ))}
        </div>
      </Section>

      <Section tone="white">
        <SectionHead eyebrow="Sectors" title="Industries" action={<TextLink to="/industries">All industries</TextLink>} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <Link
              key={industry.slug}
              to={`/industries/${industry.slug}`}
              className="card industry-card group flex items-start gap-3 p-5"
            >
              <span className="inline-grid h-11 w-11 shrink-0 place-items-center rounded-[10px] bg-blue font-mono text-sm font-medium tracking-tight text-white">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="min-w-0">
                <span className="block font-semibold leading-snug transition group-hover:text-blue">{industry.name}</span>
                <span className="mt-1.5 block text-sm leading-relaxed text-muted">{industry.summary}</span>
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section tone="smoke">
        <SectionHead eyebrow="Engagement profiles" title="How our engagements run" action={<TextLink to="/work">Our work</TextLink>} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((item, index) => (
            <HomeCard
              key={item.slug}
              to={`/work/${item.slug}`}
              index={index}
              icon={<IconTile kind={practiceKind(item.industry)} />}
              meta={`Engagement profile · ${item.industry}`}
              title={item.name}
              text={item.summary}
            />
          ))}
        </div>
      </Section>

      <Section tone="white">
        <SectionHead eyebrow="From our teams" title="Insights" action={<TextLink to="/insights">All insights</TextLink>} />
        <div className="grid gap-4 sm:grid-cols-2">
          {insights.map((item, index) => (
            <HomeCard
              key={item.slug}
              to={`/insights/${item.slug}`}
              index={index}
              icon={<IconTile kind={practiceKind(item.practice)} />}
              meta={`${item.type} · ${item.practice} · ${item.minutes} min read`}
              title={item.title}
              text={item.summary}
            >
              {item.slug === lead.slug && (
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold whitespace-nowrap text-blue">
                  Read the article
                  <Arrow className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </span>
              )}
            </HomeCard>
          ))}
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
