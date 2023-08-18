class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].name == 'Sulfuras, Hand of Ragnaros') {
        Sulfuras.updateSellIn(this.items[i]);
        Sulfuras.updateQuality(this.items[i]);
        continue;
      }

      if (this.items[i].name == 'Aged Brie') {
        Brie.updateSellIn(this.items[i]);
        Brie.updateQuality(this.items[i]);
        continue;
      }

      if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
        BackstagePasses.updateSellIn(this.items[i]);
        BackstagePasses.updateQuality(this.items[i]);
        continue;
      }

      if (this.items[i].name == 'Conjured') {
        Conjured.updateSellIn(this.items[i]);
        Conjured.updateQuality(this.items[i]);
        continue;
      }

      GenericItem.updateSellIn(this.items[i]);
      GenericItem.updateQuality(this.items[i]);
    }

    return this.items;
  }
}

class GenericItem {
  static updateSellIn(item) {
    item.sellIn = item.sellIn - 1;
  }

  static updateQuality(item) {
    if (item.sellIn < 0) {
      item.quality = this.decreaseQuality(item, 2);
      return;
    }

    item.quality = this.decreaseQuality(item);
  }

  static increaseQuality(item, quantity = 1) {
    return Math.min(item.quality + quantity, 50);
  }

  static decreaseQuality(item, quantity = 1) {
    return Math.max(item.quality - quantity, 0);
  }
}

class Brie extends GenericItem {
  static updateQuality(item) {
    if (item.sellIn < 0) {
      item.quality = this.increaseQuality(item, 2);
      return;
    }

    item.quality = this.increaseQuality(item);
  }
}

class BackstagePasses extends GenericItem {
  static updateQuality(item) {
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

class Conjured extends GenericItem {
  static updateQuality(item) {
    if (item.sellIn < 0) {
      item.quality = this.decreaseQuality(item, 4);
      return;
    }

    item.quality = this.decreaseQuality(item, 2);
  }
}

class Sulfuras extends GenericItem {
  static updateSellIn(item) {
  }

  static updateQuality(item) {
  }
}

module.exports = {
  Item,
  Shop
}
