const inform = console.log;
const { readJSONFile, writeJSONFile, readCartJSON, writeCartJSON } = require("./src/helpers");
const { addToCart, clearCart, updateQuantity, updateTotal, promoCode } = require("./src/shopCartControllers")

inform("Get Shwifty!!!")

const action = process.argv[2];
const item = process.argv[3];
const item_SKU = process.argv[4];


function run() {
    let writeToCart = false;
    let updatedCart = [];

    let itemsInCart = readJSONFile("data", getShwifty_Cart)
    switch (action) {

        case "addToCart":
            const addToCart = addToCart(item)
            writeToFile = true;
            break;

        case "clearCart":
            const clearCart = clearCart(item)
            writeToFile = true;
            break;

        case "updateQuantity":
            const updateQuantity = updateQuantity(item)
            writeToFile = true;
            break;

        case "updateTotal":
            const updateTotal = updateTotal(item)
            writeToFile = true;
            break;

        case "promoCode":
            const promoCode = promoCode(item)
            writeToFile = true;
            break;


    }

    if (writeToFile) {
        writeJSONFile("./data", "GetShwifty_Cart.json", updatedCatalog)
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