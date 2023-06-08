const inform = console.log;
const { readJSONFile, writeJSONFile } = require("./src/helpers");


inform("Get Shwifty!!!")

const action = process.argv[2];
const item = process.argv[3];
const SKU_ID = process.argv[4];


function run() {
    let writeToCart = false;
    let updatedCart = [];




    "addToCart": "node shopCart.js addToCart",
        "clearCart": "node shopCart.js clearCart",
            "updateQuantity": "node shopCart.js updateQuantity",
                "updateTotal": "node shopCart.js updateTotal",
                    "promo-code": "node shopCart.js promo-code"


}
run()