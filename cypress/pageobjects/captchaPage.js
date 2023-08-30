const BasePage = require('./basePage')
const Iframe = require('../helpers/iframe')

class CaptchaPage extends BasePage {
  get securityQuestion() {
    return cy.get('.auth-form__mediabox span')
  }

  get reCaptchaIframe() {
    return Iframe.xpath('//iframe[@title="reCAPTCHA"]')
  }

  clickCaptchaButton() {
    this.reCaptchaIframe
      .find('.recaptcha-checkbox-spinner')
      .click({ force: true })
  }
}

module.exports = new CaptchaPage()
