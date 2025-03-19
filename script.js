const cards = document.querySelectorAll('.card');
let movesDisplay = document.querySelector('.moves');
let restartBtn = document.getElementById('restart');
let moves = 0;
let winCount = 0;
let canFlip = true;
let firstCard, secondCard;
let difficulty = "easy";

const images = [
    'card1.png', 'card1.png',
    'card2.png', 'card2.png',
    'card3.png', 'card3.png',
    'card4.png', 'card4.png',
    'card5.png', 'card5.png',
    'card6.png', 'card6.png'
];

function initializeGame() {
    difficulty = (new URLSearchParams(window.location.search)).get('difficulty') || 'easy';
    
    moves = 0;
    winCount = 0;
    movesDisplay.textContent = `Moves: ${moves}`;
    canFlip = true;
    
    cards.forEach(card => {
        card.classList.remove('toggled');
        card.addEventListener('click', flipCard);
    });
    
    const shuffledImages = [...images].sort(() => Math.random() - 0.5);
    cards.forEach((card, index) => {
        const img = card.querySelector('.cardi');
        img.src = shuffledImages[index];
    });

    showAllCards();
}

function showAllCards() {
    let revealDuration = 3000;
    
    if (difficulty === 'medium') {
        revealDuration = 1000;
    } else if (difficulty === 'hard') {
        revealDuration = 0;
    }

    if (revealDuration > 0) {
        cards.forEach(card => card.classList.add('toggled'));
        canFlip = false;
        
        setTimeout(() => {
            cards.forEach(card => card.classList.remove('toggled'));
            canFlip = true;
        }, revealDuration);
    } else {
        canFlip = true;
    }
}

function checkMatch() {
    const isMatch = firstCard.querySelector('.cardi').src === 
                    secondCard.querySelector('.cardi').src;

    moves++;
    movesDisplay.textContent = `Moves: ${moves}`;

    if (isMatch) {
        winCount++;
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);
        [firstCard, secondCard] = [null, null];
        
        if (winCount === 6) {
            setTimeout(() => {
                alert(`Congratulations! You won in ${moves} moves!`);
                initializeGame();
            }, 500);
        } else {
            canFlip = true;
        }
    } else {
        setTimeout(() => {
            firstCard.classList.remove('toggled');
            secondCard.classList.remove('toggled');
            [firstCard, secondCard] = [null, null];
            canFlip = true;
        }, 1000);
    }
}

function flipCard() {
    if (!canFlip || this === firstCard || this.classList.contains('toggled')) return;

    this.classList.add('toggled');

    if (!firstCard) {
        firstCard = this;
        return;
    }

    secondCard = this;
    canFlip = false;
    checkMatch();
}

restartBtn.addEventListener('click', initializeGame);
initializeGame();