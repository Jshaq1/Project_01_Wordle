
let answer = getAnswer()
let guess = []
let nextSpace = 1;
let row = 0;
let newArr = [];
let notAccepted = ['ENTER', 'BACKSPACE', 'DELETE', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', ';', '.', '/', '[', ']', '`', 'META']

function updateGuess(inputLetter) {
  const currentGuess = guess
  if (currentGuess.length < 5) {
    currentGuess.push(inputLetter);
  }
  const nextSpaceDiv = document.getElementById(nextSpace)
  nextSpace = nextSpace + 1
  nextSpaceDiv.textContent = inputLetter

}


//START THE GAME 
generateRows(6)
answerToArr()





