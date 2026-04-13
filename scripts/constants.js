const DEFAULT_THEME = 1;
const THEMES = [{
    STYLE: 'styles/theme-diner.css',
    LABEL: '🍔 Diner',
    TITLE: '🎲 Game Night Diner 🎲',
}, {
    STYLE: 'styles/theme-neon.css',
    LABEL: '💜 Neon',
    TITLE: '👾 Game Night Arcade 👾',
}];

const ID = {
    APP: 'app',
    THEME: 'theme',
    PLAYER_FILTER: 'player-filter',
    MAIN: 'main',
    SPLASH: {
        DIV: 'splash',
        SELECT: 'splash-select',
    }
};

const CLASS = {
    MENU: 'menu',
    COLUMNS: 'columns',
    SECTION_TITLE: 'section-title',
    SECTION_DESC: 'section-desc',
    ITEM: 'item',
    ITEM_ROW: 'item-row',
    ITEM_NAME: 'item-name',
    ITEM_PRICE: 'item-price',
    ITEM_DESC: 'item-desc',
    DOTS: 'dots',
    IDEAL_SERVING: 'ideal-serving',
    SPECIAL: 'special',
    STAIN: 'stain',
    SUBTITLE: 'subtitle',
    TAGLINE: 'tagline',
    FOOTER: 'footer',
    THEME_SWITCHER: 'theme-switcher',
    MENU_TITLE: 'menu-title',
};

const CONFIG = {
    PAGE_HEIGHT: 700,
    SECTION_HEADER_HEIGHT: 40,
    SECTION_HEADER_WITH_DESC_HEIGHT: 60,
    GAME_ITEM_HEIGHT: 50,
    MAX_PLAYERS: 16,
    TITLE: '🎲 Game Night Diner 🎲',
    SUBTITLE: 'Est. 2024 \u2014 "Where Every Night is Game Night!"',
    TAGLINE: '⭐ All games served hot &amp; fresh to your table ⭐',
    SPECIAL_HEADING: '🌟 Today\'s Special 🌟',
    SPECIAL_HEADING_PLURAL: '🌟 Today\'s Specials 🌟',
    IDEAL_PREFIX: 'Best served:',
    IDEAL_SUFFIX: 'players',
    FOOTER: 'No subtitutions. Management not responsible for lost friendships or flipped tables.<br>🎲 Dice rolls are final. 🎲',
    EMPTY_MESSAGE: 'No games available for that party size. Try a different group!',
    FILTER_DEFAULT: 'Any',
}
