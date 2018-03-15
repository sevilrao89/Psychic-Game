console.log("checking log")

var SECRET = randomCharacter()
function randomCharacter(){

 	let A = "A".charCodeAt(0)
    let eCode = Math.floor(Math.random() * Math.floor(27)) + A
    return String.fromCharCode(eCode)

}

function incrementWins(){
	var Wtotal = document.querySelector("#w-total") 
	var increment = Number(Wtotal.innerHTML) +1 
	Wtotal.innerHTML = increment

}

function incrementLosses(){
	var Ltotal = document.querySelector("#l-total")
	var increment = Number(Ltotal.innerHTML) +1
	Ltotal.innerHTML = increment
}

function decrementGuesses(){
	var Rtotal = document.querySelector("#rem-total")
	var decrement = Number(Rtotal.innerHTML) - 1
	Rtotal.innerHTML = decrement
	Rtotal.offsetHeight // because chrome sucks
	return decrement	
}

function appendBadGuess(letter) {
	var Gtotal = document.querySelector("#guesses")
	var guesses = (Gtotal.innerHTML) 
	Gtotal.innerHTML = guesses + " " + letter 
	

}

function play() {
	// while (true){
		var i = 1
		while(i--){


		var guess = prompt("guess a letter").toUpperCase()
		if (isCorrect(guess)){
			alert("Congrats you have chosen the correct letter! " + SECRET)
			incrementWins()
			if (playagain())
				continue  // choose random letter 
			else 
				return


		}

		else{
			appendBadGuess(guess)
			if (decrementGuesses() == 0){
				alert("You have lost " + SECRET)
				incrementLosses()
				if (playagain())
					continue
				else
					return
			}



		}

	 }

}
var START_GUESSES = 3;



function playagain(){
	var choice = prompt("Would you like to play again? (Y or N)")
	if (choice == "Y"){
		document.querySelector("#rem-total").innerHTML = START_GUESSES
		document.querySelector("#guesses").innerHTML = ""
		return true	

	}

	alert("Thanks for playing!")
	return false

														
	
}	

function isCorrect(letter) {
	return SECRET == letter
}

function deBug(){
	var i = 4 
	while (i--){
		decrementGuesses()
		alert("Whatever")
	}
}
