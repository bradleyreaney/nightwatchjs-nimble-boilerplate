const casual = require('casual');

class OrderPage {

    get orderName() {
        return '#name'
    };
    get orderCountry() {
        return '#country'
    };
    get orderCity() {
        return '#city'
    };
    get orderCreditCardNumber() {
        return '#card'
    };
    get orderCreditCardMonth() {
        return '#month'
    };
    get orderCreditCardYear() {
        return '#year'
    };
    get orderConfirmation() {
        return '[class="sweet-alert  showSweetAlert visible"] h2'
    };
    get orderConfirmationOkButton() {
        return '[class="confirm btn btn-lg btn-primary"]'
    };

    completeOrderForm() {
        browser
            .pause(1000)
            .setValue(this.orderName, casual.full_name)
            .setValue(this.orderCountry, casual.country)
            .setValue(this.orderCity, casual.city)
            .setValue(this.orderCreditCardNumber, casual.card_number())
            .setValue(this.orderCreditCardMonth, '12')
            .setValue(this.orderCreditCardYear, '30');
    }
}

module.exports = new OrderPage();