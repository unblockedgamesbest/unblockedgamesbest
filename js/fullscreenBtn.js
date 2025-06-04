document.querySelector('.fullscreen-button').addEventListener('click', function() {
    const gameWrapper = document.querySelector('.game-wrapper');
    
    if (!document.fullscreenElement) {
        if (gameWrapper.requestFullscreen) {
            gameWrapper.requestFullscreen();
        } else if (gameWrapper.webkitRequestFullscreen) {
            gameWrapper.webkitRequestFullscreen();
        } else if (gameWrapper.msRequestFullscreen) {
            gameWrapper.msRequestFullscreen();
        }
    }
});