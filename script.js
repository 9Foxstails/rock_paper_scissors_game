let rockBtn = document.getElementById('rockBtn');
let paperBtn = document.getElementById('paperBtn');
let scissorsBtn = document.getElementById('scissorsBtn');
let button = document.querySelector('.choice');

let humanScore=0;
let computerScore=0;

rockBtn.addEventListener('click', playRound);
paperBtn.addEventListener('click', playRound);
scissorsBtn.addEventListener('click', playRound);

function playRound(result)
{
    humanChoice=getHumanChoice();
    computerChoice=getComputerChoice();
        
    if (humanChoice===computerChoice)
    {
        document.getElementById('resultMsg').innerHTML="It's a tie.";
        result=("It's a tie"
            +"\nScore: "
            +"Human "+humanScore
            +"/ Computer "+computerScore)
            return console.log(result);
    }
    else if (humanChoice==="Rock" && computerChoice==="Scissors" ||
            humanChoice==="Paper" && computerChoice==="Rock" ||
            humanChoice==="Scissors" && computerChoice==="Paper")
            {
                humanScore++;
                document.getElementById('resultMsg').innerHTML="Human wins the round!";
                result=("Human wins the round. "+humanChoice+" beats "+computerChoice
                        +"\nScore: "
                        +"Human "+humanScore
                        +"/ Computer "+computerScore)
                return console.log(result);
            }
    else
    {
        computerScore++;
        document.getElementById('resultMsg').innerHTML="Computer wins the round...";
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

function playGame(i=0){
    let humanChoice="";
    let computerChoice="";
    
    // for (let i=0;i<5;i++){
    //     playRound(humanChoice, computerChoice);  
    // }

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

function getHumanChoice(choice){
    choice=event.target.id;
    
    if (choice=="rockBtn")
    {
        return "Rock";
    }
    else if (choice=="paperBtn")
    {
        return "Paper";
    }
    else
    {
        return "Scissors";
    }
}

console.log(playGame());
