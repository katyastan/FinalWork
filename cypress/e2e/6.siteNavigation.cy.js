const mainPage = require('../pageobjects/mainPage')
const header = require('../pageobjects/components/header')
const BasePage = require('../pageobjects/basePage')
const AdBlock = require('../helpers/adblocks')

const basePage = new BasePage()

beforeEach(() => {
  AdBlock.blockSafe()
  AdBlock.blockGoogle()
  mainPage.navigate('https://www.onliner.by/')
})

describe('Checking the navigation bar', () => {
  ;[
    ['Каталог', 'Каталог Onlíner'],
    ['Автобарахолка', 'Купить авто в Беларуси - Автобарахолка Onlíner'],
    ['Услуги', 'Заказы на услуги'],
    ['Барахолка', 'Барахолка onliner.by - Главная страница'],
    ['Форум', 'Форум onliner.by - Главная страница'],
  ].forEach(([navigationText, expectedTitle]) => {
    it(`Clicking '${navigationText}' navigates to the page '${expectedTitle}'`, () => {
      header.navigateToSiteCategory(navigationText)
      basePage.title.should('equal', expectedTitle)
    })
  })
  ;[
    ['Каталог', 'https://catalog.onliner.by/'],
    ['Автобарахолка', 'https://ab.onliner.by/'],
    ['Услуги', 'https://s.onliner.by/tasks'],
    ['Барахолка', 'https://baraholka.onliner.by/'],
    ['Форум', 'https://forum.onliner.by/'],
  ].forEach(([navigationText, expectedURL]) => {
    it(`Clicking '${navigationText}' navigates to ${expectedURL}`, () => {
      header.navigateToSiteCategory(navigationText)
      basePage.currentURL.should('equal', expectedURL)
    })
  })
})
