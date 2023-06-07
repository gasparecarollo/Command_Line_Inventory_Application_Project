const inform = console.log
const { GetShwifty_Cart } = require("../data/GetShwifty_Cart.json")




function index(arrayOfWeapons) {
    arrayOfWeapons.map((eachWeapon) => "item": eachWeapon.name, + " " + "description": eachWeapon.description + " " + "price": eachWeapon.priceInCents + " " + "inStock": eachWeapon.inStock).join("/n")

}







module.exports = { index, show, create, update, destroy, edit }