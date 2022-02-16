const HomePage = require('../pageObjects/home.page');
const OrderPage = require('../pageObjects/order.page');
const ProductPage = require('../pageObjects/product.page');
const Helper = require('../helper/helper');

describe('Example using the demo blaze site - Helper', () => {
    it('should open the demo blaze store home page', (browser) => {
        HomePage.openUrl('https://www.demoblaze.com/index.html');
        Helper.clickElement(HomePage.productStoreLogo);
        browser.expect.title().to.match(/STORE/);
    })

    it('should select a MacBook air from the Laptops category', (browser) => {
        Helper.clickElementByName('Laptops');
        Helper.clickElementByName('MacBook air');
        browser.expect.element(ProductPage.productName).text.to.equal('MacBook air');
    })

    it('should add the product to the cart', (browser) => {
        Helper.clickElement(ProductPage.addToCart);
        Helper.acceptAlert();
        Helper.clickElement(HomePage.cart);
        browser.expect.url().to.equal('https://www.demoblaze.com/cart.html');
    })

    it('should place the order', (browser) => {
        Helper.clickElement(ProductPage.placeOrderButton);
        OrderPage.completeOrderForm();
        browser
            .click({
                locateStrategy: 'xpath',
                selector: '//*[@id="orderModal"]/div/div/div[3]/button[2]'
            })
            .assert.textContains(OrderPage.orderConfirmation, 'Thank you for your purchase!');
        Helper.clickElement(OrderPage.orderConfirmationOkButton);
        browser.expect.url().to.equal('https://www.demoblaze.com/index.html');
    })
})