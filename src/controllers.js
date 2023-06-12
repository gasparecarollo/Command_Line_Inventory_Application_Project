const inform = console.log
const { nanoid } = require("nanoid")
const { portalGunsAndAmmo } = require("../data/portalgunsandammos.json")
const { writeJSONFile } = require("./helpers")
const { faker } = require("@faker-js/faker")
const { chalk } = require("chalk")




function index(arrayOfWeapons) {
    return arrayOfWeapons.map((eachWeapon) => `item: ${chalk.red(eachWeapon.name)} description: ${chalk.yellow(eachWeapon.description)} price: ${eachWeapon.price} inStock: ${eachWeapon.inStock} item_SKU: ${eachWeapon.item_SKU}`).join("/n")

}

function show(weapons, weaponName, weaponId) {
    const weaponItemToFind = weapons.findIndex((weaponItem) => weaponItem.id === weaponId)
    let stockItems = weapons.find((stock) => stock.name === weaponName)
    for (anyItem of weapons) {
        return `item_SKU: ${chalk.green(anyItem.item_SKU)} weaponName: ${chalk.yellow(anyItem.name)} description: ${chalk.greenBright(anyItem.description)} price: $${chalk.yellowBright(anyItem.price)} inStock: ${chalk.redBright(anyItem.inStock)} AvailableInYourDimension: ${chalk.magenta(anyItem.availableInYourDimension)}`
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

function destroy(weapons, weaponId, weaponName, item_SKU) {
    const index = weapons.findIndex((weapon) => weapon.id === weaponId && weapon.name === weaponName);
    //const index2 = weapons.find((weaponn) => weaponn.name === weaponName);
    if (index > -1) {
        weapons.splice(index, 1);
        inform("Ughhh... another irritating pocket Morty removed from this God forsaken intergalactic dimension")
        return weapons;
    } else {
        inform("Countdown to Liquor Day")
        return weapons;
    }

}
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
        inform("There’s a lesson here, and I’m not going to be the one to figure it out. — Rick")
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