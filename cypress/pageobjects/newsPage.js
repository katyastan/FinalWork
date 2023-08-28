const BasePage = require('./basePage')

class NewsPage extends BasePage {
  reaction(name) {
    return cy.xpath(`//div[@data-reaction="${name}"]`)
  }
  getCounter(name) {
    return this.reaction(name).find('.st-count')
  }
  clickReaction(name) {
    return this.reaction(name).click()
  }
}

module.exports = new NewsPage()
