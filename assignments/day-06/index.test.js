const { createStore, createHistoryStore } = require("./index");

describe("⏳ Day 6: The Time Machine", () => {
  describe("Module 1: The Timeline (Store)", () => {
    test("should notify the Temporal Agency when timeline changes", () => {
      const chronos = createStore({ year: 1985 });
      const agency = jest.fn();

      chronos.subscribe(agency);

      console.log("    > Jumping to 2015...");
      chronos.setState({ year: 2015 });

      expect(agency).toHaveBeenCalledWith({ year: 2015 });
    });
  });

  describe("Module 2: The Paradox Fixer (Undo/Redo)", () => {
    test("should undo cataclysmic events", () => {
      const history = createHistoryStore({ status: "Peaceful" });

      history.setState({ status: "War" });
      history.setState({ status: "Apocalypse" });

      expect(history.getState()).toEqual({ status: "Apocalypse" });

      console.log("    > [ALERT] undoing apocalypse...");
      history.undo();
      expect(history.getState()).toEqual({ status: "War" });

      history.undo();
      expect(history.getState()).toEqual({ status: "Peaceful" });
    });
  });
});
