let hasDiscountCode = true

function processOrder() {
    if (hasDiscountCode) {
        console.log("Discount code applied!")
        hasDiscountCode = false
    } else {
        console.log("No discount code applied.")
    }
}

processOrder()
processOrder()