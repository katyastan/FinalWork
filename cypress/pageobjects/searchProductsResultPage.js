const BasePage = require('./basePage')
const Iframe = require('../helpers/iframe')

class SearchProductsResultPage extends BasePage {
  get searchResultsIframe() {
    return Iframe.xpath('//iframe[@class="modal-iframe"]')
  }

  get checkBoxes() {
    return this.searchResultsIframe.xpath('//input[@class="i-checkbox__real"]')
  }

  get searchFieldInIframe() {
    return this.searchResultsIframe.xpath('//*[@class="search__input"]')
  }

  get compareButton() {
    return this.searchResultsIframe.xpath(
      '//span[@data-bind="html: $root.text"]'
    )
  }

  get closeSearchButton() {
    return this.searchResultsIframe.xpath('//*[@class="search__close"]')
  }

  get resultItems() {
    return this.searchResultsIframe.find('.result__item')
  }

  navigateToFirst() {
    this.resultItems.first().find('.product__title a').first().click()
  }

  addToCompare() {
    this.checkBoxes.first().click({ force: true })
  }

  navigateToCompare() {
    this.compareButton.click()
  }

  clearSearchField() {
    this.searchFieldInIframe.clear({ force: true })
  }

  clickCloseSearchButton() {
    this.closeSearchButton.click()
  }
}

module.exports = new SearchProductsResultPage()
