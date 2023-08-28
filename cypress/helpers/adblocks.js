
const BLOCK_SAFE_LIST = [
    'https://*.mail.ru',
    'https://yandex.**',
    'https://yastatic.net',
    'https://**.yandex.**',
    'https://**.jivo.ru',
    'https://**.jivosite.com',
]
const GOOGLE_BLOCK_LIST = [
    'https://google.**',
    'https://**.google**.**',
    'https://**.google.**',
]

class AdBlock {
    static block(listLinks) {
        listLinks.forEach(
            url => {
                cy.intercept(`${url}/**`, (req) => {
                    req.reply({ statusCode: 404, body: 'Analytics blocked' });
                });
            }
        )
    }
    static blockSafe() {
        this.block(BLOCK_SAFE_LIST)
    }
    // Blocking Google might cause reCaptha doesn't work correctly
    static blockGoogle() {
        this.block(GOOGLE_BLOCK_LIST)
    }
}

module.exports = { AdBlock }
