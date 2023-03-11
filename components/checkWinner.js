const checkWinner = () => {
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