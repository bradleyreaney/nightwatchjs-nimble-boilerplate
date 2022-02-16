const Helper = require('../helper/helper');

class HomePage {

    get productStoreLogo() {
        return '.navbar-brand'
    };
    get cart() {
        return '#cartur'
    };

    openUrl(url) {
        browser
            .maximizeWindow()
            .url(url);
    }
}

module.exports = new HomePage();