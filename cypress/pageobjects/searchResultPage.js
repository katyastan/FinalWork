const BasePage = require('./basePage')
const Iframe = require('../helpers/iframe');

class SearchResultPage extends BasePage {
    get searchResultsIframe() {
        return Iframe.xpath('//iframe[@class="modal-iframe"]')
    }
    get checkBoxField() {
        return this.searchResultsIframe.xpath('(//input[@class="i-checkbox__real"])[1]');
    }
    get searchFieldInIframe() {
        return this.searchResultsIframe.xpath('//*[@class="search__input"]')
    }
    get compareButton(){
        return this.searchResultsIframe.xpath('//span[@data-bind="html: $root.text"]');
    }
    get closeSearchButton(){
        return this.searchResultsIframe.xpath('//*[@class="search__close"]')
    }
    get resultItems() {
        return this.searchResultsIframe.find('.result__item')
    }
    clickFirstItem() {
        this.resultItems.first().find('.product__title a').first().click()
    }
    addToCompare() {
        this.checkBoxField.first().click({ force: true });
    }
    clickCompareButton(){
        this.compareButton.click();
    }
    clearSearchField(){
        this.searchFieldInIframe.clear( {force: true} );
    }
    clickCloseSearchButton(){
        this.closeSearchButton.click();
    }
}
    
module.exports = new SearchResultPage();
    
