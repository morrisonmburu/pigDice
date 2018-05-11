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

function getRandomInt() {
  var roll2 = Math.floor(Math.random() *6) +1;

  if (roll2 === 1) {
  	result = 0;
  }else {
  	result += roll2;
  }
  return roll2;
}
//User Interface Logic
$(document).ready(function(){

		var scores = function(){
			var die = getRandomInt();
			var output = "&#x268" + (die-1) + ";";
			var score = result;
			$("#winsPlayer1").text(score);
		$("#display").html(output);
		$("#scorePlayer1").text(die);

		if (score === 0) {
			alert("your score is zero click pass to switch to player2")
		}else if(score >= 100) {
			alert("your score is 100, you win!!!")
		}
		return score;
	}
	$("button#roll").click(function(){
		scores();
		
	})
	$("button#pass").click(function(){
		$(".buttons1").hide();
		$(".buttons2").show();
	})


		var scores2 = function(){
			var die2 = getRandomInt();
			var output2 = "&#x268" + (die2-1) + ";";
			var score2 = result;
			$("#winsPlayer2").text(score2);
		$("#scorePlayer2").text(die2);
		$("#display").html(output2);
		

		if (score2 === 0) {
			alert("your score is zero click pass to switch to player1")
		}else if(score2 >= 100) {
			alert("your score is 100, you win!!!")
		}
		return score2;
	}
	$("button#roll1").click(function(){
		scores2();
	})
	$("button#pass1").click(function(){
		$(".buttons2").hide();
		$(".buttons1").show();
	})

	})