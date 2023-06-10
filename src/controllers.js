const inform = console.log
const { nanoid } = require("nanoid")
const { portalGunsAndAmmo } = require("../data/portalgunsandammos.json")
const { writeJSONFile } = require("./helpers")




function index(arrayOfWeapons) {
    arrayOfWeapons.map((eachWeapon) => `item: ${eachWeapon.name}, + " " + description: ${eachWeapon.description} + " " + price: ${eachWeapon.priceInCents} + " " + inStock: ${eachWeapon.inStock}`)

}

function show(arrayOfWeapons, item_SKU) {
    const weaponItemToFind = weapons.find((weaponItem) => weaponItem.id === item_SKU)
    return weaponItemToFind.id + " " + weaponItemToFind.name + " " + weaponItemToFind.description + " " + weaponItemToFind.price + " " + weaponItemToFind.inStock + weaponItemToFind.availableInYourDimension + " " + weaponItemToFind.item_SKU;
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

function destroy(weapons, id) {
    const weaponId = process.argv[8];
    const weaponProduct = readJSONFile()
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
    //&& weapon.name === weaponName
}
function update(weapons, weaponName, updatedWeapon, item_SKU, price, itemDescription, inStock) {
    const index = weapons.findIndex((weapon) => weapon.id === item_SKU && weapon.name === weaponName);

    if (index === -1) {
        weapons[index].id === item_SKU;
        weapons[index].name === updatedWeapon;
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

module.exports = {
    index,
    show,
    create,
    update,
    destroy
}