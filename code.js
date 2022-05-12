
// Funcion que determina la mano de la computadora
function computerPlay(){
    let result;
    let lucky = parseInt(Math.random()*3);

    if (lucky == 0){
        result = "rock";
    } else if (lucky == 1){
        result = "paper";
    } else if (lucky == 2){
        result = "scissors";
    } return result;    
}

// Funcion que compara la mano de la computadora con la del usuario y lanza el resultado
function playRound(playerSelection,computerSelection){

    let result;
    let win = `You win! ${playerSelection} beats ${computerSelection}`;
    let lose = `You lose! ${computerSelection} beats ${playerSelection}`;
    let draw = `Its a draw!`

    if (playerSelection === computerSelection) {result = draw;
        } else if (playerSelection === "rock" && computerSelection === "paper") {result = lose;
            } else if (playerSelection === "rock" && computerSelection === "scissors") {result = win;
                } else if (playerSelection === "paper" && computerSelection === "rock") {result = win;
                    } else if (playerSelection === "paper" && computerSelection === "scissors") {result = lose;
                        } else if (playerSelection === "scissors" && computerSelection === "paper") {result = win;
                             } else if (playerSelection === "scissors" && computerSelection === "rock") {result = lose;
                                } else {result = "Please check your input, it should be `Rock, Paper or Scissors`";
    }
    alert(result);
    if (result === win) {result = 2
    }   else if (result === lose) {result=1
    }   else if (result === draw) {result = 0
    }   else (result = null);
    return result;
}

//Funcion que lanza el juego 5 veces y determina un ganador

function game(){
    let you = 0;
    let pc = 0;
    let draw = 0;
    let games = 1;
    let final;
    let win = "Congrats you won!";
    let lose = "JAJAJA Luuuuser!";
    let drawwin = "Draw ma fren lets try again";
    
    for (let i=0;i<5;i++){
        
        alert(`Game ${games}`)
        let playerSelection = prompt("Choose your weapon! (rock, paper, scissors)");
        playerSelection = playerSelection.toUpperCase().toLowerCase();
        let result = playRound(playerSelection,computerPlay());
        games++;
       
        if (result === 2) {you++;
        } else if (result === 1) {pc++
        } else if (result === 0) {draw++
        } else (result = null);

        alert(`SCORE ----> YOU: ${you}, PC: ${pc}, DRAWS: ${draw}`);
    
    }
    if (you>pc){final = win
    }   else if (you < pc){final = lose
    }   else if (you === pc){final = drawwin
    }   else {final = "Something when wrong"};

    alert(final);
}

game();
