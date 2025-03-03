//PSEUDO CODE
/*
1. Randomise computer choice
    1.1 1 to 33 rock, 33 to 66 paper, 67 to 100 scissors.
    1.2 if 0 roll again.
2. Get human choice
    2.1 disregard cases sensitivity,
3. Keep score
4. Compare choice in rounds total of 5
5. Write message who win round
6. Write who won at the end


*/

//test
//console.log("hello world!");

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

console.log(getHumanChoice());
console.log(getComputerChoice());
