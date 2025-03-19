document.addEventListener('DOMContentLoaded', () => {
    const playLink = document.querySelector('.play');
    const difficultyRadios = document.querySelectorAll('input[name="difficulty"]');

    function updateDifficulty() {
        const selected = document.querySelector('input[name="difficulty"]:checked').value.toLowerCase();
        playLink.href = `game.html?difficulty=${selected}`;
    }

    difficultyRadios.forEach(radio => {
        radio.addEventListener('change', updateDifficulty);
    });
    
    updateDifficulty();
});