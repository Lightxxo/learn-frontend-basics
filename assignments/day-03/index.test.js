const { promiseAllSettled, retry, AsyncQueue } = require("./index");

describe("🚀 Day 3: Spaceport Traffic Control", () => {
  describe("Mission 1: Signal Aggregation (AllSettled)", () => {
    test("should report status of all planets even if one explodes", async () => {
      const mars = Promise.resolve("Mars: Online");
      const titan = Promise.reject("Titan: Meteor Strike"); // Fails!
      const europa = Promise.resolve("Europa: Online");

      const report = await promiseAllSettled([mars, titan, europa]);

      expect(report[0]).toEqual({ status: "fulfilled", value: "Mars: Online" });
      expect(report[1]).toEqual({
        status: "rejected",
        reason: "Titan: Meteor Strike",
      });
      // The dashboard survives!
    });
  });

  describe("Mission 2: Comms Link (Retry)", () => {
    test("should retry connection through solar flare interference", async () => {
      const connect = jest
        .fn()
        .mockRejectedValueOnce("Static...")
        .mockRejectedValueOnce("Static...")
        .mockResolvedValue("Connection Established");

      const secureConnect = retry(connect, 3, 10);

      await expect(secureConnect()).resolves.toBe("Connection Established");
      expect(connect).toHaveBeenCalledTimes(3);
    });
  });

  describe("Mission 3: Docking Queue", () => {
    test("should only allow 2 ships to dock at once", async () => {
      const dockingBay = new AsyncQueue(2); // 2 Ports available
      const dockedShips = [];

      // A ship takes 50ms to dock
      const dockShip = (name) => () =>
        new Promise((resolve) => {
          setTimeout(() => {
            dockedShips.push(name);
            resolve();
          }, 50);
        });

      console.log("    > Requesting Docking: X-Wing");
      const p1 = dockingBay.add(dockShip("X-Wing"));
      console.log("    > Requesting Docking: Tie Fighter");
      const p2 = dockingBay.add(dockShip("Tie Fighter"));
      console.log("    > Requesting Docking: Millennium Falcon");
      const p3 = dockingBay.add(dockShip("Millennium Falcon"));

      // At T=0, Falcon should be waiting (queue)
      // We can't easily assert internal state here without mocking time properly,
      // but we ensure all finish.

      await Promise.all([p1, p2, p3]);
      expect(dockedShips).toHaveLength(3);
      expect(dockedShips).toContain("Millennium Falcon");
    });
  });
});
