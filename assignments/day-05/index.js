/**
 * 1. Hyperscript
 * Returns { tag, props, children }
 */
function h(tag, props, ...children) {
  // TODO: Implement
  // Normalize children: flatten arrays, convert strings/numbers to text nodes if needed?
  // For simplicity: just keep them as is.
  throw new Error("Not implemented");
}

/**
 * 2. Render
 * Mounts a VNode to a DOM Element.
 */
function render(vnode, container) {
  // TODO: Implement
  // 1. Check if vnode is string -> TextNode
  // 2. Element -> createElement
  // 3. Set props (onClick, id, style)
  // 4. Append to container
  throw new Error("Not implemented");
}

module.exports = { h, render };
