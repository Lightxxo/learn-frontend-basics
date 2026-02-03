/**
 * 1. Simple Store
 */
function createStore(initialState) {
  // TODO: Implement listeners array, getState, setState, subscribe
  return {
    getState: () => {},
    setState: (newState) => {},
    subscribe: (listener) => {
      /* return unsubscribe fn */
    },
  };
}

/**
 * 2. History Store (Undo/Redo)
 * Can wrap createStore or implement from scratch.
 */
function createHistoryStore(initialState) {
  // TODO: Implement
  return {
    // ...store methods
    undo: () => {},
    redo: () => {},
  };
}

module.exports = { createStore, createHistoryStore };
