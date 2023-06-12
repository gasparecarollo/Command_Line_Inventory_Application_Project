const inform = console.log
const { fs } = require("fs")
const { nanoid } = require("nanoid")
const { GetShwifty_Cart } = require("../data/GetShwifty_Cart.json")

inform("Ehh, Ricky here... We've got to keep an eye out for any zany wacky characters that pop up ")




function addToCart(item_SKU, productName, price, quantity) {
    const cartItem = {

        item_SKU: nanoid(6),
        productName: productName,
        price: price,
        quantity: quantity

    };
    let shoppingCart = [];

    if (fs.existsSync("GetShwifty_Cart.JSON")) {
        const cartData = fs.readFileSync("GetSchwifty_Cart.JSON");
        shoppingCart = JSON.parse(cartData);
    }
    shoppingCart.push(cartItem)

    fs.writeFileSync("GetShwifty_Cart.JSON", JSON.stringify(shoppingCart, null, 2))

}












module.exports = {
    addToCart,
    clearCart,
    updateQuantity,
    updateTotal,
    promoCode


}