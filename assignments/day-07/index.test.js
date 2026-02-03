const MiniReact = require("./index");

describe("☢️ Day 7: The Reactor (useEffect)", () => {
  test("should run effect on mount", () => {
    const sideEffect = jest.fn();

    function Component() {
      MiniReact.useEffect(sideEffect, []);
      return { render: () => {} };
    }

    MiniReact.render(Component);
    expect(sideEffect).toHaveBeenCalledTimes(1);
  });

  test("should NOT run effect if deps are stable", () => {
    const sideEffect = jest.fn();

    function Component() {
      const [count, setCount] = MiniReact.useState(0);
      // Only run when count changes
      MiniReact.useEffect(sideEffect, [count]);
      return {
        render: () => {},
        click: () => setCount(count + 1),
        noop: () => setCount(count),
      };
    }

    let app = MiniReact.render(Component);
    expect(sideEffect).toHaveBeenCalledTimes(1);

    // Update with NO change
    app.noop();
    app = MiniReact.render(Component);
    expect(sideEffect).toHaveBeenCalledTimes(1); // Should not run again!

    // Update WITH change
    app.click();
    app = MiniReact.render(Component);
    expect(sideEffect).toHaveBeenCalledTimes(2); // Should run
  });
});
