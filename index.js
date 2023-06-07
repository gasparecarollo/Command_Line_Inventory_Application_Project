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
            const weaponsCatalog = index(portalgunsandammo)
            inform(weaponsCatalog);
            break;

        case "show":
            const viewCatalog = show(portalgunsandammo, weapon);
            inform(weaponsCatalog);

        case "create":
            updatedCatalogue = create(portalgunsandammo, weapon);
            writeToFile = true;
            break;

        case "read":

        case "update":
            updatedCatalogue = update(portalgunsandammo)
            writeToFile = true;
            break;

        case "destroy":
            updatedCatalogue = destroy(portalgunsandammo, updatedCatalog)
            writeToFile = true;
            break;







    }

}


