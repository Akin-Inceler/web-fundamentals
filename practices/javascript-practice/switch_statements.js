// Price List 
// - Coffee $2.50
// - Tea $1.75
// - Juice $3.00

function selectItem(item) {
    let price = 0
    switch (item) {
        case 'Coffee':
            price = 2.50
            break
        case 'Tea':
            price = 1.75
            break
        case 'Juice':
            price = 3.00
            break
        default:
            return `Sorry, we don't sell ${item}.`
    }   
    return `You selected ${item}. Price: $${price}`
}

console.log(selectItem('Coffee'))
console.log(selectItem('Tea')) 
console.log(selectItem('Juice')) 
console.log(selectItem('Soda')) 