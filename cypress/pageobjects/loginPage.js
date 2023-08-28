const BasePage = require('./basePage')

class LoginPage extends BasePage {
  get userNameField() {
    return cy.xpath('//input[@placeholder="Ник или e-mail"]')
  }

  get passwordField() {
    return cy.xpath('//input[@placeholder="Пароль"]')
  }

  get enterButtonOnLoginPage() {
    return cy.xpath('//button[contains(@class,"auth-button")]')
  }

  get errorNotification() {
    return cy.xpath(
      '//div[contains(@class,"auth-form__description auth-form__description_error")]'
    )
  }

  get errorLoginMessage() {
    return cy.xpath(
      '//div[contains(@class,"auth-form__description_extended-other")]'
    )
  }
  get errorPasswordMessage() {
    return cy.xpath(
      '//div[contains(@class,"auth-form__description_extended-other")]'
    )
  }

  clickEnterButtonOnLoginPage() {
    this.enterButtonOnLoginPage.click({ force: true })
  }

  login(userName, password) {
    this.userNameField.type(userName)
    this.passwordField.type(password)
    this.clickEnterButtonOnLoginPage()
  }
  loginUserName(userName) {
    this.userNameField.type(userName)
    this.clickEnterButtonOnLoginPage()
  }
  loginPassword(password) {
    this.passwordField.type(password)
    this.clickEnterButtonOnLoginPage()
  }
}

module.exports = new LoginPage()
