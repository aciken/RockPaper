let computerChoice;


const buttons = document.querySelectorAll('button');
let win = 0;
let lose = 0;
let draw = 0;
let round = 1;

const resultShow = document.querySelector('#result');




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


            console.log(`Your selection: ${playerSelection}`);
            console.log(`Computer selection: ${computerSelection}`);
            
                if(playerSelection == 'Rock'){
                    if(computerSelection == 'Scissors'){
                        console.log('You won, Rock beats Scissors')
                        win++;
                    } else if(computerSelection == 'Paper'){
                        console.log('You lose, Paper beats Rock');
                        lose++;
                    } else {
                        console.log('Draw');
                        draw++
                    }
                } else if(playerSelection == 'Paper'){
                    if(computerSelection == 'Rock'){
                        console.log('You won, Paper beats Rock');
                        win++;
                    } else if(computerSelection == 'Scissors'){
                        console.log('You lose, Scissors beat Paper');
                        lose++;
                    } else {
                        console.log('Draw');
                        draw++;
                    }  
                } else if(playerSelection == "Scissors"){
                    if(computerSelection == 'Paper'){
                        console.log('You won, Scissprs beat Paper');
                        win++;
                    } else if(computerSelection == 'Rock'){
                        console.log('You lose, Rock beats Scissors');
                        lose++;
                    } else {
                        console.log('Draw');
                        draw++;
                    }
                } else{
                    console.log('Wrong Input');
                }
                
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









