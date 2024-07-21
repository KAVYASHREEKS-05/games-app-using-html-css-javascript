const Buttons = document.querySelectorAll('.button')
const Restart = document.querySelector('.restart')
const popup = document.querySelector('.popup')
const popupMessage = document.getElementById('message')
const newGameButton = document.getElementById('new-game')

console.log(Buttons)
let winingPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [2, 5, 8],
    [6, 7, 8],
    [3, 4, 5],
    [1, 4, 7],
    [0, 4, 8],
    [2, 4, 6]
]

let xTurn = true;
let count = 0;
function disabledButton() {
    Buttons.forEach((ele) => {
        ele.disabled = true
    })
    popup.classList.remove('hidden')
}
function enableButton() {
    Buttons.forEach((ele) => {
        ele.innerText = ''
        ele.disabled = false
        ele.style.backgroundColor = ''; // Reset background color
        ele.style.textShadow = ''; // Reset text shadow
    })
    popup.classList.add('hidden')
}
newGameButton.addEventListener('click', () => {
    count = 0;
    enableButton()
})
Restart.addEventListener('click', () => {
    count = 0;
    enableButton()
    

})
function winFunction(letter) {
    disabledButton();
    
    if (letter == 'X') {
        popupMessage.innerHTML = "X win the game"
    }
    else {
        popupMessage.innerHTML = "O win the game"
    }

}


function drawFunction() {
    disabledButton();
    popupMessage.innerHTML = "Draw"
}

function resetButtonStyles() {
    Buttons.forEach((button) => {
        button.style.backgroundColor = ''; 
    });
}
function Highlight(pattern){
  pattern.forEach((item)=>{
      Buttons[item].style.backgroundColor='red'
      Buttons[item].style.color='white'
  })
}
function winChecker() {
    for (i of winingPattern) {
        let [element1, element2, element3] = [Buttons[i[0]].innerText,
        Buttons[i[1]].innerText,
        Buttons[i[2]].innerText,

    ]

    // console.log(element1)
    // console.log(element2)
    // console.log(element3)
        if (element1 != '' & element2 != ''&&element3 != '') {
            if (element1 == element2 && element2 == element3) {
                Highlight(i)
               setTimeout(()=>{
                winFunction(element1)
               },1000)
               
            }
        }
       
    }
}

Buttons.forEach((ele) => {
    ele.addEventListener('click', () => {
        if (xTurn) {
            xTurn = false;
            ele.innerText = "X"
            ele.style.color = "#B2248C";
            ele.style.textShadow='2px 2px 5px #B2248C ';
           
            ele.disabled = true
        }
        else {
            xTurn = true;
            ele.innerText = 'O';
            ele.style.color = "#7115D2";
            ele.style.textShadow='2px 2px 5px #7115D2 ';
            ele.disabled = true
        }
        count = count + 1;
        if (count == 9) {
            drawFunction()
        }
        winChecker();
        // console.log(count)
    })
})
window.onload = enableButton;
