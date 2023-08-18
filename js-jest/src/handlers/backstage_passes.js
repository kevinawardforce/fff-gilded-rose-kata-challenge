const {DefaultHandler} = require("./default");

class BackstagePasses extends DefaultHandler {
	canHandle(item) {
		return item.name === 'Backstage passes to a TAFKAL80ETC concert';
	}

	updateQuality(item) {
		if (item.sellIn < 0) {
			item.quality = 0;
			return;
		}

		if (item.sellIn < 6) {
			item.quality = this.increaseQuality(item, 3);
			return;
		}

		if (item.sellIn < 11) {
			item.quality = this.increaseQuality(item, 2);
			return;
		}

		item.quality = this.increaseQuality(item);
	}
}

module.exports = {
	BackstagePasses
}