// Global state for dependency tracking
let activeEffect = null;

/**
 * 1. Signal
 * Returns [get, set]
 */
function signal(initialValue) {
  // TODO: Implement
  // let value = initialValue;
  // const subscribers = new Set();

  // const get = () => { ... track ... return value }
  // const set = (newVal) => { ... update ... trigger }

  // return [get, set];
  throw new Error("Not implemented");
}

/**
 * 2. Effect
 * Runs the function and tracks dependencies.
 */
function effect(fn) {
  // TODO: Implement
  // activeEffect = fn;
  // fn();
  // activeEffect = null;
  throw new Error("Not implemented");
}

/**
 * 3. Computed (Bonus)
 * Returns a signal that auto-updates.
 */
function computed(fn) {
  // TODO: Implement
  // Create a signal.
  // Run an effect that updates the signal when deps change.
  throw new Error("Not implemented");
}

module.exports = { signal, effect, computed };
