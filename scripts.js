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