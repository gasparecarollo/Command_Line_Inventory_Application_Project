const inform = console.log
const { nanoid } = require("nanoid")
const { portalGunsAndAmmo } = require("../data/portalgunsandammos.json")
const { writeJSONFile } = require("./helpers")
const { faker } = require("@faker-js/faker")
const chalk = require("chalk")




function index(arrayOfWeapons) {
    arrayOfWeapons.map((eachWeapon) => `item: ${eachWeapon.name}, + " " + description: ${eachWeapon.description} + " " + price: ${eachWeapon.priceInCents} + " " + inStock: ${eachWeapon.inStock}`)

}

function show(weapons, item, weaponId) {
    const weaponItemToFind = weapons.find((weaponItem) => weaponItem.id === weaponId)
    let stockItems = weapons.filter((stock) => stock[item] === item)
    let totalItems = " "
    for (let whatsInStock of stockItems) {
        return `${chalk.green(whatsInStock.item_SKU)} ${chalk.yellow(whatsInStock.name)} $${chalk.yellowBright(whatsInStock.price.toFixed(2))} ${chalk.redBright(whatsInStock.instock)} ${chalk.magenta(whatsInStock.availableInYourDimension)}`
    }
    return totalItems;
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

function destroy(weapons, weaponId) {
    const index = weapons.findIndex((weapon) => weapon.id === weaponId);
    if (index > -1) {
        weapons.splice(index, 1);
        inform("Ughhh... another irritating pocket Morty removed from the intergalactic dimension")
        return weapons;
    } else {
        inform("Weapon Item not found. No action taken")
        return weapons;
    }
    //&& weapon.name === weaponName
}
function update(weapons, weaponName, updatedWeapon, item_SKU, price, itemDescription, inStock) {
    const index = weapons.findIndex((weapon) => weapon.id === item_SKU && weapon.name === weaponName);

    if (index === -1) {
        weapons[index].id === item_SKU;
        weapons[index].name === weaponName;
        weapons[index].priceInCents === price;
        weapons[index].inStock === inStock;
        weapons[index].description === itemDescription;
        inform("Weapons Catalog successfully updated!")
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
    update,
    destroy
}