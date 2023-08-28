// https://www.cypress.io/blog/2020/02/12/working-with-iframes-in-cypress/
class Iframe {
    xpath(xpath) {
        return cy
            .xpath(xpath)
            .its('0.contentDocument.body').should('not.be.empty')
            .then(cy.wrap)
    }
}

module.exports = new Iframe()
