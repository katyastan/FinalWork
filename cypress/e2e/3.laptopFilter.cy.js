const mainPage = require('../pageobjects/mainPage');
const laptopSearchPage = require('../pageobjects/laptopSearchPage');
const laptopProductPage = require('../pageobjects/laptopProductPage');
const { AdBlock } = require('../helpers/adblocks');

beforeEach(() => {
    AdBlock.blockSafe()
    AdBlock.blockGoogle()
    mainPage.navigate('https://www.onliner.by/')
})

describe('Laptop filter', function () {
    [
        { year: 2021 },
        { processor: 'Intel Core i9', year: 2023 },
        { year: 2023, manufacturer: 'MSI', screenSize: '15-16"', processor: 'Intel Core i7', ram: 'от 32 ГБ', storage: 'от 512 ГБ' },

    ].forEach(params => {
        it(`should find laptops with following characteristics: ${JSON.stringify(params)}`, () => {
            mainPage.clicklaptopButton();
            let { year = null, manufacturer = null, screenSize = null, processor = null, ram = null, storage = null } = params;

            // Set filters
            manufacturer ? laptopSearchPage.clickManufacturerFilterCheckBox(manufacturer) : {}
            year ? laptopSearchPage.clickYearCheckbox(year) : {}
            screenSize ? laptopSearchPage.clickScreenDiagonalCheckbox(screenSize) : {}
            processor ? laptopSearchPage.clickProcessorButton(processor) : {}
            ram ? laptopSearchPage.clickRAMMemoryButton(ram) : {}
            storage ? laptopSearchPage.clickStorageCapacityButton(storage) : {}
            laptopSearchPage.clickFirstFilteredLaptop();

            // Verify info on product page
            manufacturer ? laptopProductPage.modelInfo.contains(manufacturer) : {}
            year ? laptopProductPage.releaseYearInfo.contains(year) : {}
            processor ? laptopProductPage.cpuInfo.contains(processor) : {}

            if (screenSize) {
                let screenSizeMin = Number(screenSize.match(/\d+/g)[0])
                let screenSizeMax = Number(screenSize.match(/\d+/g)[1])
                laptopProductPage.screenSize.invoke('text').then(text => {
                    let screenSizeProduct = Number(text.match(/\d+/g)[0])
                    expect(screenSizeProduct).gte(screenSizeMin)
                    expect(screenSizeProduct).lte(screenSizeMax)
                })
            }
            if (ram) {
                let ramFilter = Number(ram.match(/\d+/g)[0])
                laptopProductPage.ramInfo.invoke('text').then(
                    text => {
                        let ramProduct = Number(text.match(/\d+/g)[0])
                        expect(ramProduct).gte(ramFilter)
                    }
                )
            }
            if (storage) {
                let storageFilter = Number(storage.match(/\d+/g)[0])
                laptopProductPage.storageInfo.invoke('text').then(
                    text => {
                        let storageProduct = Number(text.match(/\d+/g)[0])
                        expect(storageProduct).gte(storageFilter)
                    }
                )
            }
        });
    })
});


