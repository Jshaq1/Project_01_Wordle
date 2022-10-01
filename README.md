# Project_01_Wordle

https://jshaq1.github.io/Project_01_Wordle/

Wordle Clone for GA

## Work Plan
- [x] Create HTML
    -[x] Generate simple frame work 
- [x] Create CSS
    -[x] Position everything 
- [x] Create JS 



FUNCTIONS 
// Generating Random Answer

// KEYBOARD EVENT LISTENER 

// HANDLE KEY PRESS 
    // Handle Delete Input

    // HANDLE ENTER PRESS 
        // Update Tiles 
        getResult()
        // CHECK CONDITIONALS FOR WINNING 
        playerWin()
        playerLost()
        playerAttempt()

    //Place input letter into 'GUESS' arrayand renders view in HTML.


// --------------------------------------------------------------------//

STRUGGLES JS

    - Setting the row and tile ID as view is updated, resorted to using a variable to count up as key press occurs 
    - Setting the ID of each tile from 1-30 presented issues in checking the tiles. 
    - Converting answer and guess to separate arrays that I can manipulate for purposes of checking tile colours without breaking the core function of winning or loosing 

- DUPLICATE LETTERS 
    - The letters would both turn green or neithe would turn green because I was checking the index of each array (guess/answer) and comparing them. The trouble with this is it checks the first instance of a letter and assumes this for the next entry of thesame letter. 
    - FIX // this the function 'getResult' alters the answer array and replaces a letter each time it turns green or is in the correct position to a '$' this way when the function checks through the array for the duplicates its only present once and will check that specific location instead of the original index the first time it appears 

- RENDERING GREY LETTERS, 
    - For some reason after fixing the duplicates issue no letters turned grey, this is because the else statement was never reached. How ever if I refactor this then all the letters turn grey and overried the letters turning green or yellow.  
    - FIX // Turning all the letters grey first no matter what means I can just remove that class if I want them to go yellow or    green. seems to work have not had any issues so far.  

-MODEL VIEW CONTROLLER 
    -Absolutely no idea how to refactor into these separate JS files. 

// ---------------------------------------------------------------------//

Struggles CSS 

- FONTS 
    - Could not get custom fonts to be friendly with my text styling. No fix attained 

- TEXT SHADOW
    - Using a gradient and incremental opacity changes to create a 'NEON EFFECT' has caused problems with the rendering of the view quickly on my page. Likely because its being hosted by GitHub for free but thats purely a guess. 
    -FIX // I think it would be benificial to design some of the titles and fixed wording prior to CSS which would mean this would be less laggy as each time something is added to the page its not rendering all of the text shadows ect 

- DIV: WINNER/LOSER/ALERTS
        - Had to create a div to put alerts in for winning loosing ect but I could not get this to present over the top of my game space using absolute so I have just created more space at the top below the WORDLE Title 

- LAGGY 
    - Removed styling from the title as its less importand and is causing the game to run at a snails pace. 


