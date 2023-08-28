const validator = require('jsonschema')
const productSearchSchema = require('./data/productSearch.json')

const PRODUCT_SEARCH_API =
  'https://www.onliner.by/sdapi/catalog.api/search/products'

describe('API Search Products', () => {
  ;['iPhone 14 512', 'кондиционер Mitsubishi', 'велосипед аист'].forEach(
    (searchItem) => {
      it(`GET validate response status for '${searchItem}'`, () => {
        cy.request(PRODUCT_SEARCH_API, { query: searchItem }).then(
          (response) => {
            expect(response.status).to.equal(200)
          }
        )
      })
      it(`GET validate response schema for '${searchItem}'`, () => {
        cy.request(PRODUCT_SEARCH_API, { query: searchItem }).then(
          (response) => {
            const result = validator.validate(
              response.data,
              productSearchSchema
            )
            expect(result.valid).to.equal(true)
          }
        )
      })
    }
  )
})
