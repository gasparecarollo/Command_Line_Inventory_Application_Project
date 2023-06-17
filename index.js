const inform = console.log
const { readJSONFile, writeJSONFile } = require("./src/helpers")
const { index, show, create, destroy, edit } = require("./src/controllers.js")



inform("Well uhh-come.. burp! yuck! (oh, gawd! that was 8 year old whisky I found in Jerry's trophy room) to Rick and Morty's err... Smoke[yourEnemies] burp.. pffft.. Shop. ")


function run() {
    let writeToFile = false;
    let updatedCatalog = [];

    let weapons = readJSONFile("data", "portalgunsandammos.JSON")
    console.log("Here is the data read:", weapons)

    const action = process.argv[2];
    const weaponName = process.argv[3];
    const item_SKU = process.argv[4];
    const description = process.argv[5];
    const price = process.argv[6];
    const inStock = process.argv[7];
    const availableInYourDimension = process.argv[8];





    switch (action) {

        case "index":
            const weaponsCatalog = index(weapons)
            inform(weaponsCatalog);
            break;

        case "show":
            const viewCatalog = show(weapons, weaponName, item_SKU, description, price, inStock, availableInYourDimension);
            inform(viewCatalog);
            break;

        case "create":
            updatedCatalog = create(weapons, weaponName, item_SKU, description, price, inStock, availableInYourDimension);
            writeToFile = true;
            break;

        case "update":
            updatedCatalog = edit(weapons, weaponName, item_SKU, description, price, inStock, availableInYourDimension)
            writeToFile = true;
            inform(updatedCatalog)
            break;

        case "destroy":
            updatedCatalog = destroy(weapons, weaponName)
            writeToFile = true;
            inform("You've removed one irritating pocket Morty from this GodForSaken intergalactic dimension", updatedCatalog)
            break;

        default:
            inform("Rick: We've got to keep an eye out for any zany wacky characters that pop up");
    }


    if (writeToFile) {
        writeJSONFile("./data", "portalgunsandammos.json", updatedCatalog)
    }

}

run()



module.exports = {
    index,
    create,
    show,
    edit,
    destroy
}