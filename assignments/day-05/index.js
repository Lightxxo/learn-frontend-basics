/**
 * 1. Hyperscript
 * Returns { tag, props, children }
 */
function h(tag, props, children) {
  // TODO: formatting
  throw new Error("Not implemented");
}

/**
 * 2. Render
 * Turns VDOM -> RealDOM
 */
function render(vnode, container) {
  // TODO: Create element, set props, append to container
  throw new Error("Not implemented");
}

/**
 * 3. Diff (Reconciliation) - BONUS / Advanced
 * Updates an existing DOM node based on changes
 */
function patch(domNode, oldVNode, newVNode) {
  // TODO: Check if tag changed? Replace.
  // Check if props changed? Update.
  // Check children? Recurse.
}

module.exports = { h, render };
