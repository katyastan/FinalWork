const mainPage = require('../pageobjects/mainPage')
const laptopSearchPage = require('../pageobjects/laptopSearchPage')
const laptopProductPage = require('../pageobjects/laptopProductPage')
const AdBlock = require('../helpers/adblocks')

beforeEach(() => {
  AdBlock.blockSafe()
  AdBlock.blockGoogle()
  mainPage.navigate('https://www.onliner.by/')
})

describe('Laptops filters feature', () => {
  ;[
    { year: 2021 },
    { processor: 'Intel Core i9', year: 2023 },
    {
      year: 2023,
      manufacturer: 'MSI',
      screenSize: '15-16"',
      processor: 'Intel Core i7',
      ram: 'от 32 ГБ',
      storage: 'от 512 ГБ',
    },
  ].forEach((filters) => {
    it(`should find laptops with following params: ${JSON.stringify(
      filters
    )}`, () => {
      mainPage.navigateToLaptopProducts()
      laptopSearchPage.applyFilters(filters)
      laptopSearchPage.navigateToFirstProduct()
      // eslint-disable-next-line no-use-before-define
      validateLaptopInfoInFilterCriteria(filters)
    })
  })
})

function validateLaptopInfoInFilterCriteria(filters) {
  const {
    year = null,
    manufacturer = null,
    screenSize = null,
    processor = null,
    ram = null,
    storage = null,
  } = filters
  if (manufacturer) {
    laptopProductPage.modelInfo.contains(manufacturer)
  }
  if (year) {
    laptopProductPage.releaseYearInfo.contains(year)
  }
  if (processor) {
    laptopProductPage.cpuInfo.contains(processor)
  }
  if (screenSize) {
    const screenSizeMin = Number(screenSize.match(/\d+/g)[0])
    const screenSizeMax = Number(screenSize.match(/\d+/g)[1])
    laptopProductPage.screenSize.invoke('text').then((text) => {
      const screenSizeProduct = Number(text.match(/\d+/g)[0])
      expect(screenSizeProduct).gte(screenSizeMin)
      expect(screenSizeProduct).lte(screenSizeMax)
    })
  }
  if (ram) {
    const ramFilter = Number(ram.match(/\d+/g)[0])
    laptopProductPage.ramInfo.invoke('text').then((text) => {
      const ramProduct = Number(text.match(/\d+/g)[0])
      expect(ramProduct).gte(ramFilter)
    })
  }
  if (storage) {
    const storageFilter = Number(storage.match(/\d+/g)[0])
    laptopProductPage.storageInfo.invoke('text').then((text) => {
      const storageProduct = Number(text.match(/\d+/g)[0])
      expect(storageProduct).gte(storageFilter)
    })
  }
}
