const {Shop, Item} = require("../src/gilded_rose");

it("decreases expiry and quality", function() {
  const gildedRose = new Shop([
    new Item("generic", 10, 10)
  ]);

  const items = gildedRose.updateQuality();

  expect(items[0].sellIn).toBe(9);
  expect(items[0].quality).toBe(9);
});

it("decreases quality twice as fast after sell by date has passed", function() {
  const gildedRose = new Shop([
    new Item("generic", 0, 10)
  ]);

  const items = gildedRose.updateQuality();

  expect(items[0].quality).toBe(8);
});

it("never decreases quality below zero", function() {
  const gildedRose = new Shop([
    new Item("generic", 0, 1),
    new Item("generic", 0, 0)
  ]);

  const items = gildedRose.updateQuality();

  expect(items[0].quality).toBe(0);
  expect(items[1].quality).toBe(0);
});

it("increases quality of Aged Brie", function() {
  const gildedRose = new Shop([
    new Item("Aged Brie", 10, 1),
    new Item("Aged Brie", -1, 1),
  ]);

  const items = gildedRose.updateQuality();

  expect(items[0].quality).toBe(2);
  expect(items[0].quality).toBe(2);
});

it("never increases quality above 50", function() {
  const gildedRose = new Shop([
    new Item("Aged Brie", 0, 50),
    new Item("Backstage passes to a TAFKAL80ETC concert", 2, 50),
  ]);

  const items = gildedRose.updateQuality();

  expect(items[0].quality).toBe(50);
  expect(items[1].quality).toBe(50);
});

it("never decreases quality and sell by date of Sulfuras", function() {
  const gildedRose = new Shop([
    new Item("Sulfuras, Hand of Ragnaros", 10, 10)
  ]);

  const items = gildedRose.updateQuality();

  expect(items[0].sellIn).toBe(10);
  expect(items[0].quality).toBe(10);
});

it("increases quality of backstage passes until expiration", function() {
  const gildedRose = new Shop([
    new Item("Backstage passes to a TAFKAL80ETC concert", 20, 1),
    new Item("Backstage passes to a TAFKAL80ETC concert", 10, 1),
    new Item("Backstage passes to a TAFKAL80ETC concert", 5, 1),
    new Item("Backstage passes to a TAFKAL80ETC concert", 0, 1),
  ]);

  const items = gildedRose.updateQuality();

  expect(items[0].quality).toBe(2);
  expect(items[1].quality).toBe(3);
  expect(items[2].quality).toBe(4);
  expect(items[3].quality).toBe(0);
});
