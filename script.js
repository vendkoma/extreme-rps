/* -------------------------------------------- */
/*            NAV BAR FUNCTIONALITY             */
/* -------------------------------------------- */

// Nav bar links - probably could just be an array
let homeLink = document.getElementById('home-link');
let playLink = document.getElementById('play-link');
let historyLink = document.getElementById('history-link');
let aboutLink = document.getElementById('about-link');
let contactLink = document.getElementById('contact-link');

// get an HTMLCollection of all items with class 'page' (the main page panels), then convert them to an array so they can be modified
let pages = Array.from(document.getElementsByClassName('page'));

// add onClick functionality to nav bar links
homeLink.addEventListener('click', (event) => {
    showPage(event, 0);
});
playLink.addEventListener('click', (event) => {
    showPage(event, 1);
});
historyLink.addEventListener('click', (event) => {
    showPage(event, 2);
});
aboutLink.addEventListener('click', (event) => {
    showPage(event, 3);
});
contactLink.addEventListener('click', (event) => {
    showPage(event, 4);
});

// iterate through each page and hide them
function hidePages () {
    pages.forEach(page => {
        page.classList.remove('show');    // removes the show class from each page element
        page.classList.add('hide');       // adds the hide class to each page element
    });
}

// functions to display only the page for the clicked link
// these could be combined into one function taking a page parameter to determine which to show
function showPage (event, page) {
    hidePages();

    pages[page].classList.add('show');
}



/* -------------------------------------------- */
/*                    GAME                      */
/* -------------------------------------------- */

// Rock, Paper, Scissors game buttons
let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
let reset = document.querySelector('.game__reset');

// paragraph texts for displaying game outcome and updated stats
let resultMessage = document.querySelector('.game__result');
let winsMessage = document.querySelector('.game__wins');
let drawsMessage = document.querySelector('.game__draws');
let lossesMessage = document.querySelector('.game__losses');

// game tallies
let wins = 0;
let draws = 0;
let losses = 0;


rock.addEventListener('click', (event) => {
    playGame(event, 0);
});
paper.addEventListener('click', (event) => {
    playGame(event, 1);
});
scissors.addEventListener('click', (event) => {
    playGame(event, 2);
});
reset.addEventListener('click', (event) => {
    resetStats(event);
});


function playGame (event, playerChoice) {

    let computerChoice = Math.floor(Math.random() * 3);

    if(playerChoice === 0) {
        if(computerChoice === 0) {
            draws++;
            resultMessage.innerHTML = "You chose <strong>rock</strong>. The computer chose <strong>rock</strong>. It's a draw!";
        } else if(computerChoice === 1) {
            losses++;
            resultMessage.innerHTML = "You chose <strong>rock</strong>. The computer chose <strong>paper</strong>. You lose!";
        } else if(computerChoice === 2) {
            wins++;
            resultMessage.innerHTML = "You chose <strong>rock</strong>. The computer chose <strong>scissors</strong>. You win!";
        }
    } else if(playerChoice === 1) {
        if(computerChoice === 0) {
            wins++;
            resultMessage.innerHTML = "You chose <strong>paper</strong>. The computer chose <strong>rock</strong>. You win!"
        }
        if(computerChoice === 1) {
            draws++;
            resultMessage.innerHTML = "You chose <strong>paper</strong>. The computer chose <strong>paper</strong>. It's a draw!"
        }
        if(computerChoice === 2) {
            losses++;
            resultMessage.innerHTML = "You chose <strong>paper</strong>. The computer chose <strong>scissors</strong>. You lose!"
        }
    } else if(playerChoice === 2) {
        if(computerChoice === 0) {
            losses++;
            resultMessage.innerHTML = "You chose <strong>scissors</strong>. The computer chose <strong>rock</strong>. You lose!"
        }
        if(computerChoice === 1) {
            wins++;
            resultMessage.innerHTML = "You chose <strong>scissors</strong>. The computer chose <strong>paper</strong>. You win!"
        }
        if(computerChoice === 2) {
            draws++;
            resultMessage.innerHTML = "You chose <strong>scissors</strong>. The computer chose <strong>scissors</strong>. It's a draw!"
        }
    }

    renderStats();
}

function renderStats () {
    winsMessage.innerHTML = "<strong>Victories:</strong> " + wins;
    drawsMessage.innerHTML = "<strong>Draws:</strong> " + draws;
    lossesMessage.innerHTML = "<strong>Defeats:</strong> " + losses;
}

function resetStats () {
    if(wins > 0 || draws > 0 || losses > 0) {
        resultMessage.innerHTML = "Try your luck again?";
        wins = 0;
        draws = 0;
        losses = 0;
    }

    renderStats();
}