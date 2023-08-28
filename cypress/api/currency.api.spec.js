const validator = require('jsonschema')
const currencySchema = require('./data/currency.json')

const CURRENCY_API = 'https://r.onliner.by/sdapi/kurs/api/bestrate'

describe('API Currency rate', () => {
    [
        'EUR',
        'USD',
    ].forEach(currency => {
        it(`GET validate response status ${currency} is OK`, () => {
            cy.request(CURRENCY_API, {currency: currency})
                .then((response) => {
                    expect(response.status).to.equal(200)
                })
        })
        it(`GET validate response schema for ${currency}`, () => {
            cy.request(CURRENCY_API, {currency: currency})
                .then((response) => {
                    const result = validator.validate(response.data, currencySchema)
                    expect(result.valid).to.equal(true)
                })
        })
    })
})
