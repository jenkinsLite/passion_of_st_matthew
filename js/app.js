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
          <a class="listen-btn" href="${getAppleMusicTrackUrl(m)}" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.994 6.124a9.23 9.23 0 0 0-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 0 0-1.877-.726 10.496 10.496 0 0 0-1.564-.15c-.073-.005-.146-.01-.22-.015H6.09l-.32.02a10.588 10.588 0 0 0-1.33.12 5.005 5.005 0 0 0-2.169.94C1.293 1.882.674 3.015.36 4.31a9.37 9.37 0 0 0-.202 1.505c-.01.098-.02.196-.02.294v11.78l.02.305a9.27 9.27 0 0 0 .24 2.19c.317 1.31 1.062 2.31 2.18 3.043a5.022 5.022 0 0 0 1.877.726c.51.1 1.028.152 1.546.158.076.005.152.01.228.015h11.82l.32-.02a10.588 10.588 0 0 0 1.33-.12 5.005 5.005 0 0 0 2.169-.94c.977-.802 1.596-1.935 1.91-3.23.093-.39.155-.785.198-1.18.012-.1.02-.2.023-.3V6.42a9.563 9.563 0 0 0-.007-.296zm-6.424 3.283v5.986c0 .395-.037.782-.158 1.163-.182.573-.524 1.024-1.016 1.353-.39.26-.826.404-1.285.478-.343.055-.69.074-1.037.041-.724-.068-1.349-.32-1.835-.843-.388-.418-.592-.914-.598-1.48a2.143 2.143 0 0 1 .568-1.504c.396-.427.89-.688 1.44-.83.377-.098.762-.152 1.15-.174.32-.018.64.005.955.065.116.022.232.048.346.082V10.68l-.037-.007a.266.266 0 0 0-.098.01l-4.542 1.077c-.044.01-.088.024-.13.04a.46.46 0 0 0-.218.2.506.506 0 0 0-.06.245v6.404c0 .232-.005.464-.062.692-.1.398-.277.764-.57 1.073-.358.378-.797.604-1.295.724-.16.039-.324.064-.488.081a3.823 3.823 0 0 1-1.16-.04c-.588-.126-1.1-.386-1.49-.86-.32-.387-.482-.836-.477-1.335.004-.346.1-.675.27-.98.283-.508.7-.873 1.213-1.13.37-.185.764-.292 1.17-.34.287-.035.575-.037.862.003.163.023.324.056.482.102V8.387c0-.252.032-.5.113-.74a1.13 1.13 0 0 1 .57-.637c.178-.095.37-.15.568-.19.2-.04.397-.068.598-.093l3.35-.504c.618-.093 1.236-.187 1.856-.273.222-.03.447-.033.667.009.33.063.58.237.727.546.068.143.098.297.105.455.004.07.003.14.003.21z"/></svg>
            Listen on Apple Music
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
