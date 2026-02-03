const { parseJWT, CsrfManager, hasPermission } = require("./index");

describe("🕵️‍♀️ Day 9: Spy Agency Security", () => {
  describe("Mission 1: Decrypt Intel (JWT)", () => {
    test("should identify the double agent", () => {
      const secretIdentity = JSON.stringify({
        agent: "006",
        status: "Double Agent",
      });
      const encoded = Buffer.from(secretIdentity).toString("base64");
      const token = `fakeheader.${encoded}.fakesign`;

      const intel = parseJWT(token);
      expect(intel.agent).toBe("006");
      expect(intel.status).toBe("Double Agent");
    });
  });

  describe("Mission 2: Clearance Check (RBAC)", () => {
    test("should deny Analyst from detonating the base", () => {
      const analyst = { roles: ["analyst"] };
      // Policy: 'base' -> 'detonate' requires '007'

      // Assume logic:
      // hasPermission(user, resource, action)
      // Hardcode this rule in your implementation for the test, or use a config

      // For the sake of the assignment skeleton we provided, we look at roles.
      // Let's assume you need 'admin' to 'delete'.

      expect(hasPermission(analyst, "comment", "delete")).toBe(false);
    });
  });
});
