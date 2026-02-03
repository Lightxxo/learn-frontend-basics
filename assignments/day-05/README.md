# 🖼️ Day 5: The Holodeck (Virtual DOM & Reconciliation)

> "The Holodeck is flickering. We need to optimize the projection algorithms. Only update what CHANGED."

## 📚 Mission Briefing

You are building the Core Rendering Engine.

- **The Problem**: `document.createElement` is slow. Destroying the whole DOM to change one text node is wasteful.
- **The Solution**: **Reconciliation**. Compare the new blueprint (VDOM) vs the old one, and only touch the real DOM where necessary.

## 🛠️ Your Objectives

### 1. `h(tag, props, children)`

The Blueprint Generator (Hyperscript).

- This is what JSX compiles to.
- Returns `{ tag, props, children }`.

### 2. `render(vnode, container)`

The Initial Mount.

- Turn VDOM into Real DOM.
- Recursively handle children.

### 3. `diff(oldVNode, newVNode)` (The Challenge)

The Reconciler.

- If nodes are the same tag: Update attributes loops.
- If nodes are different tags: Replace the whole node.
- **Text Nodes**: If string changed, update `.nodeValue`.

## 🧪 Simulation Test

```bash
npm run test:day5
```


👉 [Read the Submission Guide](../../SUBMISSION_GUIDE.md)
