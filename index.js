const xPlayer = 'X';
const oPlayer = 'O';
const boardSquares = document.querySelectorAll('.square');

let whosTurn;

gameSetup();

export function gameSetup() {
	whosTurn = 0;
	for (var i = 0; i < boardSquares.length; i++) {
		boardSquares[i].innerText = '';
		boardSquares[i].addEventListener('click', turnClick, false);
	}
}

function turnClick(currentDiv) {
	let selectedDiv = document.getElementById(currentDiv.target.id)
  if(selectedDiv.innerText === '') {
    writeInSquare(selectedDiv);
  }
}

export function writeInSquare(selectedDiv) {
  if (whosTurn % 2 === 0) {
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
  if(whosTurn === 9) {
		gameSetup()
  }
}
