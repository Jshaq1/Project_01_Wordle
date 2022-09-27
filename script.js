//MODEL
//Define Global Variables
let answer = getAnswer()
let guess = []
let nextSpace = 1;
let row = 0;




//Generating Random Answer
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

  // HANDLE PRESSING ENTER TO SUBMIT GUESS //
  //Need to do this first so that when they press enter there is a response before they can add more letters to the next row down
  if (inputLetter == 'enter') {
    return enterInput()
  }
  // HITTING A LETTER/KEY //
  if (guess.length < 5) {
    updateGuess(inputLetter)

  }
}

//---------------------------------------------------//

function enterInput() {

  console.log(guess)
  if (guess.length < 5) {
    return alert('your answer is too short')
  }
  if (guess.length == 5) {
    
    getResult()
    guess = guess.join('')
    checkWinner()

  }row = row +1;
}

//---------------------------------------------------//

function checkWinner() {
  if (guess == answer) {
    guess = []
    return alert('you win idiot')

  } if (guess !== answer) {
    guess = []
    return alert('try again idiot')
  }
}

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

function getResult() {
  guess.forEach((inputLetter, index) => {
    const id = row * 5 + (index + 1)
    document.getElementById(id).style.backgroundColor = 'purple'
    if (answer.includes(inputLetter)) {
   }
  })
}





//Logging stuff
getAnswer()
console.log(answer)




