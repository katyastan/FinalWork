const BasePage = require('./basePage')

class OffersPage extends BasePage {
  get sortSelector() {
    return cy.get('.offers-list__sorting select')
  }

  sortPriceAscending() {
    this.sortSelector.select('price:asc')
  }

  sortPriceDescending() {
    this.sortSelector.select('price:desc')
  }

  shopRatingDescending() {
    this.sortSelector.select('shop_rating:desc')
  }

  get offers() {
    return cy.get('.offers-list__unit')
  }

  addTopOfferToCart() {
    this.offers
      .first()
      .find('.offers-list__part_action .offers-list__button_cart')
      .click()
  }

  get continueShoppingButton() {
    return cy.get('.product-recommended__control_checkout a:first-of-type')
  }

  confirmContinueShoppingWithPopupBanner() {
    try {
      this.continueShoppingButton.click()
    } catch (e) {
      // eslint-disable-next-line no-console
      console.debug('The random popup seems was not displayed this time.')
    }
  }
}

module.exports = new OffersPage()
