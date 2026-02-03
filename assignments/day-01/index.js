/**
 * 1. Debounce
 * - If leading=false: Run only after `delay` ms of inactivity.
 * - If leading=true: Run immediately, then ignore updates for `delay` ms.
 */
function debounce(fn, delay, option = { leading: false }) {
  // TODO: Implement
  throw new Error("Not implemented");
}

/**
 * 2. Throttle
 * - Runs the function at most once every `interval` ms.
 * - Ensure the last call is also executed if it happened during the cooldown.
 */
function throttle(fn, interval) {
  // TODO: Implement
  throw new Error("Not implemented");
}

/**
 * 3. Batcher
 * - Aggregates calls. When `limit` calls happen OR `interval` ms passed,
 *   call the underlying `fn` with ALL the collected arguments.
 *
 * @param {Function} fn - Accepts an ARRAY of arguments.
 * @param {Object} config - { limit: number, interval: number }
 */
function batcher(fn, config = { limit: 5, interval: 100 }) {
  // TODO: Implement
  throw new Error("Not implemented");
}

/**
 * 4. Promisify
 * - Transforms a callback-style function (err, value) into a Promise.
 */
function promisify(fn) {
  // TODO: Implement
  throw new Error("Not implemented");
}

module.exports = { debounce, throttle, batcher, promisify };
