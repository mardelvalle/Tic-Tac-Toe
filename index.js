const xPlayer = 'X';
const oPlayer = 'O';
const boardSquares = document.querySelectorAll('.square');
const winner = document.getElementById("winner");
const currentPlayer = document.getElementsByTagName("h2")[0];
const winningSituations = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[2, 5, 8],
	[1, 4, 7],
	[0, 3, 6],
	[0, 4, 8],
	[2, 6, 4]
];
let whosTurn;
let xPlayerPicks;
let oPlayerPicks;
// clear board
gameSetup();

export function gameSetup() {
	whosTurn = 0;
	winner.style.display = "none";
	for (var i = 0; i < boardSquares.length; i++) {
		xPlayerPicks = [];
		oPlayerPicks = [];
		boardSquares[i].innerText = '';
		currentPlayer.innerText = "Player X";
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
		xPlayerPicks.push(selectedDiv.id);
    whosTurn++;
		checkIfGameComplete(xPlayer, xPlayerPicks);
  }
  else {
    selectedDiv.innerText = oPlayer;
		oPlayerPicks.push(selectedDiv.id);
    whosTurn++;
		checkIfGameComplete(oPlayer, oPlayerPicks);
  }
}
// check if board is filled
let checkIfGameComplete = (thePlayer, playerPicks) => {
	if (whosTurn > 4) {
		winningSituations.forEach(function(situation) {
			if ((playerPicks.includes(situation[0].toString())) &&
				(playerPicks.includes(situation[1].toString())) &&
				(playerPicks.includes(situation[2].toString()))) {
					ifWin(thePlayer)
			}
			else if(whosTurn === 9) {
				ifTie()
			}
			else if ((!playerPicks.includes(situation[0].toString())) &&
				(!playerPicks.includes(situation[1].toString())) &&
				(!playerPicks.includes(situation[2].toString()))){
				displayCurrentPlayer;
			}
		});
	}
	else {
		displayCurrentPlayer()
	}
}
// show winning information of a message and count increase
const ifWin = (winnerPlayer) => {
	winner.innerText = `Game over, player ${winnerPlayer} won`;
	winner.style.display ="block";
	if(winnerPlayer === xPlayer) {
		const totalX = document.getElementById("playerXWin").innerText;
		document.getElementById("playerXWin").innerText = parseInt(totalX) + 1;
		clear();
	}
	else {
		const totalO = document.getElementById("playerOWin").innerText;
		document.getElementById("playerOWin").innerText = parseInt(totalO) + 1;
		clear();
	}
}
// end game when all the tiles are filled but no winner with message
const ifTie = () => {
	winner.innerText = `Game over, it's a tie!`;
	winner.style.display ="block";
	clear();
}
// display who should go
const displayCurrentPlayer = () => {
	if (whosTurn % 2 === 0) {
		currentPlayer.innerText = `Player X`;
	}
	else {
		currentPlayer.innerText = `Player O`;
	}
}

// clear the board to start a new game with a delayed clear
const clear = () => {
	currentPlayer.innerText = "New Game Starting...";
	function clearBoard() {
		gameSetup();
	}
	setTimeout(clearBoard, 1500)
}
// clear board when the button is clicked
document.getElementById("newGame").addEventListener("click", gameSetup);
