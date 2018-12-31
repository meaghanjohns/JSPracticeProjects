let userAnswer = prompt("Ready to lose? Pick one: rock, paper, or scissors.");

while(userAnswer){
	while((userAnswer.indexOf("rock") === -1) && (userAnswer.indexOf("paper") === -1) && (userAnswer.indexOf("scissor") === -1)){
		alert("You have to pick one!");
		userAnswer = prompt("Ready to lose? Pick one: rock, paper, or scissors.");
	}
	while(userAnswer.indexOf("rock") === 0 || userAnswer.indexOf("paper") === 0 || userAnswer.indexOf("scissor") === 0){
		if(userAnswer.indexOf("rock") === 0){
			alert("You lose. I picked paper. Try again.");
			userAnswer = prompt("Ready to lose? Pick one: rock, paper, or scissors.");
		}
		if(userAnswer.indexOf("paper") === 0){
			alert("You lose. I picked scissors. Try again.");
			userAnswer = prompt("Ready to lose? Pick one: rock, paper, or scissors.");
		}
		if(userAnswer.indexOf("scissor") === 0){
			alert("You lose. I picked rock. Try again.");
			userAnswer = prompt("Ready to lose? Pick one: rock, paper, or scissors.");
		}	
	};
};

alert("Ha! You gave up.");