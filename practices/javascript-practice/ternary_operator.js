// let message = ''

// if (exerciseTimeMins < 30) {
//   message = 'You need to try harder!'
// } else if (exerciseTimeMins < 60) {
//   message = 'Doing good!'
// } else {
//   message = 'Excellent!'
// }

const exerciseTimeMins = 45

const message = exerciseTimeMins < 30 
  ? 'You need to try harder!' 
  : exerciseTimeMins < 60 
    ? 'Doing good!' 
    : 'Excellent!'

console.log(message)

const playerGuess = 3
const correctNumber = 6
const guessMessage = playerGuess === correctNumber
  ? 'You win!' 
  : 'Try again!'
console.log(guessMessage)