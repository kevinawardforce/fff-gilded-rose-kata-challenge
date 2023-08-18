
const {HandlerFactory} = require("./handlers/factory");

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

module.exports = {
  Item,
  Shop
}
