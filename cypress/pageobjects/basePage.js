class BasePage {
  navigate(url) {
    cy.visit(url)
  }
  static get title() {
    return cy.title()
  }
  static get currentURL() {
    return cy.url()
  }
}

module.exports = BasePage
