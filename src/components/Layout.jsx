import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { products, services, solutions } from "../data/site.js";
import { Logo } from "./Logo.jsx";
import { Arrow, Chevron, Container } from "./ui.jsx";

const menus = [
  {
    id: "services",
    label: "Services",
    href: "/services",
    intro: "Seven practices that advise on, build and operate technology for large organizations.",
    all: "All services",
    items: services.map((item) => ({
      to: `/services/${item.slug}`,
      title: item.name,
      text: item.summary,
    })),
  },
  {
    id: "products",
    label: "Products",
    href: "/products",
    intro: "Enterprise software that we design, own and support ourselves.",
    all: "Product portfolio",
    items: products.map((item) => ({
      to: `/products/${item.slug}`,
      title: item.name,
      text: item.category,
      mark: item.mark,
    })),
  },
  {
    id: "solutions",
    label: "Solutions",
    href: "/solutions",
    intro: "Consulting work and our platforms, combined for a specific business problem.",
    all: "All solutions",
    items: solutions.map((item) => ({
      to: `/solutions/${item.slug}`,
      title: item.name,
    })),
  },
];

const links = [
  { to: "/industries", label: "Industries" },
  { to: "/work", label: "Our Work" },
  { to: "/insights", label: "Insights" },
  { to: "/about", label: "About Us" },
];

function activePath(pathname, href) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

function navItem(active) {
  return `inline-flex h-9 items-center gap-1 rounded-[10px] px-3 text-sm font-medium ${
    active ? "bg-white text-blue" : "text-ink hover:bg-white"
  }`;
}

export function Layout() {
  const location = useLocation();
  const [open, setOpen] = useState(null);
  const [mobile, setMobile] = useState(false);
  const [mobileSection, setMobileSection] = useState(null);

  useEffect(() => {
    setOpen(null);
    setMobile(false);
    setMobileSection(null);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    document.body.style.overflow = mobile ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobile]);

  useEffect(() => {
    const id = location.hash.replace("#", "");
    const contactIntent = ["consultation", "demo", "sales", "general"].includes(id);
    if (location.pathname === "/contact" && contactIntent) {
      document.getElementById("form")?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    if (id) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-screen bg-smoke text-ink">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[80] focus:rounded-md focus:bg-ink focus:px-3 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <header className="sticky top-0 z-40 bg-smoke/90 backdrop-blur-md" onMouseLeave={() => setOpen(null)}>
        <Container className="flex h-20 items-center gap-6">
          <Logo />
          <nav className="hidden items-center lg:flex" aria-label="Main">
            {menus.map((menu) => {
              const isOpen = open === menu.id;
              const current = activePath(location.pathname, menu.href);
              return (
                <div key={menu.id} className="relative" onMouseEnter={() => setOpen(menu.id)}>
                  <button
                    type="button"
                    className={navItem(current)}
                    aria-current={current ? "page" : undefined}
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : menu.id)}
                  >
                    {menu.label}
                    <Chevron open={isOpen} />
                  </button>
                </div>
              );
            })}
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => navItem(isActive)}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="ml-auto hidden items-center gap-3 lg:flex">
            <NavLink to="/contact" className={({ isActive }) => navItem(isActive)}>
              Contact
            </NavLink>
            <Link
              to="/contact#consultation"
              className="rounded-[10px] bg-blue px-3.5 py-2 text-sm font-semibold text-white hover:bg-blue-deep"
            >
              Talk to an expert
            </Link>
          </div>
          <button
            type="button"
            className="card ml-auto grid h-11 w-11 place-items-center lg:hidden"
            aria-label="Open menu"
            aria-expanded={mobile}
            onClick={() => setMobile(true)}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          </button>
        </Container>
        {open && (
          <div className="absolute inset-x-0 top-full hidden px-5 pt-2 lg:block">
            <div className="card mx-auto max-w-[1180px]">
            <Mega menu={menus.find((menu) => menu.id === open)} />
            </div>
          </div>
        )}
      </header>

      {mobile && (
        <div className="fixed inset-0 z-50 overflow-auto bg-smoke px-5 pb-10 lg:hidden" role="dialog" aria-modal="true" aria-label="Menu">
          <div className="flex h-20 items-center justify-between">
            <Logo />
            <button type="button" className="grid h-11 w-11 place-items-center" aria-label="Close menu" onClick={() => setMobile(false)}>
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
                <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          <nav className="mt-2" aria-label="Mobile">
            {menus.map((menu) => (
              <div key={menu.id} className="card mb-3 px-4">
                <button
                  type="button"
                  className="flex w-full items-center justify-between py-4 text-left font-semibold"
                  aria-expanded={mobileSection === menu.id}
                  aria-current={activePath(location.pathname, menu.href) ? "page" : undefined}
                  onClick={() => setMobileSection(mobileSection === menu.id ? null : menu.id)}
                >
                  <span className="inline-flex items-center gap-2">
                    {activePath(location.pathname, menu.href) && <span className="h-2 w-2 rounded-full bg-blue" aria-hidden="true" />}
                    {menu.label}
                  </span>
                  <span className="text-blue">{mobileSection === menu.id ? "–" : "+"}</span>
                </button>
                {mobileSection === menu.id && (
                  <div className="grid gap-1 pb-4 pl-1">
                    {menu.items.map((item) => (
                      <Link key={item.to} to={item.to} className="py-2 text-sm text-muted">
                        {item.title}
                      </Link>
                    ))}
                    <Link to={menu.href} className="py-2 text-sm font-semibold text-blue">
                      {menu.all}
                    </Link>
                  </div>
                )}
              </div>
            ))}
            {[...links, { to: "/careers", label: "Careers" }, { to: "/contact", label: "Contact" }].map((link) => {
              const current = activePath(location.pathname, link.to);
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  aria-current={current ? "page" : undefined}
                  className={`mb-3 flex items-center gap-2 rounded-[12px] px-4 py-4 font-semibold ${current ? "bg-blue text-white" : "card"}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <Link to="/contact#consultation" className="mt-3 flex justify-center rounded-[10px] bg-blue px-4 py-3 font-semibold text-white">
            Talk to an expert
          </Link>
        </div>
      )}

      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

function Mega({ menu }) {
  const { pathname } = useLocation();
  return (
    <Container className="grid gap-10 py-8 lg:grid-cols-[240px_1fr]">
      <div>
        <p className="text-lg font-semibold">{menu.label}</p>
        <p className="mt-2 text-sm leading-relaxed text-muted">{menu.intro}</p>
        <Link to={menu.href} className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-blue">
          {menu.all}
          <Arrow />
        </Link>
      </div>
      <ul className="grid gap-x-10 sm:grid-cols-2">
        {menu.items.map((item) => (
          <li key={item.to} className={`mb-3 rounded-[12px] ${pathname === item.to ? "bg-smoke" : "card"}`}>
            <Link to={item.to} aria-current={pathname === item.to ? "page" : undefined} className="group flex items-center gap-3 p-4">
              {item.mark && (
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[12px] bg-blue font-mono text-xs text-white">
                  {item.mark}
                </span>
              )}
              <span>
                <span className="block text-sm font-semibold group-hover:text-blue">{item.title}</span>
                {item.text && <span className="mt-0.5 block text-xs leading-relaxed text-muted">{item.text}</span>}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}

function Footer() {
  return (
    <footer className="bg-navy text-white/70">
      <Container className="py-12 sm:py-16">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 pb-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-10 lg:pb-12">
          <div>
            <Logo onDark />
            <p className="mt-4 max-w-xs text-sm leading-relaxed">Technology consulting and enterprise software.</p>
            <p className="mt-3 font-mono text-xs tracking-wide text-white/50">United States</p>
          </div>
          <FooterCol title="Services" items={services.map((item) => ({ to: `/services/${item.slug}`, label: item.name }))} />
          <FooterCol
            title="Products"
            items={[
              ...products.map((item) => ({ to: `/products/${item.slug}`, label: item.name })),
              { to: "/contact#demo", label: "Request a demo" },
            ]}
          />
          <FooterCol
            title="Company"
            items={[
              { to: "/about", label: "About Us" },
              { to: "/work", label: "Our Work" },
              { to: "/insights", label: "Insights" },
              { to: "/careers", label: "Careers" },
              { to: "/contact", label: "Contact" },
            ]}
          />
        </div>
        <p className="pt-6 text-sm text-white/45">© {new Date().getFullYear()} Techclick</p>
      </Container>
    </footer>
  );
}

function FooterCol({ title, items }) {
  return (
    <div>
      <p className="mb-4 text-sm font-semibold text-white">{title}</p>
      <ul className="grid gap-2.5 text-sm">
        {items.map((item) => (
          <li key={item.to}>
            <Link to={item.to} className="hover:text-white">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
