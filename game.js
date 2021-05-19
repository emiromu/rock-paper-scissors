

function computerPlay(){
    switch (Math.floor((Math.random() * 3))){
        case 0:
            return "Rock";
        break;
        case 1:
            return "Paper";
        break;

        case 2:
            return "Scissors";
        break;
        default:
            return "error:default switch case computerPlay()";
    }
}

function playRound(playerSelection, computerSelection){
if(playerSelection.toUpperCase() === "ROCK" ){
    switch (computerSelection.toUpperCase()){
        case "ROCK":
            console.log(`It's a tie! ${playerSelection} against ${computerSelection}`) ;
            return 0;
        break;
        case "PAPER":
            console.log(`You win! ${playerSelection} beats ${computerSelection}`);
            return 1;
        break;
        case "SCISSORS":
            console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
            return -1;
        break;
        default:
            console.log("error:invalid computer input");
            return -2;
    }

}else if(playerSelection.toUpperCase() === "PAPER"){
    switch (computerSelection.toUpperCase()){
        case "ROCK":
            console.log(`You win! ${playerSelection} beats ${computerSelection}`);
            return 1;
        break;
        case "PAPER":
            console.log(`It's a tie! ${playerSelection} against ${computerSelection}`) ;
            return 0;
        break;
        case "SCISSORS":
            console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
            return -1;
        break;
        default:
            console.log("error:invalid computer input");
            return -2;
    }
}else if(playerSelection.toUpperCase() === "SCISSORS"){
    switch (computerSelection.toUpperCase()){
        case "ROCK":
            console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
            return -1;
        break;
        case "PAPER":
            console.log(`You win! ${playerSelection} beats ${computerSelection}`);
            return 1;
        break;
        case "SCISSORS":
            console.log(`It's a tie! ${playerSelection} against ${computerSelection}`) ;
            return 0;
        break;
        default:
            console.log("error:invalid computer input");
            return -2;
    }
}else{
    return "error:invalid player input";
}
}

function game(rounds){
    var playerScore = 0;
    var computerScore = 0;
    var ties=0;

    for (var i=0; i<rounds; i++)
    {
        
        switch(playRound(prompt("Rock, Paper, or Scissors?"),computerPlay())){
            case 1:
                ++playerScore;
                console.log(`Player score : ${playerScore} // Computer score :${computerScore}`);
            break;
            case -1:
                ++computerScore;
                console.log(`Player score : ${playerScore} // Computer score :${computerScore}`);
            break;
            case 0:
                ++ties;
                console.log(`Player score : ${playerScore} // Computer score :${computerScore}`);
            break;
            default: "error:unexpected behaviour"
        }
    }

    if(playerScore==computerScore){
        console.log(`
        No winners! (Final scores : Player=${playerScore} ; Computer=${computerScore})`);
    }else if(playerScore<computerScore){
        console.log(`
        Computer wins! (Final scores : Player=${playerScore} ; Computer=${computerScore})`);
    }else{
        console.log(`
        Player wins! (Final scores : Player=${playerScore} ; Computer=${computerScore})`);
    }
    
    return "game over";
}

console.log("Game of Rock Paper Scissors vs the Computer - 5 rounds");
game(5);