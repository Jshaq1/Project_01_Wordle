//MODEL
//Define Global Variables

let answer = getAnswer()
let guess = []
let nextSpace = 1;
let row = 0;
let newArr = [];
let notAccepted = ['ENTER', 'BACKSPACE', 'DELETE', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', ';', '.', '/', '[', ']', '`', 'META']


// MODEL?? //
// Generating Random Answer
function getAnswer() {
  let randomWord = wordleArray[Math.floor(Math.random() * wordleArray.length)]
  return randomWord.toLocaleUpperCase()

}

function answerToArr() {
  newArr = []
  for (let ans of answer) {
    newArr.push(ans)

  }
}

// CONTROLLER??//
// KEYBOARD EVENT LISTENER //
const keyContainer = document.getElementById('keyboard')
const keys = document.getElementsByClassName("key");
for (let key of keys) {
  key.addEventListener("click", keyInput);
}


// ------------------------------------------------- //
// MAIN FUNCTION FOR GAME TO WORK//
// HANDLE KEY PRESS //
function keyInput(event) {
  const clickedElement = event.target
  const inputLetter = clickedElement.dataset.key


  // Handle Delete inputletter // 
  if (guess.length > 0 && inputLetter == 'DELETE') {
    delInput()
    return
  }
  // HANDLE PRESSING ENTER TO SUBMIT GUESS //
  //Need to do this first so that when they press enter there is a response before they can add more letters to the next row down
  if (inputLetter == 'ENTER') {
    const guessTest = guess.join('')
    if (validWords.includes(guessTest)) {
      enterInput()
      return;
    } else {
      notAWord()
    }
  }
  // HITTING A LETTER/KEY //
  if (guess.length < 5 && !notAccepted.includes(inputLetter)) {
    updateGuess(inputLetter)
  }
}

// Handle Delete Input
function delInput() {
  const lastInputLetter = document.getElementById(nextSpace - 1)
  lastInputLetter.textContent = ''
  nextSpace = nextSpace - 1
  guess.pop()
}

//---------------------------------------------------//
// HANDLE ENTER PRESS //
function enterInput() {

  if (guess.length < 5) {
    return alert('your answer is too short')
  }

  if (guess.length == 5) {

    getResult()

    guess = guess.join('')
    checkWinner()
    answerToArr()
  } row = row + 1;

}

//---------------------------------------------------//
// CHECK CONDITIONALS FOR WINNING //
function checkWinner() {

  if (guess === answer) {
    guess = []
    return playerWin()

  } if (row === 5 && guess !== newArr) {
    guess = []
    return playerLost()

  } if (guess !== answer) {
    guess = []
    return playerAttempt()

  }
}

//---------------------------------------------------//
//Place input letter into 'GUESS' array, and renders view in HTML.
function updateGuess(inputLetter) {
  const currentGuess = guess
  if (currentGuess.length < 5) {
    currentGuess.push(inputLetter);
  }

  const nextSpaceDiv = document.getElementById(nextSpace)
  nextSpace = nextSpace + 1
  nextSpaceDiv.textContent = inputLetter

}

//---------------------------------------------------//


// VIEW RESULTS //
function getResult() {

  guess.forEach((inputLetter, index) => {
    const id = row * 5 + (index + 1)
    const letterG = (guess[index])
    const letterA = (newArr[index])
    document.getElementById(id).classList.remove('character')
    document.getElementById(id).classList.add('characterGrey')

    if (guess[index] === newArr[index]) {
      document.getElementById(id).classList.remove('characterGrey')
      document.getElementById(id).classList.add('characterGreen')
      newArr[index] = '$'
      console.log(newArr)
    }
  })

  guess.forEach((inputLetter, index) => {
    const id = row * 5 + (index + 1)
    if (newArr.includes(inputLetter)) {
      document.getElementById(id).classList.remove('characterGrey')
      document.getElementById(id).classList.add('characterYellow')


    }
    // else if(!answer.includes(inputLetter)){
    //   document.getElementById(id).classList.remove('character')
    //   document.getElementById(id).classList.add('characterGrey')

    // }

  })
}


// DEFINING SECTION FOR ERROR/WIN/LOSE MESSAGES
let winnerDisplay = document.getElementById('winner-display')
function playerLost() {
  winnerDisplay.classList.remove('characterYellow')
  winnerDisplay.classList.remove('characterGreen')
  winnerDisplay.textContent = ('The word was ' + answer)
  winnerDisplay.classList.add('characterRed')
}

// GENERATE ATTEMPT MESSAGE
function tryAgain() {
  let attemptMessage = ['So bad!', 'Dummy!', 'Geez', 'Nope!', 'You can do it!', 'Yikes!', 'Nice Try!']
  return attemptMessage[Math.floor(Math.random() * attemptMessage.length)]
}

//DISPLAY ATTEMPT MESSAGE 
function playerAttempt() {
  winnerDisplay.classList.remove('characterRed')
  winnerDisplay.classList.remove('characterGreen')
  winnerDisplay.textContent = tryAgain()
  winnerDisplay.classList.add('characterYellow')
}

//WINNER WINNER CHICKEN DINNER
function playerWin() {
  winnerDisplay.textContent = 'Congratulations'
  winnerDisplay.classList.add('characterGreen')

}

//PLAYER INPUTS NOT A WORD 
function notAWord() {
  winnerDisplay.classList.remove('characterYellow')
  winnerDisplay.classList.remove('characterGreen')
  winnerDisplay.textContent = 'Not a Word'
  winnerDisplay.classList.add('characterRed')

}


//START THE GAME 
answerToArr()
//Logging stuff
console.log(answer)




