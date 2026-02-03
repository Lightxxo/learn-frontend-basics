/**
 * 1. LRU Cache
 * - Capacity-limited key-value store.
 * - Evicts least recently used item when full.
 */
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    // Hint: use a Map!
    this.cache = new Map();
  }

  get(key) {
    // TODO: Implement
    // If key exists, return it AND Make it "recent"
    return -1;
  }

  put(key, value) {
    // TODO: Implement
    // If key exists, update value and make recent.
    // If key new: add.
    // If size > capacity: evict oldest.
  }
}

/**
 * 2. Memoize
 * - Caches result of function calls.
 */
function memoize(fn) {
  // TODO: Implement
  throw new Error("Not implemented");
}

module.exports = { LRUCache, memoize };
