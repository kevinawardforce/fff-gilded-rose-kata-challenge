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
        continue;
      }

      if (this.items[i].name == 'Aged Brie') {
        this.updateBrie(this.items[i]);
        continue;
      }

      if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
        this.updateBackstagePasses(this.items[i]);
        continue;
      }

      if (this.items[i].name == 'Conjured') {
        this.updateConjured(this.items[i]);
        continue;
      }

      this.updateGeneric(this.items[i]);
    }

    return this.items;
  }

  updateGeneric(item) {
    item.quality = this.genericDecrement(item);

    item.sellIn = item.sellIn - 1;

    if (item.sellIn < 0) {
      item.quality = this.genericDecrement(item);
    }
  }

  updateBrie(item) {
    item.quality =  this.genericIncrement(item);

    item.sellIn = item.sellIn - 1;

    if (item.sellIn < 0) {
      item.quality =  this.genericIncrement(item);
    }
  }

  updateBackstagePasses(item) {
    item.quality =  this.genericIncrement(item);

    if (item.sellIn < 11) {
      item.quality = this.genericIncrement(item);
    }

    if (item.sellIn < 6) {
      item.quality = this.genericIncrement(item);
    }

    item.sellIn = item.sellIn - 1;

    if (item.sellIn < 0) {
      item.quality = 0;
    }
  }

  updateConjured(item) {
    item.quality = this.genericDecrement(item);
    item.quality = this.genericDecrement(item);

    item.sellIn = item.sellIn - 1;

    if (item.sellIn < 0) {
      item.quality = this.genericDecrement(item);
      item.quality = this.genericDecrement(item);
    }
  }

  genericIncrement(item) {
    if (item.quality < 50) {
      return item.quality + 1;
    }

    return item.quality;
  }

  genericDecrement(item) {
    if (item.quality > 0) {
      return item.quality - 1;
    }

    return item.quality;
  }
}

module.exports = {
  Item,
  Shop
}
