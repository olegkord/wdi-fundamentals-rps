////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    console.log('move');
    return (move||null)||getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    console.log('move');
    return (move||null)||randomPlay();
}

function getWinner(playerMove,computerMove) {

    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    var winner;
    if (playerMove === 'rock')
    {
        if (computerMove === 'paper') { 
            console.log("Computer wins!");
            winner = 'computer' 
        }

        else if (computerMove === 'scissors') {
            console.log("Player wins!");
            winner = 'player';
        }

        else {
            console.log("The game is tie!");
            winner = 'tie';
        }
    }
    else if (playerMove === 'paper')
    {
        if (computerMove === 'scissors')  { 
            console.log("Computer wins!");
            winner = 'computer' ;
        }

        else if (computerMove === 'rock') {
            console.log("Player wins!");
            winner = 'player';
        }

        else  {
            console.log("The game is tie!");
            winner = 'tie';
        }
    }
    else if (playerMove === 'scissors')
    {
        if (computerMove === 'rock')  { 
            console.log("Computer wins!");
            winner = 'computer' ;
        }

        else if (computerMove === 'scissors') {
            console.log("Player wins!");
            winner = 'player';
        }

        else   {
            console.log("The game is tie!");
            winner = 'tie';
        }
    }

    return winner;

}
function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */

    while (playerWins <= 5 || computerWins <=5)
    {
        getInput();
        randomPlay();

        console.log(getPlayerMove())
        if (getWinner(getPlayerMove(),getComputerMove()) === 'player')
        {
            console.log("Player has won!");
            playerWins += 1;
        }
        else if (getWinner(getPlayerMove(),getComputerMove()) === 'computer')
        {
            console.log("Computer has won!");
            computerWins += 1;
        }
        else
        {
            console.log('The game was a tie. Play again.')
        }

    }

    return [playerWins, computerWins];
}


