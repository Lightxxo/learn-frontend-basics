import { EventBus, isError } from "./index";

describe("🪐 Day 4: Galactic Archive", () => {
  describe("Module 1: Subspace Transceiver (EventBus)", () => {
    type ShipEvents = {
      distress: { sector: string; hazard: string };
      docking: { port: number };
    };

    test("should transmit typed distress signals", () => {
      const comms = new EventBus<ShipEvents>();
      const rescueTeam = jest.fn();

      comms.on("distress", rescueTeam);

      // This would error in TS if the payload was wrong!
      comms.emit("distress", { sector: "7G", hazard: "Black Hole" });

      expect(rescueTeam).toHaveBeenCalledWith({
        sector: "7G",
        hazard: "Black Hole",
      });
    });
  });

  describe("Module 2: Anomaly Detection (Type Guards)", () => {
    test("should identify System Failures (Error Objects)", () => {
      const unknownBlob: unknown = new Error("Hull Breach!");

      if (isError(unknownBlob)) {
        // Inside here, TS knows it's an Error
        expect(unknownBlob.message).toBe("Hull Breach!");
      } else {
        fail("Should have identified as Error");
      }
    });
  });
});
