const TAGS = {
	CARD: "🃏 Card",
	STRATEGY: "🧠 Strategy",
	FAMILY: "👨‍👩‍👧‍👦 Family",
	PARTY: "🎉 Party",
	DEXTERITY: "🎯 Dexterity",
	WORD: "🔤 Word",
	CLASSIC: "🏛️ Classic",
	TRADING: "💱 Trading",
	ENGINE_BUILDING: "🏗️ Engine Building",
	ROUTE_BUILDING: "🛣️ Route Building",
	TWO_PLAYER: "👥 Two-Player",
	DECK_BUILDING: "🃏 Deck-Building",
	COOPERATIVE: "🤝 Cooperative",
}

const GAMES_DATA = {
	"specials": ["dnd", "catan"],
	"sections": [
		{
			"title": "🍔 Quick Bites",
			"games": ["uno", "jenga", "connect_four", "boggle", "sorry", "trouble", "checkers"]
		},
		{
			"title": "🥧 Hearty Helpings",
			"games": ["catan", "ticket_to_ride", "clue", "carcassonne", "pandemic", "7_wonders"]
		},
		{
			"title": "🍕 House Favorites",
			"games": ["monopoly", "scrabble", "risk", "trivial_pursuit", "life", "battleship", "chess"]
		},
		{
			"title": "🍰 Dessert Games",
			"games": ["codenames", "pictionary", "guess_who", "taboo", "cranium", "dixit"]
		},
		{
			"title": "🍷 Connoisseur's Corner",
			"description": "For the refined board game palate",
			"games": ["azul", "splendor", "wingspan", "dominion"]
		},
		{
			"title": "🔥 All-Night Specials",
			"description": "Clear your schedule",
			"games": ["terraforming_mars", "betrayal"]
		},
		{
			"title": "🐉 Epic Quests",
			"description": "For the truly dedicated adventurers",
			"games": ["dnd"]
		}
	],
	"games": {
		"Gwent": {
			"name": "Gwent",
			"time": "20 min",
			"desc": "A card game of bluffing and strategy. Originally from The Witcher series.",
			"players": [1, 5],
			"ideal": [2, 2],
			"tags": [TAGS.CARD, TAGS.DECK_BUILDING]
		},
		"Betrayer at House on the Hill": {
			"name": "Betrayal at House on the Hill",
			"time": "60 min",
			"desc": "Personally only played a couple of times Can give it a go, or will say the game a bye bye",
			"players": [3, 6],
			"ideal": [5, 6],
			"tags": [TAGS.STRATEGY, TAGS.COOPERATIVE]
		},



		"uno": {
			"name": "Uno",
			"time": "15 min",
			"desc": "A classic card-slingin' showdown. Friendships not guaranteed.",
			"players": [2, 10],
			"ideal": [4, 6],
			"tags": ["Card", "Family", "Party"]
		},
		"jenga": {
			"name": "Jenga",
			"time": "20 min",
			"desc": "Steady hands required. No refunds after collapse.",
			"players": [1, 8],
			"ideal": [2, 4],
			"tags": ["Dexterity", "Family", "Party"]
		},
		"connect_four": {
			"name": "Connect Four",
			"time": "10 min",
			"desc": "Drop it like it's hot. Two players only.",
			"players": [2, 2],
			"ideal": [2, 2],
			"tags": ["Strategy", "Family", "Two-Player"]
		},
		"boggle": {
			"name": "Boggle",
			"time": "15 min",
			"desc": "Shake, rattle, and spell. Dictionary disputes extra.",
			"players": [2, 8],
			"ideal": [3, 5],
			"tags": ["Word", "Family", "Party"]
		},
		"sorry": {
			"name": "Sorry!",
			"time": "30 min",
			"desc": "Bump your way to victory. Apologies not sincere.",
			"players": [2, 4],
			"ideal": [3, 4],
			"tags": ["Classic", "Family"]
		},
		"trouble": {
			"name": "Trouble",
			"time": "25 min",
			"desc": "Pop the bubble, move your pieces. Satisfying clicks guaranteed.",
			"players": [2, 4],
			"ideal": [3, 4],
			"tags": ["Classic", "Family"]
		},
		"catan": {
			"name": "Catan",
			"time": "90 min",
			"desc": "Got wood? Trade sheep for glory on the island.",
			"players": [3, 4],
			"ideal": [3, 4],
			"tags": ["Strategy", "Trading", "Engine Building"]
		},
		"ticket_to_ride": {
			"name": "Ticket to Ride",
			"time": "60 min",
			"desc": "All aboard! Claim routes coast to coast.",
			"players": [2, 5],
			"ideal": [3, 4],
			"tags": ["Strategy", "Family", "Route Building"]
		},
		"clue": {
			"name": "Clue",
			"time": "45 min",
			"desc": "Whodunit? Colonel Mustard looks suspicious today.",
			"players": [3, 6],
			"ideal": [4, 5]
		},
		"carcassonne": {
			"name": "Carcassonne",
			"time": "45 min",
			"desc": "Lay tiles, claim cities. Medieval empire building.",
			"players": [2, 5],
			"ideal": [2, 3]
		},
		"pandemic": {
			"name": "Pandemic",
			"time": "60 min",
			"desc": "Save the world together. Or lose together. No pressure.",
			"players": [2, 4],
			"ideal": [3, 4]
		},
		"7_wonders": {
			"name": "7 Wonders",
			"time": "30 min",
			"desc": "Build an ancient civilization in the time it takes to eat lunch.",
			"players": [2, 7],
			"ideal": [4, 5]
		},
		"monopoly": {
			"name": "Monopoly",
			"time": "∞ hrs",
			"desc": "Warning: may cause table flips. Banker always cheats.",
			"players": [2, 8],
			"ideal": [3, 5]
		},
		"scrabble": {
			"name": "Scrabble",
			"time": "60 min",
			"desc": "Triple word score with a side of smugness.",
			"players": [2, 4],
			"ideal": [2, 3]
		},
		"risk": {
			"name": "Risk",
			"time": "3 hrs",
			"desc": "World domination, one dice roll at a time.",
			"players": [2, 6],
			"ideal": [4, 5]
		},
		"trivial_pursuit": {
			"name": "Trivial Pursuit",
			"time": "90 min",
			"desc": "Show off what you know. Pie pieces included.",
			"players": [2, 6],
			"ideal": [4, 6]
		},
		"life": {
			"name": "Game of Life",
			"time": "60 min",
			"desc": "Spin the wheel. Get a job. Retire rich or broke.",
			"players": [2, 6],
			"ideal": [3, 4]
		},
		"battleship": {
			"name": "Battleship",
			"time": "30 min",
			"desc": "You sunk my battleship! Naval warfare for two.",
			"players": [2, 2],
			"ideal": [2, 2]
		},
		"chess": {
			"name": "Chess",
			"time": "30-120 min",
			"desc": "The OG strategy game. Checkmate your ego.",
			"players": [2, 2],
			"ideal": [2, 2]
		},
		"checkers": {
			"name": "Checkers",
			"time": "20 min",
			"desc": "King me! Simple rules, sneaky tactics.",
			"players": [2, 2],
			"ideal": [2, 2]
		},
		"codenames": {
			"name": "Codenames",
			"time": "30 min",
			"desc": "Spymaster special. One word, many meanings.",
			"players": [4, 8],
			"ideal": [6, 8]
		},
		"pictionary": {
			"name": "Pictionary",
			"time": "30 min",
			"desc": "Draw fast, guess faster. Artistic talent not required.",
			"players": [3, 16],
			"ideal": [6, 8]
		},
		"guess_who": {
			"name": "Guess Who?",
			"time": "15 min",
			"desc": "Does your person have a mustache? A light palate cleanser.",
			"players": [2, 2],
			"ideal": [2, 2]
		},
		"taboo": {
			"name": "Taboo",
			"time": "30 min",
			"desc": "Describe without the obvious words. Harder than it sounds.",
			"players": [4, 10],
			"ideal": [6, 8]
		},
		"cranium": {
			"name": "Cranium",
			"time": "60 min",
			"desc": "Act, draw, sculpt, and spell. The whole brain workout.",
			"players": [4, 16],
			"ideal": [6, 10]
		},
		"dixit": {
			"name": "Dixit",
			"time": "30 min",
			"desc": "A picture is worth a thousand guesses.",
			"players": [3, 6],
			"ideal": [4, 6]
		},
		"azul": {
			"name": "Azul",
			"time": "40 min",
			"desc": "Tile-laying Portuguese palace art. Deceptively cutthroat.",
			"players": [2, 4],
			"ideal": [2, 3]
		},
		"splendor": {
			"name": "Splendor",
			"time": "30 min",
			"desc": "Gem trading for aspiring Renaissance merchants.",
			"players": [2, 4],
			"ideal": [3, 4]
		},
		"wingspan": {
			"name": "Wingspan",
			"time": "70 min",
			"desc": "Collect birds, build habitats. Surprisingly competitive birding.",
			"players": [1, 5],
			"ideal": [2, 3]
		},
		"terraforming_mars": {
			"name": "Terraforming Mars",
			"time": "2 hrs",
			"desc": "Make Mars livable. Corporations welcome, oxygen optional.",
			"players": [1, 5],
			"ideal": [3, 4]
		},
		"dominion": {
			"name": "Dominion",
			"time": "30 min",
			"desc": "Build your deck, build your kingdom. The original deckbuilder.",
			"players": [2, 4],
			"ideal": [2, 3]
		},
		"betrayal": {
			"name": "Betrayal at House on the Hill",
			"time": "60 min",
			"desc": "Explore a haunted house. One of you is the traitor.",
			"players": [3, 6],
			"ideal": [4, 5]
		},
		"dnd": {
			"name": "Dungeons & Dragons",
			"time": "4-8 hours",
			"desc": "An all-you-can-play adventure. Bring your own imagination. Dungeon Master tips appreciated!",
			"players": [2, 8],
			"ideal": [4, 6]
		}
	}
};
