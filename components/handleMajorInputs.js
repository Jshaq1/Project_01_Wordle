const delInput = () => {
    const lastInputLetter = document.getElementById(nextSpace - 1)
    lastInputLetter.textContent = ''
    nextSpace = nextSpace - 1
    guess.pop()
  }
  
  
  // HANDLE ENTER PRESS //
  const enterInput = () => {
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