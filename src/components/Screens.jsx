import { Symbol } from "./Logo.jsx";

function Frame({ mark, title, children }) {
  return (
    <figure className="card overflow-hidden">
      <figcaption className="flex items-center gap-2.5 bg-smoke px-4 py-3">
        <Symbol size="sm">{mark}</Symbol>
        <span className="text-sm font-semibold">{title}</span>
        <span className="ml-auto font-mono text-[10px] tracking-wide text-muted uppercase">Sample data</span>
      </figcaption>
      <div className="grid gap-3.5 p-4">{children}</div>
    </figure>
  );
}

function Kpi({ label, value, note, good = false }) {
  return (
    <div className="rounded-[10px] bg-smoke px-3 py-2.5">
      <p className="text-[11px] text-muted">{label}</p>
      <p className="mt-0.5 text-xl font-semibold tracking-tight tabular-nums">{value}</p>
      <p className={`text-[11px] ${good ? "text-ok" : "text-muted"}`}>{note}</p>
    </div>
  );
}

export function AtlasScreen() {
  const bars = [
    ["Finance", "92%"],
    ["Operations", "78%"],
    ["Sales", "64%"],
    ["Supply chain", "51%"],
  ];
  return (
    <Frame mark="At" title="Techclick Atlas">
      <div className="grid grid-cols-3 gap-2">
        <Kpi label="Governed sources" value="38" note="12 domains" />
        <Kpi label="Dashboards in use" value="214" note="this month" />
        <Kpi label="Quality checks passing" value="99.2%" note="last 24 h" good />
      </div>
      <div className="rounded-[10px] bg-smoke px-3 pt-3 pb-2">
        <p className="mb-2 text-[11px] text-muted">Weekly active analysts</p>
        <svg viewBox="0 0 320 110" className="h-28 w-full" aria-hidden="true">
          <g stroke="#e6e6e6" strokeDasharray="2 3">
            <line x1="0" y1="27" x2="320" y2="27" />
            <line x1="0" y1="55" x2="320" y2="55" />
            <line x1="0" y1="83" x2="320" y2="83" />
          </g>
          <path
            d="M0.0,107.0 L29.1,96.2 L58.2,99.8 L87.3,81.9 L116.4,67.6 L145.5,74.7 L174.5,53.2 L203.6,42.4 L232.7,49.6 L261.8,28.1 L290.9,17.3 L320.0,3.0 L320,110 L0,110 Z"
            fill="#141a46"
            opacity="0.12"
          />
          <path
            d="M0.0,107.0 L29.1,96.2 L58.2,99.8 L87.3,81.9 L116.4,67.6 L145.5,74.7 L174.5,53.2 L203.6,42.4 L232.7,49.6 L261.8,28.1 L290.9,17.3 L320.0,3.0"
            fill="none"
            stroke="#141a46"
            strokeWidth="2.4"
          />
          <circle cx="320" cy="3" r="3.5" fill="#fff" stroke="#141a46" strokeWidth="2" />
        </svg>
      </div>
      <div className="grid gap-2">
        {bars.map(([label, width]) => (
          <div key={label} className="grid grid-cols-[92px_1fr] items-center gap-3 text-xs text-muted">
            <span>{label}</span>
            <span className="h-2 overflow-hidden rounded-full bg-white">
              <span className="block h-full rounded-full bg-blue" style={{ width }} />
            </span>
          </div>
        ))}
      </div>
    </Frame>
  );
}

const incidents = [
  ["Critical", "Impossible travel, privileged account", "Identity", "2m", "bg-red-50 text-crit"],
  ["High", "Unusual outbound volume from file server", "Network", "14m", "bg-orange-50 text-warn"],
  ["Medium", "New admin consent to cloud app", "Cloud", "41m", "bg-amber-50 text-amber-800"],
  ["Low", "Endpoint agent out of date", "Endpoint", "1h", "bg-smoke text-muted"],
];

export function SentinelScreen() {
  return (
    <Frame mark="Sn" title="Techclick Sentinel">
      <div className="grid grid-cols-3 gap-2">
        <Kpi label="Open incidents" value="12" note="from 1,284 alerts" />
        <Kpi label="Median time to contain" value="18 min" note="this week" good />
        <Kpi label="Playbooks run" value="36" note="automatic" />
      </div>
      <div className="overflow-hidden rounded-[10px] bg-smoke">
        <table className="w-full text-left text-xs">
          <thead className="font-mono text-[10px] tracking-wide text-muted uppercase">
            <tr>
              <th className="px-3 py-2 font-medium">Severity</th>
              <th className="px-3 py-2 font-medium">Incident</th>
              <th className="hidden px-3 py-2 font-medium sm:table-cell">Source</th>
              <th className="px-3 py-2 font-medium">Age</th>
            </tr>
          </thead>
          <tbody>
            {incidents.map(([severity, name, source, age, tone]) => (
              <tr key={name}>
                <td className="px-3 py-2.5">
                  <span className={`rounded px-1.5 py-0.5 font-mono text-[10px] font-semibold uppercase ${tone}`}>
                    {severity}
                  </span>
                </td>
                <td className="px-3 py-2.5 font-medium">{name}</td>
                <td className="hidden px-3 py-2.5 text-muted sm:table-cell">{source}</td>
                <td className="px-3 py-2.5 font-mono text-muted">{age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Frame>
  );
}

export function RelayScreen() {
  const nodes = [
    ["Source", "ERP orders"],
    ["Transform", "Map to order schema"],
    ["Route", "Region rules"],
  ];
  return (
    <Frame mark="Rl" title="Techclick Relay">
      <div className="grid gap-2 sm:grid-cols-[1fr_auto_1fr_auto_1fr]">
        {nodes.map(([title, text], index) => (
          <div key={title} className="contents">
            <div className="rounded-[10px] bg-smoke px-3 py-2.5">
              <p className="text-xs font-semibold">{title}</p>
              <p className="font-mono text-[10px] text-muted">{text}</p>
            </div>
            {index < 2 && (
              <div className="hidden items-center sm:flex" aria-hidden="true">
                <span className="h-px w-4 bg-muted/50" />
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="grid gap-2 sm:grid-cols-3">
        {[
          ["Warehouse API", "Delivered"],
          ["CRM events", "Delivered"],
          ["Partner EDI", "Retrying"],
        ].map(([name, state]) => (
          <div key={name} className="rounded-[10px] bg-smoke px-3 py-2.5">
            <p className="text-xs font-semibold">{name}</p>
            <p className={`font-mono text-[10px] ${state === "Retrying" ? "text-warn" : "text-ok"}`}>{state}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-2">
        <Kpi label="Messages today" value="184k" note="99.97% delivered" good />
        <Kpi label="Reusable flows" value="64" note="in catalog" />
        <Kpi label="Median latency" value="220 ms" note="end to end" />
      </div>
    </Frame>
  );
}

export function AssistScreen() {
  return (
    <Frame mark="As" title="Techclick Assist">
      <div className="grid gap-3 lg:grid-cols-[1.4fr_0.8fr]">
        <div className="grid content-start gap-2.5">
          <p className="ml-auto max-w-[90%] rounded-2xl rounded-br-md bg-ink px-3 py-2 text-xs leading-relaxed text-white">
            What is our travel approval limit for directors?
          </p>
          <div className="max-w-[95%] rounded-2xl rounded-bl-md bg-smoke px-3 py-2 text-xs leading-relaxed">
            Directors can approve travel up to the limit set in the Travel and Expense Policy, section 4.2. Bookings above it need VP approval.
            <span className="mt-2 flex flex-wrap gap-1.5">
              {["Travel Policy v7, §4.2", "Delegation matrix"].map((cite) => (
                <span key={cite} className="rounded-full bg-white px-1.5 py-0.5 font-mono text-[10px] text-blue">
                  {cite}
                </span>
              ))}
            </span>
          </div>
          <p className="ml-auto max-w-[90%] rounded-2xl rounded-br-md bg-ink px-3 py-2 text-xs leading-relaxed text-white">
            Open a request for the Chicago offsite.
          </p>
          <div className="max-w-[95%] rounded-2xl rounded-bl-md bg-smoke px-3 py-2 text-xs leading-relaxed">
            Draft request ready. Travel request, Chicago, 3 attendees.
            <span className="mt-2 inline-flex rounded-md bg-blue px-2 py-1 text-[11px] font-semibold text-white">
              Review and submit
            </span>
          </div>
        </div>
        <div className="rounded-[10px] bg-smoke px-3 py-2.5">
          <p className="font-mono text-[10px] tracking-wide text-muted uppercase">Grounded in</p>
          {["HR policies", "Finance procedures", "IT knowledge base"].map((source) => (
            <p key={source} className="py-2 text-xs">
              {source}
            </p>
          ))}
          <p className="pt-2 font-mono text-[10px] text-ok">Access respects source permissions</p>
        </div>
      </div>
    </Frame>
  );
}

const screens = {
  atlas: AtlasScreen,
  sentinel: SentinelScreen,
  relay: RelayScreen,
  assist: AssistScreen,
};

export function ProductScreen({ slug }) {
  const Screen = screens[slug] ?? AtlasScreen;
  return <Screen />;
}
