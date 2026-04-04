let num1 = 8
let num2 = 2


document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

function add() {
    let sum = num1 + num2
    document.getElementById("result-el").textContent = "Sum: " + sum
}

function subtract() {
    let difference = num1 - num2
    document.getElementById("result-el").textContent = "Difference: " + difference
}

function multiply() {
    let product = num1 * num2
    document.getElementById("result-el").textContent = "Product: " + product
}

function divide() {
    let quotient = num1 / num2
    document.getElementById("result-el").textContent = "Quotient: " + quotient
}

