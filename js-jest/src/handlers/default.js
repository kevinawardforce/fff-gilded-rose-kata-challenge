class DefaultHandler {
    canHandle(item) {
        return true;
    }

    handle(item) {
        this.updateSellIn(item);
        this.updateQuality(item);
    }

    updateSellIn(item) {
        item.sellIn = item.sellIn - 1;
    }

    updateQuality(item) {
        if (item.sellIn < 0) {
            item.quality = this.decreaseQuality(item, 2);
            return;
        }

        item.quality = this.decreaseQuality(item);
    }

    increaseQuality(item, quantity = 1) {
        return Math.min(item.quality + quantity, 50);
    }

    decreaseQuality(item, quantity = 1) {
        return Math.max(item.quality - quantity, 0);
    }
}

module.exports = {
    DefaultHandler
}
