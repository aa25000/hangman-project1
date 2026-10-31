const word = document.querySelector('#word')
const letters = document.querySelector('#letters')
const wrongGuessesDisplay = document.querySelector('#wrong-guesses')
const message = document.querySelector('#message')
const restartButton = document.querySelector('#restart')


let randomWord = ""
let guessedLetters = []
let wrongGuesses = 0
const maxWrongGuesses = 6