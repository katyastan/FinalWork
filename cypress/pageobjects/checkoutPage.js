const BasePage = require('./basePage')

class CheckoutPage extends BasePage {
  get itemsTitles() {
    return cy.get('.cart-form__offers-item_secondary a.cart-form__link')
  }
}

module.exports = new CheckoutPage()
