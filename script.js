let rockBtn = document.getElementById('rockBtn');
let paperBtn = document.getElementById('paperBtn');
let scissorsBtn = document.getElementById('scissorsBtn');

let humanScore=0;
let computerScore=0;

rockBtn.addEventListener('click', playRound);
paperBtn.addEventListener('click', playRound);
scissorsBtn.addEventListener('click', playRound);

function playRound()
{
    humanChoice=getHumanChoice();
    computerChoice=getComputerChoice();
        
    if (humanChoice===computerChoice)
    {
        document.getElementById('resultMsg').innerHTML="It's a tie.";
        
        return 0;
    }
    else if (humanChoice==="Rock" && computerChoice==="Scissors" ||
            humanChoice==="Paper" && computerChoice==="Rock" ||
            humanChoice==="Scissors" && computerChoice==="Paper")
            {
                humanScore++;
                document.getElementById('resultMsg').innerHTML="Human wins the round!";
                document.getElementById('hScore').innerHTML="Human score: "+humanScore;
                
                if(humanScore==5)
                {
                    rockBtn.disabled=true;
                    paperBtn.disabled=true;
                    scissorsBtn.disabled=true;
                    document.getElementById('resultMsg').innerHTML="Human wins the game!!!";
                    return 0;
                }
                else
                {
                    return 0;
                }  
            }
    else
    {
        computerScore++;
        document.getElementById('resultMsg').innerHTML="Computer wins the round...";
        document.getElementById('cScore').innerHTML="Computer score: "+computerScore;
        if(computerScore==5)
        {
            rockBtn.disabled=true;
            paperBtn.disabled=true;
            scissorsBtn.disabled=true;
            document.getElementById('resultMsg').innerHTML="Computer wins the game......";
            return 0;
        }
        else
        {
            return 0;
        }
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
