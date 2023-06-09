const inform = console.log
const { readJSONFile, writeJSONFile } = require("./src/helpers.js")
const { index, show, create, update, destroy } = require("./src/controllers.js")



inform("Well uhh-come.. burp! yuck! (oh, gawd! that was 8 year old whisky I found in Jerry's trophy room) to Rick and Morty's err... Smoke[yourEnemies] burp.. pffft.. Shop. ")



const action = process.argv[2];
const weapon = process.argv[3];



function run() {
    let writeToFile = false;
    let updatedCatalog = [];

    let weapons = readJSONFile("data", portalgunsandammo)
    switch (action) {

        case "index":
            const weaponsCatalog = index(weapons)
            inform(weaponsCatalog);
            break;

        case "show":
            const viewCatalog = show(weapons, weapon, item_SKU);
            inform(weaponsCatalog);
            break;

        case "create":
            updatedCatalog = create(weapons, weapon, item_SKU);
            writeToFile = true;
            break;

        case "update":
            updatedCatalog = update(weapons, weapon, item_SKU)
            writeToFile = true;
            break;

        case "destroy":
            updatedCatalog = destroy(weapons, updatedCatalog)
            writeToFile = true;
            break;

        default:
            inform("Hey, we can't do that Fam :(");
    }


    if (writeToFile) {
        writeJSONFile("./data", "portalgunsandammos.json", updatedCatalog)
    }

}

run()
