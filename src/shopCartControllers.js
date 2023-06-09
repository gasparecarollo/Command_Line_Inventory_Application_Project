const inform = console.log
const { nanoid } = require("nanoid")
const { GetShwifty_Cart } = require("../data/GetShwifty_Cart.json")

inform("Ehh, Ricky here... We've got to keep an eye out for any zany wacky characters that pop up ")




function addToCart() {
    let shoppingCart = [];

    try {
        shoppingCart = JSON.parse(fs.readFileSync("GetShwifty_Cart.JSON"))
    } catch (error) {
        console.log(error, "Ehh, Ricky here...We've got to keep an eye out for any zany wacky characters that pop up")
    }


}












module.exports = {
    addToCart,
    clearCart,
    updateQuantity,
    updateTotal,
    promoCode


}