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

  clicklaptopButton() {
    this.laptopButton.click()
  }
  clickNews() {
    this.news.first().click()
  }
}

module.exports = new MainPage()
