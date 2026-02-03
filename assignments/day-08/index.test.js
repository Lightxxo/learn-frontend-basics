const { LRUCache, memoize } = require("./index");

describe("📚 Day 8: The Restricted Library", () => {
  describe("The Satchel (LRU Cache)", () => {
    test("should discard the oldest scroll when full", () => {
      const satchel = new LRUCache(2); // Capacity 2

      console.log("    > Storing 'Fire'");
      satchel.put("Fire", "Scroll of Fire");
      satchel.put("Ice", "Scroll of Ice");

      // We use Fire again! It becomes "Fresh". Ice is now the stale one.
      console.log("    > Reading 'Fire'");
      satchel.get("Fire");

      console.log("    > Storing 'Lightning'");
      satchel.put("Lightning", "Scroll of Lightning");

      // Ice should be gone. Fire should remain.
      expect(satchel.get("Ice")).toBe(-1); // Evicted!
      expect(satchel.get("Fire")).toBe("Scroll of Fire");
    });
  });

  describe("The Spellbook (Memoize)", () => {
    test("should cast spells instantly the second time", () => {
      const castSpell = jest.fn((spell) => `Casting ${spell}`);
      const quickCast = memoize(castSpell);

      quickCast("Teleport");
      quickCast("Teleport");
      quickCast("Teleport");

      expect(castSpell).toHaveBeenCalledTimes(1);
      console.log("    > [SUCCESS] 3 Casts, but only 1 mana cost used!");
    });
  });
});
