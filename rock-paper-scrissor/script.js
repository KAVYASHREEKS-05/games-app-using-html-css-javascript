const Choices = document.getElementById('choices');
const myChoice = document.getElementById('my-choice');
const opponentChoice = document.getElementById('opponent-choice');
const scoreBoard = document.querySelector('.score-board');
const playAgain = document.querySelector('.playAgain');

let myScore = 0;
let opponentScore = 0;
const choices = ['rock', 'paper', 'scissors'];


function initializeGame() {
    myScore = 0;
    opponentScore = 0;
    updateScoreDisplay();
    hideScoreBoard();
    myChoice.src = "/hand2.png";
    opponentChoice.src = "/hand1.png";
   
}


function updateScoreDisplay() {
    document.getElementById('my-score').innerText = myScore;
    document.getElementById('opponent-score').innerText = opponentScore;
}

function hideScoreBoard() {
    scoreBoard.classList.add('hidden');
}



function showWinner(){
    setTimeout(()=>{
        if (myScore > opponentScore) {
                    scoreBoard.classList.remove('hidden');
                    document.querySelector('.won').innerText = "You won the Game";
                } else if(myScore<opponentScore) {
                    scoreBoard.classList.remove('hidden');
                    document.querySelector('.won').innerText = "You lost the Game";
                }
                else{
                    scoreBoard.classList.remove('hidden');
                    document.querySelector('.won').innerText = "Game is Draw";
                }
    },2000)
}

function selectChoice() {

    setTimeout(() => {
    opponentChoice.classList.remove('animation')
    myChoice.classList.remove('animation')
    let me = this.id;
    console.log(me);
    myChoice.src = me + '.png';
    let opponent = choices[Math.floor(Math.random() * choices.length)];
    opponentChoice.src = opponent + '.png';

    if(me==opponent){
        myScore+=1;
        opponentScore+=1
    }
    else{
        if(me=='rock'){
            if(opponent=='scissors'){
                myScore+=1
            }
            else if(opponent=='paper'){
                opponentScore+=1
            }

        }
        else if(me=='paper'){
            if(opponent=='rock'){
                myScore+=1
            }
            else if(opponent=='scissors'){
                opponentScore+1
            }

        }
        else if(me=='scissors'){
            if(opponent=='paper'){
                myScore+=1
            }
            else if(opponent=='rock'){
                opponentScore+=1
            }

        }

    }
    updateScoreDisplay();
    showWinner();
    },1000)
}


window.onload = function () {
    initializeGame();

    for (let i = 0; i < choices.length; i++) {
        let choice = document.createElement('img');
        choice.id = choices[i];
        choice.src = choices[i] + '.png';
        choice.addEventListener('click', selectChoice);
        Choices.appendChild(choice);
    }
};


playAgain.addEventListener('click', function () {
    initializeGame(); 
    opponentChoice.classList.add('animation')
    myChoice.classList.add('animation')
   
});
