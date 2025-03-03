
let humanScore=0;
let computerScore=0;

function playGame(i=0){
    let humanChoice="";
    let computerChoice="";

    for (let i=0;i<5;i++){
        function playRound(result){
            humanChoice=getHumanChoice();
            computerChoice=getComputerChoice();
            
            if (humanChoice===computerChoice){
                result=("It's a tie"
                        +"\nScore: "
                        +"Human "+humanScore
                        +"/ Computer "+computerScore)
                return console.log(result);
            }
            else if (humanChoice==="Rock" && computerChoice==="Scissors" ||
                humanChoice==="Paper" && computerChoice==="Rock" ||
                humanChoice==="Scissors" && computerChoice==="Paper"){
                    humanScore++;
                    result=("Human wins the round. "+humanChoice+" beats "+computerChoice
                            +"\nScore: "
                            +"Human "+humanScore
                            +"/ Computer "+computerScore)
                    return console.log(result);
                }
            else{
                computerScore++;
                result=("Computer wins the round. "
                        +computerChoice
                        +" beats "
                        +humanChoice
                        +"\nScore: "
                        +"Human "+humanScore
                        +"/ Computer "+computerScore);
                return console.log(result);
            }
        }

        playRound(humanChoice, computerChoice);
        
    }
    if (humanScore>computerScore){
        return "Human wins!";
    }
    else {
        return "Computer wins!";
    }
}
function getComputerChoice(randomNumber=0){
    
        while (randomNumber==0){
            randomNumber = Math.floor(Math.random()*100);
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

console.log(playGame());
