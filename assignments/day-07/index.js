const MiniReact = (function () {
  let hooks = [];
  let idx = 0;

  function useState(initialValue) {
    const state = hooks[idx] || initialValue;
    const _idx = idx; // freeze index for closures
    const setState = (newVal) => {
      hooks[_idx] = newVal;
    };
    idx++;
    return [state, setState];
  }

  function useEffect(callback, depArray) {
    // TODO: Implement
    // 1. Check if we have old deps at hooks[idx]
    // 2. Compare old deps vs new deps (Array.every)
    // 3. If changed (or first run), run callback
    // 4. Save cleanup function?
    idx++;
    throw new Error("Not implemented");
  }

  function render(Component) {
    idx = 0;
    const c = Component();
    c.render();
    return c;
  }

  return { useState, useEffect, render };
})();

module.exports = MiniReact;
