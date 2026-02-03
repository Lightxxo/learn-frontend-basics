const MiniReact = require("./index");

describe("📚 Day 8: The Restricted Library (useMemo)", () => {
  test("should memoize expensive calculations", () => {
    const expensiveCalc = jest.fn(() => "result");

    function Component() {
      // Should only run when [] changes (never)
      const result = MiniReact.useMemo(expensiveCalc, []);
      return { render: () => {} };
    }

    MiniReact.render(Component);
    expect(expensiveCalc).toHaveBeenCalledTimes(1);

    MiniReact.render(Component);
    expect(expensiveCalc).toHaveBeenCalledTimes(1); // Cached!
  });
});
