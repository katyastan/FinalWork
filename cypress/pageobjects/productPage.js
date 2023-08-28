const BasePage = require('./basePage')
const { RELEASE_YEAR_LABEL } = require('../helpers/constants')

class ProductPage extends BasePage {
  getProductInformationTable(parameter) {
    return cy.xpath(
      `//*[@id="specs"]//table//td[contains(., "${parameter}")]/..//span[@class="value__text"]`
    )
  }
  get modelInfo() {
    return cy.get('.catalog-masthead h1')
  }
  get releaseYearInfo() {
    return this.getProductInformationTable(RELEASE_YEAR_LABEL)
  }
  get offers() {
    return cy.get('a.js-product-prices-count-link')
  }
  clickOffers() {
    this.offers.click()
  }
}

module.exports = ProductPage
