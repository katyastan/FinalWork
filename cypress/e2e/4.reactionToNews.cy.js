const mainPage = require('../pageobjects/mainPage')
const newsPage = require('../pageobjects/newsPage')
const AdBlock = require('../helpers/adblocks')
const { REACTIONS } = require('../helpers/reactions')

beforeEach(() => {
  AdBlock.blockSafe()
  AdBlock.blockGoogle()
  mainPage.navigate('https://www.onliner.by/')
})

describe('Reaction to the News', () => {
  ;[
    REACTIONS.astonished,
    REACTIONS.heart,
    REACTIONS.laughing,
    REACTIONS.smile,
    REACTIONS.sob,
  ].forEach((reaction) => {
    it(`Check '${reaction}' reactions increment on click`, () => {
      mainPage.navigateToNews()

      let counter = 0
      newsPage
        .reactionsCounter(reaction)
        .invoke('text')
        .then((text) => {
          counter = Number(text)
        })

      newsPage.leaveReaction(reaction)

      newsPage
        .reactionsCounter(reaction)
        .invoke('text')
        .then((text) => {
          const newCounter = Number(text)
          expect(newCounter).equals(counter + 1)
        })
    })
  })
})
