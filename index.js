const xPlayer = 'X';
const oPlayer = 'O';
const boardSquares = document.querySelectorAll('.square');

let whosTurn = 0;
let board;

gameSetup();

function gameSetup() {
	board = Array.from(Array(9).keys());
	for (var i = 0; i < boardSquares.length; i++) {
		boardSquares[i].innerText = '';
    console.log(boardSquares[i])
		boardSquares[i].addEventListener('click', turnClick, false);
    console.log(boardSquares[i])
	}
}

function turnClick(currentDiv) {
	let selectedDiv = document.getElementById(currentDiv.target.id)
	console.log(selectedDiv)
  if(selectedDiv.innerText === '') {
		console.log("RRR")
    writeInSquare(selectedDiv);
  }
}

export function writeInSquare(selectedDiv) {
  if (whosTurn % 2 === 0) {
		console.log("read")
    selectedDiv.innerText = xPlayer;
    whosTurn++;
  }
  else {
    selectedDiv.innerText = oPlayer;
    whosTurn++;
  }
  checkIfGameComplete()
}

function checkIfGameComplete() {
  if(whosTurn === 8) {
    console.log("end")
  }
}
