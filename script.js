//MODEL
//Define Global Variables

const words = []
const answer = getAnswer()
const guess1 = []

const keyContainer = document.getElementById('keyboard')

//Generating Random Answer
function getAnswer(){
return validWords[Math.floor(Math.random()*validWords.length)];
}

//UpdateView
//Function to select word

const keys = document.getElementsByClassName("key");
for (let key of keys) {
  key.addEventListener("click", renderInput);
}

function renderInput(event){
    const inputKey = document.getElementsByClassName('key')
    const inputDiv = document.getElementsByClassName('character')
    const clickedElement = event.target
    const inputResult = clickedElement.dataset.key
    guess1.push(inputResult)

    console.log(guess1)
}

//Logging stuff
getAnswer()
console.log(answer)