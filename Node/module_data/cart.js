// const home = require("./home.js")
import home from "./home.js"

const cart = (price) => {
    console.log(`Cart total value: ${price}`);
}

// cart(2000)

home()

module.exports = cart;