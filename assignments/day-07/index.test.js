const { signal, effect, computed } = require("./index");

describe("☢️ Day 7: Reactor Safety Systems", () => {
  test("should activate sirens when temperature rises", () => {
    const [getTemp, setTemp] = signal(100); // 100 degrees
    const sirens = jest.fn();

    // The Effect "watches" getTemp
    effect(() => {
      if (getTemp() > 200) {
        sirens();
      }
    });

    expect(sirens).not.toHaveBeenCalled();

    console.log("    > Temp rising to 300...");
    setTemp(300);

    expect(sirens).toHaveBeenCalled();
    console.log("    > [SUCCESS] Sirens activated automatically!");
  });

  test("computed levels should sync", () => {
    const [getCore, setCore] = signal(5);
    const [getRod, setRod] = signal(2);

    // Output = Core * Rod
    const totalOutput = computed(() => getCore() * getRod());

    expect(totalOutput()).toBe(10);

    setCore(10);
    expect(totalOutput()).toBe(20);
  });
});
