class Header {
  get enterButton() {
    return cy.xpath('//div[@class="auth-bar__item auth-bar__item--text"]')
  }

  clickEnterButton() {
    this.enterButton.click()
  }

  get searchFieldOnTheMainPage() {
    return cy.xpath('//input[@class="fast-search__input"][1]')
  }

  search(item) {
    this.searchFieldOnTheMainPage.click()
    this.searchFieldOnTheMainPage.type(item, { force: true })
  }

  get cart() {
    return cy.get('a.auth-bar__item--cart')
  }

  goToCheckout() {
    this.cart.click()
  }

  clearSearch(item) {
    this.searchFieldOnTheMainPage.type(item).clear({ force: true })
  }

  navigationButton(text) {
    return cy.xpath(
      `//span[@class="b-main-navigation__text" and text()="${text}"]`
    )
  }
  clickNavigationButton(text) {
    return this.navigationButton(text).click()
  }
}

module.exports = new Header()
