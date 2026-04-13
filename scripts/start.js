const splashSelector = document.getElementById(ID.SPLASH.SELECT);
splashSelector.innerHTML = `<option value="">${CONFIG.FILTER_DEFAULT}</option>`;
for (let i = 1; i <= CONFIG.MAX_PLAYERS; i++) 
    splashSelector.innerHTML += `<option value="${i}">${i}</option>`;

function startMenu() {
    const count = splashSelector.value
    document.getElementById(ID.SPLASH.DIV).style.display = 'none';
    document.getElementById(ID.MAIN).style.display = '';
    const sel = document.getElementById(ID.PLAYER_FILTER);
    if (count) sel.value = count;
    sel.dispatchEvent(new Event('change'));
}
