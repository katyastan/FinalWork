const BasePage = require('./basePage')

class MainPage extends BasePage {
  get laptopButton() {
    return cy.xpath(
      '//span[@class="project-navigation__sign" and text()="Ноутбуки"]'
    )
  }

  get news() {
    return cy.xpath('//div[@id="widget-5-1"]')
  }

  navigateToLaptopProducts() {
    this.laptopButton.click()
  }

  navigateToNews() {
    this.news.first().click()
  }
}

module.exports = new MainPage()
