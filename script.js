// ============================================================
//  Higher Ground — Resource data + filtering
//  To add a resource: copy a block in the `resources` array
//  and fill in the fields.
// ============================================================

const resources = [

  // ── TRAININGS ──────────────────────────────────────────────

  {
    title: "Tech for Campaigns",
    category: "training",
    description: "Free digital skills training for Democratic campaigns and progressive organizations, including hands-on workshops covering AI tools for communications, organizing, and voter contact.",
    tags: ["campaigns", "digital skills", "workshops", "free"],
    url: "https://www.techforcampaigns.org",
  },
  {
    title: "Wellstone Action",
    category: "training",
    description: "Wellstone's Camp training programs equip progressive organizers and candidates with modern skills — including how to responsibly integrate AI into advocacy and field work.",
    tags: ["organizing", "candidates", "advocacy", "workshops"],
    url: "https://www.wellstone.org",
  },
  {
    title: "Progressive Technology Project",
    category: "training",
    description: "Provides technical assistance and training to grassroots organizations, including guidance on adopting AI tools safely and effectively for organizing and communications.",
    tags: ["grassroots", "tech assistance", "nonprofits"],
    url: "https://www.progressivetech.org",
  },
  {
    title: "AI4ALL Open Learning",
    category: "training",
    description: "Free AI education curriculum designed for people from underrepresented communities. Covers AI fundamentals, ethics, and practical applications — no technical background required.",
    tags: ["free", "equity", "AI literacy", "curriculum"],
    url: "https://ai-4-all.org",
  },
  {
    title: "Mozilla AI Literacy",
    category: "training",
    description: "Mozilla Foundation's collection of guides and courses helping people understand how AI works, its risks, and how to engage critically with AI-powered systems.",
    tags: ["AI literacy", "free", "guides", "ethics"],
    url: "https://www.mozilla.org/en-US/ai/",
  },
  {
    title: "New Organizing Institute (NOI) Archive",
    category: "training",
    description: "The influential training and research hub that shaped a generation of progressive digital organizers. Archived resources on data-driven organizing remain highly relevant.",
    tags: ["data", "digital organizing", "archive"],
    url: "https://neworganizing.com",
  },

  // ── TOOLS ──────────────────────────────────────────────────

  {
    title: "Claude (Anthropic)",
    category: "tool",
    description: "AI assistant well-suited for drafting communications, summarizing policy documents, generating talking points, analyzing data, and research. Strong safety and factual accuracy focus.",
    tags: ["writing", "research", "analysis", "communications"],
    url: "https://claude.ai",
  },
  {
    title: "ChatGPT (OpenAI)",
    category: "tool",
    description: "Widely used AI assistant for drafting content, answering questions, brainstorming, and automating repetitive writing tasks. Available in free and paid tiers.",
    tags: ["writing", "brainstorming", "automation", "free tier"],
    url: "https://chatgpt.com",
  },
  {
    title: "Perplexity AI",
    category: "tool",
    description: "AI-powered research assistant that searches the web and cites its sources — useful for rapid policy research, opposition research, and fact-checking with verifiable references.",
    tags: ["research", "fact-checking", "citations", "policy"],
    url: "https://www.perplexity.ai",
  },
  {
    title: "Otter.ai",
    category: "tool",
    description: "Automated meeting transcription and notes. Useful for staff meetings, interviews, town halls, and trainings — generates searchable transcripts and AI-powered summaries.",
    tags: ["transcription", "meetings", "notes", "accessibility"],
    url: "https://otter.ai",
  },
  {
    title: "Canva (Magic Studio)",
    category: "tool",
    description: "Design platform with integrated AI tools for generating graphics, social content, presentations, and campaign materials. Free tier available for nonprofits and campaigns.",
    tags: ["design", "social media", "visuals", "free tier"],
    url: "https://www.canva.com",
  },
  {
    title: "Action Network",
    category: "tool",
    description: "Open-source organizing platform for progressive groups — email, petitions, events, donations. Increasingly integrates AI-assisted features for email and list management.",
    tags: ["organizing", "email", "petitions", "open source"],
    url: "https://actionnetwork.org",
  },
  {
    title: "Hustle",
    category: "tool",
    description: "Peer-to-peer texting platform used by major campaigns and unions. AI features help with script suggestions and response routing at scale.",
    tags: ["texting", "voter contact", "P2P", "field"],
    url: "https://hustle.com",
  },
  {
    title: "Quorum",
    category: "tool",
    description: "AI-powered government affairs platform for tracking legislation, monitoring regulatory activity, and managing stakeholder engagement across federal and state levels.",
    tags: ["policy tracking", "legislative", "lobbying", "advocacy"],
    url: "https://www.quorum.us",
  },
  {
    title: "Impactive",
    category: "tool",
    description: "Digital organizing platform combining relational organizing, P2P texting, and phone banking with data integrations — used by progressive campaigns and advocacy orgs.",
    tags: ["relational organizing", "field", "voter contact", "campaigns"],
    url: "https://www.impactive.io",
  },

  // ── ARTICLES & GUIDES ──────────────────────────────────────

  {
    title: "AI Now Institute — Annual Reports",
    category: "article",
    description: "The definitive annual assessment of AI's social impacts — covering labor, surveillance, discrimination, and regulation. Essential reading for advocacy staff and policymakers.",
    tags: ["policy", "labor", "surveillance", "annual report"],
    url: "https://ainowinstitute.org/reports",
  },
  {
    title: "EFF: Artificial Intelligence",
    category: "article",
    description: "The Electronic Frontier Foundation's ongoing coverage of AI and civil liberties — including surveillance, deepfakes, AI in policing, and legislative tracking.",
    tags: ["civil liberties", "surveillance", "policing", "legislation"],
    url: "https://www.eff.org/issues/artificial-intelligence",
  },
  {
    title: "Brennan Center: AI & Democracy",
    category: "article",
    description: "Research and analysis on how AI affects democratic institutions — including election security, AI-generated disinformation, voter suppression tools, and regulation.",
    tags: ["elections", "democracy", "disinformation", "voting rights"],
    url: "https://www.brennancenter.org/issues/artificial-intelligence",
  },
  {
    title: "Algorithmic Justice League — Resources",
    category: "article",
    description: "Tools, guides, and research on algorithmic bias and AI accountability. Includes practical frameworks for evaluating AI tools and advocating for equitable AI.",
    tags: ["bias", "equity", "accountability", "race"],
    url: "https://www.ajl.org/resources",
  },
  {
    title: "Data & Society Research Institute",
    category: "article",
    description: "Independent research on the social and cultural implications of AI — labor, media, health, and education. Published reports are freely available.",
    tags: ["research", "labor", "media", "health", "education"],
    url: "https://datasociety.net",
  },
  {
    title: "Center for Democracy & Technology — AI",
    category: "article",
    description: "CDT's policy analysis and advocacy guides on AI in government, employment, and civil rights — with resources for advocates engaging in AI legislative processes.",
    tags: ["policy", "civil rights", "government", "legislation"],
    url: "https://cdt.org/area-of-focus/ai-governance/",
  },
  {
    title: "ACLU: Artificial Intelligence",
    category: "article",
    description: "The ACLU's coverage of AI and civil liberties — face recognition, predictive policing, AI in courts, and workers' rights. Includes policy primers and advocacy tools.",
    tags: ["civil liberties", "policing", "workers rights", "face recognition"],
    url: "https://www.aclu.org/ai",
  },

  // ── ORGANIZATIONS ──────────────────────────────────────────

  {
    title: "AI Now Institute",
    category: "org",
    description: "Leading interdisciplinary research institute studying the social implications of AI. Housed at NYU, it produces influential policy research and advocates for AI accountability.",
    tags: ["research", "policy", "accountability", "NYU"],
    url: "https://ainowinstitute.org",
  },
  {
    title: "Algorithmic Justice League",
    category: "org",
    description: "Organization working to illuminate the harms and biases of AI systems — with particular focus on how facial recognition and predictive systems harm communities of color.",
    tags: ["bias", "face recognition", "race", "accountability"],
    url: "https://www.ajl.org",
  },
  {
    title: "Data for Progress",
    category: "org",
    description: "Progressive think tank using advanced analytics and polling to support progressive campaigns, policies, and movement organizations. Active on AI policy research.",
    tags: ["research", "polling", "campaigns", "think tank"],
    url: "https://www.dataforprogress.org",
  },
  {
    title: "Encode Justice",
    category: "org",
    description: "Youth-led AI advocacy organization pushing for equitable and accountable AI policy. Organizes young people on AI issues at the federal and state level.",
    tags: ["youth", "advocacy", "policy", "federal"],
    url: "https://encodejustice.org",
  },
  {
    title: "Center for Democracy & Technology",
    category: "org",
    description: "Nonpartisan advocacy organization working to preserve civil rights and democratic values in digital policy — including a major focus on AI governance and civil rights.",
    tags: ["policy", "civil rights", "advocacy", "digital rights"],
    url: "https://cdt.org",
  },
  {
    title: "Tech for Campaigns",
    category: "org",
    description: "Connects skilled tech and digital volunteers with Democratic campaigns and progressive causes. Builds digital capacity for organizations that can't afford in-house teams.",
    tags: ["volunteers", "campaigns", "digital capacity", "Democrats"],
    url: "https://www.techforcampaigns.org",
  },
  {
    title: "Partnership on AI",
    category: "org",
    description: "Multi-stakeholder nonprofit bringing together civil society, academia, and industry to address AI's impacts. Publishes resources on responsible AI for nonprofits and advocates.",
    tags: ["multi-stakeholder", "responsible AI", "civil society"],
    url: "https://partnershiponai.org",
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

const LABELS = {
  training: "Training",
  tool:     "Tool",
  article:  "Article",
  org:      "Organization",
};

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
  card.dataset.category = r.category;
  card.dataset.searchText = `${r.title} ${r.description} ${r.tags.join(" ")}`.toLowerCase();

  card.innerHTML = `
    <div class="card-top">
      <h2 class="card-title">${r.title}</h2>
      <span class="badge badge-${r.category}">${LABELS[r.category]}</span>
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
//  Filtering & search
// ──────────────────────────────────────────────

let activeFilter = "all";
let searchQuery  = "";

function applyFilters() {
  const cards      = document.querySelectorAll(".card");
  let visibleCount = 0;

  cards.forEach(card => {
    const categoryMatch = activeFilter === "all" || card.dataset.category === activeFilter;
    const searchMatch   = !searchQuery  || card.dataset.searchText.includes(searchQuery);
    const visible       = categoryMatch && searchMatch;

    card.style.display = visible ? "" : "none";
    if (visible) visibleCount++;
  });

  const total = resources.length;
  const countEl = document.getElementById("result-count");
  countEl.textContent = visibleCount === total
    ? `${total} resources`
    : `${visibleCount} of ${total} resources`;

  document.getElementById("no-results").classList.toggle("hidden", visibleCount > 0);
}

// ──────────────────────────────────────────────
//  Init
// ──────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {

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

  // ── Render resource cards ──
  const grid = document.getElementById("resource-grid");

  // Render all cards
  resources.forEach(r => grid.appendChild(createCard(r)));

  // Set initial counts
  const total = resources.length;
  document.getElementById("result-count").textContent = `${total} resources`;
  const statEl = document.getElementById("stat-total");
  if (statEl) statEl.textContent = total;

  // Pill filters
  document.querySelectorAll(".pill").forEach(pill => {
    pill.addEventListener("click", () => {
      document.querySelectorAll(".pill").forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      activeFilter = pill.dataset.filter;
      applyFilters();
    });
  });

  // Nav link filters (header)
  document.querySelectorAll(".nav-link[data-filter]").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      // Sync pill state
      document.querySelectorAll(".pill").forEach(p => {
        p.classList.toggle("active", p.dataset.filter === link.dataset.filter);
      });
      activeFilter = link.dataset.filter;
      applyFilters();
      document.querySelector(".filter-bar").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  // Search
  document.getElementById("search").addEventListener("input", e => {
    searchQuery = e.target.value.trim().toLowerCase();
    applyFilters();
  });

  // Reset
  document.getElementById("reset").addEventListener("click", () => {
    searchQuery  = "";
    activeFilter = "all";
    document.getElementById("search").value = "";
    document.querySelectorAll(".pill").forEach(p => {
      p.classList.toggle("active", p.dataset.filter === "all");
    });
    applyFilters();
  });
});
