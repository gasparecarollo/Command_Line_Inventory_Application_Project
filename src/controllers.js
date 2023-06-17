const inform = console.log
const { nanoid } = require("nanoid")
const { portalGunsAndAmmo } = require("../data/portalgunsandammos.json")
const { writeJSONFile } = require("./helpers")
const { faker } = require("@faker-js/faker")
const chalk = require("chalk")




function index(arrayOfWeapons) {
    return arrayOfWeapons.map((eachWeapon) => `item: ${chalk.red(eachWeapon.name)} description: ${chalk.yellow(eachWeapon.description)} price: ${chalk.greenBright(eachWeapon.price)} inStock: ${chalk.yellowBright(eachWeapon.inStock)} item_SKU: ${chalk.redBright(eachWeapon.item_SKU)}`).join("/n")

}

function show(weapons, weaponName, item_SKU) {
    const weaponItemToFind = weapons.findIndex((weaponItem) => weaponItem.id === item_SKU)
    let stockItems = weapons.find((stock) => stock.name === weaponName)
    for (anyItem of weapons) {
        return `item_SKU: ${chalk.greenBright(anyItem.item_SKU)} weaponName: ${chalk.yellow(anyItem.name)} description: ${chalk.redBright(anyItem.description)} price: $${chalk.yellowBright(anyItem.price)} inStock: ${chalk.redBright(anyItem.inStock)} AvailableInYourDimension: ${chalk.magenta(anyItem.availableInYourDimension)}`
    }
}

function create(weapons, weaponName, description, number, inStock, availableInYourDimension, item_SKU) {
    const newWeaponItem = {
        name: weaponName,
        description: description,
        price: number,
        inStock: true,
        availableInYourDimension: true,
        item_SKU: nanoid(6)
    };
    weapons.push(newWeaponItem)
    return weapons;

}

function destroy(weapons, weaponName) {
    // const removeById = weapons.findIndex((weapon) => weapon.id === item_SKU);
    const removeByName = weapons.findIndex((weaponn) => weaponn.name === weaponName);
    // for loop find duplicate names, console.log parameters, error handling if string empty do this


    for (i = 0; i < weapons.length; i++) {
        if (removeByName !== -1) {
            let weaponRemoved = weapons.splice(removeByName, 1);
            inform(`${weaponRemoved} was removed successfully `, "Another pocket Morty targeted and destroyed!");
            writeJSONFile("./data", "portalgunsandammos.JSON", weapons)
            return weapons;
        } else {
            inform("Countdown to Liquor Day!")
            return weapons;
        }
    }
}
// if (removeById !== -1) {
//     weapons.splice(removeById, 1);
//     writeJSONFile("./data", "portalgunsandammos.JSON", weapons)
//     inform("Ughhh... another irritating pocket Morty removed from this God forsaken intergalactic dimension")
//     return weapons;

function edit(weapons, weaponName, weaponId, price, itemDescription, inStock) {
    const index = weapons.findIndex((weapon) => weapon.id === weaponId);
    const index2 = weapons.find((weaponn) => weaponn.name === weaponName);

    if (index === -1) {
        weapons[index].id === weaponId;
        weapons[index].name === weaponName;
        weapons[index].priceInCents === price;
        weapons[index].inStock === inStock;
        weapons[index].description === itemDescription;
        inform("High Definition Piss Jugs! Weapons Catalog successfully updated!")
        return weapons;
    } else if (index2 === -1) {
        weapons[index].id === weaponId;
        weapons[index].name === weaponName;
        weapons[index].priceInCents === price;
        weapons[index].inStock === inStock;
        weapons[index].description === itemDescription;
        inform("Gettin' Learnt With Ricky - Siance")
        return weapons;

    } else {
        inform("There's a lesson here, and I'm not going to be the one to figure it out. — Rick")
        return weapons;

    }



}


module.exports = {
    index,
    show,
    create,
    destroy,
    edit
}