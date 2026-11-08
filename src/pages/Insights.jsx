import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { bySlug, insights } from "../data/site.js";
import { CtaBand, PageHero, Section, SectionHead } from "../components/ui.jsx";
import NotFound from "./NotFound.jsx";

const filters = ["All", "Article", "Point of view", "Research"];

export function Insights() {
  const [filter, setFilter] = useState("All");
  useEffect(() => {
    document.title = "Insights | Techclick";
  }, []);
  const visible = filter === "All" ? insights : insights.filter((item) => item.type === filter);

  return (
    <>
      <PageHero
        crumbs={[{ to: "/", label: "Home" }, { label: "Insights" }]}
        eyebrow="Research and points of view"
        title="Insights"
        lead={
          <>
            Articles and research from our consultants and product teams on data and AI, security, cloud and integration.{" "}
            <Link to="/contact#general" className="font-semibold text-blue">
              For media inquiries, contact us.
            </Link>
          </>
        }
      />
      <Section tone="smoke">
        <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter by type">
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              aria-pressed={filter === item}
              onClick={() => setFilter(item)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                filter === item ? "bg-blue text-white" : "card text-ink"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
        <ul className="grid gap-4">
          {visible.map((item) => (
            <li key={item.slug}>
              <Link to={`/insights/${item.slug}`} className="card group grid gap-3 p-6 sm:grid-cols-[1fr_auto]">
                <span>
                  <span className="font-mono text-xs text-muted">
                    {item.type} · {item.practice}
                  </span>
                  <span className="mt-2 block text-xl font-semibold group-hover:text-blue">{item.title}</span>
                  <span className="mt-2 block max-w-2xl text-sm leading-relaxed text-muted">{item.summary}</span>
                </span>
                <span className="font-mono text-xs text-muted">{item.minutes} min read</span>
              </Link>
            </li>
          ))}
        </ul>
        {visible.length === 0 && <p className="text-muted">No pieces in this category yet.</p>}
      </Section>
      <CtaBand />
    </>
  );
}

export function InsightDetail() {
  const { slug } = useParams();
  const article = bySlug(insights, slug);
  useEffect(() => {
    document.title = article ? `${article.title} | Techclick` : "Not found | Techclick";
  }, [article]);
  if (!article) return <NotFound />;
  const related = insights.filter((item) => item.slug !== article.slug).slice(0, 2);

  return (
    <>
      <PageHero
        crumbs={[{ to: "/", label: "Home" }, { to: "/insights", label: "Insights" }, { label: article.title }]}
        eyebrow={`${article.type} · ${article.practice}`}
        title={article.title}
        lead={article.summary}
      />
      <Section>
        <article className="card p-8 sm:px-10 sm:py-12">
          <p className="mb-10 font-mono text-xs text-muted">
            {article.author} · {article.minutes} min read
          </p>
          <div className="max-w-3xl">
            {article.sections.map((section) => (
              <section key={section.heading} className="mb-10 last:mb-0">
                <h2 className="text-2xl font-semibold tracking-tight">{section.heading}</h2>
                <p className="mt-3 text-lg leading-relaxed text-muted">{section.body}</p>
              </section>
            ))}
          </div>
        </article>
      </Section>
      <Section tone="white">
        <SectionHead title="Related insights" />
        <div className="grid gap-4 md:grid-cols-2">
          {related.map((item) => (
            <Link key={item.slug} to={`/insights/${item.slug}`} className="card block p-6">
              <p className="font-mono text-xs text-muted">
                {item.type} · {item.practice} · {item.minutes} min read
              </p>
              <p className="mt-3 text-lg font-semibold">{item.title}</p>
              <p className="mt-2 text-sm text-muted">{item.summary}</p>
            </Link>
          ))}
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
