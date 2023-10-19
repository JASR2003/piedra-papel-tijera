const playerPoints = document.getElementById('player-points');
const machinePoints = document.getElementById('machine-points');

const stone = document.getElementById('stone');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

const roundNum = document.getElementById('round');

const playerSelec = document.getElementById('playerSelec');
const machineSelec = document.getElementById('machineSelec');
const result = document.getElementById('result');

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}

let playerPoi = 0;
let machinePoi = 0;

function startGame(numberSelection) {
    let playerSelection = numberSelection;
    let machineSelection = getRandomNumber(1,3);

    if (
        (playerSelection === 1 && machineSelection === 3) ||
        (playerSelection === 3 && machineSelection === 2) ||
        (playerSelection === 2 && machineSelection === 1)
    ) {
        userWin();
    } else if (
        (machineSelection === 1 && playerSelection === 3) ||
        (machineSelection === 3 && playerSelection === 2) ||
        (machineSelection === 2 && playerSelection === 1)
    ) {
        machineWin();
    } else {
        draw();
    }
}