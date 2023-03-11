let winnerDisplay = document.getElementById('winner-display')
const playerLost = () => {
  winnerDisplay.classList.remove('characterYellow')
  winnerDisplay.classList.remove('characterGreen')
  winnerDisplay.textContent = ('The word was ' + answer)
  winnerDisplay.classList.add('characterRed')
}

// GENERATE ATTEMPT MESSAGE
const tryAgain = () =>  {
    let attemptMessage = ['So bad!', 'Dummy!', 'Geez', 'Nope!', 'You can do it!', 'Yikes!', 'Nice Try!']
    return attemptMessage[Math.floor(Math.random() * attemptMessage.length)]
  }
  
  //DISPLAY ATTEMPT MESSAGE 
const playerAttempt = () => {
    winnerDisplay.classList.remove('characterRed')
    winnerDisplay.classList.remove('characterGreen')
    winnerDisplay.textContent = tryAgain()
    winnerDisplay.classList.add('characterYellow')
  }
  
  //WINNERß
 const playerWin = () => {
    winnerDisplay.classList.remove('characterRed')
    winnerDisplay.classList.remove('characterYellow')
    winnerDisplay.textContent = 'Congratulations'
    winnerDisplay.classList.add('characterGreen')
  
  }
  
  //PLAYER INPUTS NOT A WORD 
const notAWord = () => {
    winnerDisplay.classList.remove('characterYellow')
    winnerDisplay.classList.remove('characterGreen')
    winnerDisplay.textContent = 'Not a Word'
    winnerDisplay.classList.add('characterRed')
  
  }