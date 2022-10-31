let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return Math.floor(Math.random()*9);
   
}
const compareGuesses = (humanGuess, computerGuess, secretTarget) => {
    let humanDelta = Math.abs(humanGuess - secretTarget);
    let computerDelta = Math.abs( computerGuess - secretTarget);
    if ( humanDelta > computerDelta) {
        return false;
    } else if ( humanDelta === computerDelta) {
        return true;
    } else {
        return true;
    }
}

const updateScore = ( winner ) => {
    switch (winner) {
        case 'human':
            humanScore += 1;
            break;
        
        case 'computer':
            computerScore += 1;
            break;
    }
}

const advanceRound = () => {
    currentRoundNumber += 1;
}


console.log(generateTarget())
console.log(humanScore);
updateScore('human');
console.log(humanScore);

console.log(currentRoundNumber)