// ============================================================
// St. Matthew Passion — App Logic
// ============================================================

(function () {
  'use strict';

  const STORAGE_KEY = 'smp_current_day';
  const VISITED_KEY = 'smp_visited_days';

  // ---- State ----
  let currentDay = loadCurrentDay();

  // ---- DOM refs ----
  const carousel     = document.getElementById('carousel');
  const content      = document.getElementById('content');
  const heroDay      = document.getElementById('hero-day-number');
  const heroSegTitle = document.getElementById('hero-segment-title');
  const arrowLeft    = document.getElementById('carousel-left');
  const arrowRight   = document.getElementById('carousel-right');

  // ---- Init ----
  buildCarousel();
  selectDay(currentDay);

  arrowLeft.addEventListener('click', () => {
    carousel.scrollBy({ left: -200, behavior: 'smooth' });
  });
  arrowRight.addEventListener('click', () => {
    carousel.scrollBy({ left: 200, behavior: 'smooth' });
  });

  // ---- Build day buttons ----
  function buildCarousel() {
    const visited = loadVisitedDays();
    for (let d = 1; d <= 40; d++) {
      const btn = document.createElement('button');
      btn.className = 'day-btn';
      btn.textContent = d;
      btn.dataset.day = d;
      btn.setAttribute('aria-label', `Day ${d}`);
      if (visited.has(d)) btn.classList.add('completed');
      btn.addEventListener('click', () => selectDay(d));
      carousel.appendChild(btn);
    }
  }

  // ---- Select a day ----
  function selectDay(day) {
    currentDay = day;
    saveCurrentDay(day);
    markVisited(day);

    // Update header
    heroDay.textContent = day;
    const seg = daySegments.find(s => s.day === day);
    heroSegTitle.textContent = seg ? seg.title : '';

    // Update carousel active state
    carousel.querySelectorAll('.day-btn').forEach(btn => {
      const d = parseInt(btn.dataset.day, 10);
      btn.classList.toggle('active', d === day);
      if (loadVisitedDays().has(d)) btn.classList.add('completed');
    });

    // Scroll active button into view
    const activeBtn = carousel.querySelector('.day-btn.active');
    if (activeBtn) {
      activeBtn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }

    // Render movements
    renderMovements(day);
  }

  // ---- Render movement cards ----
  function renderMovements(day) {
    const mvts = getMovementsForDay(day);
    const seg = daySegments.find(s => s.day === day);

    if (!mvts.length) {
      content.innerHTML = `
        <div class="empty-state">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z"/></svg>
          <p>${seg ? seg.title : 'No movements for this day.'}</p>
        </div>`;
      return;
    }

    // Determine which part the first movement belongs to
    const firstPart = mvts[0].part;
    const totalMin = mvts.reduce((sum, m) => sum + m.duration, 0);

    let html = `
      <div class="day-info">
        <span class="day-info__part">Part ${firstPart === 1 ? 'One' : 'Two'}</span>
        <p class="day-info__duration">${mvts.length} movement${mvts.length > 1 ? 's' : ''} &middot; ~${formatDuration(totalMin)}</p>
      </div>`;

    mvts.forEach(m => {
      const typeClass = getTypeClass(m.type);
      html += `
      <article class="movement-card" data-number="${m.number}">
        <div class="movement-header" onclick="window.__toggleCard(this)">
          <div class="movement-number">${m.number}</div>
          <div class="movement-info">
            <div class="movement-title">${escapeHtml(m.titleEn)}</div>
            <div class="movement-meta">
              <span class="movement-type ${typeClass}">${m.type}</span>
              <span>${escapeHtml(m.voicing)}</span>
              <span>${formatDuration(m.duration)}</span>
            </div>
          </div>
          <svg class="movement-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
        <div class="movement-detail">
          <a class="listen-btn" href="${getYouTubeSearchUrl(m)}" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            Listen on YouTube
          </a>
          <div class="lyrics-grid">
            <div class="lyrics-col">
              <h3>Deutsch</h3>
              <div class="lyrics-text">${escapeHtml(m.german)}</div>
            </div>
            <div class="lyrics-col">
              <h3>English</h3>
              <div class="lyrics-text">${escapeHtml(m.english)}</div>
            </div>
          </div>
        </div>
      </article>`;
    });

    content.innerHTML = html;
  }

  // ---- Toggle card open/close ----
  window.__toggleCard = function (headerEl) {
    const card = headerEl.closest('.movement-card');
    card.classList.toggle('open');
  };

  // ---- Helpers ----
  function getTypeClass(type) {
    const t = type.toLowerCase();
    if (t === 'aria') return 'movement-type--aria';
    if (t === 'chorus') return 'movement-type--chorus';
    if (t === 'chorale') return 'movement-type--chorale';
    return 'movement-type--recitative';
  }

  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  // ---- Persistence ----
  function loadCurrentDay() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const d = parseInt(stored, 10);
      if (d >= 1 && d <= 40) return d;
    }
    return 1;
  }

  function saveCurrentDay(day) {
    localStorage.setItem(STORAGE_KEY, String(day));
  }

  function loadVisitedDays() {
    try {
      const arr = JSON.parse(localStorage.getItem(VISITED_KEY) || '[]');
      return new Set(arr);
    } catch {
      return new Set();
    }
  }

  function markVisited(day) {
    const visited = loadVisitedDays();
    visited.add(day);
    localStorage.setItem(VISITED_KEY, JSON.stringify([...visited]));
  }
})();
