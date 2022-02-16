const Helper = require('../helper/helper');

class ProductPage {

    get addToCart() {
        return '[class="btn btn-success btn-lg"]'
    };
    get placeOrderButton() {
        return '[class="btn btn-success"]'
    };
    get productName() {
        return '.name'
    };
}

module.exports = new ProductPage();