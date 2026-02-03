# 🖼️ Day 5: The Holodeck Renderer (Virtual DOM)

> "Computer, load the simulation. Wait, why is it loading so slowly? Optimize the rendering pipeline!"

## 📚 Mission Briefing

You are engineering the Holodeck's projection system.

- **The Problem**: Directly manipulating the matter-stream (Real DOM) is energy expensive.
- **The Solution**: We build a lightweight hologram (Virtual DOM) first, then project only the changes.

## 🛠️ Your Objectives

### 1. Operation: `h(tag, props, children)`

The Blueprint Generator.

- `h('droid', { model: 'T-800' }, [])` creates a lightweight instruction object.

### 2. Operation: `render(vnode, container)`

The Projection.

- Turn those blueprints into real elements.
- **Crucial**: Handle event listeners (`onClick` -> Fire laser).

## 💡 Pro Tip

In the real world, this is how React works. `JSX` `<div />` compiles down to `h('div')`. You are writing the engine that powers React!

## 🧪 Simulation Test

```bash
npm run test:day5
```
