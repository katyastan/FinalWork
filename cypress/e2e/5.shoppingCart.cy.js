const mainPage = require('../pageobjects/mainPage')
const ProductPage = require('../pageobjects/productPage')
const productPage = new ProductPage()
const searchResultPage = require('../pageobjects/searchResultPage')
const { AdBlock } = require('../helpers/adblocks')
const header = require('../pageobjects/components/header')
const offersPage = require('../pageobjects/offersPage')
const checkoutPage = require('../pageobjects/checkoutPage')

beforeEach(() => {
  AdBlock.blockSafe()
  AdBlock.blockGoogle()
  mainPage.navigate('https://www.onliner.by/')
})

describe('Add items to cart and verify', function () {
  ;[['Apple iPhone 14', 'Samsung Galaxy A34']].forEach((items) => {
    it(`Check adding to cart ${items}`, () => {
      // Search items and add to cart with minimal price
      items.forEach((item) => {
        header.search(item)
        searchResultPage.clickFirstItem()
        productPage.clickOffers()
        offersPage.sortPriceAscending()
        offersPage.addtoCartTopOffer()
        // offersPage.clickContinueShopping()
      })
      // Go to cart
      header.goToCheckout()

      // All added items in the cart in reverse order
      items.forEach((item, index) => {
        checkoutPage.itemsTitles.eq(items.length - 1 - index).contains(item)
      })
    })
  })
})
