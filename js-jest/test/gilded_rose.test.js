const {Shop, Item} = require("../src/gilded_rose");

it("decreases expiry and quality", function() {
  const gildedRose = new Shop([new Item("generic", 10, 10)]);

  const items = gildedRose.updateQuality();

  expect(items[0].sellIn).toBe(9);
  expect(items[0].quality).toBe(9);
});

it("quality degrades twice as fast once sell by date has passed", function() {
  const gildedRose = new Shop([new Item("generic", 0, 10)]);

  const items = gildedRose.updateQuality();

  expect(items[0].sellIn).toBe(-1);
  expect(items[0].quality).toBe(8);
});
