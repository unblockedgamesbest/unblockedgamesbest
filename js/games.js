const games = [
    { name: "Crazy Cattle 3d", image: "image/crazycattle.png", link: "/crazycattle3d.html"},
    { name: "Speed Stars", image: "image/speedstars.png", link: "/speedstars.html"},
    { name: "Wheelie Bike", image: "image/wheeliebike.png", link: "/wheeliebike.html"},
    { name: "Drift Hunters", image: "image/drifthunters.png", link: "/drifthunters.html"},
    { name: "Italian Brainrot Clicker", image: "image/italianbrainrot.png", link: "/italianbrainrot.html"},
    { name: "OvO", image: "image/ovo.png", link: "/ovo.html"},
];

/*createGameCard*/

function createGameCard(game) {
    return `
        <div class="game-card">
            <img src="${game.image}" alt="${game.name}">
            <div class="game-info">
                <h3>${game.name}</h3>
                <a href="${game.link}" class="play-button">Play</a>
            </div>
        </div>
    `;
}

/*renderGames*/

function renderGames() {
    gameGrid.innerHTML = games.map(createGameCard).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    renderGames();
});