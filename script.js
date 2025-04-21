// Variables for the DOM elements
const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game-container");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const settingsBtn = document.getElementById("settings-btn");
const difficultySelect = document.getElementById("difficulty");

// Array
const words = [
  "dependent",
  "dog",
  "superficial",
  "admit",
  "juice",
  "javascript",
  "developer",
  "airplane",
  "great",
  "fun",
  "manipulate",
  "cat",
  "transition",
  "school",
  "computer",
  "programming",
  "drag",
  "loving",
  "north",
];

//Initializing word
let randomWord;

//Initializing score
let score = 0;

//Initializing time
let time = 10;

//neccessary functions
function addWordToDOM() {
  let randomNr = Math.floor(Math.random() * 19);
  randomWord = words[randomNr];
  return randomWord;
};

function updateScore() {
  score++;
  return score;
};

function gameOver() {
    endgameEl.style.display="unset";
    //display the end-game-container 
}


const myInterval = setInterval(updateTime, 1000);

function updateTime() {
  time = time - 1;
  if (time <= 0) {
    clearInterval(myInterval);
    gameOver();
    return;
  }
  timeEl.textContent = time;
};

//give a first word to type and start timer
randomWord = addWordToDOM();
word.textContent = randomWord;

updateTime();

const input = document.querySelector("input");

//if you type correctly, then: 
input.addEventListener("input", function(e) {
  if (this.value === randomWord) {
    updateScore();
    scoreEl.textContent = score;
    time = time + 5;
    
    word.textContent = addWordToDOM();
    this.value = "";
    }
});

/*egna antackningar
eventlisteners.mp4 
ca 7:00 fånga event (e)
10:00 - 11:02 "fånga" vad som skrivs i rutan, efter slagit enter
*/