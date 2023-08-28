const BasePage = require('./basePage');

class ComparePage extends BasePage {
//     get googleLogo() {
//         return $('//div[@class="companyUsage_ByZM"]//*[@src="/img/logos/google.png"]');
//     }
//     get microsoftLogo() {
//         return $('//div[@class="companyUsage_ByZM"]//*[@src="/img/logos/microsoft.svg"]');
//     }
//     get yearOnPage() {
//         return $('//div[@class="footer__copyright"]');
//     }
//     async scrollIntoViewYearOnPage() {
//         await this.yearOnPage.scrollIntoView();
//     }
    get compareItem() {
        return cy.xpath('//span[@class="product-summary__caption"]')
    }
}
module.exports = new ComparePage();