const validator = require('jsonschema')
const weatherSchema = require('./data/weather.json')

const WEATHER_API = 'https://r.onliner.by/sdapi/pogoda/api/now'

describe('API Weather', () => {
    it('GET validate response status', () => {
        cy.request(WEATHER_API)
        .then((response) => {
            expect(response.status).to.equal(200)
        })
    })
    it('GET validate response schema', () => {
        cy.request(WEATHER_API)
            .then((response) => {
                const result = validator.validate(response.data, weatherSchema)
                expect(result.valid).to.equal(true)
            })
    })
})
