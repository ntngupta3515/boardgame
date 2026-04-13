const TAGS = {
	AUCTION: "🔨 Auction",
	BLUFFING: "🎭 Bluffing",
	CARD: "🃏 Card",
	CLASSIC: "🏛️ Classic",
	COOP: "🤝 Co-op",
	CREATIVE: "🎨 Creative",
	DEDUCTION: "🔍 Deduction",
	DEXTERITY: "🤹 Dexterity",
	ENGINE: "⚙️ Engine Building",
	FAMILY: "👨‍👩‍👧‍👦 Family",
	HORROR: "👻 Horror",
	PARTY: "🎉 Party",
	PUZZLE: "🧩 Puzzle",
	RACING: "🏎️ Racing",
	ROUTE: "🗺️ Route Building",
	SOCIAL: "🕵️ Social Deduction",
	STRATEGY: "♟️ Strategy",
	TEAM: "👥 Team",
	TILE: "🧱 Tile Placement",
	TRADING: "💰 Trading",
	TWO_PLAYER: "👫 Two-Player",
	WORD: "📝 Word",
};

const GAMES_DATA = {
	"specials": ["modern_art", "between_two_cities", "one_night_werewolf"],
	"sections": [
		{ 
			"title": "🍔 Quick Bites", 
			"description": "In and out in 15 minutes or less", 
			"games": ["happy_salmon", "tinderblox", "one_night_werewolf", "flip_7", "set", "exploding_kittens", "zombie_kittens", "love_letter", "coup", "dead_mans_draw", "power_hungry_pets"] 
		},
		{ 
			"title": "🌭 Party Platters", 
			"description": "The more the merrier", 
			"games": ["throw_throw_burrito", "cant_catch_harry", "poetry_neanderthals", "taboo", "wavelength", "monsdrawsity", "nasty_things", "cards_against", "go_f_yourself", "priorities", "camel_up"] 
		},
		{ 
			"title": "🥧 Hearty Helpings", 
			"description": "The sweet spot — 20 to 30 minutes", 
			"games": ["sushi_go", "dutch_blitz", "mamma_mia", "cafe_chaos", "bears_vs_babies", "unstable_unicorns", "hanabi", "faraway", "big_sur", "dominoes", "yamma", "quoridor"] 
		},
		{ 
			"title": "🍰 Dessert Games", 
			"description": "Light strategy with a creative twist", 
			"games": ["canvas", "project_l", "monad", "patchwork", "sagrada", "between_two_cities", "transamerica", "forbidden_island", "splendor", "hive_pocket", "orlog", "gwent"] 
		},
		{ 
			"title": "🍷 Connoisseur's Corner", 
			"description": "For the refined board game palate", 
			"games": ["modern_art", "carcassonne", "tiny_towns", "monkey_palace", "photosynthesis", "elfenroads", "tiny_epic_dinos", "isle_of_cats"] 
		},
		{ 
			"title": "🔥 All-Night Specials", 
			"description": "Clear your schedule", 
			"games": ["heat", "betrayal", "1961"] 
		},
		{ 
			"title": "🐉 Epic Quests", 
			"description": "Social deduction sagas", 
			"games": ["avalon", "one_night_werewolf"] 
		}
	],
	"games": {
		"modern_art": {
			"name": "Modern Art",
			"time": "45 min",
			"desc": "Auction off paintings and manipulate the art market. Capitalism as a card game.",
			"players": [3, 5],
			"ideal": [4, 5],
			"tags": [TAGS.AUCTION, TAGS.STRATEGY, TAGS.CARD]
		},
		"project_l": {
			"name": "Project L",
			"time": "30 min",
			"desc": "Tetris meets engine building. Fit puzzle pieces, earn points, feel clever.",
			"players": [1, 4],
			"ideal": [2, 4],
			"tags": [TAGS.PUZZLE, TAGS.ENGINE, TAGS.STRATEGY]
		},
		"monad": {
			"name": "Monad",
			"time": "30 min",
			"desc": "Dice-drafting adventure through parallel worlds. Roll, pick, conquer.",
			"players": [1, 4],
			"ideal": [2, 3],
			"tags": [TAGS.STRATEGY, TAGS.PUZZLE]
		},
		"canvas": {
			"name": "Canvas",
			"time": "30 min",
			"desc": "Layer transparent cards to paint a masterpiece. Art school without the debt.",
			"players": [1, 5],
			"ideal": [3, 4],
			"tags": [TAGS.CREATIVE, TAGS.CARD, TAGS.FAMILY]
		},
		"heat": {
			"name": "Heat: Pedal to the Metal",
			"time": "60 min",
			"desc": "White-knuckle Formula 1 racing. Manage your engine or burn out trying.",
			"players": [1, 6],
			"ideal": [3, 5],
			"tags": [TAGS.RACING, TAGS.STRATEGY, TAGS.CARD]
		},
		"1961": {
			"name": "1961",
			"time": "90 min",
			"desc": "Kennedy vs Nixon. Campaign, debate, and swing the electoral college.",
			"players": [2, 2],
			"ideal": [2, 2],
			"tags": [TAGS.STRATEGY, TAGS.TWO_PLAYER, TAGS.CARD]
		},
		"between_two_cities": {
			"name": "Between Two Cities",
			"time": "25 min",
			"desc": "Build cities with your neighbors. Your worst city is your score. Cooperate wisely.",
			"players": [1, 7],
			"ideal": [4, 6],
			"tags": [TAGS.TILE, TAGS.STRATEGY, TAGS.FAMILY]
		},
		"mamma_mia": { 
			"name": "Mamma Mia!", 
			"time": "30 min", 
			"desc": "Stack pizza ingredients and hope your memory doesn't betray you.", 
			"players": [2, 5], 
			"ideal": [3, 4], 
			"tags": [TAGS.CARD, TAGS.FAMILY, TAGS.PARTY] 
		},
		"love_letter": { 
			"name": "Love Letter", 
			"time": "20 min", 
			"desc": "One card in hand, one card drawn. Deduce, bluff, and deliver your letter.", 
			"players": [2, 6], 
			"ideal": [3, 4], 
			"tags": [TAGS.CARD, TAGS.BLUFFING, TAGS.DEDUCTION] 
		},
		"exploding_kittens": { 
			"name": "Exploding Kittens", 
			"time": "15 min", 
			"desc": "Don't draw the exploding kitten. Defuse it or redirect it. Meow.", 
			"players": [2, 5], 
			"ideal": [3, 5], 
			"tags": [TAGS.CARD, TAGS.PARTY, TAGS.FAMILY] 
		},
		"pandemic": { 
			"name": "Pandemic", 
			"time": "60 min", 
			"desc": "Save the world together. Or lose together. No pressure.", 
			"players": [2, 4], 
			"ideal": [3, 4], 
			"tags": [TAGS.COOP, TAGS.STRATEGY] 
		},
		"orlog": { 
			"name": "Orlog", 
			"time": "30 min", 
			"desc": "Viking dice duels straight from Assassin's Creed. Favor of the gods included.", 
			"players": [2, 2], 
			"ideal": [2, 2], 
			"tags": [TAGS.TWO_PLAYER, TAGS.STRATEGY] 
		},
		"cafe_chaos": { 
			"name": "Cafe Chaos", 
			"time": "20 min", 
			"desc": "Serve customers, steal orders, cause caffeinated mayhem.", 
			"players": [2, 5], 
			"ideal": [3, 4], 
			"tags": [TAGS.CARD, TAGS.PARTY, TAGS.FAMILY] 
		},
		"cant_catch_harry": { 
			"name": "Can't Catch Harry",
			"time": "15 min", 
			"desc": "One player hides under cups. Everyone else tries to smash them. Chaotic.", 
			"players": [3, 8], 
			"ideal": [4, 6], 
			"tags": [TAGS.DEXTERITY, TAGS.PARTY] 
		},
		"taboo": { 
			"name": "Taboo", 
			"time": "30 min", 
			"desc": "Describe without the obvious words. Harder than it sounds.", 
			"players": [4, 10], 
			"ideal": [6, 8], 
			"tags": [TAGS.PARTY, TAGS.WORD, TAGS.TEAM] 
		},
		"throw_throw_burrito": { 
			"name": "Throw Throw Burrito", 
			"time": "15 min", 
			"desc": "Collect cards. Dodge burritos. Yes, actual throwing is involved.", 
			"players": [2, 6], 
			"ideal": [4, 6], 
			"tags": [TAGS.PARTY, TAGS.DEXTERITY, TAGS.CARD] 
		},
		"quoridor": { 
			"name": "Quoridor", 
			"time": "20 min", 
			"desc": "Race your pawn across the board while walling off your opponent.", 
			"players": [2, 4], 
			"ideal": [2, 2], 
			"tags": [TAGS.STRATEGY, TAGS.TWO_PLAYER] 
		},
		"sushi_go": { 
			"name": "Sushi Go!", 
			"time": "15 min", 
			"desc": "Draft the tastiest sushi combo. Pudding is always worth hoarding.", 
			"players": [2, 5], 
			"ideal": [3, 5], 
			"tags": [TAGS.CARD, TAGS.FAMILY, TAGS.STRATEGY] 
		},
		"tinderblox": { 
			"name": "Tinderblox", 
			"time": "10 min", 
			"desc": "Stack tiny wooden blocks with tweezers. One wrong move and it all burns.", 
			"players": [2, 6], 
			"ideal": [3, 5], 
			"tags": [TAGS.DEXTERITY, TAGS.PARTY, TAGS.FAMILY] 
		},
		"transamerica": { 
			"name": "TransAmerica", 
			"time": "30 min", 
			"desc": "Connect cities by rail across the US. Simple rules, sneaky strategy.", 
			"players": [2, 6], 
			"ideal": [4, 6], 
			"tags": [TAGS.ROUTE, TAGS.FAMILY, TAGS.STRATEGY] 
		},
		"forbidden_island": { 
			"name": "Forbidden Island", 
			"time": "30 min", 
			"desc": "Grab the treasures before the island sinks. Teamwork or swim.", 
			"players": [2, 4], 
			"ideal": [3, 4], 
			"tags": [TAGS.COOP, TAGS.FAMILY, TAGS.STRATEGY] 
		},
		"bears_vs_babies": { 
			"name": "Bears vs Babies", 
			"time": "20 min", 
			"desc": "Build magnificent bears to eat horrible babies. Don't ask why.", 
			"players": [2, 5], 
			"ideal": [3, 5], 
			"tags": [TAGS.CARD, TAGS.PARTY, TAGS.FAMILY] 
		},
		"dead_mans_draw": { 
			"name": "Dead Man's Draw", 
			"time": "15 min", 
			"desc": "Push your luck as a pirate. Draw cards, but get greedy and lose it all.", 
			"players": [2, 4], 
			"ideal": [2, 4], 
			"tags": [TAGS.CARD, TAGS.STRATEGY, TAGS.FAMILY] 
		},
		"photosynthesis": { 
			"name": "Photosynthesis", 
			"time": "60 min", 
			"desc": "Grow trees, cast shade on rivals, harvest sunlight. Ruthlessly botanical.", 
			"players": [2, 4], 
			"ideal": [3, 4], 
			"tags": [TAGS.STRATEGY, TAGS.FAMILY] 
		},
		"elfenroads": { 
			"name": "Elfenroads", 
			"time": "60 min", 
			"desc": "Travel across a fantasy land using dragons, rafts, and giant pigs.", 
			"players": [2, 6], 
			"ideal": [4, 5], 
			"tags": [TAGS.ROUTE, TAGS.STRATEGY, TAGS.FAMILY] 
		},
		"tiny_towns": { 
			"name": "Tiny Towns", 
			"time": "45 min", 
			"desc": "Place resources on a grid to build a tiny town. Space runs out fast.", 
			"players": [1, 6], 
			"ideal": [3, 4], 
			"tags": [TAGS.PUZZLE, TAGS.STRATEGY, TAGS.FAMILY] 
		},
		"faraway": { 
			"name": "Faraway", 
			"time": "25 min", 
			"desc": "Explore distant lands and score in reverse. What you play first matters last.", 
			"players": [2, 6], 
			"ideal": [3, 4], 
			"tags": [TAGS.CARD, TAGS.STRATEGY] 
		},
		"yamma": { 
			"name": "Yamma", 
			"time": "20 min", 
			"desc": "Dice-chucking Yahtzee-style fun with a modern twist.", 
			"players": [1, 4], 
			"ideal": [2, 4], 
			"tags": [TAGS.FAMILY, TAGS.CLASSIC] 
		},
		"big_sur": { 
			"name": "Big Sur", 
			"time": "30 min", 
			"desc": "Road trip down the California coast. Collect views, dodge traffic.", 
			"players": [2, 6], 
			"ideal": [3, 4], 
			"tags": [TAGS.CARD, TAGS.FAMILY] 
		},
		"one_night_werewolf": { 
			"name": "One Night Werewolf", 
			"time": "10 min", 
			"desc": "Ten minutes of lying to your friends' faces. Who's the werewolf?", 
			"players": [3, 10], 
			"ideal": [5, 8], 
			"tags": [TAGS.SOCIAL, TAGS.BLUFFING, TAGS.PARTY] 
		},
		"flip_7": { 
			"name": "Flip 7", 
			"time": "10 min", 
			"desc": "Flip cards and push your luck. Hit 7 or bust. Deceptively addictive.", 
			"players": [2, 6], 
			"ideal": [3, 5], 
			"tags": [TAGS.CARD, TAGS.PARTY, TAGS.FAMILY] 
		},
		"camel_up": { 
			"name": "Camel Up", 
			"time": "30 min", 
			"desc": "Bet on camel races where camels stack on each other. Pure chaos.", 
			"players": [3, 8], 
			"ideal": [5, 7], 
			"tags": [TAGS.RACING, TAGS.PARTY, TAGS.FAMILY] 
		},
		"patchwork": { 
			"name": "Patchwork", 
			"time": "30 min", 
			"desc": "Competitive quilting. Fill your board, manage buttons, stitch to win.", 
			"players": [2, 2], 
			"ideal": [2, 2], 
			"tags": [TAGS.TWO_PLAYER, TAGS.PUZZLE, TAGS.STRATEGY] 
		},
		"wavelength": { 
			"name": "Wavelength", 
			"time": "30 min", 
			"desc": "Guess where your teammate's clue lands on a spectrum. Mind meld required.", 
			"players": [2, 12], 
			"ideal": [6, 10], 
			"tags": [TAGS.PARTY, TAGS.TEAM, TAGS.CREATIVE]
		},
		"monkey_palace": { 
			"name": "Monkey Palace", 
			"time": "45 min", 
			"desc": "Build a palace for monkeys using tiles. Architecturally bananas.", 
			"players": [2, 4], 
			"ideal": [3, 4], 
			"tags": [TAGS.TILE, TAGS.STRATEGY, TAGS.FAMILY] 
		},
		"splendor": { 
			"name": "Splendor", 
			"time": "30 min", 
			"desc": "Gem trading for aspiring Renaissance merchants.", 
			"players": [2, 4], 
			"ideal": [3, 4], 
			"tags": [TAGS.STRATEGY, TAGS.ENGINE] 
		},
		"poetry_neanderthals": { 
			"name": "Poetry for Neanderthals", 
			"time": "15 min", 
			"desc": "Explain words using only one syllable. Get bonked if you mess up.", 
			"players": [2, 12], 
			"ideal": [4, 8], 
			"tags": [TAGS.PARTY, TAGS.WORD, TAGS.TEAM] 
		},
		"dutch_blitz": { 
			"name": "Dutch Blitz", 
			"time": "15 min", 
			"desc": "Speed card game. No turns. Just chaos and fast hands.", 
			"players": [2, 4], 
			"ideal": [3, 4], 
			"tags": [TAGS.CARD, TAGS.DEXTERITY, TAGS.FAMILY] 
		},
		"hive_pocket": { 
			"name": "Hive Pocket", 
			"time": "20 min", 
			"desc": "Chess meets insects. Surround the queen bee. No board needed.", 
			"players": [2, 2], 
			"ideal": [2, 2], 
			"tags": [TAGS.TWO_PLAYER, TAGS.STRATEGY] 
		},
		"zombie_kittens": { 
			"name": "Zombie Kittens", 
			"time": "15 min", 
			"desc": "Exploding Kittens but the dead come back. Nobody stays eliminated.", 
			"players": [2, 5], 
			"ideal": [3, 5], 
			"tags": [TAGS.CARD, TAGS.PARTY, TAGS.FAMILY] 
		},
		"sagrada": { 
			"name": "Sagrada", 
			"time": "40 min", 
			"desc": "Draft dice to build stained glass windows. Beautiful and brain-burning.", 
			"players": [1, 4], 
			"ideal": [2, 3], 
			"tags": [TAGS.PUZZLE, TAGS.STRATEGY] 
		},
		"carcassonne": { 
			"name": "Carcassonne", 
			"time": "45 min", 
			"desc": "Lay tiles, claim cities. Medieval empire building.", 
			"players": [2, 5], 
			"ideal": [2, 3], 
			"tags": [TAGS.STRATEGY, TAGS.TILE, TAGS.FAMILY] 
		},
		"unstable_unicorns": { 
			"name": "Unstable Unicorns", 
			"time": "30 min", 
			"desc": "Build a unicorn army. Destroy everyone else's. Friendship optional.", 
			"players": [2, 8], 
			"ideal": [4, 6], 
			"tags": [TAGS.CARD, TAGS.STRATEGY, TAGS.PARTY] 
		},
		"set": { 
			"name": "SET", 
			"time": "20 min", 
			"desc": "Spot patterns of three. Sounds easy until your brain short-circuits.", 
			"players": [1, 20], 
			"ideal": [2, 6], 
			"tags": [TAGS.PUZZLE, TAGS.FAMILY] 
		},
		"priorities": { 
			"name": "Priorities", 
			"time": "20 min", 
			"desc": "Rank absurd scenarios and guess how your friends ranked them.", 
			"players": [3, 8], 
			"ideal": [4, 7], 
			"tags": [TAGS.PARTY, TAGS.SOCIAL] 
		},
 		"coup": { 
			"name": "Coup", 
			"time": "15 min", 
			"desc": "Bluff, steal, assassinate. Last one standing wins. Trust no one.", 
			"players": [2, 6], 
			"ideal": [4, 6], 
			"tags": [TAGS.BLUFFING, TAGS.SOCIAL, TAGS.CARD] 
		},
		"monsdrawsity": { 
			"name": "MonsDRAWsity", 
			"time": "25 min", 
			"desc": "One person sees a monster. Everyone else draws it from description. Hilarity ensues.", 
			"players": [3, 8], 
			"ideal": [4, 6], 
			"tags": [TAGS.PARTY, TAGS.CREATIVE, TAGS.TEAM] 
		},
		"nasty_things": { 
			"name": "The Game of Nasty Things", 
			"time": "30 min", 
			"desc": "Write anonymous answers to awful prompts. Guess who wrote what.", 
			"players": [4, 10], 
			"ideal": [6, 8], 
			"tags": [TAGS.PARTY, TAGS.CREATIVE] 
		},
		"cards_against": { 
			"name": "Cards Against Humanity", 
			"time": "30 min", 
			"desc": "Fill in the blank with the most horrible answer. You've been warned.", 
			"players": [4, 20], 
			"ideal": [5, 8], 
			"tags": [TAGS.PARTY, TAGS.CARD] 
		},
		"go_f_yourself": { 
			"name": "Go F**k Yourself", 
			"time": "20 min", 
			"desc": "Outbid, outbluff, and out-insult your friends. Delightfully rude.", 
			"players": [3, 6], 
			"ideal": [4, 6], 
			"tags": [TAGS.PARTY, TAGS.BLUFFING, TAGS.CARD] 
		},
 		"power_hungry_pets": { 
			"name": "Power Hungry Pets", 
			"time": "15 min", 
			"desc": "Pets battle for world domination. Cute art, cutthroat gameplay.", 
			"players": [2, 6], 
			"ideal": [3, 5], 
			"tags": [TAGS.CARD, TAGS.PARTY, TAGS.FAMILY] 
		},
		"happy_salmon": { 
			"name": "Happy Salmon", 
			"time": "5 min", 
			"desc": "Shout, high-five, and flop like a fish. The fastest game you'll ever play.", 
			"players": [3, 8], 
			"ideal": [6, 8], 
			"tags": [TAGS.PARTY, TAGS.DEXTERITY] 
		},
		"avalon": { 
			"name": "Avalon", 
			"time": "30 min", 
			"desc": "Knights of the Round Table with hidden traitors. Merlin knows all.", 
			"players": [5, 10], 
			"ideal": [7, 9], 
			"tags": [TAGS.SOCIAL, TAGS.BLUFFING, TAGS.TEAM] 
		},
		"dominoes": { 
			"name": "Dominoes", 
			"time": "20 min", 
			"desc": "Match the dots. Simple, timeless, and endlessly replayable.", 
			"players": [2, 4], 
			"ideal": [2, 4], 
			"tags": [TAGS.CLASSIC, TAGS.FAMILY] 
		},
		"hanabi": { 
			"name": "Hanabi", 
			"time": "25 min", 
			"desc": "Build fireworks together, but you can't see your own cards. Trust your team.", 
			"players": [2, 5], 
			"ideal": [3, 4], 
			"tags": [TAGS.COOP, TAGS.CARD, TAGS.STRATEGY] 
		},
		"tiny_epic_dinos": { 
			"name": "Tiny Epic Dinosaurs", 
			"time": "45 min", 
			"desc": "Ranch dinosaurs. Breed them. Don't let them escape. Jurassic Park in a box.", 
			"players": [1, 4], 
			"ideal": [2, 3], 
			"tags": [TAGS.STRATEGY, TAGS.ENGINE] 
		},
		"isle_of_cats": { 
			"name": "The Isle of Cats", 
			"time": "60 min", 
			"desc": "Rescue cats by fitting them Tetris-style onto your boat. Every cat counts.", 
			"players": [1, 4], 
			"ideal": [2, 4], 
			"tags": [TAGS.PUZZLE, TAGS.CARD, TAGS.FAMILY] 
		},
		"betrayal": { 
			"name": "Betrayal at House on the Hill", 
			"time": "60 min", 
			"desc": "Explore a haunted house. One of you is the traitor.", 
			"players": [3, 6], 
			"ideal": [4, 5], 
			"tags": [TAGS.COOP, TAGS.STRATEGY, TAGS.HORROR] 
		},
		"gwent": { 
			"name": "Gwent", 
			"time": "30 min", 
			"desc": "Three rounds of bluffing and card play from The Witcher universe.", 
			"players": [2, 2], 
			"ideal": [2, 2], 
			"tags": [TAGS.TWO_PLAYER, TAGS.STRATEGY, TAGS.CARD, TAGS.BLUFFING] 
		}
	}
};
