const inform = console.log
const { nanoid } = require("nanoid")
const { portalGunsAndAmmo } = require("../data/portalgunsandammo.json")




function index(arrayOfWeapons) {
    arrayOfWeapons.map((eachWeapon) => `item: ${eachWeapon.name}, + " " + description: ${eachWeapon.description} + " " + price: ${eachWeapon.priceInCents} + " " + inStock: ${eachWeapon.inStock}`)

}

function show(arrayOfWeapons, item_SKU) {
    const weaponItemToFind = weapons.find((weaponItem) => weaponItem.id === item_SKU)
    return weaponItemToFind.id + " " + weaponItemToFind.name + " " + weaponItemToFind.description + " " + weaponItemToFind.priceInCents + " " + weaponItemToFind.inStock;
}

function create(weapons, weaponName, item_SKU, itemDescription, price) {
    const newWeaponItem = {
        name: weaponName,
        item_SKU: nanoid(6),
        description: portalGunsAndAmmo(weaponName),
        price: null,
        inStock: Boolean

    };
    weapons.push(newWeaponItem)
    return weapons;

}

function destroy(weapons, weaponName, item_SKU) {
    const index = weapons.findIndex((weapon) => weapon.id === item_SKU && weapon.name === weaponName);
    if (index > -1) {
        weapons.splice(index, 1);
        inform(`Weapon Item with SKU# ${item_SKU} was successfully removed from the PortalGunsAndAmmo Catalog`)
        return weapons;
    } else {
        inform("Weapon Item not found. No action taken")
        return weapons;
    }

}
function update(weapons, weaponName, updatedWeapon, item_SKU, price, itemDescription, inStock) {
    const index = weapons.findIndex((weapon) => weapon.id === item_SKU && weapon.name === weaponName);

    if (index > -1) {
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

modules.export = {
    index,
    show,
    create,
    update,
    destroy
}