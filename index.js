let name = prompt("Please Enter your Name");
let computerScore = playerScore = 0;

let round = 0;
let up = document.getElementById('updates');

const playerName = document.getElementById('name');
playerName.textContent = name;

function computerRandom(){
    let choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * choices.length)]
}

function playRound(choice){
    let computerSelection = computerRandom();
    let answer = ""
    if(choice.localeCompare('Rock') == 0){
        if(computerSelection.localeCompare("Rock") == 0){
            answer = "It is a tie, computer selected: " + computerSelection;
         }else if(computerSelection.localeCompare("Paper") == 0){
            answer = "You lose, computer selected: " + computerSelection;
            computerScore++;
        }else{
            answer = "You win, computer selected: " + computerSelection;                playerScore++
        }
    }else if(choice.localeCompare('Paper') == 0){
        if(computerSelection.localeCompare("Paper") == 0){
            answer = "It is a tie, computer selected: " + computerSelection;
        }else if(computerSelection.localeCompare("Scissors") == 0){
            answer = "You lose, computer selected: " + computerSelection;
            computerScore++;
        }else{
            answer = "You win, computer selected: " + computerSelection;
            playerScore++
        }
    }else{
        if(computerSelection.localeCompare("Scissors") == 0){
            answer = "It is a tie, computer selected: " + computerSelection;
        }else if(computerSelection.localeCompare("Rock") == 0){
            answer = "You lose, computer selected: " + computerSelection;
            computerScore++;
        }else{
            answer = "You win, computer selected: " + computerSelection;
            playerScore++
        }
    }
        console.log(answer);
        round++;
        let roundNumber = document.getElementById('round-nbr');
        let roundScore = document.getElementById('round-score');
        roundNumber.textContent = "Round " +round;
        roundScore.textContent =  computerScore + " - " + playerScore; 
        up.innerHTML += answer + "<br></br>";

}
