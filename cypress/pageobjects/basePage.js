class BasePage {
  navigate(url) {
    cy.visit(url)
  }

  get title() {
    return cy.title()
  }

  get currentURL() {
    return cy.url()
  }
}

module.exports = BasePage
