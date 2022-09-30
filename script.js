//MODEL
//Define Global Variables
// let answer = getAnswer()
let answer = getAnswer()
let guess = []
let nextSpace = 1;
let row = 0;
let newArr = [];
let notAccepted = ['ENTER', 'BACKSPACE', 'DELETE', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
  


// Generating Random Answer
function getAnswer() {
  return validWords[Math.floor(Math.random() * validWords.length)]

}


// KEYBOARD EVENT LISTENER //
const keyContainer = document.getElementById('keyboard')
const keys = document.getElementsByClassName("key");
for (let key of keys) {
  key.addEventListener("click", keyInput);
}


// ------------------------------------------------- //

// HANDLE KEY PRESS //
function keyInput(event) {
  const clickedElement = event.target
  const inputLetter = clickedElement.dataset.key

  
  // Handle Delete inputletter // 
  if (guess.length > 0 && inputLetter == 'DELETE'){
      delInput()
      return
  }
  // HANDLE PRESSING ENTER TO SUBMIT GUESS //
  //Need to do this first so that when they press enter there is a response before they can add more letters to the next row down
  if (inputLetter == 'ENTER') {
    const guessTest = guess.join('')
    if(validWords.includes(guessTest)){
    enterInput()
    return;
  }else {
    notAWord()}
  }
  // HITTING A LETTER/KEY //
  if (guess.length < 5 && !notAccepted.includes(inputLetter)) {
    updateGuess(inputLetter)
  }
}

function delInput(){
  const lastInputLetter = document.getElementById(nextSpace - 1)
  lastInputLetter.textContent = ''
  nextSpace = nextSpace - 1
  guess.pop()
  }
  
//---------------------------------------------------//

function enterInput() {
  
  if (guess.length < 5) {
    return alert('your answer is too short')
  }
  
  if (guess.length == 5) {
    
    getResult()
    
    guess = guess.join('')
    checkWinner()
    answerToArr()
  }row = row +1;
  
}

//---------------------------------------------------//

function checkWinner() {

  if (guess === answer) {
    guess = []
    return playerWin()

  }if (row === 5 && guess !== newArr){
    guess = []
    return playerLost()

  }if (guess !== answer){
    guess = []
    return playerAttempt()
  
}}

//---------------------------------------------------//
//Place input letter into 'GUESS' array, and renders view in HTML.
function updateGuess(inputLetter) {
  const currentGuess = guess
  if (currentGuess.length < 5 ) {
    currentGuess.push(inputLetter);
  }

  const nextSpaceDiv = document.getElementById(nextSpace)
  nextSpace = nextSpace + 1
  nextSpaceDiv.textContent = inputLetter
  
}

//---------------------------------------------------//
function answerToArr(){
  newArr = []
  for(let ans of answer){
    newArr.push(ans)
    
}
}



function getResult() {
  
  guess.forEach((inputLetter, index) => {
    const id = row * 5 + (index + 1)
    const letterG = (guess[index])
    const letterA = (newArr[index])
    document.getElementById(id).classList.remove('character')
    document.getElementById(id).classList.add('characterGrey')
    
    if(guess[index] === newArr[index]){
      document.getElementById(id).classList.remove('characterGrey')
      document.getElementById(id).classList.add('characterGreen')
      newArr[index] = '$'
      console.log(newArr)

     
    }
    })

    guess.forEach((inputLetter, index) => {
      const id = row * 5 + (index + 1)
    if (newArr.includes(inputLetter) ) {
      document.getElementById(id).classList.remove('characterGrey')
      document.getElementById(id).classList.add('characterYellow')

      
    }
    // else if(!answer.includes(inputLetter)){
    //   document.getElementById(id).classList.remove('character')
    //   document.getElementById(id).classList.add('characterGrey')
      
    // }
    
  })}


// modal

let winnerDisplay = document.getElementById('winner-display')

function playerLost() {
  
  winnerDisplay.textContent = 'Game Over!'
  winnerDisplay.classList.add('characterRed')
}


function tryAgain(){
  let attemptMessage = ['So bad!', 'Dummy!', 'Preschool?', 'One day!', 'You can do it!', 'Yikes!']
  return attemptMessage[Math.floor(Math.random() * attemptMessage.length)]
}

function playerAttempt() {
  
  winnerDisplay.textContent = tryAgain()
  winnerDisplay.classList.add('characterYellow')
}

function playerWin() {
  winnerDisplay.textContent = 'Congratulations'
  winnerDisplay.classList.add('characterGreen')

}
function notAWord() {
  winnerDisplay.textContent = 'Not a Word'
  winnerDisplay.classList.add('characterRed')

}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    winnerDisplay.textContent = ''
    winnerDisplay.classList.remove('characterGreen')
    winnerDisplay.classList.remove('characterYellow')
    winnerDisplay.classList.remove('characterRed')
  }
}
//Logging stuff
answerToArr()
// getAnswer()
console.log(answer)
console.log(newArr)




