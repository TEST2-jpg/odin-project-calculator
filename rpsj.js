
function computerPlay() {
    randomnum = Math.floor(Math.random()*3)+1
    if (randomnum === 1) {
        randomnum = "rock";
    }

    else if (randomnum === 2) {
        randomnum = "paper"
    }

    else {
        randomnum = "scissors";
    }
    return randomnum;
}
computerPlay();
console.log(randomnum);

function playRound (playerSelection, randomnum) {
    while (computerScore == 5 || playerScore == 5 ) {
        if (computerScore > playerScore) {
            const display = document.querySelector('.display');
            const content = document.createElement('div');
            content.textContent = 'Computer Wins!';
            content.setAttribute('style', 'background: pink; border-style: solid');
            display.appendChild(content);
            computerScore = 0;
            playerScore = 0;
        }
        else {
            const display = document.querySelector('.display');
            const content = document.createElement('div');
            content.textContent = 'Human Wins!';
            content.setAttribute('style', 'background: pink; border-style: solid');
            display.appendChild(content);
            computerScore = 0;
            playerScore = 0;
        }
    }
    console.log("Its a tie");
    if (randomnum === "rock" && playerSelection === "scissors") {
        const display = document.querySelector('.display');
        const content = document.createElement('div');
        content.textContent = 'You Lose! Rock beats Scissors';
        display.appendChild(content);
        console.log("You Lose! Rock beats Scissors");

        computerScore += 1;
        const scores = document.createElement('div');
        scores.textContent = `Score: Human-${playerScore} Computer-${computerScore}`;
        display.appendChild(scores);
        return computerScore;
        
    }
    else if (randomnum === "rock" && playerSelection === "paper") {
        const display = document.querySelector('.display');
        const content = document.createElement('div');
        content.textContent = 'You Win! Paper beats rock';
        display.appendChild(content);
        console.log("You Win! Paper beats rock");

        playerScore +=1;
        const scores = document.createElement('div');
        scores.textContent = `Score: Human-${playerScore} Computer-${computerScore}`;
        display.appendChild(scores);
        return playerScore;
    }
    else if (randomnum === "scissors" && playerSelection === "paper") {
        const display = document.querySelector('.display');
        const content = document.createElement('div');
        content.textContent = 'You Lose! Scissors beats Paper';
        display.appendChild(content);
        console.log("You Lose! Scissors beats Paper");

        computerScore +=1;
        const scores = document.createElement('div');
        scores.textContent = `Score: Human-${playerScore} Computer-${computerScore}`;
        display.appendChild(scores);
        return computerScore;
    }
    else if (randomnum === "scissors" && playerSelection === "rock") {
        const display = document.querySelector('.display');
        const content = document.createElement('div');
        content.textContent = 'You Win! Rock beats Scissors';
        display.appendChild(content);
        console.log("You Win! Rock beats Scissors");

        playerScore += 1;
        const scores = document.createElement('div');
        scores.textContent = `Score: Human-${playerScore} Computer-${computerScore}`;
        display.appendChild(scores);
        return playerScore;
    }
    else if (randomnum === "paper" && playerSelection === "rock") {
        const display = document.querySelector('.display');
        const content = document.createElement('div');
        content.textContent = 'You Lose! Paper beats Rock';
        display.appendChild(content);
        console.log("You Lose! Paper beats Rock");   

        computerScore += 1;
        const scores = document.createElement('div');
        scores.textContent = `Score: Human-${playerScore} Computer-${computerScore}`;
        display.appendChild(scores);
        return computerScore;
    }
    else if (randomnum === "paper" && playerSelection === "scissors") {
        const display = document.querySelector('.display');
        const content = document.createElement('div');
        content.textContent = 'You Win! scissors beats paper';
        display.appendChild(content);
        console.log("You Win! scissors beats paper");

        playerScore += 1;
        const scores = document.createElement('div');
        scores.textContent = `Score: Human-${playerScore} Computer-${computerScore}`;
        display.appendChild(scores);
        return playerScore;
    }
    else {
        const display = document.querySelector('.display');
        const content = document.createElement('div');
        content.textContent = 'Its a tie';
        display.appendChild(content);
        console.log("Its a tie");

        const scores = document.createElement('div');
        scores.textContent = `Score: Human-${playerScore} Computer-${computerScore}`;
        display.appendChild(scores);
        return;
    }
}

function game (playRound) {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Rock paper or scissors?')
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
}

let playerScore = 0;
let computerScore = 0;

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => playRound('rock', computerPlay()));

const paper = document.querySelector('#paper') ;
paper.addEventListener('click', () => playRound('paper', computerPlay()));

const scissors = document.querySelector('#scissors') ;
scissors.addEventListener('click', () => playRound('scissors', computerPlay()));

