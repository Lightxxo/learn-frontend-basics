const MiniReact = (function () {
  let hooks = [];
  let idx = 0;

  // ... insert previous hooks (useState/useEffect) if needed,
  // but for this assignment we focus on useMemo.

  function useMemo(factory, deps) {
    // TODO: Implement
    // 1. Check previous hook
    // 2. Compare deps
    // 3. Return cached or new value
    idx++;
    throw new Error("Not implemented");
  }

  function render(Component) {
    idx = 0;
    const c = Component();
    c.render();
    return c;
  }

  return { useMemo, render };
})();

module.exports = MiniReact;
