import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { bySlug, pick, productPrinciples, products, services, solutions } from "../data/site.js";
import { InquiryForm } from "../components/Forms.jsx";
import { Symbol } from "../components/Logo.jsx";
import { ProductScreen } from "../components/Screens.jsx";
import { Button, CheckList, Container, CtaBand, PageHero, Section, SectionHead, StepNo, TextLink } from "../components/ui.jsx";
import NotFound from "./NotFound.jsx";

export function Products() {
  useEffect(() => {
    document.title = "Products | Techclick";
  }, []);

  return (
    <>
      <PageHero
        crumbs={[{ to: "/", label: "Home" }, { label: "Products" }]}
        eyebrow="Portfolio"
        title="Products"
        lead="Four platforms built and supported by our own product teams. Each can be licensed on its own or delivered as part of a consulting engagement."
      />
      <div>
        {products.map((product) => (
          <section key={product.slug} className="bg-smoke">
            <Container className="grid items-stretch gap-4 py-4 lg:grid-cols-2">
              <div className="card flex flex-col justify-center px-6 py-8 sm:px-10 sm:py-12">
                <Symbol size="lg">{product.mark}</Symbol>
                <p className="mt-4 text-sm font-semibold text-blue">{product.category}</p>
                <h2 className="mt-2 text-3xl font-semibold tracking-tight">{product.name}</h2>
                <p className="mt-3 max-w-md text-muted">{product.summary}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {product.capabilities.slice(0, 4).map((item) => (
                    <li key={item.title} className="rounded-full bg-smoke px-3 py-1 text-xs text-muted">
                      {item.title}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <TextLink to={`/products/${product.slug}`}>View {product.name.replace("Techclick ", "")}</TextLink>
                </div>
              </div>
              <div className="min-h-full [&>*]:h-full">
                <ProductScreen slug={product.slug} />
              </div>
            </Container>
          </section>
        ))}
      </div>
      <Section tone="smoke">
        <SectionHead title="How we build and support our products" />
        <div className="grid gap-4 sm:grid-cols-2">
          {productPrinciples.map((item) => (
            <article key={item.title} className="card p-6">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
            </article>
          ))}
        </div>
      </Section>
      <CtaBand title="See a product with your own scenarios" text="Book a demonstration with a product specialist." />
    </>
  );
}

export function ProductDetail() {
  const { slug } = useParams();
  const product = bySlug(products, slug);
  useEffect(() => {
    document.title = product ? `${product.name} | Techclick` : "Not found | Techclick";
  }, [product]);
  if (!product) return <NotFound />;

  const relatedServices = pick(services, product.serviceSlugs);
  const relatedSolutions = pick(solutions, product.solutionSlugs);

  return (
    <>
      <PageHero
        crumbs={[{ to: "/", label: "Home" }, { to: "/products", label: "Products" }, { label: product.name }]}
        eyebrow={product.category}
        title={product.name}
        lead={product.summary}
        aside={<ProductScreen slug={product.slug} />}
      >
        <div className="mt-6 flex flex-wrap gap-3">
          <Button to="#demo">Request a demo</Button>
          <Button to="#editions" variant="quiet">Pricing and editions</Button>
        </div>
        <p className="mt-6 rounded-[10px] bg-smoke p-4 text-sm">
          <span className="font-mono text-xs text-muted">Deployment</span>
          <span className="mt-1 block">{product.deployment}</span>
        </p>
      </PageHero>

      <Section>
        <SectionHead title="The problem it solves" text={product.problem} />
      </Section>

      <Section tone="smoke">
        <SectionHead title="Capabilities" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {product.capabilities.map((item) => (
            <article key={item.title} className="card p-5">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="white">
        <SectionHead title="What changes for your teams" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {product.outcomes.map((item, index) => (
            <article key={item.title} className="card flex items-start gap-3 p-6">
              <StepNo index={index} />
              <div className="min-w-0">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm text-muted">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section id="editions" tone="white">
        <SectionHead
          title="Editions and pricing"
          text="Pricing depends on users, data volume and deployment model. Tell us your requirements and we will send a written quotation."
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {product.editions.map((edition) => (
            <article
              key={edition.name}
              className="card industry-card flex flex-col p-6"
            >
              {edition.featured && <p className="mb-3 text-sm font-semibold text-blue">Most selected</p>}
              <h3 className="text-xl font-semibold">{edition.name}</h3>
              <p className="mt-1 text-sm text-muted">{edition.audience}</p>
              <div className="mt-5 mb-6">
                <CheckList items={edition.points} />
              </div>
              <p className="mt-auto pt-4 font-mono text-xs text-muted">Pricing by quotation</p>
              <div className="mt-4">
                <Button to={`/contact?intent=sales&product=${product.slug}#sales`} variant={edition.featured ? "primary" : "secondary"}>
                  Request a quote
                </Button>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section id="demo">
        <SectionHead
          title="Request a demonstration"
          text={`A product specialist will walk through ${product.name} using scenarios from your organization. Sessions usually take 45 minutes.`}
        />
        <div className="card grid items-start gap-10 p-6 sm:p-10 lg:grid-cols-[0.8fr_1.2fr]">
          <CheckList items={product.demoPoints} />
          <InquiryForm intent="demo" productSlug={product.slug} compact />
        </div>
      </Section>

      <Section tone="white">
        <SectionHead title={`Services and solutions around ${product.name.replace("Techclick ", "")}`} text="Implementation, integration and managed operations from the company that builds the product." />
        <div className="grid gap-4 md:grid-cols-2">
          {relatedServices.map((service) => (
            <Link key={service.slug} to={`/services/${service.slug}`} className="card block p-5">
              <p className="font-semibold">{service.name}</p>
              <p className="mt-2 text-sm text-muted">{service.summary}</p>
            </Link>
          ))}
          {relatedSolutions.map((solution) => (
            <Link key={solution.slug} to={`/solutions/${solution.slug}`} className="card block p-5">
              <p className="text-sm font-semibold text-blue">Solution</p>
              <p className="mt-2 font-semibold">{solution.name}</p>
              <p className="mt-2 text-sm text-muted">{solution.summary}</p>
            </Link>
          ))}
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
