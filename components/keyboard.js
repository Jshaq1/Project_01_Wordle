
// HANDLE KEY PRESS //
const keyInput = (event) => {
    const clickedElement = event.key
    const inputLetter = event.key.toUpperCase()
  
    // Handle Delete inputletter // 
    if (guess.length > 0 && inputLetter == 'BACKSPACE'){
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
  
  document.addEventListener('keydown', keyInput)