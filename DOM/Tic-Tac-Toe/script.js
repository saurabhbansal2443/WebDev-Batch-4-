let strBtn = document.querySelector(".button");
let gameStm = document.querySelector(".gameStatement");
let gameBoard = document.querySelector(".board");
let allCells = document.querySelectorAll(".cell");

let gamePlay = false;
let turn = "X";
let count = 0 ;

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
    count = 0 ;
    strBtn.innerHTML = " Press to restart ";
    strBtn.style.backgroundColor = "red";
    gameStm.innerHTML = "X's Turn ";
  }
});
gameBoard.addEventListener("click", function (event) {
  let targetEle = event.target;
  if (gamePlay == true) {
    targetEle.innerHTML = turn;
     count++;
    
    if (turn == "X") {
      turn = "0";
    } else {
      turn = "X";
    }
    
    gameStm.innerHTML = turn + "'s  turn ";

    if(count == 9 ){
        gameStm.innerHTML = "TIE";
        strBtn.innerHTML = "Game is Starting ";
        setTimeout(()=>{
            strBtn.click();
        } , 3000)
        
    }

    let winRes = checkWinner();

    if (winRes == 1) {
      // zero is winner
      gameStm.innerHTML = "0 Wins ";
      strBtn.innerHTML = "Game is Starting ";
      setTimeout(()=>{
        strBtn.click();
    } , 3000)
    
    } else if (winRes == 2) {
      // x is winner
      gameStm.innerHTML = "X Wins ";
      strBtn.innerHTML = "Game is Starting ";
      setTimeout(()=>{
        strBtn.click();
    } , 3000)
    
    }
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
