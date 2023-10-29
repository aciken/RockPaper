let computerChoice;
let playerChoice = 'Scissors';

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

const play = (playerSelection, computerSelection) =>{
    if(playerSelection === 'Rock'){
        if(computerSelection === 'Scissors'){
            console.log('You won, Rock beats Scissors')
        } else if(computerSelection === 'Paper'){
            console.log('You lose, Paper beats Rock');
        } else {
            console.log('Draw');
        }
    } else if(playerSelection === 'Paper'){
        if(computerSelection === 'Rock'){
            console.log('You won, Paper beats Rock');
        } else if(computerSelection === 'Scissors'){
            console.log('You lose, Scissors beat Paper');
        } else {
            console.log('Draw');
        }  
    } else{
        if(computerSelection === 'Paper'){
            console.log('You won, Scissprs beat Paper');
        } else if(computerSelection === 'Rock'){
            console.log('You lose, Rock beats Scissors');
        } else {
            console.log('Draw');
        }
    }
}

console.log(playerChoice);
console.log(computerChoice);
play(playerChoice,computerChoice);