class Header {
  get enterButton() {
    return cy.xpath('//div[@class="auth-bar__item auth-bar__item--text"]')
  }

  navigateToLoginPage() {
    this.enterButton.click()
  }

  get searchFieldOnTheMainPage() {
    return cy.xpath('//input[@class="fast-search__input"]')
  }

  search(item) {
    this.searchFieldOnTheMainPage.click()
    this.searchFieldOnTheMainPage.type(item, { force: true })
  }

  get cart() {
    return cy.get('a.auth-bar__item--cart')
  }

  navigateToCart() {
    this.cart.click({ force: true })
  }

  clearSearch(item) {
    this.searchFieldOnTheMainPage.type(item).clear({ force: true })
  }

  navigationButton(text) {
    return cy.xpath(
      `//span[@class="b-main-navigation__text" and text()="${text}"]`
    )
  }

  navigateToSiteCategory(text) {
    return this.navigationButton(text).click()
  }
}

module.exports = new Header()
