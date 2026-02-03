const { deepClone, attachPolyfills, parasiticInherit } = require("./index");

try {
  attachPolyfills();
} catch (e) {}

describe("🐑 Day 2: The Cloning Lab", () => {
  describe("Experiment 1: Deep Cloning Subject #89", () => {
    test("should clone Dolly without sharing references", () => {
      const dolly = {
        name: "Dolly",
        stats: { weight: 50, health: 100 },
        birthday: new Date("1996-07-05"),
      };

      const clone = deepClone(dolly);

      // Mutate clone
      clone.stats.health = 50;
      clone.name = "Dolly Two";

      // Verify Original is Safe
      expect(dolly.stats.health).toBe(100);
      expect(dolly.name).toBe("Dolly");
      expect(clone.birthday.getTime()).toBe(dolly.birthday.getTime());
    });

    test("The Paradox: Circular Reference (Ouroboros)", () => {
      const chicken = { name: "Chicken" };
      const egg = { name: "Egg" };

      chicken.child = egg;
      egg.parent = chicken; // Cycle!

      const clonedChicken = deepClone(chicken);

      expect(clonedChicken.name).toBe("Chicken");
      expect(clonedChicken.child.name).toBe("Egg");
      // The clone's child's parent should be the CLONE, not the original chicken
      expect(clonedChicken.child.parent).toBe(clonedChicken);
    });
  });

  describe("Experiment 2: Injecting Array Logic", () => {
    test("customMap should transform DNA strands", () => {
      const dna = ["A", "C", "G", "T"];
      // Mutate to RNA (T -> U)
      const rna = dna.customMap((base) => (base === "T" ? "U" : base));

      expect(rna).toEqual(["A", "C", "G", "U"]);
      expect(dna).toEqual(["A", "C", "G", "T"]); // Immutable!
    });
  });
});
