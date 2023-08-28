const BasePage = require('./basePage')
const {
  MANUFACTURER_LABEL,
  RELEASE_YEAR_LABEL,
  SCREEN_SIZE_LABEL,
  CPU_LABEL,
  RAM_LABEL,
  STORAGE_LABEL,
} = require('../helpers/constants')

class LaptopPage extends BasePage {
  filterCheckBoxForCategory(category, value) {
    return cy.xpath(
      `//div[@class="schema-filter__label"]/span[text()="${category}"]
            /../..//ul[@class="schema-filter__list"]//span[text()='${value}']/..//input`
    )
  }
  clickManufacturerFilterCheckBox(value) {
    this.filterCheckBoxForCategory(MANUFACTURER_LABEL, value).click({
      force: true,
    })
  }
  clickYearCheckbox(value) {
    this.filterCheckBoxForCategory(RELEASE_YEAR_LABEL, value).click({
      force: true,
    })
  }
  clickScreenDiagonalCheckbox(value) {
    this.filterCheckBoxForCategory(SCREEN_SIZE_LABEL, value).click({
      force: true,
    })
  }
  clickProcessorButton(value) {
    this.filterCheckBoxForCategory(CPU_LABEL, value).click({ force: true })
  }
  clickRAMMemoryButton(value) {
    this.filterCheckBoxForCategory(RAM_LABEL, value).click({ force: true })
  }
  clickStorageCapacityButton(value) {
    this.filterCheckBoxForCategory(STORAGE_LABEL, value).click({ force: true })
  }
  get filteredLaptopLinks() {
    return cy.get('.js-product-title-link')
  }

  clickFirstFilteredLaptop() {
    this.filteredLaptopLinks.first().click()
  }
}

module.exports = new LaptopPage()
