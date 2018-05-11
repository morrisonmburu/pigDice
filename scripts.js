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
			$(".buttons1").hide();
			$(".buttons2").show();
		}else if(score >= 30) {
			var snd = new Audio('You Win (Voice) - Sound Effect HD.mp3'); 
			snd .onended = function () {alert("your score is 30, you win!!!");}
			snd .play();
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
			$(".buttons2").hide();
			$(".buttons1").show();
		}else if(score2 >= 30) {

			var snd = new Audio('You Win (Voice) - Sound Effect HD.mp3'); 
			snd .onended = function () {alert("your score is 30, you win!!!");}
			snd .play();
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

	
function chkform()
                {

    var inputs = [];
    inputs[0] = document.getElementById("player1");


    for( i =0; i < inputs.length; i++) {

                  if (inputs[i].value === "" ) 
                  {

                   document.getElementById("er1").innerHTML = "Please Enter player1!!!"; 
                   document.getElementById("er1").style.color = "red"; 
                   document.getElementById("er1").style.display = "block";
               }
           }
}
	  $("form#entry").submit(function(event) {
      event.preventDefault();
      chkform();

	var entry1 = $("#player1").val();
	var entry2 = $("#player2").val();

$("#Ready-player1").text(entry1).val();
$("#Ready-player2").text(entry2).val();

})
        })