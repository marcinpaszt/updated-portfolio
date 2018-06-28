$("#start").on("click", function () {
    game.start()
});

//Array//
var superQuestions = [{
    question: "This superhero replaced Steve Rogers as Captain America",
    answers: ["Bucky Barnes", "Peter Parker", "Mickey Mouse", "Eric Cartman"],
    correctAnswer: "Bucky Barnes"
},
{
    question: "Who plays Wonder Woman in the 2017 movie Wonder Woman?",
    answers: ["Steve Buscemi", "Scarlett Johanson", "Elizabeth Olsen", "Gal Gadot"],
    correctAnswer: "Gal Gadot"
},
{
    question: "Which of these superheroes is NOT a member of The Justice League?",
    answers: ["The Flash", "Hawk Girl", "The Coon", "Superman"],
    correctAnswer: "The Coon"
},
{
    question: "This superhero piloted the Dragonzord in Mighty Morphin Power Rangers.",
    answers: ["The White Ranger", "The Red Ranger", "The Green Ranger", "The Black Ranger"],
    correctAnswer: "The Green Ranger"
},
{
    question: "Who assumes the identity of the Caped Crusader also known as Batman?",
    answers: ["Bruce Banner", "Bruce Wayne", "Bruce Almighty", "Bruce Lee"],
    correctAnswer: "Bruce Wayne"
},
{
    question: "Why are the Ant Man and Hawkeye missing from The Avengers: Infinity War?",
    answers: ["They retired", "They are protecting their families", "They joined a coding bootcamp and are busy", "They're lazy"],
    correctAnswer: "They are protecting their families"
}];

//Game//
var game = {
	correct: 0, 
	incorrect: 0, 
	counter: 30, 
	countdown: function() { 
		game.counter--; 
		$('#counter').html(game.counter);
		if(game.counter <=0) {
			console.log("Time is up!"); 
			game.done(); 
		} 
	}, 
	start: function(){
		timer = setInterval(game.countdown, 1000); 
		$('#container').prepend('<h2> Time Remaining: <span id="counter"> 30</span> Seconds</h2>'); 
		$('#start').remove();  
		for (var i = 0; i < superQuestions.length; i++) {
			$('#container').append('<h2>' + superQuestions[i].question + '</h2>');
			for (var j = 0; j < superQuestions[i].answers.length; j++) {
				$("#container").append("<input type='radio' name='question-"+i+"' value='"+superQuestions[i].answers[j]+"'>" + superQuestions[i].answers[j]); 
			}
		}
	}, 

	done: function () { 
		$.each($("input[name='question-0']:checked"), function() {
			if($(this).val()==superQuestions[0].correctAnswer) {
				game.correct++; 
			} else {
				game.incorrect++; 
			}	
		});
		
		$.each($("input[name='question-1']:checked"), function() {
			if($(this).val()==superQuestions[1].correctAnswer) {
				game.correct++; 
			} else {
				game.incorrect++; 
			}	
		});
		
		$.each($("input[name='question-2']:checked"), function() {
			if($(this).val()==superQuestions[2].correctAnswer) {
				game.correct++; 
			} else {
				game.incorrect++; 
			}	
		});
		
		$.each($("input[name='question-3']:checked"), function() {
			if($(this).val()==superQuestions[3].correctAnswer) {
				game.correct++; 
			} else {
				game.incorrect++; 
			}	
		}); 
		
		$.each($("input[name='question-4']:checked"), function() {
			if($(this).val()==superQuestions[4].correctAnswer) {
				game.correct++; 
			} else {
				game.incorrect++; 
			}	
		});
		
		$.each($("input[name='question-5']:checked"), function() {
			if($(this).val()==superQuestions[5].correctAnswer) {
				game.correct++; 
			} else {
				game.incorrect++; 
			}	
		}); 

	this.result(); 
	}, 
	result: function() { 
	clearInterval(timer); 
	$('container h3').remove();
	$('#container').html("<h3>All done!</h3>"); 
	$('#container').append("<h3>Correct Answers: "+this.correct+"</h3>");
	$('#container').append("<h3>Incorrect Answers: "+this.incorrect+"</h3>");
	$('#container').append("<h3>Unanswered: "+(superQuestions.length-(this.incorrect+this.correct))+"</h3>");
	}
}