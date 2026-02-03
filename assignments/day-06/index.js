const MiniReact = (function () {
  let hooks = [];
  let idx = 0;

  function useState(initialValue) {
    // TODO: Implement
    // 1. Get current state or Init
    // 2. Create setter (setState)
    // 3. Move idx++
    // 4. Return [val, set]
    throw new Error("Not implemented");
  }

  function render(Component) {
    idx = 0; // Reset index for next render
    const c = Component();
    c.render();
    return c;
  }

  return { useState, render };
})();

module.exports = MiniReact;
