const getAnswer = () => {
    let randomWord = wordleArray[Math.floor(Math.random() * wordleArray.length)]
    return randomWord.toLocaleUpperCase()
  
  }
  
const answerToArr = () =>  {
    newArr = []
    for (let ans of answer) {
      newArr.push(ans)
  
    }
  }