export const engageSteps = [
  {
    title: "Diagnose",
    text: "A short, fixed-scope assessment that ends in a clear recommendation.",
  },
  {
    title: "Plan",
    text: "A roadmap, business case and measures agreed with your leadership.",
  },
  {
    title: "Deliver",
    text: "Joint teams work in releases and report progress against the agreed measures.",
  },
  {
    title: "Run",
    text: "Optional managed services under agreed service levels.",
  },
];

export const productPrinciples = [
  {
    title: "Published roadmaps",
    text: "Customers see what is planned and can influence priorities.",
  },
  {
    title: "Secure development",
    text: "Secure development lifecycle, regular penetration testing and a vulnerability disclosure process.",
  },
  {
    title: "Open integration",
    text: "Documented APIs and standard connectors.",
  },
  {
    title: "Direct support",
    text: "Support from the engineers who build the product.",
  },
];

export const services = [
  {
    slug: "technology-consulting",
    name: "Technology Consulting",
    cta: "Discuss a technology consulting project",
    summary:
      "Strategy, architecture and roadmaps that connect technology decisions to business results.",
    lead: "We help leadership teams decide where to invest, what to modernize and how to sequence change, then stay accountable for delivery.",
    starts: [
      "Technology spend that is hard to tie to business outcomes",
      "Legacy estates that slow every new initiative",
      "Roadmaps that stall between strategy and execution",
    ],
    offerings: [
      {
        title: "Technology strategy",
        text: "Target-state architecture and a costed, prioritized roadmap.",
      },
      {
        title: "Portfolio rationalization",
        text: "Application and vendor review to cut overlap and risk.",
      },
      {
        title: "Operating model design",
        text: "Team structures, governance and sourcing for modern delivery.",
      },
      {
        title: "Due diligence",
        text: "Technical assessment for acquisitions, carve-outs and integrations.",
      },
    ],
    commits: [
      "A roadmap your board and delivery teams both sign",
      "Lower run cost across the portfolio",
      "Faster, lower-risk decisions",
    ],
    productSlugs: ["atlas"],
    solutionSlugs: ["data-ai-modernization", "cloud-operations"],
  },
  {
    slug: "software-development",
    name: "Software Development",
    cta: "Discuss a software development project",
    summary:
      "Product engineering for custom applications, platforms and digital services.",
    lead: "Cross-functional teams design, build and operate software with the engineering discipline we apply to our own products.",
    starts: [
      "Critical applications that are costly to change",
      "Delivery that slips because of unclear ownership",
      "Quality and security addressed too late in the cycle",
    ],
    offerings: [
      {
        title: "Custom application development",
        text: "Web, mobile and back-end systems built for scale.",
      },
      {
        title: "Application modernization",
        text: "Refactoring and re-platforming legacy systems in safe increments.",
      },
      {
        title: "Product engineering",
        text: "Discovery, UX, engineering and release management in one team.",
      },
      {
        title: "Quality engineering",
        text: "Automated testing and performance engineering built into the pipeline.",
      },
    ],
    commits: [
      "Shorter release cycles",
      "Fewer production incidents",
      "Software your teams can maintain",
    ],
    productSlugs: ["relay"],
    solutionSlugs: ["connected-enterprise"],
  },
  {
    slug: "ai-data",
    name: "AI and Data",
    cta: "Discuss a ai and data project",
    summary:
      "Data platforms, analytics and governed AI that move from pilot to production.",
    lead: "We build the data foundations, models and controls that let organizations use AI with confidence and measure what it returns.",
    starts: [
      "Data spread across systems with no single trusted view",
      "AI pilots that never reach production",
      "Unclear accountability for model risk and privacy",
    ],
    offerings: [
      {
        title: "Data platform engineering",
        text: "Modern data architecture, pipelines and quality controls.",
      },
      {
        title: "Analytics and BI",
        text: "Decision-ready reporting and self-service analytics.",
      },
      {
        title: "Applied AI and machine learning",
        text: "Use-case selection, model development and MLOps.",
      },
      {
        title: "AI governance",
        text: "Policies, evaluation and monitoring for responsible AI.",
      },
    ],
    commits: [
      "One governed source of truth",
      "AI use cases in production with measured value",
      "Documented model risk controls",
    ],
    productSlugs: ["atlas", "assist"],
    solutionSlugs: ["data-ai-modernization"],
  },
  {
    slug: "cloud-infrastructure",
    name: "Cloud and Infrastructure",
    cta: "Discuss a cloud and infrastructure project",
    summary:
      "Migration, platform engineering and cost management across public, private and hybrid cloud.",
    lead: "We design landing zones, migrate workloads and build the platforms that let engineering teams ship safely on any major cloud.",
    starts: [
      "Cloud bills growing faster than usage",
      "Migrations stalled by dependencies and risk",
      "Inconsistent environments and manual operations",
    ],
    offerings: [
      {
        title: "Cloud strategy and migration",
        text: "Assessment, wave planning and execution.",
      },
      {
        title: "Platform engineering",
        text: "Internal developer platforms, infrastructure as code and CI/CD.",
      },
      {
        title: "FinOps",
        text: "Cost visibility, allocation and optimization practices.",
      },
      {
        title: "Hybrid and edge infrastructure",
        text: "Data center, network and edge modernization.",
      },
    ],
    commits: [
      "Predictable cloud spend",
      "Standardized, automated environments",
      "Migrations completed on schedule",
    ],
    productSlugs: ["atlas"],
    solutionSlugs: ["cloud-operations"],
  },
  {
    slug: "cybersecurity",
    name: "Cybersecurity",
    cta: "Discuss a cybersecurity project",
    summary:
      "Security strategy, engineering and operations that reduce risk without slowing the business.",
    lead: "We assess exposure, engineer controls and run detection and response, using our own security platform where it fits.",
    starts: [
      "Expanding attack surface across cloud, identity and devices",
      "Too many alerts and too few analysts",
      "Regulatory pressure and board-level scrutiny",
    ],
    offerings: [
      {
        title: "Security strategy and risk",
        text: "Maturity assessments, roadmaps and board reporting.",
      },
      {
        title: "Identity and zero trust",
        text: "Identity, access and network segmentation programs.",
      },
      {
        title: "Cloud and application security",
        text: "Secure architecture, DevSecOps and testing.",
      },
      {
        title: "Detection and response",
        text: "Monitoring, threat hunting and incident response.",
      },
    ],
    commits: [
      "Measurable reduction in exposure",
      "Faster detection and containment",
      "Clear evidence for auditors and regulators",
    ],
    productSlugs: ["sentinel"],
    solutionSlugs: ["cyber-resilience"],
  },
  {
    slug: "systems-integration",
    name: "Systems Integration",
    cta: "Discuss a systems integration project",
    summary:
      "Connecting ERP, CRM, core platforms and data so processes run end to end.",
    lead: "We integrate enterprise applications and partners through APIs and events, with the monitoring needed to run them reliably.",
    starts: [
      "Point-to-point interfaces that break with every change",
      "Manual work between systems that should talk to each other",
      "Slow onboarding of partners and acquisitions",
    ],
    offerings: [
      {
        title: "Enterprise application integration",
        text: "ERP, CRM, HCM and industry platform integration.",
      },
      {
        title: "API strategy and management",
        text: "API design, security and lifecycle management.",
      },
      {
        title: "Event-driven architecture",
        text: "Real-time data flow between systems and partners.",
      },
      {
        title: "Implementation services",
        text: "Deployment of leading enterprise platforms.",
      },
    ],
    commits: [
      "Reusable integrations instead of one-offs",
      "Less manual rework",
      "Faster partner onboarding",
    ],
    productSlugs: ["relay"],
    solutionSlugs: ["connected-enterprise"],
  },
  {
    slug: "managed-services",
    name: "Managed Services",
    cta: "Discuss a managed services project",
    summary:
      "Run and improve applications, infrastructure and security under clear service levels.",
    lead: "Our operations teams take accountability for day-to-day running and continuous improvement, with reporting you can audit.",
    starts: [
      "Internal teams consumed by routine operations",
      "Service levels that are measured but not met",
      "Rising cost of round-the-clock coverage",
    ],
    offerings: [
      {
        title: "Application management",
        text: "Support, maintenance and enhancement of business applications.",
      },
      {
        title: "Cloud and infrastructure operations",
        text: "Monitoring, patching and capacity management.",
      },
      {
        title: "Managed security",
        text: "24x7 detection and response delivered with Techclick Sentinel.",
      },
      {
        title: "Service desk",
        text: "End-user support with automation and self-service.",
      },
    ],
    commits: [
      "Agreed service levels, reported monthly",
      "Lower total cost of operations",
      "Internal teams freed for priority work",
    ],
    productSlugs: ["sentinel", "assist"],
    solutionSlugs: ["cyber-resilience", "cloud-operations"],
  },
];

const demoPoints = [
  "Live product walkthrough",
  "Architecture and security review",
  "Deployment and pricing options",
];

export const products = [
  {
    slug: "atlas",
    mark: "At",
    name: "Techclick Atlas",
    category: "Data and analytics platform",
    summary:
      "Unify operational data, govern it once and give every team trusted analytics.",
    problem:
      "Most enterprises run reporting on copies of copies. Atlas connects source systems, applies one set of definitions and access rules, and serves the same numbers to dashboards, applications and AI.",
    deployment: "Software as a service, private cloud, self-managed",
    capabilities: [
      {
        title: "Connectors",
        text: "Prebuilt connectors for databases, SaaS applications and files.",
      },
      {
        title: "Semantic layer",
        text: "Shared metric definitions used by every report and model.",
      },
      {
        title: "Data quality",
        text: "Rules, alerts and lineage for every pipeline.",
      },
      {
        title: "Governance",
        text: "Role- and attribute-based access, masking and audit logs.",
      },
      {
        title: "Self-service analytics",
        text: "Dashboards and exploration for business users.",
      },
      {
        title: "AI-ready",
        text: "Feature and vector stores for machine learning and assistants.",
      },
    ],
    outcomes: [
      {
        title: "One version of the truth",
        text: "Finance, operations and sales report from the same definitions.",
      },
      {
        title: "Faster answers",
        text: "Analysts spend time on questions, not reconciliation.",
      },
      {
        title: "Governance by default",
        text: "Access policies follow the data wherever it is used.",
      },
    ],
    editions: [
      {
        name: "Standard",
        audience: "For a single business unit",
        points: ["Up to 25 connectors", "Dashboards and exploration", "Standard support"],
      },
      {
        name: "Professional",
        audience: "For multiple teams",
        featured: true,
        points: [
          "Unlimited connectors",
          "Semantic layer and data quality",
          "Single sign-on",
          "Priority support",
        ],
      },
      {
        name: "Enterprise",
        audience: "For regulated, global use",
        points: [
          "Private cloud or self-managed",
          "Advanced governance and audit",
          "Dedicated success manager",
          "24x7 support",
        ],
      },
    ],
    demoPoints,
    serviceSlugs: ["technology-consulting", "ai-data", "cloud-infrastructure"],
    solutionSlugs: ["data-ai-modernization", "cloud-operations"],
  },
  {
    slug: "sentinel",
    mark: "Sn",
    name: "Techclick Sentinel",
    category: "Security operations platform",
    summary:
      "Detect, investigate and respond to threats across cloud, identity and endpoints from one console.",
    problem:
      "Security teams lose time switching between tools and chasing low-value alerts. Sentinel correlates signals into prioritized incidents and automates the first steps of response.",
    deployment: "Software as a service, private cloud",
    capabilities: [
      {
        title: "Unified telemetry",
        text: "Ingest logs and events from cloud, identity, network and endpoint tools.",
      },
      {
        title: "Correlation engine",
        text: "Groups related alerts into a single incident with context.",
      },
      {
        title: "Risk scoring",
        text: "Prioritizes incidents by asset value and threat severity.",
      },
      {
        title: "Automated playbooks",
        text: "Containment and notification steps that run on approval.",
      },
      {
        title: "Case management",
        text: "Investigation timeline, evidence and handover in one place.",
      },
      {
        title: "Compliance reporting",
        text: "Evidence packs mapped to common control frameworks.",
      },
    ],
    outcomes: [
      {
        title: "Less noise",
        text: "Analysts work incidents, not individual alerts.",
      },
      {
        title: "Faster response",
        text: "Playbooks shorten the time from detection to containment.",
      },
      {
        title: "Audit-ready",
        text: "Every action is logged with who, what and when.",
      },
    ],
    editions: [
      {
        name: "Standard",
        audience: "Core detection",
        points: ["Unified telemetry", "Correlation and risk scoring", "Business-hours support"],
      },
      {
        name: "Professional",
        audience: "Detection and response",
        featured: true,
        points: [
          "Automated playbooks",
          "Case management",
          "Threat intelligence feeds",
          "24x7 support",
        ],
      },
      {
        name: "Managed",
        audience: "Delivered with our security operations team",
        points: [
          "Everything in Professional",
          "24x7 monitoring by our analysts",
          "Monthly risk reporting",
        ],
      },
    ],
    demoPoints,
    serviceSlugs: ["cybersecurity", "managed-services"],
    solutionSlugs: ["cyber-resilience", "cloud-operations"],
  },
  {
    slug: "relay",
    mark: "Rl",
    name: "Techclick Relay",
    category: "Integration and workflow platform",
    summary:
      "Connect applications, partners and data with reusable APIs, events and automated workflows.",
    problem:
      "Integration work is often rebuilt for every project. Relay gives teams a catalog of reusable connections and workflows, with monitoring so operations can see and fix issues before users do.",
    deployment: "Software as a service, hybrid, self-managed",
    capabilities: [
      {
        title: "Visual workflow designer",
        text: "Build and version integrations without starting from code.",
      },
      {
        title: "API management",
        text: "Publish, secure and meter APIs for internal and partner use.",
      },
      {
        title: "Event streaming",
        text: "Real-time messaging between systems.",
      },
      {
        title: "Partner onboarding",
        text: "Templates for EDI and B2B connections.",
      },
      {
        title: "Monitoring",
        text: "End-to-end tracing, alerting and replay of failed messages.",
      },
      {
        title: "Developer tools",
        text: "SDKs, CLI and CI/CD integration.",
      },
    ],
    outcomes: [
      {
        title: "Reuse",
        text: "Build a connection once and use it across projects.",
      },
      {
        title: "Visibility",
        text: "See every transaction from source to destination.",
      },
      {
        title: "Speed",
        text: "Onboard partners and applications in days rather than months.",
      },
    ],
    editions: [
      {
        name: "Standard",
        audience: "For departmental automation",
        points: ["Workflow designer", "Core connectors", "Standard support"],
      },
      {
        name: "Professional",
        audience: "For enterprise integration",
        featured: true,
        points: ["API management", "Event streaming", "High availability", "Priority support"],
      },
      {
        name: "Enterprise",
        audience: "For partner ecosystems",
        points: ["Partner onboarding", "Multi-region deployment", "Dedicated success manager"],
      },
    ],
    demoPoints,
    serviceSlugs: ["software-development", "systems-integration"],
    solutionSlugs: ["connected-enterprise"],
  },
  {
    slug: "assist",
    mark: "As",
    name: "Techclick Assist",
    category: "Enterprise AI assistant platform",
    summary:
      "Governed AI assistants that answer from your approved content and complete routine tasks.",
    problem:
      "Teams want the productivity of generative AI without exposing data or trusting unsourced answers. Assist grounds every answer in approved content, cites its sources and respects existing permissions.",
    deployment: "Software as a service, private cloud",
    capabilities: [
      {
        title: "Grounded answers",
        text: "Responses drawn from approved documents, with citations.",
      },
      {
        title: "Permission-aware search",
        text: "Users only see content they already have access to.",
      },
      {
        title: "Task automation",
        text: "Assistants that open tickets, draft documents and update records.",
      },
      {
        title: "Model choice",
        text: "Use leading foundation models or your own, per use case.",
      },
      {
        title: "Evaluation and monitoring",
        text: "Quality, cost and safety tracked for every assistant.",
      },
      {
        title: "Admin controls",
        text: "Data retention, redaction and usage policies.",
      },
    ],
    outcomes: [
      {
        title: "Trustworthy answers",
        text: "Every response shows where it came from.",
      },
      {
        title: "Secure by design",
        text: "Existing access rules apply automatically.",
      },
      {
        title: "Measured value",
        text: "Usage and outcome reporting for each assistant.",
      },
    ],
    editions: [
      {
        name: "Team",
        audience: "One assistant, one team",
        points: ["Grounded answers", "Up to 3 content sources", "Standard support"],
      },
      {
        name: "Business",
        audience: "Assistants across departments",
        featured: true,
        points: [
          "Task automation",
          "Unlimited content sources",
          "Single sign-on",
          "Priority support",
        ],
      },
      {
        name: "Enterprise",
        audience: "Regulated and large-scale use",
        points: [
          "Bring your own model",
          "Private deployment",
          "Advanced evaluation and audit",
        ],
      },
    ],
    demoPoints,
    serviceSlugs: ["ai-data", "managed-services"],
    solutionSlugs: ["data-ai-modernization"],
  },
];

export const solutions = [
  {
    slug: "data-ai-modernization",
    name: "Data and AI Modernization",
    summary: "Move from scattered reporting to governed data and AI in production.",
    problem:
      "Leaders want AI, but the data underneath it is fragmented and untrusted. Projects start in many places and few reach production.",
    serviceSlugs: ["technology-consulting", "ai-data"],
    productSlugs: ["atlas", "assist"],
    phases: [
      {
        title: "Assess",
        text: "Data estate, use-case value and readiness review.",
      },
      {
        title: "Foundation",
        text: "Atlas deployed with governed core data domains.",
      },
      {
        title: "Scale",
        text: "Priority AI use cases launched on Assist with evaluation.",
      },
      {
        title: "Operate",
        text: "Value tracking, model monitoring and continuous improvement.",
      },
    ],
    measures: [
      "Time to produce core reports",
      "AI use cases in production",
      "Share of data under governance",
    ],
    industrySlugs: ["financial-services", "manufacturing", "energy-utilities", "retail"],
  },
  {
    slug: "cyber-resilience",
    name: "Cyber Resilience",
    summary:
      "Reduce exposure and respond faster with strategy, engineering and 24x7 operations.",
    problem:
      "Threats move faster than most security programs. Organizations need a clear risk picture, stronger controls and response capability around the clock.",
    serviceSlugs: ["cybersecurity", "managed-services"],
    productSlugs: ["sentinel"],
    phases: [
      {
        title: "Assess",
        text: "Exposure and maturity assessment against your priorities.",
      },
      {
        title: "Harden",
        text: "Identity, cloud and endpoint controls engineered and tested.",
      },
      {
        title: "Detect",
        text: "Sentinel deployed with tuned detections and playbooks.",
      },
      {
        title: "Respond",
        text: "24x7 monitoring, incident response and board reporting.",
      },
    ],
    measures: [
      "Mean time to detect and contain",
      "Critical exposures open",
      "Control coverage against framework",
    ],
    industrySlugs: [
      "financial-services",
      "healthcare",
      "public-sector",
      "energy-utilities",
    ],
  },
  {
    slug: "connected-enterprise",
    name: "Connected Enterprise",
    summary: "Integrate core systems, partners and workflows so processes run end to end.",
    problem:
      "Orders, claims, cases and invoices still move by email and spreadsheet between systems. Each new application adds another fragile interface.",
    serviceSlugs: ["systems-integration", "software-development"],
    productSlugs: ["relay"],
    phases: [
      {
        title: "Map",
        text: "Process and interface inventory with priority flows.",
      },
      {
        title: "Design",
        text: "API and event architecture with reuse in mind.",
      },
      {
        title: "Build",
        text: "Integrations delivered on Relay in releases.",
      },
      {
        title: "Run",
        text: "Monitoring, support and a growing reusable catalog.",
      },
    ],
    measures: [
      "Manual touches per transaction",
      "Integration reuse rate",
      "Partner onboarding time",
    ],
    industrySlugs: ["healthcare", "manufacturing", "retail"],
  },
  {
    slug: "cloud-operations",
    name: "Cloud Operations Transformation",
    summary:
      "Migrate, standardize and run cloud platforms with predictable cost and reliability.",
    problem:
      "Cloud adoption has outpaced operating discipline. Spend is hard to explain, environments drift and reliability depends on individuals.",
    serviceSlugs: ["cloud-infrastructure", "managed-services"],
    productSlugs: ["atlas", "sentinel"],
    phases: [
      {
        title: "Assess",
        text: "Workload, cost and operating model baseline.",
      },
      {
        title: "Migrate",
        text: "Wave-based migration onto standardized landing zones.",
      },
      {
        title: "Optimize",
        text: "FinOps reporting in Atlas and right-sizing.",
      },
      {
        title: "Run",
        text: "Managed operations with security monitoring in Sentinel.",
      },
    ],
    measures: [
      "Cloud cost per unit of business",
      "Availability against target",
      "Change failure rate",
    ],
    industrySlugs: ["public-sector"],
  },
];

export const industries = [
  {
    slug: "financial-services",
    name: "Financial Services",
    summary:
      "Banks, insurers and capital markets firms modernizing core platforms under strict regulation.",
    regulation: "We design to the requirements of frameworks such as SOX, PCI DSS and GLBA.",
    priorities: [
      "Core and payments modernization",
      "Fraud and financial crime analytics",
      "Operational resilience",
    ],
    solutionSlugs: ["data-ai-modernization", "cyber-resilience"],
    productSlugs: ["assist", "atlas", "sentinel"],
  },
  {
    slug: "healthcare",
    name: "Healthcare and Life Sciences",
    summary:
      "Providers, payers and life sciences organizations improving care, operations and research.",
    regulation:
      "We design to the requirements of HIPAA and HITECH, and HL7 FHIR for interoperability.",
    priorities: [
      "Interoperable clinical and claims data",
      "Protecting patient information",
      "Automating administrative work",
    ],
    solutionSlugs: ["connected-enterprise", "cyber-resilience"],
    productSlugs: ["relay", "sentinel"],
  },
  {
    slug: "public-sector",
    name: "Public Sector",
    summary:
      "Federal, state and local agencies delivering secure, accessible digital services.",
    regulation:
      "We design to requirements such as FedRAMP, FISMA, NIST SP 800-53 and Section 508.",
    priorities: [
      "Legacy system modernization",
      "Citizen-facing digital services",
      "Zero trust security",
    ],
    solutionSlugs: ["cloud-operations", "cyber-resilience"],
    productSlugs: ["atlas", "sentinel"],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    summary: "Manufacturers connecting plants, supply chains and products with data.",
    regulation: "We work to industrial security standards such as ISA/IEC 62443.",
    priorities: [
      "Connected operations and IT/OT integration",
      "Supply chain visibility",
      "Predictive maintenance",
    ],
    solutionSlugs: ["connected-enterprise", "data-ai-modernization"],
    productSlugs: ["assist", "atlas", "relay"],
  },
  {
    slug: "energy-utilities",
    name: "Energy and Utilities",
    summary:
      "Utilities and energy companies modernizing grids, assets and customer operations.",
    regulation: "We design to requirements such as NERC CIP for critical infrastructure.",
    priorities: [
      "Grid and asset analytics",
      "Critical infrastructure protection",
      "Customer platform modernization",
    ],
    solutionSlugs: ["cyber-resilience", "data-ai-modernization"],
    productSlugs: ["assist", "atlas", "sentinel"],
  },
  {
    slug: "retail",
    name: "Retail and Consumer",
    summary: "Retailers and consumer brands unifying commerce, customer and supply data.",
    regulation: "We design to the requirements of PCI DSS and US state privacy laws.",
    priorities: [
      "Unified customer and inventory data",
      "Commerce platform integration",
      "Payment data security",
    ],
    solutionSlugs: ["connected-enterprise", "data-ai-modernization"],
    productSlugs: ["assist", "atlas", "relay"],
  },
];

export const cases = [
  {
    slug: "data-platform",
    industry: "Financial Services",
    name: "Data platform modernization",
    summary:
      "How a data and AI engagement runs when our consultants and Techclick Atlas are delivered together.",
    serviceSlugs: ["ai-data"],
    productSlugs: ["atlas"],
    solutionSlug: "data-ai-modernization",
    start: "Engagements like this usually start with reporting built on copies of source data, definitions that differ between finance and operations, and AI pilots without a governed data foundation underneath.",
    approach: [
      "A four-to-six-week assessment of the data estate and the use cases worth funding",
      "Atlas deployed for the first governed data domains, with shared metric definitions",
      "Priority reports and AI use cases moved onto the new foundation, one release at a time",
    ],
    measures: [
      "Time to produce core reports",
      "AI use cases in production",
      "Share of data under governance",
    ],
  },
  {
    slug: "security-operations",
    industry: "Healthcare and Life Sciences",
    name: "Security operations",
    summary:
      "How a cyber resilience engagement runs when assessment, engineering and Techclick Sentinel are combined.",
    serviceSlugs: ["cybersecurity", "managed-services"],
    productSlugs: ["sentinel"],
    solutionSlug: "cyber-resilience",
    start: "Security teams in these engagements typically face alert volumes they cannot review, tools that do not share context, and pressure to show regulators how incidents are handled.",
    approach: [
      "Exposure and maturity assessment against the organization's priorities",
      "Sentinel deployed with detections and playbooks tuned to the environment",
      "Optional 24x7 monitoring and response by our managed security team",
    ],
    measures: [
      "Mean time to detect and contain",
      "Critical exposures open",
      "Control coverage against framework",
    ],
  },
  {
    slug: "integration",
    industry: "Manufacturing",
    name: "Enterprise integration",
    summary:
      "How a connected enterprise engagement runs when integration services are delivered on Techclick Relay.",
    serviceSlugs: ["systems-integration"],
    productSlugs: ["relay"],
    solutionSlug: "connected-enterprise",
    start: "These engagements usually begin where orders, invoices or production data move between systems by email, spreadsheet or fragile point-to-point interfaces.",
    approach: [
      "Inventory of processes and interfaces, ranked by cost of manual work",
      "API and event architecture designed for reuse across projects",
      "Integrations built and monitored on Relay, adding to a shared catalog",
    ],
    measures: [
      "Manual touches per transaction",
      "Integration reuse rate",
      "Partner onboarding time",
    ],
  },
];

export const insights = [
  {
    slug: "ai-production",
    type: "Article",
    practice: "AI and Data",
    title: "Five questions to answer before scaling generative AI",
    summary:
      "Most AI pilots stall for reasons that have little to do with the model. These are the questions that decide whether a use case reaches production.",
    author: "Techclick AI and Data team",
    minutes: 6,
    sections: [
      {
        heading: "What decision or task will change?",
        body: 'Start from a named process and a named owner. A use case defined as "use AI for customer service" cannot be measured; "draft first responses to billing inquiries for agent review" can.',
      },
      {
        heading: "Is the source content fit to answer from?",
        body: "Assistants inherit the quality of the documents behind them. Outdated policies and duplicated procedures produce confident, wrong answers. Curating a small, approved corpus usually beats indexing everything.",
      },
      {
        heading: "Who is allowed to see what?",
        body: "Permissions must follow the user into the assistant. If a person cannot open a document in its source system, the assistant must not summarize it for them.",
      },
      {
        heading: "How will quality be measured?",
        body: "Agree a test set and acceptance threshold before launch, then monitor in production. Without this, every disagreement about quality becomes anecdotal.",
      },
      {
        heading: "What does it cost per outcome?",
        body: "Track model, infrastructure and review costs against the work saved. Some use cases are valuable but not yet economical, and that is a useful finding.",
      },
    ],
  },
  {
    slug: "alert-fatigue",
    type: "Point of view",
    practice: "Cybersecurity",
    title: "Reducing alert fatigue without reducing coverage",
    summary:
      "More detections do not mean more security. A practical approach to tuning, correlation and automation in the security operations center.",
    author: "Techclick Cybersecurity team",
    minutes: 5,
    sections: [
      {
        heading: "Measure the noise first",
        body: "Count alerts by source, rule and outcome for a month. In most environments a small number of rules generates most of the volume and few of the true incidents.",
      },
      {
        heading: "Correlate before you escalate",
        body: "Group related signals by user, asset and time window so analysts review one incident with context instead of a dozen separate alerts.",
      },
      {
        heading: "Automate the first ten minutes",
        body: "Enrichment, scoping and notification can run automatically. Keep containment actions behind an approval step until the playbook has earned trust.",
      },
      {
        heading: "Review detections like code",
        body: "Version, test and retire detection rules on a schedule. Rules that have never fired a true positive deserve scrutiny.",
      },
    ],
  },
  {
    slug: "integration-reuse",
    type: "Article",
    practice: "Systems Integration",
    title: "Why most integrations get built twice",
    summary:
      "Project-by-project integration creates a hidden second estate. How to build an integration catalog that teams actually reuse.",
    author: "Techclick Systems Integration team",
    minutes: 4,
    sections: [
      {
        heading: "The hidden estate",
        body: "Each project builds the interfaces it needs and moves on. After a few years, the organization runs hundreds of point-to-point connections that nobody owns.",
      },
      {
        heading: "Design for the second consumer",
        body: "Build each integration as if a second team will need it next quarter: documented contract, versioning and monitoring from day one.",
      },
      {
        heading: "Make reuse the easy path",
        body: "A searchable catalog with clear ownership and onboarding steps does more for reuse than any policy.",
      },
    ],
  },
  {
    slug: "finops",
    type: "Research",
    practice: "Cloud and Infrastructure",
    title: "Unit economics for cloud: a practical starting point",
    summary:
      "Total cloud spend tells you little. Cost per transaction, customer or claim tells you whether spend is healthy.",
    author: "Techclick Cloud and Infrastructure team",
    minutes: 7,
    sections: [
      {
        heading: "Pick a unit the business recognizes",
        body: "Choose a measure such as cost per order or per active customer, and agree it with finance.",
      },
      {
        heading: "Allocate before you optimize",
        body: "Tagging and allocation rules come first. Optimization without allocation tends to move cost rather than reduce it.",
      },
      {
        heading: "Report trends, not snapshots",
        body: "A rising total with a falling unit cost is usually good news. Report both, every month, to the people who own the budget.",
      },
    ],
  },
];

export const values = [
  {
    title: "Accountable",
    text: "We commit to outcomes and report against them openly.",
  },
  {
    title: "Engineering-led",
    text: "We build our own products, and bring that discipline to every engagement.",
  },
  {
    title: "Secure by default",
    text: "Security and privacy are designed in, never added at the end.",
  },
  {
    title: "Plain-spoken",
    text: "We give clear advice, including when the right answer is not to buy anything from us.",
  },
];

export const careerTracks = [
  {
    title: "Consulting",
    text: "Strategy, architecture and delivery leadership.",
  },
  {
    title: "Engineering",
    text: "Software, data, cloud and security engineering.",
  },
  {
    title: "Product",
    text: "Product management, design and research.",
  },
  {
    title: "Operations",
    text: "Managed services, support and security operations.",
  },
];

export const hiringSteps = [
  { title: "Apply", text: "Send your application for a listed role." },
  { title: "Talk", text: "A conversation with the hiring team." },
  { title: "Show your work", text: "A practical exercise related to the role." },
  { title: "Decide", text: "A clear answer, quickly." },
];

export const contactTabs = [
  {
    id: "consultation",
    title: "Book a consultation",
    text: "Discuss a project with a senior consultant.",
  },
  {
    id: "demo",
    title: "Request a product demo",
    text: "See a product with a specialist.",
  },
  {
    id: "sales",
    title: "Sales inquiry",
    text: "Pricing, quotations and procurement.",
  },
  {
    id: "general",
    title: "General inquiry",
    text: "Media, partnerships, careers and anything else.",
  },
];

export function bySlug(list, slug) {
  return list.find((item) => item.slug === slug);
}

export function pick(list, slugs) {
  return slugs.map((slug) => bySlug(list, slug)).filter(Boolean);
}
