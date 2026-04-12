let current = 0;
function toggleTheme() {
    current = (current + 1) % CONFIG.THEMES.length;
    document.getElementById(ID.THEME).setAttribute('href', CONFIG.THEMES[current]);
    document.querySelector(`.${CLASS.THEME_SWITCHER}`).textContent = CONFIG.THEME_LABELS[current];
}
