const inform = console.log
const { nanoid } = require("nanoid")
const { portalGunsAndAmmo } = require("../data/portalgunsandammos.json")
const { writeJSONFile } = require("./helpers")
const { faker } = require("@faker-js/faker")




function index(arrayOfWeapons) {
    arrayOfWeapons.map((eachWeapon) => `item: ${eachWeapon.name}, + " " + description: ${eachWeapon.description} + " " + price: ${eachWeapon.priceInCents} + " " + inStock: ${eachWeapon.inStock}`)

}

function show(weapons, item_SKU) {
    const weaponItemToFind = weapons.find((weaponItem) => weaponItem.id === item_SKU)
    return weaponItemToFind.name + " " + weaponItemToFind.description + " " + weaponItemToFind.price + " " + faker.datatype.boolean + faker.datatype.boolean + " " + weaponItemToFind.id;
}

function create(weapons, weaponName, description, number, inStock, availableInYourDimension, item_SKU) {
    const newWeaponItem = {
        name: weaponName,
        description: description,
        price: number,
        inStock: inStock,
        availableInYourDimension: availableInYourDimension,
        item_SKU: nanoid(6)
    };
    weapons.push(newWeaponItem)
    return weapons;

}
//&& weapon.name === weaponName
function update(weapons, weaponName, item_SKU, price, itemDescription, inStock) {
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
        inform("Weapon Item Not Found. No action taken!")
        return weapons;

    }
}

function destroy(weapons, item_SKU) {
    // const item_SKU = process.argv[8];
    // const weaponProduct = readJSONFile()
    const index = weapons.findIndex((weapon) => weapon.id === item_SKU);
    if (index > -1) {
        weapons.splice(index, 1);
        writeJSONFile(weapons)
        inform(`Weapon Item with SKU# ${weaponId} was successfully removed from the PortalGunsAndAmmo Catalog`)
        return weapons;
    } else {
        inform("Weapon Item not found. No action taken")
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