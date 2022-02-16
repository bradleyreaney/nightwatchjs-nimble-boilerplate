class Helper {

    acceptAlert() {
        return browser.pause(1000)
                      .dismissAlert();
    }

    findElementByName(name) {
        return browser.waitForElementPresent('partial link text', name, 2000, 200);
    }

    clickElementByName(name) {
        browser.waitForElementPresent('partial link text', name, 2000, 200)
        return browser.click('partial link text', name);
    }

    clickElement(element) {
        browser.waitForElementPresent(element, 2000, 200)
        return browser.click(element);
    }
}

module.exports = new Helper();