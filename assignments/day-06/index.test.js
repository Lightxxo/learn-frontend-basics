const MiniReact = require("./index");

describe("⏳ Day 6: The Temporal Engine (useState)", () => {
  test("should hold state between renders", () => {
    function Counter() {
      const [count, setCount] = MiniReact.useState(0);
      return {
        render: () => {},
        click: () => setCount(count + 1),
        getCount: () => count,
      };
    }

    // Mount
    let app = MiniReact.render(Counter);
    expect(app.getCount()).toBe(0);

    // Update
    app.click();
    // Re-render simulates React re-running the component
    app = MiniReact.render(Counter);
    expect(app.getCount()).toBe(1);
  });

  test("should support multiple hooks", () => {
    function Form() {
      const [name, setName] = MiniReact.useState("Alice");
      const [age, setAge] = MiniReact.useState(25);
      return {
        render: () => {},
        changeName: (n) => setName(n),
        inputs: { name, age },
      };
    }

    let app = MiniReact.render(Form);
    expect(app.inputs.name).toBe("Alice");
    expect(app.inputs.age).toBe(25);

    app.changeName("Bob");
    app = MiniReact.render(Form);
    expect(app.inputs.name).toBe("Bob");
    expect(app.inputs.age).toBe(25); // Should remain untouched!
  });
});
