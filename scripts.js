const playerPoints = document.getElementById('player-points');
const machinePoints = document.getElementById('machine-points');

const stone = document.getElementById('stone');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

const roundText = document.getElementById('roundText');
const roundNum = document.getElementById('round');

const playerSelec = document.getElementById('playerSelec');
const machineSelec = document.getElementById('machineSelec');
const result = document.getElementById('result');

const textUpButtons = document.getElementById('text-middle-main');
const containerButtons = document.getElementById('container-elements');
const btnRefrescar = document.getElementById('btnRefrescar');
const imgTrophy = document.getElementById('imgTrophy');
const sadFace = document.getElementById('sadFace');


const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}

let playerPoi = 0;
let machinePoi = 0;
let roundNumber = 1;
const maxPoints = 5;

function startGame(numberSelection) {
    let playerSelection = numberSelection;
    let machineSelection = getRandomNumber(1,3);
    let playerSelecValue;
    let machineSelecValue;

    if (playerSelection === 1) {
        playerSelecValue = "Piedra"
    } else if (playerSelection === 2) {
        playerSelecValue = "Papel"
    } else if (playerSelection === 3) {
        playerSelecValue = "Tijera"
    }
    if (machineSelection === 1) {
        machineSelecValue = "Piedra"
    } else if (machineSelection === 2) {
        machineSelecValue = "Papel"
    } else if (machineSelection === 3) {
        machineSelecValue = "Tijera"
    }

    if (
        (playerSelection === 1 && machineSelection === 3) ||
        (playerSelection === 3 && machineSelection === 2) ||
        (playerSelection === 2 && machineSelection === 1)
    ) {
        userWin();
        displayText();
    } else if (
        (machineSelection === 1 && playerSelection === 3) ||
        (machineSelection === 3 && playerSelection === 2) ||
        (machineSelection === 2 && playerSelection === 1)
    ) {
        machineWin();
        displayText();
    } else {
        draw();
        displayText();
    }

    if (
        playerPoi >= maxPoints || machinePoi >= maxPoints
    ) {
        gameOver();
        displayText();
    }
    function displayText() {
    playerSelec.innerText = "";
    playerSelec.innerHTML = `Decidiste usar <b>${playerSelecValue}</b>`;
    machineSelec.innerText = "";
    machineSelec.innerHTML = `La máquina decidió usar <b>${machineSelecValue}</b>`;
    }
}

function userWin() {
    playerPoi++;
    playerPoints.innerText = "";
    playerPoints.innerText = playerPoi;
    result.innerText = "";
    result.innerText = "Tú ganaste esta ronda";
    roundNum.innerText = "";
    roundNumber++;
    roundNum.innerText = roundNumber;
    function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
    }

    confetti({
    angle: randomInRange(55, 125),
    spread: randomInRange(50, 70),
    particleCount: randomInRange(50, 100),
    origin: { y: 0.6 }
    });
}
function machineWin() {
    machinePoi++;
    machinePoints.innerText = "";
    machinePoints.innerText = machinePoi;
    result.innerText = "";
    result.innerText = "La máquina te ganó esta ronda";
    roundNum.innerText = "";
    roundNumber++;
    roundNum.innerText = roundNumber;
}
function draw() {
    result.innerText = "";
    result.innerText = "Quedó en empate, nadie suma";
    roundNum.innerText = "";
    roundNumber++;
    roundNum.innerText = roundNumber;
}

function gameOver() {
    if (playerPoi === maxPoints) {
        imgTrophy.style.display = 'block';
        textUpButtons.style.fontWeight = 700;
        textUpButtons.innerText = "¡FELICIDADES! Ganaste la partida";
    let duration = 15 * 1000;
    let animationEnd = Date.now() + duration;
    let defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
    }

    let interval = setInterval(function() {
    let timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
        return clearInterval(interval);
    }

    let particleCount = 50 * (timeLeft / duration);
    // since particles fall down, start a bit higher than random
    confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
    confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);
    } else {
        sadFace.style.display = 'block';
        textUpButtons.style.fontWeight = 700;
        textUpButtons.innerText = "Lástima, será en otra oportunidad";
    }
    containerButtons.style.display = "none";
    playerSelec.style.display = "none";
    machineSelec.style.display = "none";
    result.style.display = "none";
    roundText.style.display = "none";
    btnRefrescar.style.display = "block";
}

function reiniciarPartida() {
    location.reload();
}