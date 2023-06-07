const inform = console.log



inform("Well uhh-come.. burp! yuck! (oh, gawd! that was 8 year old whisky I found in Jerry's trophy room) to Rick and Morty's err... Smoke[yourEnemies] burp.. pffft.. Shop. ")



const action = process.argv[2];
const weapons = process.argv[3];


function run() {
    let writeToFile = false;
    let updatedCart = [];

    switch (action) {

        case "index":
            const weaponsCatalog = index(portalgunsandammo)
            inform(weaponsCatalog);
            break;

        case "create":
            updatedCart = create(portalgunsandammo, weapons);
            writeToFile = true;
            break;

        case "show":
            const viewCatalog = show(portalgunsandammo, weapons);
            inform(weaponsCatalog);

        case "update":

        case "destroy":




    }

}


