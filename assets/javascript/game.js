// Initialize game counters to zero
var numWins = 0;
var numLosses = 0;
var guessLimit = 9;


// Setup the letter array and lettersGuessed[empty] array
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var lettersGuessed =[];


function startGame() {

    // Computer guesses a random letter from the letters array and logs it
    var computerGuess = letters[Math.floor(Math.random()*letters.length)];
    console.log("Computer chose " + computerGuess);

    // Begin event listening function
    document.onkeyup = function(event) {
    
    // Accept user input, push pressed letter to the lettersGuessed array and decrement the guessLimit
    var userGuess = event.key;

    lettersGuessed.push(userGuess);

    guessLimit--;

    // Determine the outcome and invoke RESET function to clear counters and array

    if (userGuess === computerGuess) {
        alert("YOU WIN!!!");
        numWins++;

        //Function to reset values back to start
        function reset() {
            guessLimit = 9;
            lettersGuessed.length = 0;
            startGame(); 
            
        document.querySelector("#game").innerHTML = html;
        
        };
    
        reset();
   
    }

    if (guessLimit === 0) {
        alert("YOU LOSE!!!");
        numLosses++;

        function reset() {
            guessLimit = 9;
            lettersGuessed.length = 0;
            startGame();
            

        document.querySelector("#game").innerHTML = html;
        
        };

        reset();
    }


    //Display html and add in JS elements as game progresses
    var html = 
    "<br>" +
    "<p>Wins:  " + "<strong>" + numWins + "</strong>" + "</p>" +
    "<p>Losses:  " + "<strong>" + numLosses + "</strong>" + "</p>" +
    "<p>Letters guessed:  " + "<strong>" + lettersGuessed + "</strong>" + "</p>" +
    "<p>Number of guesses left:  " + "<strong>" + guessLimit + "</strong>" + "</p>";

    document.querySelector("#game").innerHTML = html;
};
};

//Begin the game
startGame();

