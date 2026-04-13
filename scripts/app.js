const app = document.getElementById(ID.APP);
const specialIds = new Set(GAMES_DATA.specials || []);
const gameFilter = new GameFilter(GAMES_DATA.games);
let activeTags = [];

function idealLabel(g) {
	const val = g.ideal[0] === g.ideal[1] ? `${g.ideal[0]}` : `${g.ideal[0]}-${g.ideal[1]}`;
	return `${CONFIG.IDEAL_PREFIX} ${val} ${CONFIG.IDEAL_SUFFIX}`;
}

function getFilters() {
	return { playerCount: selector.value ? parseInt(selector.value) : null, tags: activeTags };
}

function rebuildTagDropdown() {
	const tagSelect = document.getElementById(ID.TAG_FILTER);
	const allTags = gameFilter.getAllTags().filter(tag => !activeTags.includes(tag));
	tagSelect.innerHTML = `<option value="">🏷️ Add tag...</option>`;
	allTags.forEach(tag => tagSelect.innerHTML += `<option value="${tag}">${tag}</option>`);
}

function rebuildChips() {
	const container = document.getElementById('active-tags');
	container.innerHTML = '';
	activeTags.forEach(tag => {
		const chip = document.createElement('button');
		chip.className = 'tag-chip';
		chip.textContent = tag + ' ✕';
		chip.addEventListener('click', () => {
			activeTags = activeTags.filter(t => t !== tag);
			rebuildTagDropdown();
			rebuildChips();
			render(getFilters().playerCount);
		});
		container.appendChild(chip);
	});
}

function render(playerCount) {
	app.innerHTML = '';
	const filters = getFilters();

	// Collect specials that match player filter
	const specials = (GAMES_DATA.specials || [])
		.map(id => GAMES_DATA.games[id])
    	.filter(({ id }) => gameFilter.filter(id, filters));

	// Build section blocks, skipping specials from regular listings
	const blocks = [];
	for (const sec of GAMES_DATA.sections) {
		const games = [];
		for (const id of sec.games) {
			if (specialIds.has(id)) continue;
			if (!gameFilter.filter(id, filters)) continue;
			games.push(GAMES_DATA.games[id]);
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
			<div>
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
			<h1 class="${CLASS.MENU_TITLE}">${currentTitle}</h1>
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
      <h1 class="${CLASS.MENU_TITLE}">${currentTitle}</h1>
      <p class="${CLASS.SUBTITLE}" style="margin-top:20px">${CONFIG.EMPTY_MESSAGE}</p>
    </div>`;
  }
}

// Player count selector
const selector = document.getElementById(ID.PLAYER_FILTER);
selector.innerHTML = `<option value="">${CONFIG.FILTER_DEFAULT}</option>`;
for (let i = 1; i <= CONFIG.MAX_PLAYERS; i++) selector.innerHTML += `<option value="${i}">${i}</option>`;
selector.addEventListener('change', () => render(selector.value ? parseInt(selector.value) : null));

// Tag filter dropdown
const tagSelect = document.getElementById(ID.TAG_FILTER);
tagSelect.addEventListener('change', () => {
	if (tagSelect.value) {
		activeTags.push(tagSelect.value);
		tagSelect.value = '';
		rebuildTagDropdown();
		rebuildChips();
		render(getFilters().playerCount);
	}
});
rebuildTagDropdown();

render(selector.value ? parseInt(selector.value) : null);
