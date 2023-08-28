const ProductPage = require('./productPage')
const {
  SCREEN_SIZE_LABEL,
  CPU_LABEL,
  RAM_LABEL,
  STORAGE_LABEL,
} = require('../helpers/constants')

class LaptopPage extends ProductPage {
  get screenSize() {
    return this.getProductInformationTable(SCREEN_SIZE_LABEL)
  }
  get cpuInfo() {
    return this.getProductInformationTable(CPU_LABEL)
  }
  get ramInfo() {
    return this.getProductInformationTable(RAM_LABEL)
  }
  get storageInfo() {
    return this.getProductInformationTable(STORAGE_LABEL)
  }
}

module.exports = new LaptopPage()
