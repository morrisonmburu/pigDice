//Business Logic
var player1 = 0;
var result = 0;
function getRandomInt() {
  var roll = Math.floor(Math.random() *6) +1;

  if (roll === 1) {
  	result = 0;
  }else {
  	result += roll;
  }
  return roll;
}
//User Interface Logic
$(document).ready(function(){

		var scores = function(){
			var roll = getRandomInt();
			var score = result;
			$("#winsPlayer1").text(score);
		$("#scorePlayer1").text(roll);
	}
	$("button#roll").click(function(){
		scores();
	})
	})