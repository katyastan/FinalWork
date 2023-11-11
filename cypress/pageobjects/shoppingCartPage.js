const BasePage = require('./basePage')

class ShoppingCartPage extends BasePage {
  get productTitles() {
    return cy.get('.cart-form__offers-item_secondary a.cart-form__link')
  }
}

module.exports = new ShoppingCartPage()
