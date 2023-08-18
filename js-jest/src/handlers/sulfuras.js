const {DefaultHandler} = require("./default");

class Sulfuras extends DefaultHandler {
    canHandle(item) {
        return item.name === 'Sulfuras, Hand of Ragnaros';
    }

    updateSellIn(item) {
    }

    updateQuality(item) {
        item.quality = 80;
    }
}

module.exports = {
    Sulfuras
}
