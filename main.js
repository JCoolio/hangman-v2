
var Word = require('./word.js');
var prompt = require('prompt');
//starts intro to game
console.log("Welcome to eSports Hangman!");
console.log("Guess a letter of the name of a eSports Team");
console.log("You Have 10 Guesses To Defuse A Bomb Protected By A Word Password! Goodluck!");
console.log("-----------------------------");
prompt.start();


//sets word bank word won counter guessesRemaining
game = {
 	wordBank: ['orbit', 'faze', 'auto', 'optic', 'era', 'headshot', 'killcam'],
 	wordsWon: 0,
 	guessesRemaining: 10,
 	currentWrd: null,
// start game with random word
 	startGame: function (wrd) {
 		this.resetGuesses();
 		this.currentWrd = new Word(this.wordBank[Math.floor(Math.random()* this.wordBank.length)]);
 		this.currentWrd.getLet();
 		this.promptUser();
 	},
// set reset  guessesRemaining
 	resetGuesses: function(){
 		this.guessesRemaining = 10;
 	},
// set guesses left if and else statments
 	promptUser: function(){
 		var self = this;
 		prompt.get(['guessLet'], function(err, result){
 			console.log("You guessed: " + result.guessLet);
 			var manyGuessed = self.currentWrd.checkLetter(result.guessLet);

 			if(manyGuessed ==0) {
 				console.log("You ran out of guesses and the bomb exploded. Feel bad for the clean up crew.");
 				self.guessesRemaining--;

 			} else {
 				console.log("CORRECT");
 					if(self.currentWrd.findWord()){
 						console.log("You defused the bomb! Congrats you have been given a medal from the President!");
 						console.log("-------------------");
 						return;
 					}
 			}
// guessesRemaining win word render
 			console.log("Guesses remaining: " + self.guessesRemaining);
 			console.log("-------------------");
 			if((self.guessesRemaining > 0) && (self.currentWrd.found == false)){
 				self.promptUser();
 			}
 			else if(self.guessesRemaining ==0){
 				console.log("Game over. Correct Word ", self.currentWrd.target);
 			} else {
 				console.log(self.currentWrd.wordRender());
 			}
 		});
 	}
};
game.startGame();
