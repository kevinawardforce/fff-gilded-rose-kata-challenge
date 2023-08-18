const {Shop, Item} = require("../src/gilded_rose");

it("decreases expiry and quality", function() {
  const gildedRose = new Shop([new Item("generic", 10, 10)]);

  const items = gildedRose.updateQuality();

  expect(items[0].sellIn).toBe(9);
  expect(items[0].quality).toBe(9);
});

it("degrades quality twice as fast after sell by date has passed", function() {
  const gildedRose = new Shop([new Item("generic", 0, 10)]);

  const items = gildedRose.updateQuality();

  expect(items[0].sellIn).toBe(-1);
  expect(items[0].quality).toBe(8);
});

it("never degrades quality below zero", function() {
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
    new Item("Aged Brie", 10, 1)
  ]);

  const items = gildedRose.updateQuality();

  expect(items[0].sellIn).toBe(9);
  expect(items[0].quality).toBe(2);
});
