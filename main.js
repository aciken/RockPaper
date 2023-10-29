let computerChoice;
let playerChoice = 'Scissors';
let win = 0;
let lose = 0;
let draw = 0;

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


const playerSelection = window.prompt("Rock, Paper or Scissors", "");
if(playerSelection !== 'Rock' || playerSelection !== 'Paper' || playerSelection !== 'Scissors'){

};
let computerSelection = getComputerChoice();


console.log(`Your selection: ${playerSelection}`);
console.log(`Computer selection: ${computerSelection}`);

    if(playerSelection === 'Rock'){
        if(computerSelection === 'Scissors'){
            console.log('You won, Rock beats Scissors')
            win++;
        } else if(computerSelection === 'Paper'){
            console.log('You lose, Paper beats Rock');
            lose++;
        } else {
            console.log('Draw');
            draw++
        }
    } else if(playerSelection === 'Paper'){
        if(computerSelection === 'Rock'){
            console.log('You won, Paper beats Rock');
            win++;
        } else if(computerSelection === 'Scissors'){
            console.log('You lose, Scissors beat Paper');
            lose++;
        } else {
            console.log('Draw');
            draw++;
        }  
    } else if(playerSelection == "Scissors"){
        if(computerSelection === 'Paper'){
            console.log('You won, Scissprs beat Paper');
            win++;
        } else if(computerSelection === 'Rock'){
            console.log('You lose, Rock beats Scissors');
            lose++;
        } else {
            console.log('Draw');
            draw++;
        }
    } else{
        console.log('Wrong Input');
    }
}


const game = () =>{
    for(let i = 0; i < 5; i++){
       play();
}
if(win > lose){
    console.log('YOU HAVE WON A GAME');
} else if(lose > win){
    console.log('YOU HAVE LOST A GAME');
} else {
    console.log('THE GAME IS DRAW');
}
}

game();
