const inform = console.log
const { readJSONFile, writeJSONFile } = require("./src/helpers")
const { index, show, create, update, destroy } = require("./src/controllers.js")



inform("Well uhh-come.. burp! yuck! (oh, gawd! that was 8 year old whisky I found in Jerry's trophy room) to Rick and Morty's err... Smoke[yourEnemies] burp.. pffft.. Shop. ")


function run() {
    let writeToFile = false;
    let updatedCatalog = [];

    let weapons = readJSONFile("data", "portalgunsandammos.JSON")
    console.log("Here is the data read:", weapons)

    const action = process.argv[2];
    const weapon = process.argv[3];
    const description = process.argv[4];
    const price = process.argv[5];
    const inStock = process.argv[6];
    const availableInYourDimension = process.argv[7];
    const item_SKU = process.argv[8];




    switch (action) {

        case "index":
            const weaponsCatalog = index(weapons)
            inform(weaponsCatalog);
            break;

        case "show":
            const viewCatalog = show(weapons, weapon, description, price, inStock, availableInYourDimension, item_SKU);
            inform(viewCatalog);
            break;

        case "create":
            updatedCatalog = create(weapons, weapon, description, price, inStock, availableInYourDimension, item_SKU);
            writeToFile = true;
            break;

        case "update":
            updatedCatalog = update(weapons, weapon, description, price, inStock, availableInYourDimension, item_SKU)
            writeToFile = true;
            break;

        case "destroy":
            updatedCatalog = destroy(weapons, weapon, description, price, inStock, availableInYourDimension, item_SKU)
            writeToFile = true;
            break;

        default:
            inform("When an error is caught: Rick: We've got to keep an eye out for any zany wacky characters that pop up");
    }


    if (writeToFile) {
        writeJSONFile("./data", "portalgunsandammos.json", updatedCatalog)
    }

}

run()
