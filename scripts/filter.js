class GameFilter {
    constructor(games) {
        this.games = games;
    }

    matchesPlayers(game, playerCount) {
        return !playerCount || (playerCount >= game.players[0] && playerCount <= game.players[1]);
    }

    matchesTags(game, tags) {
        return !tags.length || tags.every(tag => game.tags && game.tags.includes(tag));
    }

    filter(gameId, { playerCount, tags }) {
        const game = this.games[gameId];
        console.log(`Filtering game ${gameId}:`, game, { playerCount, tags });
        if (!game) return false;
        return this.matchesPlayers(game, playerCount) && this.matchesTags(game, tags);
    }

    getAllTags() {
        const tagSet = new Set();
        for (const game of Object.values(this.games)) {
            if (game.tags) {
                game.tags.forEach(tag => tagSet.add(tag));
            }
        }
        return [...tagSet].sort();
    }
}
