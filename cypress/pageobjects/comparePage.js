const BasePage = require('./basePage')

class ComparePage extends BasePage {
  get compareItem() {
    return cy.xpath('//span[@class="product-summary__caption"]')
  }
}

module.exports = new ComparePage()
