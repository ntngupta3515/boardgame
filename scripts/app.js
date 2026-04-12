const app = document.getElementById(ID.APP);
const data = GAMES_DATA;
const specialIds = new Set(data.specials || []);

function idealLabel(g) {
	const val = g.ideal[0] === g.ideal[1] ? `${g.ideal[0]}` : `${g.ideal[0]}-${g.ideal[1]}`;
	return `${CONFIG.IDEAL_PREFIX} ${val} ${CONFIG.IDEAL_SUFFIX}`;
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
		const height = (sec.description ? CONFIG.SECTION_HEADER_WITH_DESC_HEIGHT : CONFIG.SECTION_HEADER_HEIGHT) + games.length * CONFIG.GAME_ITEM_HEIGHT;
		blocks.push({ title: sec.title, description: sec.description, games, height });
	}

	// Distribute into balanced two-column pages
	const pages = [];
	let col1 = [], col2 = [], h1 = 0, h2 = 0;

	function flushPage() {
		if (col1.length || col2.length) {
			pages.push({ col1: [...col1], col2: [...col2] });
			col1 = []; col2 = []; h1 = 0; h2 = 0;
		}
	}

	for (const block of blocks) {
		if (h1 + block.height > CONFIG.PAGE_HEIGHT && h2 + block.height > CONFIG.PAGE_HEIGHT) flushPage();
		if (h1 <= h2) { col1.push(block); h1 += block.height; }
		else { col2.push(block); h2 += block.height; }
	}
	flushPage();

	function renderBlock(block) {
		let html = `<div class="${CLASS.SECTION_TITLE}">${block.title}</div>`;
		if (block.description) html += `<div class="${CLASS.SECTION_DESC}">${block.description}</div>`;
		html += block.games.map(g => `<div class="${CLASS.ITEM}">
			<div class="${CLASS.ITEM_ROW}">
				<span class="${CLASS.ITEM_NAME}">${g.name}</span><span class="${CLASS.DOTS}"></span><span class="${CLASS.ITEM_PRICE}">${g.time}</span>
			</div>
			<div class="${CLASS.ITEM_META}">
				<span class="${CLASS.ITEM_DESC}">${g.desc}</span>
				<span class="${CLASS.IDEAL_SERVING}">${idealLabel(g)}</span>
			</div>
		</div>`).join('');
		return html;
	}

	for (const page of pages) {
		const menuDiv = document.createElement('div');
		menuDiv.className = CLASS.MENU;
		menuDiv.innerHTML = `
			<div class="${CLASS.STAIN}"></div>
			<h1>${CONFIG.TITLE}</h1>
			<p class="${CLASS.SUBTITLE}">${CONFIG.SUBTITLE}</p>
			<p class="${CLASS.TAGLINE}">${CONFIG.TAGLINE}</p>
			${page === pages[0] && specials.length ? `
				<div class="${CLASS.SPECIAL}">
					<h3>${specials.length > 1 ? CONFIG.SPECIAL_HEADING_PLURAL : CONFIG.SPECIAL_HEADING}</h3>
					${specials.map(g => `<p><strong>${g.name}</strong> &mdash; <em>${g.time}</em><br>${g.desc}<br>
					<span class="${CLASS.IDEAL_SERVING}">${idealLabel(g)}</span></p>`).join('')}
				</div>` : ''}
				<div class="${CLASS.COLUMNS}">
					<div>${page.col1.map(renderBlock).join('')}</div>
					<div>${page.col2.map(renderBlock).join('')}</div>
				</div>
				<div class="${CLASS.FOOTER}">
					<p>${CONFIG.FOOTER}</p>
				</div>
		`;
		app.appendChild(menuDiv);
  }

  if (!pages.length && !specials.length) {
    app.innerHTML = `<div class="${CLASS.MENU}">
      <h1>${CONFIG.TITLE}</h1>
      <p class="${CLASS.SUBTITLE}" style="margin-top:20px">${CONFIG.EMPTY_MESSAGE}</p>
    </div>`;
  }
}

// Player count selector
const selector = document.getElementById(ID.PLAYER_FILTER);
selector.innerHTML = `<option value="">${CONFIG.FILTER_DEFAULT}</option>`;
for (let i = 1; i <= CONFIG.MAX_PLAYERS; i++) selector.innerHTML += `<option value="${i}">${i}</option>`;
selector.addEventListener('change', () => render(selector.value ? parseInt(selector.value) : null));

render(null);
