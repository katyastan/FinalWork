const mainPage = require('../pageobjects/mainPage')
const newsPage = require('../pageobjects/newsPage')
const { AdBlock } = require('../helpers/adblocks')
const { REACTIONS } = require('../helpers/reactions')

beforeEach(() => {
  AdBlock.blockSafe()
  AdBlock.blockGoogle()
  mainPage.navigate('https://www.onliner.by/')
})

describe('Reaction to the news', function () {
  ;[
    REACTIONS.astonished,
    REACTIONS.heart,
    REACTIONS.laughing,
    REACTIONS.smile,
    REACTIONS.sob,
  ].forEach((reaction) => {
    it(`Check rections increment on click for ${reaction}`, () => {
      mainPage.clickNews()

      let counter = 0
      newsPage
        .getCounter(reaction)
        .invoke('text')
        .then((text) => {
          counter = Number(text)
        })

      newsPage.clickReaction(reaction)

      newsPage
        .getCounter(reaction)
        .invoke('text')
        .then((text) => {
          let newCounter = Number(text)
          expect(newCounter).equals(counter + 1)
        })
    })
  })
})
