const xPlayer = 'X';
const oPlayer = 'O';
const boardSquares = document.querySelectorAll('.square');

let whosTurn;
// clear board
gameSetup();

export function gameSetup() {
	whosTurn = 0;
	for (var i = 0; i < boardSquares.length; i++) {
		boardSquares[i].innerText = '';
		boardSquares[i].addEventListener('click', turnClick, false);
	}
}
// check if square is empty
function turnClick(currentDiv) {
	let selectedDiv = document.getElementById(currentDiv.target.id)
  if(selectedDiv.innerText === '') {
    writeInSquare(selectedDiv);
  }
}
// print move
export let writeInSquare = (selectedDiv) => {
  if (whosTurn % 2 === 0) {
    selectedDiv.innerText = xPlayer;
    whosTurn++;
  }
  else {
    selectedDiv.innerText = oPlayer;
    whosTurn++;
  }
  checkIfGameComplete();
}
// check if board is filled
let checkIfGameComplete = () => {
  if(whosTurn === 9) {
		// wait then clear board
		function clearBoard() {
			gameSetup();
		}
		setTimeout(clearBoard, 1500)
  }
}
