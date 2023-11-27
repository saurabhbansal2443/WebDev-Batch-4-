let strBtn = document.querySelector(".button");
let gameStm = document.querySelector(".gameStatement");
let gameBoard = document.querySelector(".board");
let allCells = document.querySelectorAll(".cell");


let startSound = new Audio("./gamestart.mp3");
let tieSound = new Audio("./tie.mp3");
let victoryAudio = new Audio("./vicAud.mp3");
let clickSound = new Audio("./click12.aac");
let wrongClick = new Audio("./wrongclickTrimmed.wav");

let gamePlay = false;
let turn = "X";
let count = 0;

let xwins = 0 ;
let owins = 0 ;

// for(let i=0;i<cell.length;i++){

//     let currCell = cell[i];

//     currCell.addEventListener("click",function(){
//         console.log("clicked " , i );
//     })
// }
// used event delegation

strBtn.addEventListener("click", function () {
  if (gamePlay == true) {
    gamePlay = false;
    clearAll();
    strBtn.innerHTML = " Start";
    strBtn.style.backgroundColor = "blue";
    gameStm.innerHTML = "";
  } else {
    gamePlay = true;
    startSound.play();
    count = 0;
    strBtn.innerHTML = " Press to restart ";
    strBtn.style.backgroundColor = "red";
    gameStm.innerHTML = "X's Turn ";
  }

  console.log(xwins , owins);
});
gameBoard.addEventListener("click", function (event) {
  let targetEle = event.target;
  if (gamePlay == true && targetEle.innerHTML=="") {
    clickSound.play();
    targetEle.innerHTML = turn;
    count++;

    if (turn == "X") {
        targetEle.style.color="red";
      turn = "0";
    } else {
        targetEle.style.color="blue";
      turn = "X";
    }

    gameStm.innerHTML = turn + "'s  turn ";

    let winRes = checkWinner();

    if (winRes == 1) {
      // zero is winner
      gameStm.innerHTML = "0 Wins ";
      owins++;
      victoryAudio.play();
      restartTheGame();
    } else if (winRes == 2) {
      // x is winner
      gameStm.innerHTML = "X Wins ";
      xwins++;
      victoryAudio.play();
      restartTheGame();
    } else if (count == 9) {
      gameStm.innerHTML = "TIE";
      tieSound.play();
      restartTheGame();
    }
  }else{
    wrongClick.play();
  }
});

function checkWinner() {
  console.log("check win");

  if (
    (allCells[0].innerHTML == "X" &&
      allCells[1].innerHTML == "X" &&
      allCells[2].innerHTML == "X") ||
    (allCells[3].innerHTML == "X" &&
      allCells[4].innerHTML == "X" &&
      allCells[5].innerHTML == "X") ||
    (allCells[6].innerHTML == "X" &&
      allCells[7].innerHTML == "X" &&
      allCells[8].innerHTML == "X") ||
    (allCells[0].innerHTML == "X" &&
      allCells[3].innerHTML == "X" &&
      allCells[6].innerHTML == "X") ||
    (allCells[1].innerHTML == "X" &&
      allCells[4].innerHTML == "X" &&
      allCells[7].innerHTML == "X") ||
    (allCells[2].innerHTML == "X" &&
      allCells[5].innerHTML == "X" &&
      allCells[8].innerHTML == "X") ||
    (allCells[0].innerHTML == "X" &&
      allCells[4].innerHTML == "X" &&
      allCells[8].innerHTML == "X") ||
    (allCells[2].innerHTML == "X" &&
      allCells[4].innerHTML == "X" &&
      allCells[6].innerHTML == "X")
  ) {
    return 2;
  } else if (
    (allCells[0].innerHTML == "0" &&
      allCells[1].innerHTML == "0" &&
      allCells[2].innerHTML == "0") ||
    (allCells[3].innerHTML == "0" &&
      allCells[4].innerHTML == "0" &&
      allCells[5].innerHTML == "0") ||
    (allCells[6].innerHTML == "0" &&
      allCells[7].innerHTML == "0" &&
      allCells[8].innerHTML == "0") ||
    (allCells[0].innerHTML == "0" &&
      allCells[3].innerHTML == "0" &&
      allCells[6].innerHTML == "0") ||
    (allCells[1].innerHTML == "0" &&
      allCells[4].innerHTML == "0" &&
      allCells[7].innerHTML == "0") ||
    (allCells[2].innerHTML == "0" &&
      allCells[5].innerHTML == "0" &&
      allCells[8].innerHTML == "0") ||
    (allCells[0].innerHTML == "0" &&
      allCells[4].innerHTML == "0" &&
      allCells[8].innerHTML == "0") ||
    (allCells[2].innerHTML == "0" &&
      allCells[4].innerHTML == "0" &&
      allCells[6].innerHTML == "0")
  ) {
    return 1;
  } else {
    return 0;
  }
  0;
}

function clearAll() {
  for (let i = 0; i < allCells.length; i++) {
    allCells[i].innerHTML = "";
  }
}

function restartTheGame() {
  strBtn.innerHTML = "Game is Starting ";
  strBtn.disabled = true;
  setTimeout(() => {
    strBtn.disabled = false;
    strBtn.click();
  }, 3000);
}
