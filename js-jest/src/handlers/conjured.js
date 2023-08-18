const {DefaultHandler} = require("./default");

class Conjured extends DefaultHandler {
	canHandle(item) {
		return item.name === 'Conjured';
	}

	updateQuality(item) {
		if (item.sellIn < 0) {
			item.quality = this.decreaseQuality(item, 4);
			return;
		}

		item.quality = this.decreaseQuality(item, 2);
	}
}

module.exports = {
	Conjured
}
