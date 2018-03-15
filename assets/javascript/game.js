console.log("checking log")

var SECRET = randomCharacter()
function randomCharacter(){

    let A = "A".charCodeAt(0)
    let eCode = Math.floor(Math.random() * Math.floor(26)) + A
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
	Rtotal.getBoundingClientRect()
	//Rtotal.offsetHeight // because chrome sucks
	return decrement	
}

function appendBadGuess(letter) {
	var Gtotal = document.querySelector("#guesses")
	var guesses = Gtotal.textContent
	Gtotal.textContent = guesses + " " + letter 
	//Gtotal.style["z-index"] += 5

}

function play() {
	// while (true){
		var i = 3
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
				alert("You have lost! I was thinking of '" + SECRET + "'")
				incrementLosses()
				window.setTimeout(function(){
					if (playagain())
						play()
				}, 0)
		     }
			console.log("Hah Chrome " + document.getElementById("guesses").firstChild.textContent)



		}

	 }

}
var START_GUESSES = 9;



function playagain(){
	var choice = prompt("Would you like to play again? (Y or N)")
	if (choice.toUpperCase() == "Y"){
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

function reset()
{
	document.querySelector("#rem-total").innerHTML = START_GUESSES
	document.querySelector("#guesses").innerHTML = ""
	document.querySelectorAll("#guess-chars li").forEach((li) => li.classList.remove("chosen"))
	SECRET = randomCharacter()

}
function deBug(){
	var i = 4 
	while (i--){
		decrementGuesses()
		alert("Whatever")
	}
}

let ul = document.querySelector("#guess-chars")
ul.onclick = function(ev)
{
    if (! ev.target.classList || ev.target.tagName.toUpperCase() !== "LI" || ev.target.classList.contains("chosen"))
    {
        ev.stopPropagation()
        return
    }
    let c = ev.target.textContent.trim()
    console.log("Guessing " + ev.target.textContent)
    if (isCorrect(c))
    {
        incrementWins()
        alert("Congratulations! You read my mind")
        reset()
        
    }
    else
    {
        ev.target.classList.add("chosen")
        appendBadGuess(c)
        
        if (! decrementGuesses())
        {
            incrementLosses()
            alert('Sorry! I was thinking of "' + SECRET + '"')
            reset()
        
        }
    }
}



//play()
