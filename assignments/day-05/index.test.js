/**
 * @jest-environment jsdom
 */
const { h, render } = require("./index");

describe("🖼️ Day 5: The Holodeck", () => {
  let holodeck;

  beforeEach(() => {
    holodeck = document.createElement("div");
    holodeck.id = "holodeck-room";
  });

  describe("Blueprint Generator (h)", () => {
    test("should generate a Droid schematic", () => {
      const droid = h("div", { class: "battle-droid" }, "Roger Roger");
      expect(droid).toEqual({
        tag: "div",
        props: { class: "battle-droid" },
        children: ["Roger Roger"],
      });
    });
  });

  describe("Projection System (render)", () => {
    test("should materialize physical buttons", () => {
      const fireLaser = jest.fn();
      const controlPanel = h("button", { onClick: fireLaser }, "FIRE");

      render(controlPanel, holodeck);

      const btn = holodeck.querySelector("button");
      expect(btn.innerHTML).toBe("FIRE");

      btn.click();
      expect(fireLaser).toHaveBeenCalled();
      console.log("    > [EFFECT] Laser Fired!");
    });
  });
});
