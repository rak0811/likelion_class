let restart = document.querySelector('.restart-button')
let score = document.querySelector('.score')
let choices = document.querySelectorAll('.choice')
let modal = document.querySelector('.modal')
let result = document.querySelector('.modal-content')
let scoreBoard = {
    player: 0,
    computer: 0 
    
}

for(let i = 0; i < choices.length; i++) {
    choices[i].addEventListener('click', play);    
}

function play(event) {
    let playerChoice = event.target.id;
    let computerChoice = getComputerChoice();
    let winner = getWinner (playerChoice, computerChoice);
    
    console.log(playerChoice, computerChoice, winner)

    showResult(winner, computerChoice)
}

function getComputerChoice() {
    let random = Math.random(); 

    if(random <= 0.333){
        return 'rock'
    } else if (random <= 0.666) {
        return 'scissors'
    } else {
        return 'paper'
    }
        
}

function getWinner (player,computer) {
    if(player === computer) {
        return 'draw';
    } else if (player === 'rock') {
            if (computer === 'scissors'){
                return 'player'
    }       else if (computer === 'paper'){
                return 'computer'

    }else if (player === 'scissors') {
            if (computer === 'paper')
                return 'player'
        }else if (computer === 'rock'){
                return 'computer'    

    }else if (player === 'paper') 
            if (computer === 'rock'){
                return 'player'
        }else if (computer === 'scissors'){
                return 'computer'
        }
    }
}

function showResult(winner, computerChoice) {
    modal.style.display = 'block'

    if(winner === 'player') {
        scoreBoard.player = scoreBoard.player + 1;

        result.innerHTML = `
            <h1>You Win!</h1>
            <i id="rock" class="choice fa fa-hand-${computerChoice}-o fa-5x"></i>
            <p>Computer chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>
        `
    } else if (winner === 'computer') {
        scoreBoard.computer = scoreBoard.computer + 1;

        result.innerHTML = `
            <h1>You Lose!</h1>
            <i id="rock" class="choice fa fa-hand-${computerChoice}-o fa-5x"></i>
            <p>Computer chose <strong>${computerChoice.toUpperCase() + computerChoice.slice(1)}</strong></p>
        `
    } else {
        result.innerHTML = `
            <h1>Draw!</h1>
            <i id="rock" class="choice fa fa-hand-${computerChoice}-o fa-5x"></i>
            <p>Computer chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>
        `
    }

    score.innerHTML = `
    <p class="score-player">player: ${scoreBoard.player}</p>
    <p class="score-computer">Computer: ${scoreBoard.computer}</p>
    `
}

window.addEventListener('click', closeModal);

function closeModal(event) {
    if(event.target === modal){
        modal.style.display = 'none'
    }
}

restart.addEventListener('click', restartGame)

function restartGame() {
    scoreBoard.player = 0;
    scoreBoard.computer = 0;

    score.innerHTML = `
    <p class="score-player">player: ${scoreBoard.player}</p>
    <p class="score-computer">Computer: ${scoreBoard.computer}</p>
    `

    modal.style.display = 'block'
    result.innerHTML = `
        <h1>Restart Game!</h1>
    `
}
