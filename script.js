//MODEL
//Define Global Variables
let answer = getAnswer()
let guess = []
let nextSpace = 1;



//Generating Random Answer
function getAnswer(){
return validWords[Math.floor(Math.random()*validWords.length)];
}


// KEYBOARD EVENT LISTENER //
const keyContainer = document.getElementById('keyboard')
const keys = document.getElementsByClassName("key");
for (let key of keys) {
  key.addEventListener("click", keyInput);
}

// HANDLE KEY PRESS //
function keyInput(event){
    const clickedElement = event.target
    const inputLetter = clickedElement.dataset.key
    
// HANDLE PRESSING ENTER TO SUBMIT GUESS //
//Need to do this first so that when they press enter there is a response before they can add more letters to the next row down
if(inputLetter == 'enter'){
  return enterInput()
}
// HITTING A LETTER/KEY //
else{
  updateGuess(inputLetter)
}}

function enterInput(){
  if(guess < 5){
    console.log('Your answer is too short!')
  }
}


//Place input letter into 'GUESS' array, and renders view in HTML.
function updateGuess (inputLetter) {
  const currentGuess = guess
  
  if (currentGuess && currentGuess.length < 6 ){
    currentGuess.push(inputLetter);
  }





  //Using a variable to change the ID referenced by adding 1 to it each keypress.
  //Id of each input div in HTML set 1-30 
  const nextSpaceDiv  = document.getElementById(nextSpace)
  nextSpace = nextSpace +1
  nextSpaceDiv.textContent = inputLetter

}

//Logging stuff
getAnswer()
console.log(answer)




