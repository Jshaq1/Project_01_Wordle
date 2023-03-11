const keyContainer = document.getElementById('keyboard')
const keys = document.getElementsByClassName("key");
for (let key of keys) {
  key.addEventListener("click", onScreenKeyInput);
}

function onScreenKeyInput(event) {
  const clickedElement = event.target
  const inputLetter = clickedElement.dataset.key

  // Handle Delete inputletter // 
  if (guess.length > 0 && inputLetter == 'DELETE') {
    delInput()
    return
  }

  // HANDLE PRESSING ENTER TO SUBMIT GUESS //
  if (inputLetter == 'ENTER') {
    const guessTest = guess.join('')
    if (validWords.includes(guessTest)) {
      enterInput()
      return;
    } 
    else {
      notAWord()
    }
  }
  // HITTING A LETTER/KEY //
  if (guess.length < 5 && !notAccepted.includes(inputLetter)) {
    updateGuess(inputLetter)
  }
}