/**
 * RENDER ENGINE
 * ─────────────
 * Reads PROJECTS from projects.js and builds: the live hero stat,
 * filter chips (auto-derived from whatever categories exist), and cards.
 * You should never need to edit this file to add a project — edit projects.js instead.
 */

// ---- Category → mini chart icon (SVG string) ----------------------------
// Falls back to a generic dot pattern for any category not listed here,
// so a brand-new category never breaks rendering.
const CATEGORY_ICONS = {
  "time-series": `<polyline points="0,22 10,20 20,24 30,16 40,18 50,10 60,14 70,6 80,10 90,4 100,8" fill="none" stroke="currentColor" stroke-width="1.5"/>`,
  "clustering": `<circle cx="20" cy="20" r="4" fill="currentColor"/><circle cx="35" cy="12" r="4" fill="currentColor"/><circle cx="55" cy="22" r="4" fill="currentColor"/><circle cx="70" cy="8" r="4" fill="currentColor"/><circle cx="85" cy="16" r="4" fill="currentColor"/>`,
  "regression": `<line x1="5" y1="25" x2="95" y2="5" stroke="currentColor" stroke-width="1.5"/><circle cx="15" cy="20" r="2.5" fill="currentColor"/><circle cx="35" cy="17" r="2.5" fill="currentColor"/><circle cx="50" cy="10" r="2.5" fill="currentColor"/><circle cx="68" cy="12" r="2.5" fill="currentColor"/><circle cx="85" cy="6" r="2.5" fill="currentColor"/>`,
  "classification": `<rect x="5" y="15" width="18" height="10" fill="currentColor" opacity="0.9"/><rect x="28" y="6" width="18" height="19" fill="currentColor" opacity="0.6"/><rect x="51" y="12" width="18" height="13" fill="currentColor" opacity="0.9"/><rect x="74" y="2" width="18" height="23" fill="currentColor" opacity="0.6"/>`,
  "deep-learning": `<circle cx="10" cy="8" r="3" fill="currentColor"/><circle cx="10" cy="22" r="3" fill="currentColor"/><circle cx="50" cy="4" r="3" fill="currentColor"/><circle cx="50" cy="15" r="3" fill="currentColor"/><circle cx="50" cy="26" r="3" fill="currentColor"/><circle cx="90" cy="15" r="3" fill="currentColor"/><g stroke="currentColor" stroke-width="0.75" opacity="0.6"><line x1="10" y1="8" x2="50" y2="4"/><line x1="10" y1="8" x2="50" y2="15"/><line x1="10" y1="22" x2="50" y2="15"/><line x1="10" y1="22" x2="50" y2="26"/><line x1="50" y1="4" x2="90" y2="15"/><line x1="50" y1="15" x2="90" y2="15"/><line x1="50" y1="26" x2="90" y2="15"/></g>`,
  "nlp": `<rect x="4" y="6" width="60" height="3" fill="currentColor" opacity="0.9"/><rect x="4" y="14" width="90" height="3" fill="currentColor" opacity="0.6"/><rect x="4" y="22" width="40" height="3" fill="currentColor" opacity="0.9"/>`,
  "computer-vision": `<rect x="4" y="4" width="92" height="22" rx="3" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="30" cy="15" r="5" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="30" cy="15" r="1.5" fill="currentColor"/><line x1="45" y1="10" x2="88" y2="10" stroke="currentColor" stroke-width="1.5"/><line x1="45" y1="18" x2="75" y2="18" stroke="currentColor" stroke-width="1.5"/>`,
};
const DEFAULT_ICON = `<circle cx="20" cy="15" r="3" fill="currentColor"/><circle cx="50" cy="15" r="3" fill="currentColor"/><circle cx="80" cy="15" r="3" fill="currentColor"/>`;

function iconFor(category) {
  return CATEGORY_ICONS[category] || DEFAULT_ICON;
}

// ---- Build filter chips dynamically from whatever categories exist -------
function renderFilters(projects) {
  const el = document.getElementById('filters');
  const cats = [...new Set(projects.map(p => p.category))];
  const chips = [{ id: 'all', label: 'All' }, ...cats.map(c => ({
    id: c,
    label: projects.find(p => p.category === c).categoryLabel
  }))];

  el.innerHTML = chips.map((c, i) => `
    <button class="chip${i === 0 ? ' chip--active' : ''}" data-filter="${c.id}" role="tab" aria-selected="${i === 0}">
      ${c.label}
    </button>
  `).join('');

  el.addEventListener('click', (e) => {
    const btn = e.target.closest('.chip');
    if (!btn) return;
    el.querySelectorAll('.chip').forEach(c => {
      c.classList.remove('chip--active');
      c.setAttribute('aria-selected', 'false');
    });
    btn.classList.add('chip--active');
    btn.setAttribute('aria-selected', 'true');
    renderCards(projects, btn.dataset.filter);
  });
}

// ---- Build project cards ---------------------------------------------
function renderCards(projects, filter = 'all') {
  const el = document.getElementById('cards');
  const list = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  el.innerHTML = list.map(p => `
    <article class="card reveal">
      <div class="card__stat mono">
        <span class="card__stat-label">
          ${p.categoryLabel}
          <span class="status-dot status-dot--${p.status}" title="${p.status === 'live' ? 'Live' : 'In progress'}"></span>
        </span>
        <svg class="card__spark" viewBox="0 0 100 30" preserveAspectRatio="none" aria-hidden="true">${iconFor(p.category)}</svg>
      </div>
      <h3>${p.title}</h3>
      <p>${p.description}</p>
      <ul class="tags mono">
        ${p.tags.map(t => `<li>${t}</li>`).join('')}
      </ul>
      <div class="card__links">
        <a href="${p.liveUrl}" class="card__link" target="_blank" rel="noopener">Live demo <span class="arrow">↗</span></a>
        <a href="${p.codeUrl}" class="card__link card__link--muted" target="_blank" rel="noopener">Code <span class="arrow">↗</span></a>
      </div>
    </article>
  `).join('');

  observeReveals();
}

// ---- Hero stat, computed from data, not hand-typed ------------------
function renderHeroStat(projects) {
  const liveCount = projects.filter(p => p.status === 'live').length;
  const el = document.getElementById('hero-stat');
  if (el) el.textContent = `${liveCount} project${liveCount === 1 ? '' : 's'} live — updated as I ship new work`;
}

// ---- Scroll reveal (respects reduced motion) -------------------------
function observeReveals() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const items = document.querySelectorAll('.reveal:not(.reveal--shown)');
  if (prefersReduced) {
    items.forEach(i => i.classList.add('reveal--shown'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal--shown');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  items.forEach(i => io.observe(i));
}

// ---- Init ---------------------------------------------------------------
renderHeroStat(PROJECTS);
renderFilters(PROJECTS);
renderCards(PROJECTS);

// ---- Nav background on scroll -------------------------------------------
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    nav.style.background = 'rgba(11,18,32,0.9)';
    nav.style.borderBottom = '1px solid rgba(35,47,73,0.6)';
  } else {
    nav.style.background = 'linear-gradient(to bottom, rgba(11,18,32,0.85), rgba(11,18,32,0))';
    nav.style.borderBottom = 'none';
  }
});
