const word = document.querySelector('#word')
const letters = document.querySelector('#letters')
const wrongGuessesDisplay = document.querySelector('#wrong-guesses')
const message = document.querySelector('#message')
const restartButton = document.querySelector('#restart')


let randomWord = ""
let guessedLetters = []
let wrongGuesses = 0
const maxWrongGuesses = 6

const words = ["APPLE", "TIGER", "PIZZA", "CANADA", "BANANA", "MONKEY"]

function setupGame(){
    wrongGuesses = 0
    guessedLetters = []
    message.textContent = ""

    const randomIndex = Math.floor(Math.random() * words.length)
    randomWord = words[randomIndex]

    wrongGuessesDisplay.textContent = "Wrong Guesses: 0 / 6"
}

function displayWord(){
    let displayedWord = ""

    for(let i = 0; i < randomWord.length; i++){
        if(guessedLetters.includes(randomWord[i])){
            displayedWord += randomWord[i] + " "
        }
        else{
            displayedWord += "_ "
        }
    }

    word.textContent = displayedWord
}

function createLetters(){
    letters.innerHTML = ""

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    for(let i = 0; i < alphabet.length; i++){
        const button = document.createElement('button')
        button.textContent = alphabet[i]

        button.addEventListener('click', function(){
            guessLetter(alphabet[i])
            button.disabled = true
        })

        letters.appendChild(button)
    }
}
