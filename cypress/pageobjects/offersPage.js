const BasePage = require('./basePage');

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
    addtoBusketTopOffer() {
        this.offers.first().find('.offers-list__part_action .offers-list__button_cart').click()
    }
    get continueShopping() {
        return cy.get('.product-recommended__control_checkout a:first-of-type')
    }
    clickContinueShopping() {
        this.continueShopping.click()
    }

}

module.exports = new OffersPage();
