//PSEUDO CODE
/*
1. Randomise computer choice
    1.1 1 to 33 rock, 33 to 66 paper, 67 to 100 scissors.
    1.2 if 0 roll again.
2. Get human choice
    2.1 disregard cases sensitivity,
3. Keep score
    3.1 Global scope
4. Compare choice in rounds total of 5
    4.1 main function if you will
    4.2 ends when one of players reaches score of 5
5. Write message who win round
6. Write who won at the end


*/

//test
//console.log("hello world!");
/***********************************************************************/
let humanScore=0;
let computerScore=0;

function playGame(i=0){
    while (i<5){
        console.log(playRound());
        if (i<humanScore){
            i=humanScore;
        }
        else if (i<computerScore){
            i=computerScore;
        }
        else{
            i=i;
        }
    }
    if (humanScore>computerScore){
        return "Human wins!";
    }
    else {
        return "Computer wins!";
    }
}

function playRound(humanChoice, computerChoice){
    humanChoice=getHumanChoice();
    computerChoice=getComputerChoice();
    
    if (humanChoice===computerChoice){
        return "It's a tie!";
    }
    else if (humanChoice==="Rock" && computerChoice==="Scissors" ||
        humanChoice==="Paper" && computerChoice==="Rock" ||
        humanChoice==="Scissors" && computerChoice==="Paper"){
            humanScore++;
            return ("Human wins the round. "+humanChoice+" beats "+computerChoice);

        }
    else{
        computerScore++;
        return ("Computer wins the round. "+computerChoice+" beats "+humanChoice);
    }
}

//computer choice thing
function getComputerChoice(randomNumber=0){
    
        while (randomNumber==0){
            randomNumber = Math.floor(Math.random()*100);
            //console.log(randomNumber);
        }
        
        
        if (randomNumber<=33)
            {
            return "Rock";
            }
        else if (randomNumber>33 && randomNumber<=66)
            {
            return "Paper";
            }
        else
            {
            return "Scissors";
            }
}

//human choice thing
function getHumanChoice(choice, i=0){
    while(i==0){
        choice=prompt("Rock, Paper, or Scissors?", "");
        choice=choice.slice(0,1).toUpperCase()+choice.slice(1).toLowerCase();
        if ("Rock".localeCompare(choice)==0){
            i=1;
        }
        else if ("Paper".localeCompare(choice)==0){
            i=1;
        }
        else if("Scissors".localeCompare(choice)==0){
            i=1;
        }
        else{
            i=0;
        }
    }
    
    return choice;
}

// function stringCompare(comparison){

// }


//testing stuff delete later
// console.log(getHumanChoice());
// console.log(getComputerChoice());
//console.log(playRound());
console.log(playGame());
console.log(computerScore);
console.log(humanScore);
