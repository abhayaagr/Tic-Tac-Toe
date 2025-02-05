let btns = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset-btn");
let playAgain = document.querySelector(".new-btn");
let winnerText = document.querySelector(".msg");
let winner = document.querySelector(".winner");
let game = document.querySelector(".game");

let turnX = true;
let count = 0;

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        if(turnX){
            btn.innerText = "X";
            turnX = false;
        }
        else{
            btn.innerText = "O";
            turnX = true;
        }
        btn.disabled = true;
        count++;

        let won = checkWinner();
        if(count == 9 && !won){
            gameDraw();
        }
    })
})

const resetGame = () => {
    count = 0;
    turnX = true;
    btns.forEach(btn => {
        btn.innerText = "";
        btn.disabled = false;
    })
}

resetbtn.addEventListener("click", resetGame);

playAgain.addEventListener("click", () => {
    resetGame();
    game.style.display = "";
    winner.style.display = "none";
})

const winningPatterns = [[0,1,2],[3,4,5],[6,7,8],[0,3,4],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

const checkWinner = () => {
    for(let pattern of winningPatterns){
        let val1 = btns[pattern[0]].innerText;
        let val2 = btns[pattern[1]].innerText;
        let val3 = btns[pattern[2]].innerText;

        if(val1 != "" && val2 != "" && val3 != ""){
            if(val1 === val2 && val2 === val3){
                showWinner(val1);
                return true;
            }
        }
    }
    return false;
}

const showWinner = (val) => {
    game.style.display = "none";
    winnerText.innerText = "Congratulations !!! \n Winner is " + val;
    winner.style.display = "block";
}

const gameDraw = () => {
    game.style.display = "none";
    winnerText.innerText = "Oops !! \n Game Draw";
    winner.style.display = "block";
}

