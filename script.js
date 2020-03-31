$(document).ready(function(){
// Show the Modal on load
	$("#myModal").modal("show");
		
	// Hide the Modal
	$(".btn").click(function(){
		$("#myModal").modal("hide");
	});
});

var global_count = 1;
var squares = Array(9).fill(null);
var win = false;
var player1, player2 = "";

function choosePlayer(i) {
	if (i == 1){
		player1 = "❌";
		player2 = "⭕";
	}
	else {
		player2 = "❌";
		player1 = "⭕";
	}
}

function handleClick(i) {
	cell_id = 'c' + i;
	var cell = document.getElementById(cell_id);
	if(cell.innerHTML == "") {
		if(global_count % 2 == 0){
			cell.innerHTML = squares[i]  = player2;
		} else {
			cell.innerHTML = squares[i]  = player1;
		}
		global_count += 1;
	}
	winner = calculateWinner(squares);

	if (winner !== null && win == false) {
		alert(winner + " wins!");
		win = true;
		global_count = 0;
		location.reload(true);
	}
	if(global_count > 9){
		alert("Draw!");
		win = false;
		global_count = 0;
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
