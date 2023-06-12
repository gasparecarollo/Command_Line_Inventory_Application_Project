const inform = console.log;
const { readJSONFile, writeJSONFile, readCartJSON, writeCartJSON } = require("./src/helpers");
const { addToCart, clearCart, updateQuantity, updateTotal, promoCode } = require("./src/shopCartControllers")

inform("Get Shwifty!!!")

const action = process.argv[2];
const item = process.argv[3];
const item_SKU = process.argv[4];
const weaponName = process.argv[5];


function run() {
    let writeToCart = false;
    let updatedCart = [];

    let itemsInCart = readCartJSON("data", "getShwifty_Cart.JSON")
    switch (action) {

        case "addToCart":
            const addToCart = addToCart(item, item_SKU, itemsInCart)
            writeToFile = true;
            break;

        case "clearCart":
            const clearCart = clearCart(item, itemsInCart)
            writeToFile = true;
            break;

        case "updateQuantity":
            const updateQuantity = updateQuantity(item, itemsInCart)
            writeToFile = true;
            break;

        case "updateTotal":
            const updateTotal = updateTotal(item, itemsInCart)
            writeToFile = true;
            break;

        case "promoCode":
            const promoCode = promoCode(item, itemsInCart)
            writeToFile = true;
            break;


    }

    if (writeToFile) {
        writeCartJSON("./data", "GetShwifty_Cart.json", updatedCatalog)
    }


}
run()

module.exports = {
    addToCart,
    clearCart,
    updateQuantity,
    updateTotal,
    promoCode

}