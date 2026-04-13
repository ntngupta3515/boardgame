let currentTheme = DEFAULT_THEME;
let currentTitle = THEMES[currentTheme].TITLE;
setTheme();
function toggleTheme() {
    currentTheme = (currentTheme + 1) % THEMES.length;
    currentTitle = THEMES[currentTheme].TITLE;
    setTheme();
}

function setTheme() {
    document.getElementById(ID.THEME).setAttribute('href', THEMES[currentTheme].STYLE);
    document.querySelector(`.${CLASS.THEME_SWITCHER}`).textContent = THEMES[currentTheme].LABEL;
    document.querySelectorAll(`.${CLASS.MENU_TITLE}`).forEach(el => el.textContent = currentTitle);
    document.title = currentTitle;
}
