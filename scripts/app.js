const app = document.getElementById('app');
const data = GAMES_DATA;
const specialIds = new Set(data.specials || []);

function idealLabel(g) {
  return g.ideal[0] === g.ideal[1] ? `${g.ideal[0]}` : `${g.ideal[0]}-${g.ideal[1]}`;
}

function render(playerCount) {
  app.innerHTML = '';

  // Collect specials that match player filter
  const specials = (data.specials || [])
    .map(id => data.games[id])
    .filter(g => g && (!playerCount || (playerCount >= g.players[0] && playerCount <= g.players[1])));

  // Build section blocks, skipping specials from regular listings
  const blocks = [];
  for (const sec of data.sections) {
    const games = [];
    for (const id of sec.games) {
      const g = data.games[id];
      if (!g || specialIds.has(id)) continue;
      if (playerCount && (playerCount < g.players[0] || playerCount > g.players[1])) continue;
      games.push(g);
    }
    if (!games.length) continue;
    const height = (sec.description ? 60 : 40) + games.length * 50;
    blocks.push({ title: sec.title, description: sec.description, games, height });
  }

  // Distribute into balanced two-column pages
  const PAGE_HEIGHT = 700;
  const pages = [];
  let col1 = [], col2 = [], h1 = 0, h2 = 0;

  function flushPage() {
    if (col1.length || col2.length) {
      pages.push({ col1: [...col1], col2: [...col2] });
      col1 = []; col2 = []; h1 = 0; h2 = 0;
    }
  }

  for (const block of blocks) {
    if (h1 + block.height > PAGE_HEIGHT && h2 + block.height > PAGE_HEIGHT) flushPage();
    if (h1 <= h2) { col1.push(block); h1 += block.height; }
    else { col2.push(block); h2 += block.height; }
  }
  flushPage();

  function renderBlock(block) {
    let html = `<div class="section-title">${block.title}</div>`;
    if (block.description) html += `<div class="section-desc">${block.description}</div>`;
    html += block.games.map(g => `<div class="item">
      <div class="item-row">
        <span class="item-name">${g.name}</span><span class="dots"></span><span class="item-price">${g.time}</span>
      </div>
      <div class="item-meta">
        <span class="item-desc">${g.desc}</span>
        <span class="ideal-serving">Best served: ${idealLabel(g)} players</span>
      </div>
    </div>`).join('');
    return html;
  }

  for (const page of pages) {
    const menuDiv = document.createElement('div');
    menuDiv.className = 'menu';
    menuDiv.innerHTML = `
      <div class="stain"></div>
      <h1>🎲 Game Night Diner 🎲</h1>
      <p class="subtitle">Est. 1994 &mdash; "Where Every Night is Game Night!"</p>
      <p class="tagline">⭐ All games served hot &amp; fresh to your table ⭐</p>
      ${page === pages[0] && specials.length ? `
      <div class="special">
        <h3>🌟 Today's Blue Plate Special${specials.length > 1 ? 's' : ''} 🌟</h3>
        ${specials.map(g => `<p><strong>${g.name}</strong> &mdash; <em>${g.time}</em><br>${g.desc}<br>
        <span class="ideal-serving">Best served: ${idealLabel(g)} players</span></p>`).join('')}
      </div>` : ''}
      <div class="columns">
        <div>${page.col1.map(renderBlock).join('')}</div>
        <div>${page.col2.map(renderBlock).join('')}</div>
      </div>
      <div class="footer">
        <p>No substitutions. Management not responsible for lost friendships or flipped tables.<br>
        🎲 Dice rolls are final. 🎲</p>
      </div>`;
    app.appendChild(menuDiv);
  }

  if (!pages.length) {
    app.innerHTML = '<div class="menu"><h1>🎲 Game Night Diner 🎲</h1><p class="subtitle" style="margin-top:20px">No games available for that party size!</p></div>';
  }
}

// Player count selector
const selector = document.getElementById('player-filter');
selector.innerHTML = '<option value="">Any</option>';
for (let i = 1; i <= 16; i++) selector.innerHTML += `<option value="${i}">${i}</option>`;
selector.addEventListener('change', () => render(selector.value ? parseInt(selector.value) : null));

render(null);
