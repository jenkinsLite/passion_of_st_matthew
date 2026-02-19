// ============================================================
// St. Matthew Passion — App Logic
// ============================================================

(function () {
  'use strict';

  const STORAGE_KEY = 'smp_current_day';
  const VISITED_KEY = 'smp_visited_days';
  const SOURCE_KEY  = 'smp_music_source';

  // ---- SVG icons ----
  const ICON_APPLE = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.994 6.124a9.23 9.23 0 0 0-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 0 0-1.877-.726 10.496 10.496 0 0 0-1.564-.15c-.073-.005-.146-.01-.22-.015H6.09l-.32.02a10.588 10.588 0 0 0-1.33.12 5.005 5.005 0 0 0-2.169.94C1.293 1.882.674 3.015.36 4.31a9.37 9.37 0 0 0-.202 1.505c-.01.098-.02.196-.02.294v11.78l.02.305a9.27 9.27 0 0 0 .24 2.19c.317 1.31 1.062 2.31 2.18 3.043a5.022 5.022 0 0 0 1.877.726c.51.1 1.028.152 1.546.158.076.005.152.01.228.015h11.82l.32-.02a10.588 10.588 0 0 0 1.33-.12 5.005 5.005 0 0 0 2.169-.94c.977-.802 1.596-1.935 1.91-3.23.093-.39.155-.785.198-1.18.012-.1.02-.2.023-.3V6.42a9.563 9.563 0 0 0-.007-.296zm-6.424 3.283v5.986c0 .395-.037.782-.158 1.163-.182.573-.524 1.024-1.016 1.353-.39.26-.826.404-1.285.478-.343.055-.69.074-1.037.041-.724-.068-1.349-.32-1.835-.843-.388-.418-.592-.914-.598-1.48a2.143 2.143 0 0 1 .568-1.504c.396-.427.89-.688 1.44-.83.377-.098.762-.152 1.15-.174.32-.018.64.005.955.065.116.022.232.048.346.082V10.68l-.037-.007a.266.266 0 0 0-.098.01l-4.542 1.077c-.044.01-.088.024-.13.04a.46.46 0 0 0-.218.2.506.506 0 0 0-.06.245v6.404c0 .232-.005.464-.062.692-.1.398-.277.764-.57 1.073-.358.378-.797.604-1.295.724-.16.039-.324.064-.488.081a3.823 3.823 0 0 1-1.16-.04c-.588-.126-1.1-.386-1.49-.86-.32-.387-.482-.836-.477-1.335.004-.346.1-.675.27-.98.283-.508.7-.873 1.213-1.13.37-.185.764-.292 1.17-.34.287-.035.575-.037.862.003.163.023.324.056.482.102V8.387c0-.252.032-.5.113-.74a1.13 1.13 0 0 1 .57-.637c.178-.095.37-.15.568-.19.2-.04.397-.068.598-.093l3.35-.504c.618-.093 1.236-.187 1.856-.273.222-.03.447-.033.667.009.33.063.58.237.727.546.068.143.098.297.105.455.004.07.003.14.003.21z"/></svg>';
  const ICON_SPOTIFY = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>';

  // ---- State ----
  let currentDay = loadCurrentDay();
  let musicSource = loadMusicSource();

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
      btn.addEventListener('click', () => {
        // If clicking the already-active day, toggle its completed state
        if (d === currentDay) {
          toggleVisited(d);
          return;
        }
        selectDay(d);
      });
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
      const isApple = musicSource === 'apple';
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
          <div class="player-section">
            <div class="source-selector">
              <button class="source-btn source-btn--apple ${isApple ? 'active' : ''}" data-source="apple" data-movement="${m.number}" onclick="window.__switchSource(this)">
                ${ICON_APPLE}
                <span>Apple Music</span>
              </button>
              <button class="source-btn source-btn--spotify ${!isApple ? 'active' : ''}" data-source="spotify" data-movement="${m.number}" onclick="window.__switchSource(this)">
                ${ICON_SPOTIFY}
                <span>Spotify</span>
              </button>
            </div>
            <div class="player-embed" data-movement="${m.number}">
              ${isApple ? appleEmbed(m) : spotifyEmbed(m)}
            </div>
          </div>
          <div class="lyrics-grid">
            <div class="lyrics-col">
              <h3>Deutsch</h3>
              <div class="lyrics-text">${renderLyrics(m.german)}</div>
            </div>
            <div class="lyrics-col">
              <h3>English</h3>
              <div class="lyrics-text">${renderLyrics(m.english)}</div>
            </div>
          </div>
        </div>
      </article>`;
    });

    content.innerHTML = html;
  }

  // ---- Embed builders ----
  function appleEmbed(m) {
    return `<iframe class="music-embed apple-music-embed" allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" frameborder="0" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="${getAppleMusicEmbedUrl(m)}"></iframe>`;
  }

  function spotifyEmbed(m) {
    return `<iframe class="music-embed spotify-embed" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" frameborder="0" src="${getSpotifyEmbedUrl(m)}"></iframe>`;
  }

  // ---- Switch source ----
  window.__switchSource = function (btnEl) {
    const source = btnEl.dataset.source;
    const mvtNum = parseInt(btnEl.dataset.movement, 10);
    musicSource = source;
    saveMusicSource(source);

    // Update all source buttons on the page
    document.querySelectorAll('.source-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.source === source);
    });

    // Update all player embeds on the page
    document.querySelectorAll('.player-embed').forEach(container => {
      const num = parseInt(container.dataset.movement, 10);
      const m = movements.find(mv => mv.number === num);
      if (!m) return;
      container.innerHTML = source === 'apple' ? appleEmbed(m) : spotifyEmbed(m);
    });
  };

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

  function renderLyrics(lines) {
    return lines.map(({s, t}) =>
      `<p class="lyrics-block"><u><i>${escapeHtml(s)}:</i></u>${escapeHtml(t).replace(/\n/g, '<br>')}</p>`
    ).join('');
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

  function unmarkVisited(day) {
    const visited = loadVisitedDays();
    visited.delete(day);
    localStorage.setItem(VISITED_KEY, JSON.stringify([...visited]));
  }

  function toggleVisited(day) {
    const visited = loadVisitedDays();
    if (visited.has(day)) {
      unmarkVisited(day);
    } else {
      markVisited(day);
    }
    // Update the button's completed class
    const btn = carousel.querySelector(`.day-btn[data-day="${day}"]`);
    if (btn) btn.classList.toggle('completed');
  }

  function loadMusicSource() {
    return localStorage.getItem(SOURCE_KEY) || 'apple';
  }

  function saveMusicSource(source) {
    localStorage.setItem(SOURCE_KEY, source);
  }
})();
