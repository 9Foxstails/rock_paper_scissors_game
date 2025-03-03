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

// function getHumanChoice(choice){
//     while (choice != 0 )
//         {
//         console.log("Human:", choice);
//         }
//     console.log("Human:", choice);
//     return choice;
// }

//getComputerChoice();
//console.log(getHumanChoice());
console.log(getComputerChoice());
