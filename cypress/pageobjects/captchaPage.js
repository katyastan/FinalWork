const BasePage = require('./basePage')
const Iframe = require('../helpers/iframe');

class CaptchaPage extends BasePage {
    CHALLENGE_IMAGES_BUTTON = 'Verify'
    CHALLENGE_IMAGES_TYPE = 'Select all images with'
    CHALLENGE_SQUARES_BUTTON = 'Skip'
    CHALLENGE_SQUARES_TYPE = 'Select all squares with'

    get securityQuestion() {
        return cy.get('.auth-form__mediabox span')
    }
    get reCaptchaIframe() {
        return Iframe
            .xpath('//iframe[@title="reCAPTCHA"]')
    }
    clickCaptchaButton() {
        this.reCaptchaIframe
            .find('.recaptcha-checkbox-spinner')
            .click({force: true})
    }
}
module.exports = new CaptchaPage()
