const {DefaultHandler} = require("./default");

class Brie extends DefaultHandler {
	canHandle(item) {
		return item.name === 'Aged Brie';
	}

	updateQuality(item) {
		if (item.sellIn < 0) {
			item.quality = this.increaseQuality(item, 2);
			return;
		}

		item.quality = this.increaseQuality(item);
	}
}

module.exports = {
	Brie
}
