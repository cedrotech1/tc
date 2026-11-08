import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { contactTabs, products, services } from "../data/site.js";
import { Button } from "./ui.jsx";

const empty = {
  first: "",
  last: "",
  email: "",
  phone: "",
  company: "",
  title: "",
  interest: "",
  product: "",
  users: "",
  timeline: "",
  date: "",
  message: "",
  consent: false,
  website: "",
};

function Field({ label, children, error, optional = false }) {
  return (
    <label className="grid gap-1.5 text-sm">
      <span className="font-semibold">
        {label} {optional && <span className="font-normal text-muted">(optional)</span>}
      </span>
      {children}
      {error && <span className="text-xs text-crit">{error}</span>}
    </label>
  );
}

const control =
  "w-full rounded-[10px] border-0 bg-smoke px-3 py-2.5 text-sm text-ink outline-none";

export function InquiryForm({ intent = "consultation", productSlug = "", compact = false }) {
  const [params] = useSearchParams();
  const initialIntent = contactTabs.some((tab) => tab.id === params.get("intent"))
    ? params.get("intent")
    : intent;
  const [tab, setTab] = useState(initialIntent);
  const [values, setValues] = useState({
    ...empty,
    product: params.get("product") || productSlug,
  });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const id = location.hash.replace("#", "");
    if (contactTabs.some((item) => item.id === id)) setTab(id);
  }, [location.hash]);

  const showProduct = !compact && (tab === "demo" || tab === "sales");
  const showInterest = tab === "consultation";
  const showUsers = !compact && (tab === "demo" || tab === "sales");
  const showTimeline = tab === "consultation" || tab === "sales";
  const showDate = tab === "consultation";

  function update(key, value) {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  }

  function submit(event) {
    event.preventDefault();
    if (values.website) return;
    const next = {};
    if (!values.first.trim()) next.first = "Enter your first name.";
    if (!values.last.trim()) next.last = "Enter your last name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = "Enter a valid business email.";
    if (!values.company.trim()) next.company = "Enter your company.";
    if (!compact && !values.message.trim()) next.message = "Tell us how we can help.";
    if (!compact && showProduct && !values.product) next.product = "Select a product.";
    if (!values.consent) next.consent = "Please agree so we can reply.";
    setErrors(next);
    if (Object.keys(next).length === 0) setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-[10px] bg-smoke px-5 py-6 text-sm leading-relaxed text-ok">
        Request received. A consultant or product specialist will reply within one business day.
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="grid gap-5" noValidate>
      {!compact && (
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4" role="tablist" aria-label="Request type">
          {contactTabs.map((item) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={tab === item.id}
              onClick={() => setTab(item.id)}
              className={`rounded-[10px] px-3 py-3 text-left ${tab === item.id ? "bg-blue text-white" : "bg-smoke text-ink"}`}
            >
              <span className={`block text-sm font-semibold ${tab === item.id ? "text-white" : "text-ink"}`}>
                {item.title}
              </span>
              <span className={`mt-1 block text-xs leading-relaxed ${tab === item.id ? "text-white/70" : "text-muted"}`}>{item.text}</span>
            </button>
          ))}
        </div>
      )}
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="First name" error={errors.first}>
          <input className={control} value={values.first} onChange={(event) => update("first", event.target.value)} autoComplete="given-name" />
        </Field>
        <Field label="Last name" error={errors.last}>
          <input className={control} value={values.last} onChange={(event) => update("last", event.target.value)} autoComplete="family-name" />
        </Field>
        <Field label="Business email" error={errors.email}>
          <input className={control} type="email" value={values.email} onChange={(event) => update("email", event.target.value)} autoComplete="email" />
        </Field>
        {!compact && (
          <Field label="Phone" optional>
            <input className={control} value={values.phone} onChange={(event) => update("phone", event.target.value)} autoComplete="tel" />
          </Field>
        )}
        <Field label="Company" error={errors.company}>
          <input className={control} value={values.company} onChange={(event) => update("company", event.target.value)} autoComplete="organization" />
        </Field>
        {!compact && (
          <Field label="Job title" optional>
            <input className={control} value={values.title} onChange={(event) => update("title", event.target.value)} autoComplete="organization-title" />
          </Field>
        )}
      </div>

      {showInterest && (
        <Field label="Area of interest">
          <select className={control} value={values.interest} onChange={(event) => update("interest", event.target.value)}>
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service.slug}>{service.name}</option>
            ))}
            <option>Not sure yet</option>
          </select>
        </Field>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        {showProduct && (
          <Field label="Product" error={errors.product}>
            <select className={control} value={values.product} onChange={(event) => update("product", event.target.value)}>
              <option value="">Select a product</option>
              {products.map((product) => (
                <option key={product.slug} value={product.slug}>
                  {product.name}
                </option>
              ))}
            </select>
          </Field>
        )}
        {showUsers && (
          <Field label="Approximate users">
            <select className={control} value={values.users} onChange={(event) => update("users", event.target.value)}>
              <option value="">Select</option>
              <option>Under 100</option>
              <option>100 to 1,000</option>
              <option>1,000 to 10,000</option>
              <option>More than 10,000</option>
            </select>
          </Field>
        )}
        {showTimeline && (
          <Field label="Timeline">
            <select className={control} value={values.timeline} onChange={(event) => update("timeline", event.target.value)}>
              <option value="">Select</option>
              <option>This quarter</option>
              <option>Next 6 months</option>
              <option>Exploring</option>
            </select>
          </Field>
        )}
        {showDate && (
          <Field label="Preferred date" optional>
            <input className={control} type="date" value={values.date} onChange={(event) => update("date", event.target.value)} />
          </Field>
        )}
      </div>

      {!compact && (
        <Field label="How can we help?" error={errors.message}>
          <textarea className={`${control} min-h-32 resize-y`} value={values.message} onChange={(event) => update("message", event.target.value)} />
        </Field>
      )}

      <label className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
        Website
        <input tabIndex={-1} autoComplete="off" value={values.website} onChange={(event) => update("website", event.target.value)} />
      </label>

      <label className="flex items-start gap-3 text-sm text-muted">
        <input
          type="checkbox"
          className="mt-1 h-4 w-4 accent-blue"
          checked={values.consent}
          onChange={(event) => update("consent", event.target.checked)}
        />
        <span>I agree to be contacted about this request.</span>
      </label>
      {errors.consent && <p className="-mt-3 text-xs text-crit">{errors.consent}</p>}

      <Button type="submit" className="justify-self-start">
        {compact ? "Request demo" : "Send request"}
      </Button>
    </form>
  );
}
