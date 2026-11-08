import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { bySlug, insights } from "../data/site.js";
import { CtaBand, PageHero, Section, SectionHead } from "../components/ui.jsx";
import NotFound from "./NotFound.jsx";

const filters = ["All", "Article", "Point of view", "Research"];

function QuestionMark({ heading }) {
  const name = heading.toLowerCase();
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
  if (/decision|task|change/.test(name)) {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="7.5" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    );
  }
  if (/source|content|answer/.test(name)) {
    return (
      <svg {...common}>
        <path d="m4 9 8-4 8 4-8 4zM4 14l8 4 8-4" />
      </svg>
    );
  }
  if (/allowed|see|permission/.test(name)) {
    return (
      <svg {...common}>
        <path d="M12 3.5 19 6.5v5.2c0 4.2-2.8 6.8-7 8.3-4.2-1.5-7-4.1-7-8.3V6.5z" />
      </svg>
    );
  }
  if (/quality|measured/.test(name)) {
    return (
      <svg {...common}>
        <path d="M5 19V10M12 19V5M19 19v-7" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M12 3v18M16.5 7.5c0-2-1.8-3-4.5-3s-4.5 1.2-4.5 3 1.8 2.8 4.5 2.8 4.5 1.2 4.5 3-1.8 3-4.5 3-4.5-1-4.5-3" />
    </svg>
  );
}

function InsightMark({ practice }) {
  const name = practice.toLowerCase();
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
  if (/cyber|security/.test(name)) {
    return (
      <svg {...common}>
        <path d="M12 3.5 19 6.5v5.2c0 4.2-2.8 6.8-7 8.3-4.2-1.5-7-4.1-7-8.3V6.5z" />
      </svg>
    );
  }
  if (/integrat/.test(name)) {
    return (
      <svg {...common}>
        <path d="M8 8V4M16 8V4M7 8h10v4a5 5 0 0 1-10 0zM12 17v3" />
      </svg>
    );
  }
  if (/cloud/.test(name)) {
    return (
      <svg {...common}>
        <path d="M7 18h10.2a3.8 3.8 0 0 0 .3-7.6A5.4 5.4 0 0 0 7.2 12 3.4 3.4 0 0 0 7 18z" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M5 19V10M12 19V5M19 19v-7" />
    </svg>
  );
}

export function Insights() {
  const [filter, setFilter] = useState("All");
  useEffect(() => {
    document.title = "Insights | Techclick";
  }, []);
  const visible = filter === "All" ? insights : insights.filter((item) => item.type === filter);
// const
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
        <p className="mb-4 font-mono text-xs text-muted">
          {article.author} · {article.minutes} min read
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {article.sections.map((section, index) => (
            <article key={section.heading} className="group card cap-card flex h-full flex-col overflow-hidden">
              <div className="section-head flex items-center justify-between px-4 py-3">
                <span className="grid h-9 w-9 place-items-center rounded-[10px] bg-blue text-white transition group-hover:bg-blue-deep">
                  <QuestionMark heading={section.heading} />
                </span>
                <span className="font-mono text-[11px] text-muted">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="industry-card flex flex-1 flex-col px-4 pt-4 pb-5">
                <h2 className="font-semibold leading-snug transition group-hover:text-blue">{section.heading}</h2>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{section.body}</p>
              </div>
              <span className="h-1 w-0 bg-blue transition-all duration-300 group-hover:w-full" />
            </article>
          ))}
        </div>
      </Section>
      <Section tone="white">
        <SectionHead title="Related insights" />
        <div className="grid gap-4 md:grid-cols-2">
          {related.map((item, index) => (
            <Link key={item.slug} to={`/insights/${item.slug}`} className="group card cap-card flex h-full flex-col overflow-hidden">
              <div className="section-head flex items-center justify-between px-4 py-3">
                <span className="grid h-9 w-9 place-items-center rounded-[10px] bg-blue text-white transition group-hover:bg-blue-deep">
                  <InsightMark practice={item.practice} />
                </span>
                <span className="font-mono text-[11px] text-muted">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="industry-card flex flex-1 flex-col px-4 pt-4 pb-5">
                <p className="font-mono text-[11px] text-muted">
                  {item.type} · {item.practice} · {item.minutes} min read
                </p>
                <h3 className="mt-2 font-semibold leading-snug transition group-hover:text-blue">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.summary}</p>
              </div>
              <span className="h-1 w-0 bg-blue transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
