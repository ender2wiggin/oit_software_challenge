var vue_intro = new Vue({
    el: '#intro',
    data: {
        introMessage: 'Welcome, User, to the Anagram Challenge!'
    }
})
var vue_instructions = new Vue({
    el: '#instructions',
    data: {
        instructionsMessage: 'The rules are simple. Click the button to begin the game. Guess words based on this set of scrambled letters below. If you guess the original word, you win! \nYou do not necessarily need to use all letters for your word to be a valid guess. Guessed words will be displayed at the bottom, no duplicate words please!'
    }
})
var vue_letters = new Vue({
    el: '#letters',
    data: {
        lettersMessage: scrambledLetters
    }
})
var vue_quit = new Vue({
    el: '#quit',
    data: {
        quitMessage: 'Hope you had fun! Have a nice day!'
    }
})