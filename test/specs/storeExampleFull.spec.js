const HomePage = require('../pageObjects/home.page');
const OrderPage = require('../pageObjects/order.page');
const ProductPage = require('../pageObjects/product.page');
const casual = require('casual');

describe('Example using the demo blaze site - full', () => {
    it('should open the demo blaze store home page', (browser) => {
        browser
            .maximizeWindow()
            .url('https://www.demoblaze.com/index.html')
            .waitForElementPresent({
                selector: HomePage.productStoreLogo,
                timeout: 2000,
                retryInterval: 200
            })
            .expect.title().to.match(/STORE/);
    })

    it('should select a MacBook air from the Laptops category', (browser) => {
        browser
            .waitForElementPresent({
                locateStrategy: 'partial link text',
                selector: 'Laptops',
                timeout: 2000,
                retryInterval: 200
            })
            .click({
                locateStrategy: 'partial link text',
                selector: 'Laptops'
            })
            .waitForElementPresent({
                locateStrategy: 'partial link text',
                selector: 'MacBook air',
                timeout: 2000,
                retryInterval: 200
            })
            .click({
                locateStrategy: 'partial link text',
                selector: 'MacBook air'
            })
            .expect.element('.name').text.to.equal('MacBook air');
    })

    it('should add the product to the cart', (browser) => {
        browser
            .waitForElementPresent({
                selector: ProductPage.addToCart,
                timeout: 2000,
                retryInterval: 200
            })
            .click({
                selector: ProductPage.addToCart,
            })
            .pause(1000)
            .dismissAlert()
            .waitForElementPresent({
                selector: HomePage.cart,
                timeout: 2000,
                retryInterval: 200
            })
            .click({
                selector: HomePage.cart,
            })
            .expect.url().to.equal('https://www.demoblaze.com/cart.html');
    })

    it('should place the order', (browser) => {
        browser
            .waitForElementPresent({
                selector: ProductPage.placeOrderButton,
                timeout: 2000,
                retryInterval: 200
            })
            .click(ProductPage.placeOrderButton)
            .pause(1000)
            .setValue(OrderPage.orderName, casual.full_name)
            .setValue(OrderPage.orderCountry, casual.country)
            .setValue(OrderPage.orderCity, casual.city)
            .setValue(OrderPage.orderCreditCardNumber, casual.card_number())
            .setValue(OrderPage.orderCreditCardMonth, '12')
            .setValue(OrderPage.orderCreditCardYear, '30')
            .click({
                locateStrategy: 'xpath',
                selector: '//*[@id="orderModal"]/div/div/div[3]/button[2]'
            })
            .assert.textContains(OrderPage.orderConfirmation, 'Thank you for your purchase!')
            .pause(500)
            .click(OrderPage.orderConfirmationOkButton)
            .expect.url().to.equal('https://www.demoblaze.com/index.html')
    })
})