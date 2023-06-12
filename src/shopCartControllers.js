const inform = console.log
const { fs } = require("fs")
const { nanoid } = require("nanoid")
const { GetShwifty_Cart } = require("../data/GetShwifty_Cart.json")
const { writeCartJSON, readCartJSON } = require("../src/helpers")

inform("Ehh, Ricky here... We've got to keep an eye out for any zany wacky characters that pop up ")




function addToCart(item_SKU, productName, price, quantity) {

    let shoppingCart = [];

    try {
        shoppingCart = JSON.parse(fs.readCartJSON("GetShwifty_Cart.JSON"));

    } catch (error) {

        inform("Gettin' Learnt With Ricky - Siance")
    }

    shoppingCart.push(cartItem)



};

fs.writeCartJSON("GetShwifty_Cart.JSON", JSON.stringify(shoppingCart, null, 2))









module.exports = {
    addToCart,
    clearCart,
    updateQuantity,
    updateTotal,
    promoCode


}