// ============================================================
//  Higher Ground — Resource data + filtering
//
//  Each resource has:
//    topic  — the primary use-case category (drives filters)
//    type   — the format/format (tool / training / article / org)
//
//  Topic values:
//    "campaign-organizing" | "workflow-automation" | "research-analytics"
//    "ethics-security"     | "training-capacity"   | "emerging-tech"
//
//  To add a resource: copy any block below and fill in the fields.
// ============================================================

const resources = [

  // ── CAMPAIGN & ORGANIZING ───────────────────────────────────
  //    Field ops, voter contact, canvassing, social media organizing

  {
    title: "Tech for Campaigns — Training",
    topic: "campaign-organizing",
    type: "training",
    description: "Free digital skills training for Democratic campaigns and progressive organizations, covering AI tools for communications, organizing, and voter contact.",
    tags: ["campaigns", "digital skills", "workshops", "free"],
    url: "https://www.techforcampaigns.org",
  },
  {
    title: "Wellstone Action",
    topic: "campaign-organizing",
    type: "training",
    description: "Wellstone's Camp training programs equip progressive organizers and candidates with modern skills — including how to responsibly integrate AI into advocacy and field work.",
    tags: ["organizing", "candidates", "advocacy", "workshops"],
    url: "https://www.wellstone.org",
  },
  {
    title: "Action Network",
    topic: "campaign-organizing",
    type: "tool",
    description: "Open-source organizing platform for progressive groups — email, petitions, events, donations. Increasingly integrates AI-assisted features for email and list management.",
    tags: ["organizing", "email", "petitions", "open source"],
    url: "https://actionnetwork.org",
  },
  {
    title: "Hustle",
    topic: "campaign-organizing",
    type: "tool",
    description: "Peer-to-peer texting platform used by major campaigns and unions. AI features help with script suggestions and response routing at scale.",
    tags: ["texting", "voter contact", "P2P", "field"],
    url: "https://hustle.com",
  },
  {
    title: "Impactive",
    topic: "campaign-organizing",
    type: "tool",
    description: "Digital organizing platform combining relational organizing, P2P texting, and phone banking with data integrations — used by progressive campaigns and advocacy orgs.",
    tags: ["relational organizing", "field", "voter contact", "campaigns"],
    url: "https://www.impactive.io",
  },
  {
    title: "Tech for Campaigns — Volunteer Matching",
    topic: "campaign-organizing",
    type: "org",
    description: "Connects skilled tech and digital volunteers with Democratic campaigns and progressive causes. Builds digital capacity for organizations that can't afford in-house teams.",
    tags: ["volunteers", "campaigns", "digital capacity", "Democrats"],
    url: "https://www.techforcampaigns.org",
  },
  {
    title: "Power, Not Panic: Why Organizers Must Engage with AI",
    topic: "campaign-organizing",
    type: "article",
    description: "Essential reading for progressive organizers. Lee Anderson and Oluwakemi Oso argue that disengaging from AI is a surrender — and that organizers and funders must actively shape AI's future before billionaires and autocrats do. Rooted in Afrofuturism and movement strategy.",
    tags: ["organizers", "strategy", "movement", "must-read", "Afrofuturism"],
    url: "https://forgeorganizing.org/article/power-not-panic-why-organizers-must-engage-with-ai-to-build-the-future-we-deserve/",
  },
  {
    title: "Higher Ground Labs — AI Political Tech Landscape Report",
    topic: "campaign-organizing",
    type: "article",
    description: "Higher Ground Labs' AI-edition of their annual Political Tech Landscape Report, mapping use cases, vetted vendors, opportunities, and gaps in AI for Democratic campaigns and progressive organizations.",
    tags: ["campaigns", "landscape", "vendors", "political tech"],
    url: "https://highergroundlabs.com/ai-landscape-report/",
  },
  {
    title: "Generative AI on Campaigns (2025 Whitepaper)",
    topic: "campaign-organizing",
    type: "article",
    description: "September 2025 research paper by Jack Welty and Meg Schwenzfeier — former analytics leaders on Harris for President — on practical AI applications and the strategic implications of generative AI for Democratic campaigns.",
    tags: ["campaigns", "analytics", "research", "2025", "Harris"],
    url: "https://megschwenzfeier.com/files/AI_Whitepaper_2025.pdf",
  },

  // ── WORKFLOW & AUTOMATION ───────────────────────────────────
  //    Internal tools, process automation, productivity

  {
    title: "Claude (Anthropic)",
    topic: "workflow-automation",
    type: "tool",
    description: "AI assistant well-suited for drafting communications, summarizing policy documents, generating talking points, analyzing data, and research. Strong safety and factual accuracy focus.",
    tags: ["writing", "research", "analysis", "communications"],
    url: "https://claude.ai",
  },
  {
    title: "ChatGPT (OpenAI)",
    topic: "workflow-automation",
    type: "tool",
    description: "Widely used AI assistant for drafting content, answering questions, brainstorming, and automating repetitive writing tasks. Available in free and paid tiers.",
    tags: ["writing", "brainstorming", "automation", "free tier"],
    url: "https://chatgpt.com",
  },
  {
    title: "Otter.ai",
    topic: "workflow-automation",
    type: "tool",
    description: "Automated meeting transcription and notes. Useful for staff meetings, interviews, town halls, and trainings — generates searchable transcripts and AI-powered summaries.",
    tags: ["transcription", "meetings", "notes", "accessibility"],
    url: "https://otter.ai",
  },
  {
    title: "Canva (Magic Studio)",
    topic: "workflow-automation",
    type: "tool",
    description: "Design platform with integrated AI tools for generating graphics, social content, presentations, and campaign materials. Free tier available for nonprofits and campaigns.",
    tags: ["design", "social media", "visuals", "free tier"],
    url: "https://www.canva.com",
  },
  {
    title: "How MoveOn Used AI: A Case Study",
    topic: "workflow-automation",
    type: "article",
    description: "Cooperative Impact Lab's in-depth case study of how MoveOn implemented AI across their organizing and communications workflows — with honest lessons about what worked, what didn't, and what large progressive orgs should consider before scaling.",
    tags: ["case study", "MoveOn", "comms", "automation", "lessons learned"],
    url: "https://medium.com/the-cooperative-impact-lab/aicasestudy-moveon-74774ccfa947",
  },

  // ── RESEARCH & ANALYTICS ────────────────────────────────────
  //    Polling, data analysis, social media analytics, audience modeling

  {
    title: "Perplexity AI",
    topic: "research-analytics",
    type: "tool",
    description: "AI-powered research assistant that searches the web and cites its sources — useful for rapid policy research, opposition research, and fact-checking with verifiable references.",
    tags: ["research", "fact-checking", "citations", "policy"],
    url: "https://www.perplexity.ai",
  },
  {
    title: "Quorum",
    topic: "research-analytics",
    type: "tool",
    description: "AI-powered government affairs platform for tracking legislation, monitoring regulatory activity, and managing stakeholder engagement across federal and state levels.",
    tags: ["policy tracking", "legislative", "lobbying", "advocacy"],
    url: "https://www.quorum.us",
  },
  {
    title: "New Organizing Institute (NOI) Archive",
    topic: "research-analytics",
    type: "training",
    description: "The influential training and research hub that shaped a generation of progressive digital organizers. Archived resources on data-driven organizing remain highly relevant.",
    tags: ["data", "digital organizing", "archive"],
    url: "https://neworganizing.com",
  },
  {
    title: "Data for Progress",
    topic: "research-analytics",
    type: "org",
    description: "Progressive think tank using advanced analytics and polling to support progressive campaigns, policies, and movement organizations. Active on AI policy research.",
    tags: ["research", "polling", "campaigns", "think tank"],
    url: "https://www.dataforprogress.org",
  },

  // ── ETHICS & SECURITY ───────────────────────────────────────
  //    Responsible use, deepfakes, opsec, bias, labor/environmental ethics

  {
    title: "AI Now Institute — Annual Reports",
    topic: "ethics-security",
    type: "article",
    description: "The definitive annual assessment of AI's social impacts — covering labor, surveillance, discrimination, and regulation. Essential reading for advocacy staff and policymakers.",
    tags: ["policy", "labor", "surveillance", "annual report"],
    url: "https://ainowinstitute.org/reports",
  },
  {
    title: "EFF: Artificial Intelligence",
    topic: "ethics-security",
    type: "article",
    description: "The Electronic Frontier Foundation's ongoing coverage of AI and civil liberties — including surveillance, deepfakes, AI in policing, and legislative tracking.",
    tags: ["civil liberties", "surveillance", "policing", "deepfakes"],
    url: "https://www.eff.org/issues/artificial-intelligence",
  },
  {
    title: "Brennan Center: AI & Democracy",
    topic: "ethics-security",
    type: "article",
    description: "Research and analysis on how AI affects democratic institutions — including election security, AI-generated disinformation, voter suppression tools, and regulation.",
    tags: ["elections", "democracy", "disinformation", "voting rights"],
    url: "https://www.brennancenter.org/issues/artificial-intelligence",
  },
  {
    title: "Algorithmic Justice League — Resources",
    topic: "ethics-security",
    type: "article",
    description: "Tools, guides, and research on algorithmic bias and AI accountability. Includes practical frameworks for evaluating AI tools and advocating for equitable AI.",
    tags: ["bias", "equity", "accountability", "race"],
    url: "https://www.ajl.org/resources",
  },
  {
    title: "Data & Society Research Institute",
    topic: "ethics-security",
    type: "article",
    description: "Independent research on the social and cultural implications of AI — labor, media, health, and education. Published reports are freely available.",
    tags: ["research", "labor", "media", "health"],
    url: "https://datasociety.net",
  },
  {
    title: "Center for Democracy & Technology — AI",
    topic: "ethics-security",
    type: "article",
    description: "CDT's policy analysis and advocacy guides on AI in government, employment, and civil rights — with resources for advocates engaging in AI legislative processes.",
    tags: ["policy", "civil rights", "government", "legislation"],
    url: "https://cdt.org/area-of-focus/ai-governance/",
  },
  {
    title: "ACLU: Artificial Intelligence",
    topic: "ethics-security",
    type: "article",
    description: "The ACLU's coverage of AI and civil liberties — face recognition, predictive policing, AI in courts, and workers' rights. Includes policy primers and advocacy tools.",
    tags: ["civil liberties", "policing", "workers rights", "face recognition"],
    url: "https://www.aclu.org/ai",
  },
  {
    title: "AI Now Institute",
    topic: "ethics-security",
    type: "org",
    description: "Leading interdisciplinary research institute studying the social implications of AI. Housed at NYU, it produces influential policy research and advocates for AI accountability.",
    tags: ["research", "policy", "accountability", "NYU"],
    url: "https://ainowinstitute.org",
  },
  {
    title: "Algorithmic Justice League",
    topic: "ethics-security",
    type: "org",
    description: "Organization working to illuminate the harms and biases of AI systems — with particular focus on how facial recognition and predictive systems harm communities of color.",
    tags: ["bias", "face recognition", "race", "accountability"],
    url: "https://www.ajl.org",
  },
  {
    title: "Encode Justice",
    topic: "ethics-security",
    type: "org",
    description: "Youth-led AI advocacy organization pushing for equitable and accountable AI policy. Organizes young people on AI issues at the federal and state level.",
    tags: ["youth", "advocacy", "policy", "federal"],
    url: "https://encodejustice.org",
  },
  {
    title: "Center for Democracy & Technology",
    topic: "ethics-security",
    type: "org",
    description: "Nonpartisan advocacy organization working to preserve civil rights and democratic values in digital policy — including a major focus on AI governance and civil rights.",
    tags: ["policy", "civil rights", "advocacy", "digital rights"],
    url: "https://cdt.org",
  },
  {
    title: "Partnership on AI",
    topic: "ethics-security",
    type: "org",
    description: "Multi-stakeholder nonprofit bringing together civil society, academia, and industry to address AI's impacts. Publishes resources on responsible AI for nonprofits and advocates.",
    tags: ["multi-stakeholder", "responsible AI", "civil society"],
    url: "https://partnershiponai.org",
  },
  {
    title: "Mozilla AI Literacy",
    topic: "ethics-security",
    type: "training",
    description: "Mozilla Foundation's collection of guides and courses helping people understand how AI works, its risks, and how to engage critically with AI-powered systems.",
    tags: ["AI literacy", "free", "guides", "ethics"],
    url: "https://www.mozilla.org/en-US/ai/",
  },
  {
    title: "AI4ALL Open Learning",
    topic: "ethics-security",
    type: "training",
    description: "Free AI education curriculum designed for people from underrepresented communities. Covers AI fundamentals, ethics, and practical applications — no technical background required.",
    tags: ["free", "equity", "AI literacy", "curriculum"],
    url: "https://ai-4-all.org",
  },
  {
    title: "Access Now",
    topic: "ethics-security",
    type: "org",
    description: "International digital rights organization defending civil liberties in the digital age. Active on AI surveillance policy, facial recognition regulation, and holding platforms and governments accountable for algorithmic harm.",
    tags: ["digital rights", "surveillance", "facial recognition", "civil liberties"],
    url: "https://www.accessnow.org",
  },
  {
    title: "DeepTrust Alliance",
    topic: "ethics-security",
    type: "org",
    description: "The leading global nonprofit coalition establishing industry standards and policy to combat deepfakes and digital disinformation. Multi-stakeholder, multi-industry network — essential resource for orgs navigating AI-generated media threats.",
    tags: ["deepfakes", "disinformation", "standards", "media integrity"],
    url: "https://www.deeptrustalliance.org",
  },
  {
    title: "Berkman Klein Center for Internet & Society",
    topic: "ethics-security",
    type: "org",
    description: "Harvard's interdisciplinary research center at the intersection of law, technology, and society. Produces widely cited AI governance, policy, and democracy research — a credible source for briefings and advocacy work.",
    tags: ["Harvard", "research", "governance", "law", "policy"],
    url: "https://cyber.harvard.edu",
  },
  {
    title: "AI and Democracy: Mapping the Intersections (Carnegie Endowment)",
    topic: "ethics-security",
    type: "article",
    description: "Carnegie Endowment research mapping four key intersections of AI and democratic systems: elections and campaigns, citizen deliberation, government services, and social cohesion. Covers both risks (deepfakes, surveillance, misinformation) and opportunities.",
    tags: ["democracy", "elections", "surveillance", "Carnegie", "research"],
    url: "https://carnegieendowment.org/research/2026/01/ai-and-democracy-mapping-the-intersections",
  },

  // ── TRAINING & CAPACITY ─────────────────────────────────────
  //    Upskilling teams, AI governance, workplace policy, org readiness

  {
    title: "Progressive Technology Project",
    topic: "training-capacity",
    type: "training",
    description: "Provides technical assistance and training to grassroots organizations, including guidance on adopting AI tools safely and effectively for organizing and communications.",
    tags: ["grassroots", "tech assistance", "nonprofits", "governance"],
    url: "https://www.progressivetech.org",
  },
  {
    title: "NTEN AI Policy Template",
    topic: "training-capacity",
    type: "article",
    description: "Free, customizable AI workplace policy template from NTEN and ANB Advisory — a ready-to-use starting point for nonprofits and advocacy orgs building their first AI governance policy. Download, edit, and adapt for your organization.",
    tags: ["policy template", "governance", "free", "NTEN", "workplace"],
    url: "https://word.nten.org/wp-content/uploads/2024/08/AI-Policy-Template-by-ANB-Advisory.pdf",
  },
  {
    title: "Microsoft AI Usage Policy Template (via TechSoup)",
    topic: "training-capacity",
    type: "article",
    description: "Free AI usage policy template from Microsoft, distributed through TechSoup for nonprofits. Covers acceptable use, data handling, and staff responsibilities — a solid complement to NTEN's template for building out your org's AI governance.",
    tags: ["policy template", "governance", "free", "TechSoup", "Microsoft"],
    url: "https://page.techsoup.org/hubfs/Downloads/AI-Usage-Policy.pdf",
  },
  {
    title: "NTEN: AI for Nonprofits Resource Hub",
    topic: "training-capacity",
    type: "org",
    description: "NTEN's comprehensive hub for AI adoption in the nonprofit sector — bringing together policy templates, governance frameworks, courses, practitioner guides, and community resources for responsible AI implementation.",
    tags: ["NTEN", "hub", "nonprofits", "governance", "training"],
    url: "https://www.nten.org/learn/resource-hubs/artificial-intelligence",
  },
  {
    title: "Claude for Nonprofits (Anthropic)",
    topic: "training-capacity",
    type: "article",
    description: "Anthropic's program for nonprofit organizations: up to 75% off Claude's Team and Enterprise plans, integrations with Blackbaud and Candid, and a free AI education course for staff. Worth knowing about for orgs evaluating AI tools.",
    tags: ["Anthropic", "Claude", "discount", "nonprofits", "education"],
    url: "https://www.anthropic.com/news/claude-for-nonprofits",
  },

  // ── EMERGING TECH ────────────────────────────────────────────
  //    Agentic AI, civic AI, open source models, future capabilities

  {
    title: "Campaigns Are Knowledge Workers and the Tools Just Caught Up",
    topic: "emerging-tech",
    type: "article",
    description: "Matt Hodges on how agentic AI tools can transform campaign operations by automating repetitive knowledge work — communications, fundraising, research, field. Includes clear-eyed analysis of equity gaps and governance risks for under-resourced campaigns.",
    tags: ["agentic AI", "campaigns", "knowledge work", "equity", "governance"],
    url: "https://matthodges.com/posts/2026-01-07-ai-agents-campaigns/",
  },
  {
    title: "Last Week in AI",
    topic: "emerging-tech",
    type: "article",
    description: "The most widely read weekly digest of AI news — curated, concise, and reliable. 130K+ subscribers. Good for staying current without spending all day tracking the space. Available as newsletter and podcast.",
    tags: ["newsletter", "news", "weekly", "free", "podcast"],
    url: "https://lastweekin.ai/",
  },
  {
    title: "AI for Good Foundation",
    topic: "emerging-tech",
    type: "org",
    description: "Global foundation working to align AI development with human values and social impact. Publishes resources, a monthly newsletter, and convenes projects at the intersection of AI and global challenges.",
    tags: ["social impact", "values", "newsletter", "global"],
    url: "https://ai4good.org/",
  },

];

// ============================================================
//  Content Map & Gap Analysis
//  Drives the "What we have / What we need" section
//  severity: "well-covered" | "moderate" | "thin" | "critical"
// ============================================================

const gapMap = [
  {
    topic:       "campaign-organizing",
    icon:        "🗳",
    label:       "Campaign & Organizing",
    severity:    "moderate",
    note:        "Good platform tools, but thin on AI-specific field guides and social organizing tactics.",
    lookingFor: [
      "Guides on AI for canvassing script optimization",
      "Social media organizing with AI (not just design tools)",
      "AI-assisted relational organizing case studies from real campaigns",
      "AI for voter contact ethics: consent, targeting concerns",
    ],
  },
  {
    topic:       "workflow-automation",
    icon:        "⚙️",
    label:       "Workflow & Automation",
    severity:    "thin",
    note:        "We have the major general tools but zero case studies or playbooks from orgs that have automated real work.",
    lookingFor: [
      "Case studies: orgs that have automated internal workflows with AI",
      "Prompt libraries and SOP templates for common comms workflows",
      "Zapier / Make / n8n guides for progressive orgs",
      "AI + CRM integration guides (EveryAction, NGP, VAN)",
    ],
  },
  {
    topic:       "research-analytics",
    icon:        "📊",
    label:       "Research & Analytics",
    severity:    "thin",
    note:        "Only one accessible tool (Perplexity). Quorum is enterprise-tier. Missing audience modeling and social listening.",
    lookingFor: [
      "Low-cost audience modeling / social listening tools",
      "Guide to AI-assisted polling analysis and crosstab interpretation",
      "AI for opposition research with privacy/ethics guardrails",
      "Open-source alternatives to enterprise research platforms",
    ],
  },
  {
    topic:       "ethics-security",
    icon:        "🔒",
    label:       "Ethics & Security",
    severity:    "well-covered",
    note:        "Strongest area in the library. Could add more practitioner-facing opsec and deepfake detection resources.",
    lookingFor: [
      "Opsec guide for orgs using AI tools (data handling, vendor risk)",
      "Practitioner-facing deepfake detection resources",
      "AI environmental impact resources for progressive vendor decisions",
      "Labor displacement resources for union and worker orgs",
    ],
  },
  {
    topic:       "training-capacity",
    icon:        "📚",
    label:       "Training & Capacity",
    severity:    "moderate",
    note:        "Now includes policy templates, the NTEN hub, and the Claude for Nonprofits program — but still missing staff curricula with progressive-org context and internal champions guides.",
    lookingFor: [
      "Staff upskilling curricula with progressive-org context",
      "AI governance frameworks adapted for advocacy organizations",
      "Board/leadership briefings on AI adoption decisions",
      "Internal champions program guide",
    ],
  },
  {
    topic:       "emerging-tech",
    icon:        "🚀",
    label:       "Emerging Tech",
    severity:    "thin",
    note:        "Now has foundational resources on agentic AI and AI news, but civic AI applications, open-source models, and progressive tech project coverage are still missing.",
    lookingFor: [
      "Beginner guide to agentic AI for non-technical org staff",
      "Open source LLM options for data-sovereignty-conscious orgs",
      "Civic AI applications: participatory democracy, petition analysis",
      "AI agent use cases for campaigns and constituent outreach",
      "Progressive AI labs and civic tech projects to watch",
    ],
  },
];

// ============================================================
//  Claude Code + Resources
//  Setup guides, workflow posts, and plugins
// ============================================================

const claudeCodeGuides = [
  {
    title: "Claude Code for Everything: Finally, that Personal Assistant You've Always Wanted",
    series: "Part 1",
    author: "Hannah Stulberg",
    platform: "Substack",
    format: "Setup guide",
    description: "The go-to beginner's guide for installing and using Claude Code without a technical background. Covers IDE setup (Cursor, VS Code), CLI install, terminal basics, and the Document Skills plugin. Start here.",
    tags: ["setup", "beginner", "Cursor", "no coding required", "free"],
    url: "https://hannahstulberg.substack.com/p/claude-code-for-everything-finally",
  },
  {
    title: "Claude Code for Everything: How the Guy Who Built It Actually Uses It",
    series: "Part 2",
    author: "Hannah Stulberg",
    platform: "Substack",
    format: "Workflow guide",
    description: "How Claude Code's creator uses it day-to-day — advanced workflow patterns, session management, and approaches that work just as well for writing, research, and organizing as for coding.",
    tags: ["workflow", "advanced", "sessions", "free"],
    url: "https://hannahstulberg.substack.com/p/claude-code-for-everything-how-the",
  },
  {
    title: "The Best Personal Assistant Remembers Things About You",
    series: "Part 3",
    author: "Hannah Stulberg",
    platform: "Substack",
    format: "Deep dive — CLAUDE.md",
    description: "How to write CLAUDE.md files to give Claude persistent context about your org, your voice, your preferences, and workflows — so every session starts with the right foundations.",
    tags: ["CLAUDE.md", "context", "personalization", "free"],
    url: "https://hannahstulberg.substack.com/p/claude-code-for-everything-the-best-personal-assistant-remembers-everything-about-you",
  },
  {
    title: "Obra Superpowers",
    series: "Plugin",
    author: "Jesse Vincent (obra)",
    platform: "GitHub · Claude Marketplace",
    format: "Claude Code plugin",
    description: "Adds reusable skills to Claude Code — structured workflows for micro-task planning, test-driven development, automatic code review, and subagent dispatching. Free, open-source, and officially listed in Anthropic's Claude Code marketplace.",
    tags: ["plugin", "free", "open source", "skills", "TDD"],
    url: "https://github.com/obra/superpowers",
    code: "/plugin marketplace add obra/superpowers-marketplace\n/plugin install superpowers@superpowers-marketplace",
  },
  {
    title: "Vibe Code Your Own Chief of Staff with Claude Code",
    series: "Course",
    author: "Benjamin Jackson",
    platform: "Maven",
    format: "Online course",
    description: "Hands-on course for building a custom AI chief of staff using Claude Code — covers task and inbox capture, priority triage, weekly planning automation, calendar time-blocking, slash command creation, and integrations with Asana, Notion, and Slack. Leave with a working productivity system.",
    tags: ["course", "productivity", "chief of staff", "automation", "workflow"],
    url: "https://maven.com/benjaminjackson/vibe-code-your-own-chief-of-staff-with-claude-code",
  },
];

// ============================================================
//  AI Open Mics & Recorded Trainings
//  Add new sessions here as they happen
// ============================================================

const openMics = [
  {
    title: "AI For Progressive Campaigns",
    org: "National Democratic Training Committee",
    format: "On-demand course",
    duration: "105 min",
    description: "A self-paced course covering AI tools built for the campaigning environment — communications, fundraising, volunteer coordination, and voter outreach — developed in partnership with Higher Ground Institute.",
    tags: ["campaigns", "on-demand", "free", "NDTC"],
    url: "https://traindems.org/course-details/280/ai-for-progressive-campaigns",
  },
  {
    title: "AI 101 for Political Campaigns",
    org: "National Democratic Training Committee",
    format: "Article + course guide",
    duration: "5 min read",
    description: "A primer on AI tools for Democratic campaigns — covering ChatGPT, Claude, Chorus AI, and more — plus a guide to NDTC's full AI course developed with Higher Ground Institute.",
    tags: ["campaigns", "beginner", "free", "NDTC"],
    url: "https://traindems.org/articles/ai-101-for-political-campaigns",
  },
  {
    title: "The Prompting Lab Series",
    org: "InnovateUS",
    format: "Workshop series",
    duration: "Multi-session",
    description: "Hands-on workshops focused on writing effective AI prompts for organizing, policy, and communications work. Live and recorded sessions available through InnovateUS.",
    tags: ["prompting", "workshops", "hands-on", "InnovateUS"],
    url: "https://innovate-us.org/workshop-series/the-prompting-lab-series",
  },
  {
    title: "Mastering Public Communication in the AI Age",
    org: "InnovateUS",
    format: "Workshop series",
    duration: "Multi-session",
    description: "Live and recorded workshops for communications directors and spokespeople — covering AI-assisted messaging, media prep, rapid response, and audience research.",
    tags: ["communications", "comms", "media", "InnovateUS"],
    url: "https://innovate-us.org/workshop-series/mastering-public-communication-in-the-ai-age-series",
  },
];

// ============================================================
//  Upcoming Events
//  Add new events here; remove or archive past ones
// ============================================================

const upcomingEvents = [
  {
    title: "AI is Here — Now What?",
    host: "Arena",
    date: "March 13, 2026",
    time: "10:00 – 11:30 PM ET",
    format: "Virtual panel",
    description: "A candid panel examining AI's impact on political campaigns — covering ethical applications, workplace risks, and how AI is transforming organizing whether you adopt it or not. Includes 45 minutes of moderated discussion and live Q&A with panelists. Main panel will be recorded.",
    tags: ["campaigns", "panel", "virtual", "free"],
    url: "https://www.mobilize.us/arena/event/900467/",
  },
];

// ──────────────────────────────────────────────
//  Rendering
// ──────────────────────────────────────────────

const TOPIC_LABELS = {
  "campaign-organizing": "Campaign & Organizing",
  "workflow-automation": "Workflow & Automation",
  "research-analytics":  "Research & Analytics",
  "ethics-security":     "Ethics & Security",
  "training-capacity":   "Training & Capacity",
  "emerging-tech":       "Emerging Tech",
};

const TYPE_LABELS = {
  tool:     "Tool",
  training: "Training",
  article:  "Article",
  org:      "Org",
};

function renderGapMap() {
  const container = document.getElementById("gap-map-grid");
  if (!container) return;

  // Live-count resources per topic
  const counts = {};
  Object.keys(TOPIC_LABELS).forEach(k => (counts[k] = 0));
  resources.forEach(r => { if (counts[r.topic] !== undefined) counts[r.topic]++; });

  gapMap.forEach(area => {
    const count = counts[area.topic] || 0;
    const card = document.createElement("div");
    card.className = `gap-card gap-card--${area.severity}`;
    card.innerHTML = `
      <div class="gap-card-header">
        <span class="gap-icon">${area.icon}</span>
        <div class="gap-title-block">
          <h3 class="gap-title">${area.label}</h3>
          <span class="gap-count">${count} resource${count !== 1 ? "s" : ""}</span>
        </div>
        <span class="gap-severity gap-severity--${area.severity}">${
          area.severity === "well-covered" ? "✓ Good coverage" :
          area.severity === "moderate"     ? "◑ Moderate"     :
          area.severity === "thin"         ? "⚠ Thin"         :
                                             "✕ Gap"
        }</span>
      </div>
      <p class="gap-note">${area.note}</p>
      <ul class="gap-needs">
        ${area.lookingFor.map(n => `<li>${n}</li>`).join("")}
      </ul>
      <a class="gap-suggest" href="https://github.com/kategage/AIresourcessite/issues/new?title=${encodeURIComponent("Resource suggestion: " + area.label)}" target="_blank" rel="noopener">Suggest a resource →</a>
    `;
    container.appendChild(card);
  });
}

function createClaudeCodeCard(g) {
  const card = document.createElement("article");
  card.className = "cc-card";
  const codeBlock = g.code
    ? `<pre class="cc-code"><code>${g.code}</code></pre>`
    : "";
  card.innerHTML = `
    <div class="cc-card-top">
      <span class="cc-series-badge">${g.series}</span>
      <span class="cc-platform">${g.platform}</span>
    </div>
    <h3 class="cc-title">${g.title}</h3>
    <p class="cc-author">by ${g.author} · <em>${g.format}</em></p>
    <p class="cc-desc">${g.description}</p>
    ${codeBlock}
    <div class="card-tags">
      ${g.tags.map(t => `<span class="tag">${t}</span>`).join("")}
    </div>
    <a class="card-link cc-link" href="${g.url}" target="_blank" rel="noopener">
      ${g.series === "Plugin" ? "View on GitHub" : "Read on Substack"}
    </a>
  `;
  return card;
}

function createMicCard(m) {
  const card = document.createElement("article");
  card.className = "mic-card";
  card.innerHTML = `
    <div class="mic-card-top">
      <div class="mic-meta">
        <span class="mic-format">${m.format}</span>
        <span class="mic-duration">${m.duration}</span>
      </div>
    </div>
    <h3 class="mic-title">${m.title}</h3>
    <p class="mic-org">${m.org}</p>
    <p class="mic-desc">${m.description}</p>
    <div class="card-tags">
      ${m.tags.map(t => `<span class="tag">${t}</span>`).join("")}
    </div>
    <a class="card-link" href="${m.url}" target="_blank" rel="noopener">Watch / View</a>
  `;
  return card;
}

function createEventCard(e) {
  const card = document.createElement("article");
  card.className = "event-card";
  card.innerHTML = `
    <div class="event-date-block">
      <span class="event-date">${e.date}</span>
      <span class="event-time">${e.time}</span>
    </div>
    <div class="event-body">
      <div class="event-top">
        <h3 class="event-title">${e.title}</h3>
        <div class="event-badges">
          <span class="event-badge">${e.format}</span>
          <span class="event-badge event-badge--host">${e.host}</span>
        </div>
      </div>
      <p class="event-desc">${e.description}</p>
      <div class="card-tags">
        ${e.tags.map(t => `<span class="tag">${t}</span>`).join("")}
      </div>
    </div>
    <div class="event-cta">
      <a class="btn-register" href="${e.url}" target="_blank" rel="noopener">Register →</a>
    </div>
  `;
  return card;
}

function createCard(r) {
  const card = document.createElement("article");
  card.className = "card";
  card.dataset.topic = r.topic;
  card.dataset.searchText = `${r.title} ${r.description} ${r.tags.join(" ")} ${TOPIC_LABELS[r.topic] || ""}`.toLowerCase();

  card.innerHTML = `
    <div class="card-top">
      <h2 class="card-title">${r.title}</h2>
      <span class="badge-type badge-type-${r.type}">${TYPE_LABELS[r.type]}</span>
    </div>
    <p class="card-desc">${r.description}</p>
    <div class="card-tags">
      ${r.tags.map(t => `<span class="tag">${t}</span>`).join("")}
    </div>
    <a class="card-link" href="${r.url}" target="_blank" rel="noopener">Visit site</a>
  `;

  return card;
}

// ──────────────────────────────────────────────
//  Search
// ──────────────────────────────────────────────

const TOPIC_ORDER = [
  "campaign-organizing",
  "workflow-automation",
  "research-analytics",
  "ethics-security",
  "training-capacity",
  "emerging-tech",
];

let searchQuery = "";

function applySearch() {
  const cards = document.querySelectorAll(".card");
  let visibleCount = 0;

  cards.forEach(card => {
    const visible = !searchQuery || card.dataset.searchText.includes(searchQuery);
    card.style.display = visible ? "" : "none";
    if (visible) visibleCount++;
  });

  // Show/hide empty-section notices
  TOPIC_ORDER.forEach(topic => {
    const section = document.getElementById(topic);
    if (!section) return;
    const notice = section.querySelector(".topic-no-results");
    if (!notice) return;
    const anyVisible = Array.from(section.querySelectorAll(".card"))
      .some(c => c.style.display !== "none");
    notice.style.display = (searchQuery && !anyVisible) ? "block" : "none";
  });

  // Update stat & reset button
  const statEl = document.getElementById("stat-total");
  if (statEl) statEl.textContent = searchQuery ? visibleCount : resources.length;

  const resetBtn = document.getElementById("reset");
  if (resetBtn) resetBtn.classList.toggle("hidden", !searchQuery);
}

// ──────────────────────────────────────────────
//  Init
// ──────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {

  // ── Render resources into per-topic grids ──
  TOPIC_ORDER.forEach(topic => {
    const container = document.getElementById(`topic-${topic}`);
    if (!container) return;

    const topicResources = resources.filter(r => r.topic === topic);
    topicResources.forEach(r => container.appendChild(createCard(r)));

    // Add a hidden "no results" notice inside the grid
    const notice = document.createElement("p");
    notice.className = "topic-no-results";
    notice.style.display = "none";
    notice.style.color = "#888";
    notice.style.fontSize = "0.9rem";
    notice.style.padding = "1rem 0";
    notice.textContent = "No resources match your search in this section.";
    container.after(notice);
  });

  // ── Set stat total ──
  const statEl = document.getElementById("stat-total");
  if (statEl) statEl.textContent = resources.length;

  // ── Render Claude Code + guides ──
  const ccGrid = document.getElementById("cc-grid");
  if (ccGrid) {
    claudeCodeGuides.forEach(g => ccGrid.appendChild(createClaudeCodeCard(g)));
  }

  // ── Render upcoming events ──
  const eventList = document.getElementById("event-list");
  if (eventList) {
    if (upcomingEvents.length === 0) {
      eventList.innerHTML = `<p class="no-events">No upcoming events right now — check back soon.</p>`;
    } else {
      upcomingEvents.forEach(e => eventList.appendChild(createEventCard(e)));
    }
  }

  // ── Render open mics / recorded trainings ──
  const micGrid = document.getElementById("mic-grid");
  if (micGrid) {
    openMics.forEach(m => micGrid.appendChild(createMicCard(m)));
  }

  // ── Search input ──
  const searchEl = document.getElementById("search");
  if (searchEl) {
    searchEl.addEventListener("input", e => {
      searchQuery = e.target.value.trim().toLowerCase();
      applySearch();
    });
  }

  // ── Reset button ──
  const resetBtn = document.getElementById("reset");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      searchQuery = "";
      if (searchEl) searchEl.value = "";
      applySearch();
    });
  }
});
