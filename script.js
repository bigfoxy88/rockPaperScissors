const rock=document.querySelector('.rock');
const paper=document.querySelector('.paper');
const scissors=document.querySelector('.scissors');
const playerScore=document.querySelector('.pscore');
let pscore=0
const computerScore=document.querySelector('.cscore');
let csore=0
const gameOverMess=document.querySelector('.gameOver');
console.log(playerScore.textContent)
let playerChoices=['rock','paper','scissors'];

function pickRandom(){
    let randomNumber=Math.floor(Math.random()*3)
    let compChoice=playerChoices[randomNumber]
    return compChoice
}

//if player picks rock
function ifRock(){
    let player='rock'
    let computer=pickRandom()
    
    if(computer=='paper'){
        gameOverMess.textContent='You lose computer chose paper'
        csore++
        computerScore.textContent=csore
        
    }else if(computer=='scissors'){
        gameOverMess.textContent='You win computer chose scissors';
        pscore++;
        playerScore.textContent=pscore;
    }else{
        gameOverMess.textContent='Draw! you both chose rock'
    }
}

//if player picks paper
function ifPaper(){
    let computer=pickRandom()
    
    if(computer=='scissors'){
        gameOverMess.textContent='You lose computer chose scissors'
        csore++
        computerScore.textContent=csore
        
    }else if(computer=='rock'){
        gameOverMess.textContent='You win computer chose rock';
        pscore++;
        playerScore.textContent=pscore;
    }else{
        gameOverMess.textContent='Draw! you both chose paper'
    }


}

//if player picks scissors
function ifScissors(){
    let computer=pickRandom()
    
    if(computer=='rock'){
        gameOverMess.textContent='You lose computer chose rock'
        csore++
        computerScore.textContent=csore
        
    }else if(computer=='paper'){
        gameOverMess.textContent='You win computer chose paper';
        pscore++;
        playerScore.textContent=pscore;
    }else{
        gameOverMess.textContent='Draw! you both chose scissors'
    }



}


rock.addEventListener('click',ifRock)
paper.addEventListener('click',ifPaper)
scissors.addEventListener('click',ifScissors)