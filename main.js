let computerChoice;


const buttons = document.querySelectorAll('button');
let win = 0;
let lose = 0;
let draw = 0;
let round = 1;

const resultShow = document.querySelector('#result');
const roundWinner = document.querySelector('#roundWinner');
const liveScore = document.querySelector('#liveScore');
const roundShowNum = document.querySelector('#roundShowNum');



const getRandomInt =(max) =>{
    return Math.floor(Math.random() * max);
  }


const getComputerChoice = () =>{
    let number = getRandomInt(3) + 1; 
    if(number === 1){
        computerChoice = 'Rock';
    } else if(number === 2){
        computerChoice = 'Paper';
    } else {
        computerChoice = "Scissors";
    }
    return computerChoice;
}


computerChoice = getComputerChoice();

const play = () =>{




     buttons.forEach(button =>{
        button.addEventListener('click', () =>{
            playerSelection = button.textContent;
            let computerSelection = getComputerChoice();
            resultShow.textContent = '';


            console.log(`Your selection: ${playerSelection}`);
            console.log(`Computer selection: ${computerSelection}`);
            
                if(playerSelection == 'Rock'){
                    if(computerSelection == 'Scissors'){
                        roundWinner.textContent = 'You won, Rock beats Scissors';
                        win++;
                    } else if(computerSelection == 'Paper'){
                        roundWinner.textContent = 'You lose, Paper beats Rock';
                        lose++;
                    } else {
                        roundWinner.textContent = 'Draw';
                        draw++
                    }
                } else if(playerSelection == 'Paper'){
                    if(computerSelection == 'Rock'){
                        roundWinner.textContent = 'You won, Paper beats Rock';
                        win++;
                    } else if(computerSelection == 'Scissors'){
                        roundWinner.textContent = 'You lose, Scissors beat Paper';
                        lose++;
                    } else {
                        roundWinner.textContent = 'Draw';
                        draw++;
                    }  
                } else if(playerSelection == "Scissors"){
                    if(computerSelection == 'Paper'){
                        roundWinner.textContent = 'You won, Scissprs beat Paper';
                        win++;
                    } else if(computerSelection == 'Rock'){
                        roundWinner.textContent = 'You lose, Rock beats Scissors';
                        lose++;
                    } else {
                        roundWinner.textContent = 'Draw';
                        draw++;
                    }
                } else{
                    roundWinner.textContent = 'Wrong Input';
                }

                liveScore.textContent = `Wins:${win} Loses:${lose} Draws: ${draw}`;
                roundShowNum.textContent = `Round:${round}`;
                
                if(round === 5){
                    if(win > lose){
                        resultShow.textContent = 'You Have Won';
                    } else if(lose > win){
                        resultShow.textContent = 'You Have Lost';
                    } else resultShow.textContent = "It's Draw";
                    win = 0;
                    lose = 0;
                    draw = 0;
                    round = 0;
                }

                round++;

        })
    });

}

play();









