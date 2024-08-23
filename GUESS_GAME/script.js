let random_num = parseInt((Math.random()*100)+1)
let user_input_Guess_num = document.querySelector("#guess_num")
let btn = document.querySelector("#sbmt")
let prevGuesses = document.querySelector(".prevGuesses")
let remaningCount = document.querySelector(".remaningCount")
let resultParameter = document.querySelector(".resultParameter")
let lowOrhigh = document.querySelector(".lowOrhigh")

let para = document.createElement("p")





let guess_values = []
let guess_number = 1

let playGame = true

if(playGame){
    btn.addEventListener("click",(e)=>{
        e.preventDefault()
        const in_Guess_value = parseInt(user_input_Guess_num.value)
        validateGuessValue(in_Guess_value)
    })
}

function validateGuessValue(in_Guess_value){
    if(isNaN(in_Guess_value)){
        alert("plese enter a valid number")
    }else if(in_Guess_value < 0){
        alert("plese enter a valid number")
    }else if(in_Guess_value > 100){
        alert("plese enter a valid number")
    }else{
        guess_values.push(in_Guess_value)
        if(guess_number === 10){
            displayGuessValues(in_Guess_value)
            displayMessage(`GameOver!. Random Number was ${random_num}` )
            endGame()
        }else{
            displayGuessValues(in_Guess_value)
            checkGuesses(in_Guess_value)
        }
    }
}

function checkGuesses(in_Guess_value){
    if(in_Guess_value === random_num){
        displayMessage("you win")
        endGame()
    }else if (in_Guess_value<random_num){
        lowOrhigh.textContent = "too low"
    }else {
        lowOrhigh.textContent = "too high"
    }
}

function displayGuessValues(in_Guess_value) {
    user_input_Guess_num.value=""
    prevGuesses.innerHTML += `${in_Guess_value}`
    guess_number++
    remaningCount.innerHTML = `${10-guess_number}`
}

function displayMessage(message) {
    lowOrhigh.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    user_input_Guess_num.value = ''
    user_input_Guess_num.setAttribute("disabled",'')
    para.classList.add("button")
    para.innerHTML = `<h2 id="newGame">Start New Game</h2>`
    resultParameter.appendChild(para)
    playGame = false
    newGame()
}

function newGame(){
    const new_game_btn = document.querySelector("#newGame")
    new_game_btn.addEventListener("click",function(){
    random_num = parseInt((Math.random()*100)+1)
    guess_values = []
    guess_number = 1
    prevGuesses.innerHTML = ''
    para.innerHTML = ''
    remaningCount.innerHTML = `${10-guess_number}`
    user_input_Guess_num.removeAttribute("disabled")
    resultParameter.removeChild(para)
    para.innerHTML = ''

    playGame = true
    

    })
}
