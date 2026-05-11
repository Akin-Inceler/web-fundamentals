const player = "John"
const opponent = "Jane"
const game = "Amazing Figher"
let points = 0
let hasWon = false

points += 100
hasWon = true

if (hasWon) {
    console.log(`${player} got ${points} points and won the ${game} game against ${opponent}`)
} else {
    console.log(`${player} got ${points} points and lost the ${game} game against ${opponent}`)
}
