const validator = require('jsonschema')
const newsSearchSchema = require('./data/newsSearch.json')

const NEWS_SEARCH_API = 'https://www.onliner.by/sdapi/search.api/suggest/news'

describe('API Search News', () => {
    [
        'Geely',
        'Минск-Мир',
        'и не пожалел'
    ].forEach(searchItem => {
        it(`GET validate response status for '${searchItem}'`, () => {
            cy.request(NEWS_SEARCH_API, {query: searchItem})
                .then((response) => {
                    expect(response.status).to.equal(200)
                })
        })
        it(`GET validate response schema for '${searchItem}'`, () => {
            cy.request(NEWS_SEARCH_API, {query: searchItem})
                .then((response) => {
                    const result = validator.validate(response.data, newsSearchSchema)
                    expect(result.valid).to.equal(true)
                })
        })
    })
})
