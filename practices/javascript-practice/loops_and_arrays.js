let largeCountries = ["China", "India", "USA", "Indonesia", "Turkiye"]

console.log("The 5 largest countries in the world: ")
for (let i = 0; i < largeCountries.length; i++) {
    console.log("- " + largeCountries[i])
}

let largeCountries2 = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"]

largeCountries2.pop()
largeCountries2.push("Turkiye")
largeCountries2.shift()
largeCountries2.unshift("China")