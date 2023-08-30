const mainPage = require('../pageobjects/mainPage')
const header = require('../pageobjects/components/header')
const loginPage = require('../pageobjects/loginPage')
const {
  ARE_YOU_ROBOT_MESSAGE,
  EMPTY_PASSWORD_MESSAGE,
  EMPTY_LOGIN_MESSAGE,
} = require('../helpers/constants')
const captchaPage = require('../pageobjects/captchaPage')
const AdBlock = require('../helpers/adblocks')

beforeEach(() => {
  AdBlock.blockSafe()
  mainPage.navigate('https://www.onliner.by/')
})

describe('Login', () => {
  it('The site has Captcha challenge on login', () => {
    header.navigateToLoginPage()
    loginPage.login('firstname', 'password')
    captchaPage.securityQuestion.should('have.text', ARE_YOU_ROBOT_MESSAGE)
    captchaPage.clickCaptchaButton()
  })

  it(`Should show "${EMPTY_LOGIN_MESSAGE}" error message when signing in with an empty username`, () => {
    header.navigateToLoginPage()
    loginPage.loginPassword('password')
    loginPage.errorLoginMessage.contains(EMPTY_LOGIN_MESSAGE)
  })

  it(`Should show "${EMPTY_PASSWORD_MESSAGE}" error message when signing in with an empty password`, () => {
    header.navigateToLoginPage()
    loginPage.loginUserName('login')
    loginPage.errorLoginMessage.contains(EMPTY_PASSWORD_MESSAGE)
  })
})
