/**
 * Dispatch — News Reader
 */

const ARTICLES = [
  {
    id: 1,
    title: "Pacific nations agree on landmark climate adaptation fund",
    excerpt: "Twelve island states finalize a $40 billion framework to relocate coastal communities and restore coral reefs by 2032.",
    category: "world",
    author: "Elena Vasquez",
    location: "Suva, Fiji",
    readTime: 6,
    publishedAt: "2026-06-04T08:00:00Z",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",
    trending: 1,
    breaking: true,
    body: [
      "After eighteen months of negotiations, Pacific island nations have signed a historic climate adaptation agreement that establishes one of the world's largest regional resilience funds.",
      "The framework commits participating governments to pooled financing for seawall construction, freshwater systems, and voluntary relocation programs for communities facing irreversible inundation. Scientists present at the summit described the pact as a template for other vulnerable regions.",
      "Critics note that the fund still depends heavily on contributions from wealthier partners outside the bloc. Ministers acknowledged the gap but argued that binding regional coordination was itself a breakthrough.",
      "For families in low-lying atolls, the first disbursements cannot come soon enough. Local leaders emphasized that adaptation is no longer abstract policy—it is daily engineering, migration, and grief.",
    ],
  },
  {
    id: 2,
    title: "Quantum chip breakthrough cuts error rates by ninety percent",
    excerpt: "Researchers demonstrate stable qubit arrays that could accelerate drug discovery and cryptography timelines.",
    category: "tech",
    author: "James Okonkwo",
    location: "Zurich",
    readTime: 5,
    publishedAt: "2026-06-04T06:30:00Z",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&q=80",
    trending: 2,
    body: [
      "A consortium of university and industry labs has published results showing a dramatic reduction in quantum computing error rates using a new lattice of superconducting qubits cooled to near absolute zero.",
      "The team says their approach keeps qubits coherent for milliseconds longer than previous records—enough for complex algorithms that were purely theoretical a decade ago.",
      "Pharmaceutical firms are already in talks to test molecular simulations that once required months on classical supercomputers. Security researchers, meanwhile, are watching closely: practical quantum machines threaten widely used encryption standards.",
      "Commercial systems remain years away, but investors sent shares of several hardware startups sharply higher on the news.",
    ],
  },
  {
    id: 3,
    title: "Central banks signal coordinated pause after inflation eases",
    excerpt: "Markets rally as policymakers hint that interest-rate hikes may have peaked across major economies.",
    category: "business",
    author: "Priya Menon",
    location: "London",
    readTime: 4,
    publishedAt: "2026-06-04T05:15:00Z",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80",
    trending: 3,
    breaking: true,
    body: [
      "Major central banks issued unusually aligned statements suggesting they are prepared to hold benchmark rates steady if inflation continues its downward path through the summer.",
      "Bond yields fell and equity indices rose in afternoon trading as traders priced in a softer landing than many feared last year. Currency markets saw the dollar weaken modestly against a basket of peers.",
      "Economists caution that labor markets remain tight in several countries and that energy shocks could still disrupt the trajectory. Housing affordability, in particular, continues to weigh on household sentiment.",
      "Corporate earnings this week will offer the next clue whether businesses can sustain margins without further rate relief.",
    ],
  },
  {
    id: 4,
    title: "James Webb telescope maps earliest galaxy cluster ever observed",
    excerpt: "Light from the formation, captured after thirteen billion years, reshapes theories of cosmic dawn.",
    category: "science",
    author: "Dr. Amara Lindström",
    location: "Baltimore",
    readTime: 7,
    publishedAt: "2026-06-03T22:00:00Z",
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1200&q=80",
    trending: 4,
    body: [
      "Astronomers using the James Webb Space Telescope have identified a protocluster of galaxies forming just three hundred million years after the Big Bang—far earlier than models predicted.",
      "Spectroscopic data reveal unusually intense star formation and chemical signatures that hint at population III stars, the universe's first generation. The discovery challenges assumptions about how quickly structure emerged from the primordial fog.",
      "Teams in Europe and Asia confirmed the findings independently using archived observations. Popular science outlets struggled to convey the scale: the light left its source before Earth existed.",
      "Public outreach programs are already planning new planetarium shows. For researchers, the work is only beginning: hundreds of hours of follow-up observations are scheduled.",
    ],
  },
  {
    id: 5,
    title: "Venice Biennale opens with bold installations on migration and memory",
    excerpt: "Artists from forty-six countries transform the Arsenale into a meditation on movement across borders.",
    category: "culture",
    author: "Luca Ferraro",
    location: "Venice",
    readTime: 5,
    publishedAt: "2026-06-03T18:45:00Z",
    image: "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=1200&q=80",
    trending: 5,
    body: [
      "The sixtieth Venice Biennale welcomed critics and collectors beneath golden evening light as national pavilions unveiled works grappling with displacement, archives, and belonging.",
      "Standout pieces include a sound garden of recorded border crossings, a suspended fishing boat encrusted with salt crystals, and an interactive map visitors can annotate with family migration stories.",
      "Curators said this year's theme was chosen before recent geopolitical shocks but feels painfully timely. Several artists declined to attend in protest of sponsorship ties.",
      "Ticket sales are expected to break records as tourism rebounds. Locals hope the influx will balance years of overtourism debates with genuine cultural exchange.",
    ],
  },
  {
    id: 6,
    title: "Underdog club reaches Champions League final after stunning comeback",
    excerpt: "A late extra-time winner sends fans into delirium and rewrites the tournament's narrative.",
    category: "sports",
    author: "Marcus Reid",
    location: "Munich",
    readTime: 3,
    publishedAt: "2026-06-03T21:30:00Z",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200&q=80",
    trending: 6,
    breaking: true,
    body: [
      "Few predicted this outcome when the second leg began. Trailing by two goals from the first match, the visiting side needed something extraordinary—and found it in the final minutes of extra time.",
      "The winning strike came from a substitute making only his third appearance of the season. Managerial staff collapsed in tears on the touchline as stadium noise peaked on decibel charts.",
      "Sports analysts are calling it one of the greatest European nights in a generation. The club's academy graduates featured heavily, fueling romantic narratives about homegrown talent.",
      "The final awaits in three weeks. Hotel prices in the host city have already tripled.",
    ],
  },
  {
    id: 7,
    title: "India and EU finalize trade corridor linking ports to rail hubs",
    excerpt: "The agreement aims to cut shipping times between South Asia and Northern Europe by nearly two weeks.",
    category: "world",
    author: "Ananya Sharma",
    location: "Brussels",
    readTime: 5,
    publishedAt: "2026-06-03T14:00:00Z",
    image: "https://images.unsplash.com/photo-1494412519320-aa4fb0c4ff21?w=1200&q=80",
    body: [
      "Negotiators announced a comprehensive trade corridor agreement that stitches together maritime routes, inland rail, and customs harmonization across eight countries.",
      "Proponents argue the corridor will diversify supply chains and reduce dependence on congested chokepoints. Environmental groups demanded binding emissions targets for freight operators.",
      "Implementation begins in January with pilot shipments of pharmaceuticals and auto components. Small exporters hope simplified documentation will open new markets.",
    ],
  },
  {
    id: 8,
    title: "Open-source AI model rivals proprietary assistants on reasoning benchmarks",
    excerpt: "Developers release weights and training data, sparking debate over safety and commercial impact.",
    category: "tech",
    author: "Sofia Nakamura",
    location: "San Francisco",
    readTime: 6,
    publishedAt: "2026-06-03T11:20:00Z",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
    body: [
      "A nonprofit coalition has released an open-weight language model that matches or exceeds several closed systems on public reasoning and coding evaluations.",
      "The release includes detailed safety documentation and red-team reports, though regulators immediately called for stronger oversight. Major tech firms saw share volatility as investors reassessed moats.",
      "Independent developers praised transparency; artists and publishers renewed copyright concerns. The model is already being fine-tuned for medical triage tools in low-resource settings.",
    ],
  },
  {
    id: 9,
    title: "Sahara greening project reports first measurable rainfall shift",
    excerpt: "Satellite data suggest localized cloud formation increased fifteen percent near pilot sites.",
    category: "science",
    author: "Omar Hassan",
    location: "Nouakchott",
    readTime: 8,
    publishedAt: "2026-06-02T16:00:00Z",
    image: "https://images.unsplash.com/photo-1509316785289-025f5b846b8e?w=1200&q=80",
    body: [
      "An ambitious effort to restore vegetation at the desert's southern edge has produced the first statistically significant changes in local rainfall patterns, according to satellite analysis released today.",
      "Scientists stress the results are preliminary and geographically limited. Skeptics warn against extrapolating continental impact from pilot zones spanning a few hundred kilometers.",
      "Communities involved in tree planting celebrated the news cautiously. Water tables remain stressed, and pastoralists fear land-use conflicts as grasses return.",
    ],
  },
  {
    id: 10,
    title: "Streaming giants bid for live sports rights in sweeping auction",
    excerpt: "Traditional broadcasters face existential pressure as tech platforms commit billions.",
    category: "business",
    author: "Tyler Brooks",
    location: "New York",
    readTime: 4,
    publishedAt: "2026-06-02T09:00:00Z",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&q=80",
    body: [
      "A week-long auction for premier league broadcasting rights ended with streaming services securing the majority of packages for the first time in history.",
      "Analysts say the shift will accelerate cord-cutting and force legacy networks to pivot toward studio entertainment. Fans worry about fragmented subscriptions.",
      "Players' unions welcomed revenue projections but demanded accessibility guarantees for public viewing in home markets.",
    ],
  },
  {
    id: 11,
    title: "Tokyo museum digitizes ten thousand ukiyo-e prints for global access",
    excerpt: "High-resolution scans include rarely seen works from private collections.",
    category: "culture",
    author: "Yuki Tanaka",
    location: "Tokyo",
    readTime: 4,
    publishedAt: "2026-06-01T20:00:00Z",
    image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1200&q=80",
    body: [
      "Curators completed a seven-year project to scan and catalog woodblock prints spanning three centuries of Japanese art history.",
      "The online archive supports zoom levels that reveal paper grain and pigment layering. Educators worldwide praised the open license for non-commercial use.",
      "Conservators note that digital access complements but never replaces viewing originals under controlled light.",
    ],
  },
  {
    id: 12,
    title: "Paralympic sprinter breaks 100m record twice in one afternoon",
    excerpt: "Crowds in Paris witness back-to-back performances that redefine the classification debate.",
    category: "sports",
    author: "Claire Dubois",
    location: "Paris",
    readTime: 3,
    publishedAt: "2026-06-01T17:30:00Z",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1200&q=80",
    body: [
      "The stadium erupted twice as the same athlete lowered the T64 100-meter record in heats and again in the final, months before the international championships.",
      "Coaches credited redesigned prosthetic blades and a revised training block. Governing bodies announced a review of classification protocols, as rivals requested transparency reports.",
      "The athlete dedicated both wins to young amputees in rural clinics lacking sports programs.",
    ],
  },
];

const CATEGORY_LABELS = {
  world: "World",
  tech: "Technology",
  business: "Business",
  science: "Science",
  culture: "Culture",
  sports: "Sports",
};

const state = {
  category: "all",
  search: "",
  sort: "newest",
  savedOnly: false,
  saved: new Set(JSON.parse(localStorage.getItem("dispatch-saved") || "[]")),
  activeArticle: null,
};

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

function formatDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function formatRelative(iso) {
  const diff = Date.now() - new Date(iso).getTime();
  const hours = Math.floor(diff / 3600000);
  if (hours < 1) return "Just now";
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days === 1) return "Yesterday";
  return `${days}d ago`;
}

function persistSaved() {
  localStorage.setItem("dispatch-saved", JSON.stringify([...state.saved]));
  updateSavedBadge();
}

function updateSavedBadge() {
  const badge = $("#savedCount");
  const count = state.saved.size;
  badge.textContent = count;
  badge.hidden = count === 0;
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("visible");
  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => toast.classList.remove("visible"), 2800);
}

function getFilteredArticles() {
  let list = [...ARTICLES];

  if (state.savedOnly) {
    list = list.filter((a) => state.saved.has(a.id));
  }

  if (state.category !== "all") {
    list = list.filter((a) => a.category === state.category);
  }

  if (state.search.trim()) {
    const q = state.search.trim().toLowerCase();
    list = list.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        a.author.toLowerCase().includes(q) ||
        CATEGORY_LABELS[a.category].toLowerCase().includes(q)
    );
  }

  switch (state.sort) {
    case "oldest":
      list.sort((a, b) => new Date(a.publishedAt) - new Date(b.publishedAt));
      break;
    case "readtime":
      list.sort((a, b) => a.readTime - b.readTime);
      break;
    default:
      list.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
  }

  return list;
}

function renderHero(article) {
  const hero = $("#hero");
  if (!article || state.savedOnly || state.search) {
    hero.hidden = true;
    return;
  }
  hero.hidden = false;
  hero.innerHTML = `
    <div class="hero__image" style="background-image: url('${article.image}')"></div>
    <div class="hero__overlay"></div>
    <div class="hero__content">
      <span class="hero__label">${CATEGORY_LABELS[article.category]} · Featured</span>
      <h2 class="hero__title">${article.title}</h2>
      <p class="hero__excerpt">${article.excerpt}</p>
      <div class="hero__meta">
        <span>${article.author}</span>
        <span>${article.readTime} min read</span>
        <span>${formatRelative(article.publishedAt)}</span>
      </div>
    </div>
  `;
  hero.onclick = () => openReader(article.id);
}

function articleCardHTML(article) {
  const saved = state.saved.has(article.id);
  return `
    <article class="article-card" role="listitem" data-id="${article.id}">
      <div class="article-card__image" style="background-image: url('${article.image}')">
        <span class="article-card__category">${CATEGORY_LABELS[article.category]}</span>
      </div>
      <div class="article-card__body">
        <h3 class="article-card__title">${article.title}</h3>
        <p class="article-card__excerpt">${article.excerpt}</p>
        <div class="article-card__footer">
          <span>${article.author} · ${article.readTime} min</span>
          <button class="article-card__save ${saved ? "saved" : ""}" data-save="${article.id}" aria-label="${saved ? "Unsave" : "Save"}">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
          </button>
        </div>
      </div>
    </article>
  `;
}

function renderFeed() {
  const filtered = getFilteredArticles();
  const heroArticle = filtered[0];
  const gridArticles = state.savedOnly || state.search ? filtered : filtered.slice(1);

  renderHero(heroArticle);

  const titles = {
    all: "Latest Stories",
    world: "World",
    tech: "Technology",
    business: "Business",
    science: "Science",
    culture: "Culture",
    sports: "Sports",
  };
  $("#feedTitle").textContent = state.search
    ? `Results for “${state.search}”`
    : state.savedOnly
      ? "Saved Articles"
      : titles[state.category] || "Latest Stories";

  const grid = $("#articlesGrid");
  grid.innerHTML = gridArticles.map(articleCardHTML).join("");

  $("#emptyState").hidden = filtered.length > 0;

  grid.querySelectorAll(".article-card").forEach((card) => {
    card.addEventListener("click", (e) => {
      if (e.target.closest("[data-save]")) return;
      openReader(Number(card.dataset.id));
    });
  });

  grid.querySelectorAll("[data-save]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleSave(Number(btn.dataset.save));
    });
  });
}

function renderSidebar() {
  const breaking = ARTICLES.filter((a) => a.breaking)
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
    .slice(0, 4);

  $("#breakingTicker").innerHTML = breaking
    .map(
      (a) => `
      <li data-id="${a.id}">
        ${a.title}
        <span class="ticker__time">${formatRelative(a.publishedAt)}</span>
      </li>
    `
    )
    .join("");

  const trending = [...ARTICLES]
    .filter((a) => a.trending)
    .sort((a, b) => a.trending - b.trending)
    .slice(0, 5);

  $("#trendingList").innerHTML = trending
    .map((a) => `<li data-id="${a.id}">${a.title}</li>`)
    .join("");

  $$(".ticker li, .trending li").forEach((el) => {
    el.addEventListener("click", () => openReader(Number(el.dataset.id)));
  });
}

function openReader(id) {
  const article = ARTICLES.find((a) => a.id === id);
  if (!article) return;

  state.activeArticle = article;
  const saved = state.saved.has(article.id);

  $("#readerArticle").innerHTML = `
    <div class="reader__hero-image" style="background-image: url('${article.image}')"></div>
    <span class="reader__category">${CATEGORY_LABELS[article.category]}</span>
    <h1 class="reader__title">${article.title}</h1>
    <div class="reader__meta">
      <span>By ${article.author}</span>
      <span>${article.location}</span>
      <span>${formatDate(article.publishedAt)}</span>
      <span>${article.readTime} min read</span>
    </div>
    <div class="reader__body">
      ${article.body.map((p) => `<p>${p}</p>`).join("")}
    </div>
  `;

  const saveBtn = $("#readerSave");
  saveBtn.classList.toggle("saved", saved);

  const dialog = $("#reader");
  dialog.showModal();
  dialog.querySelector(".reader__article").scrollTop = 0;
  updateReaderProgress();
}

function updateReaderProgress() {
  const container = $("#readerArticle");
  const progress = $("#readerProgress");
  if (!container) return;

  const onScroll = () => {
    const scrollTop = container.scrollTop;
    const max = container.scrollHeight - container.clientHeight;
    const pct = max > 0 ? (scrollTop / max) * 100 : 0;
    progress.style.width = `${pct}%`;
  };

  container.removeEventListener("scroll", container._scrollHandler);
  container._scrollHandler = onScroll;
  container.addEventListener("scroll", onScroll);
  onScroll();
}

function closeReader() {
  $("#reader").close();
  state.activeArticle = null;
}

function toggleSave(id) {
  if (state.saved.has(id)) {
    state.saved.delete(id);
    showToast("Removed from saved");
  } else {
    state.saved.add(id);
    showToast("Article saved");
  }
  persistSaved();
  renderFeed();
  if (state.activeArticle?.id === id) {
    $("#readerSave").classList.toggle("saved", state.saved.has(id));
  }
}

function initTheme() {
  const stored = localStorage.getItem("dispatch-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = stored || (prefersDark ? "dark" : "light");
  document.documentElement.setAttribute("data-theme", theme);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme") || "light";
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("dispatch-theme", next);
}

function init() {
  $("#currentDate").textContent = formatDate(new Date().toISOString());
  $("#currentDate").setAttribute("datetime", new Date().toISOString().split("T")[0]);

  initTheme();
  updateSavedBadge();
  renderSidebar();
  renderFeed();

  $$(".category").forEach((btn) => {
    btn.addEventListener("click", () => {
      $$(".category").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      state.category = btn.dataset.category;
      renderFeed();
    });
  });

  $("#sortSelect").addEventListener("change", (e) => {
    state.sort = e.target.value;
    renderFeed();
  });

  $("#searchToggle").addEventListener("click", () => {
    const bar = $("#searchBar");
    const open = bar.hidden;
    bar.hidden = !open;
    if (open) $("#searchInput").focus();
  });

  $("#searchInput").addEventListener("input", (e) => {
    state.search = e.target.value;
    $("#searchClear").hidden = !state.search;
    renderFeed();
  });

  $("#searchClear").addEventListener("click", () => {
    $("#searchInput").value = "";
    state.search = "";
    $("#searchClear").hidden = true;
    renderFeed();
  });

  $("#savedToggle").addEventListener("click", () => {
    state.savedOnly = !state.savedOnly;
    $("#app").classList.toggle("view-saved", state.savedOnly);
    renderFeed();
    showToast(state.savedOnly ? "Showing saved articles" : "Showing all articles");
  });

  $("#themeToggle").addEventListener("click", toggleTheme);

  $("#readerClose").addEventListener("click", closeReader);
  $("#reader").addEventListener("click", (e) => {
    if (e.target === $("#reader")) closeReader();
  });

  $("#readerSave").addEventListener("click", () => {
    if (state.activeArticle) toggleSave(state.activeArticle.id);
  });

  $("#readerShare").addEventListener("click", async () => {
    const a = state.activeArticle;
    if (!a) return;
    const text = `${a.title} — Dispatch`;
    try {
      if (navigator.share) {
        await navigator.share({ title: a.title, text: a.excerpt });
      } else {
        await navigator.clipboard.writeText(text);
        showToast("Headline copied to clipboard");
      }
    } catch {
      /* user cancelled */
    }
  });

  $("#newsletterForm").addEventListener("submit", (e) => {
    e.preventDefault();
    e.target.hidden = true;
    $("#newsletterThanks").hidden = false;
    showToast("Subscribed to Morning Briefing");
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && $("#reader").open) closeReader();
    if (e.key === "/" && document.activeElement !== $("#searchInput")) {
      e.preventDefault();
      $("#searchBar").hidden = false;
      $("#searchInput").focus();
    }
  });
}

init();
