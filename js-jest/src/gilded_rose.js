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
      const handler = (new HandlerFactory).getHandler(this.items[i]);
      handler.handle(this.items[i]);
    }

    return this.items;
  }
}

class HandlerFactory {
  constructor() {
    this.handlers = [
      new Sulfuras,
      new Brie,
      new BackstagePasses,
      new Conjured,
      new Generic
    ];
  }

  getHandler(item) {
    for (let i = 0; i < this.handlers.length; i++) {
      if (this.handlers[i].canHandle(item)) {
        return this.handlers[i];
      }
    }
  }
}

class Generic {
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

class Brie extends Generic {
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

class BackstagePasses extends Generic {
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

class Conjured extends Generic {
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

class Sulfuras extends Generic {
  canHandle(item) {
    return item.name === 'Sulfuras, Hand of Ragnaros';
  }

  updateSellIn(item) {
  }

  updateQuality(item) {
  }
}

module.exports = {
  Item,
  Shop
}
