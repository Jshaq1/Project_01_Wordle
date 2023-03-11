const getResult = () => {

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
      }
    })
  
    guess.forEach((inputLetter, index) => {
      const id = row * 5 + (index + 1)
      if (newArr.includes(inputLetter)) {
        document.getElementById(id).classList.remove('characterGrey')
        document.getElementById(id).classList.add('characterYellow')
  
      }
  
    })
  }