const mainPage = require('../pageobjects/mainPage');
const header = require('../pageobjects/components/header');
const searchResultPage = require('../pageobjects/searchResultPage');
const comparePage = require('../pageobjects/comparePage');
const { AdBlock } = require('../helpers/adblocks');


beforeEach(() => {
    AdBlock.blockSafe()
    AdBlock.blockGoogle()
})


describe('Add products to comparison', function () {
    [
        ['Apple iPhone 14', 'Samsung Galaxy S23'],
        ['Samsung Galaxy A34', 'Realme 11 Pro', 'Redmi Note 12'],
        ['ATLANT X 1602-100', 'LG GA-B419', 'Samsung RB30A', 'Indesit ITS 5180'],
    ].forEach((productModels) => {
        it(`should Compare Products : ${productModels}`, () => {
            mainPage.navigate('https://www.onliner.by/');
            // Actions
            let lastProductIndex = productModels.length - 1;
            productModels.forEach((productModel, index) => {
                header.search(productModel);
                searchResultPage.addToCompare();

                if (index !== lastProductIndex) {
                    searchResultPage.clickCloseSearchButton();
                    searchResultPage.clearSearchField();
                }
            })
            // Validation
            searchResultPage.clickCompareButton();
            productModels.forEach((productModel, index) => { 
                // https://docs.cypress.io/api/commands/eq#Index
                comparePage.compareItem.eq(index).contains(productModel);
            })
        });
    })
    
});
