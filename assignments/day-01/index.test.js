const { debounce, throttle, batcher, promisify } = require("./index");

describe("🕵️ Day 1: The Glitchy Terminal", () => {
  jest.useFakeTimers();

  describe("Mission 1: Stabilize the Search Bar (Debounce)", () => {
    test("should fire only once after the agent stops typing", () => {
      const fireMissile = jest.fn();
      const debouncedFire = debounce(fireMissile, 1000);

      // Agent types "H"
      debouncedFire();
      // Agent types "Ha"
      debouncedFire();
      // Agent types "Hac"
      debouncedFire();

      expect(fireMissile).not.toHaveBeenCalled();

      // Agent takes a sip of coffee (1s passes)
      jest.advanceTimersByTime(1000);

      expect(fireMissile).toHaveBeenCalledTimes(1);
    });

    test("Detailed Report: Leading Edge (Search UI)", () => {
      const showLoadingSpinner = jest.fn();
      const debouncedShow = debounce(showLoadingSpinner, 1000, {
        leading: true,
      });

      // User presses first key
      debouncedShow();
      expect(showLoadingSpinner).toHaveBeenCalledTimes(1); // Immediate feedback!

      // User keeps typing...
      debouncedShow();
      debouncedShow();

      jest.advanceTimersByTime(1000);
      expect(showLoadingSpinner).toHaveBeenCalledTimes(1); // No double firing

      // New interaction
      debouncedShow();
      expect(showLoadingSpinner).toHaveBeenCalledTimes(2);
    });
  });

  describe("Mission 2: Packet Batching (Batcher)", () => {
    test("should bundle virus fragments into one payload", () => {
      const sendPayload = jest.fn();
      const batchUpload = batcher(sendPayload, { limit: 3 });

      console.log("    > Uploading fragment 1...");
      batchUpload("frag_alpha");
      console.log("    > Uploading fragment 2...");
      batchUpload("frag_beta");

      expect(sendPayload).not.toHaveBeenCalled();

      console.log("    > Uploading fragment 3...");
      batchUpload("frag_gamma");

      expect(sendPayload).toHaveBeenCalledWith([
        "frag_alpha",
        "frag_beta",
        "frag_gamma",
      ]);
      console.log("    > [SUCCESS] Batch sent!");
    });
  });

  describe("Mission 3: Legacy Mainframe (Promisify)", () => {
    test("should hack the mainframe (resolve)", async () => {
      const legacyLogin = (user, callback) => {
        if (user === "neo") callback(null, "Access Granted");
        else callback(new Error("Intruder Detected"));
      };

      const modernLogin = promisify(legacyLogin);

      await expect(modernLogin("neo")).resolves.toBe("Access Granted");
    });
  });
});
