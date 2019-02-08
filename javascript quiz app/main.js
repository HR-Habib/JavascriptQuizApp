
function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var correct = 0;


	if (question1 == "Dhaka") {
		correct++;
}
	if (question2 == "Asia") {
		correct++;
}	
	if (question3 == "Water Lily") {
		correct++;
	}
	
	var pictures = ["img/win.gif", "img/meh.jpeg", "img/lose.gif"];
	var messages = ["Great job!", "That's just okay", "You really need to do better"];
	var score;

	if (correct == 0) {
		score = 2;
		document.getElementById("after_submit").style.color = "hotpink";
	}

	if (correct > 0 && correct < 3) {
		score = 1;
		document.getElementById("after_submit").style.color = "yellow";
	}

	if (correct == 3) {
		score = 0;
		document.getElementById("after_submit").style.color = "springgreen";
	}

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	document.getElementById("picture").src = pictures[score];


/*
if (correct == 0) {
		document.getElementById("after_submit").style.color = "hotpink";
	}
	if (correct > 0 && correct < 3) {
		document.getElementById("after_submit").style.color = "yellow";
	}
	if (correct == 3) {
		document.getElementById("after_submit").style.color = "springgreen";
	}
	
*/

	



	}
	
