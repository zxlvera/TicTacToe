window.onload = function() {
	// alert('Choose a player');
}

var global_count = 1
var squares = Array(9).fill(null);
var win = false;

function handleClick(i) {
	cell_id = 'c' + i;
	var cell = document.getElementById(cell_id);
	if(cell.innerHTML == "") {
		if(global_count % 2 == 0){
			cell.innerHTML = squares[i]  = "⭕";
		} else {
			cell.innerHTML = squares[i]  = "❌";
		}
		global_count += 1;
	}
	winner = calculateWinner(squares);
	if (winner !== null && win == false) {
		alert(winner + " wins!");
		win = true;
		location.reload(true);
	}
}

function calculateWinner(squares) {
	const lines = [
	  [0, 1, 2],
	  [3, 4, 5],
	  [6, 7, 8],
	  [0, 3, 6],
	  [1, 4, 7],
	  [2, 5, 8],
	  [0, 4, 8],
	  [2, 4, 6],
	];
	for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i];
		if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
			return squares[a];
		}
	}
	return null;
  }
