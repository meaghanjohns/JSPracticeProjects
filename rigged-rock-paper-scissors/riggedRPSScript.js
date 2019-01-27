let initialAnswer = prompt("Ready to lose? Pick one: rock, paper, or scissors.");
let userAnswer = initialAnswer.toUpperCase();

while(userAnswer){
	while((userAnswer.indexOf("ROCK") === -1) && (userAnswer.indexOf("PAPER") === -1) && (userAnswer.indexOf("SCISSOR") === -1)){
		alert("You have to pick one!");
		initialAnswer = prompt("Ready to lose? Pick one: rock, paper, or scissors.");
		userAnswer = initialAnswer.toUpperCase();
	}
	while(userAnswer.indexOf("ROCK") === 0 || userAnswer.indexOf("PAPER") === 0 || userAnswer.indexOf("SCISSOR") === 0){
		if(userAnswer.indexOf("ROCK") === 0){
			alert("You lose. I picked paper. Try again.");
			initialAnswer = prompt("Ready to lose? Pick one: rock, paper, or scissors.");
			userAnswer = initialAnswer.toUpperCase();
		}
		if(userAnswer.indexOf("PAPER") === 0){
			alert("You lose. I picked scissors. Try again.");
			initialAnswer = prompt("Ready to lose? Pick one: rock, paper, or scissors.");
			userAnswer = initialAnswer.toUpperCase();
		}
		if(userAnswer.indexOf("SCISSOR") === 0){
			alert("You lose. I picked rock. Try again.");
			initialAnswer = prompt("Ready to lose? Pick one: rock, paper, or scissors.");
			userAnswer = initialAnswer.toUpperCase();
		}	
	};
};

alert("Ha! You gave up.");