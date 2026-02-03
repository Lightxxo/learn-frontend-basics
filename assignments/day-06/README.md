# ⏳ Day 6: The Temporal Engine (React State)

> "We need to maintain the timeline state between renders. And we need to travel forward without losing context."

## 📚 Mission Briefing

You are building the logic behind `useState`.

- **The Problem**: Functions "forget" variables when they exit. How does React "remember" `count` was `5`?
- **The Solution**: Closures and a global `hookIndex`.

## 🧠 Theory Download

- **Closures**: Functions retaining access to outer scope.
- **Hook Index**: React keeps an array of states `[state1, state2]`. It relies on calling hooks in the _exact same order_.

## 🛠️ Your Objectives

### 1. The Module Pattern

Create a `MiniReact` module that holds `state` array and `index`.

### 2. `useState(initialValue)`

- **Mount**: If no state exists at `index`, set `initialValue`.
- **Update**: `setState(newValue)` should update the array at `index`.
- **Rerender**: Calling `setState` should trigger a `render()` (mocked).

### 3. `batchUpdates` (Bonus)

- If I call `setState` 3 times, do I render 3 times? No.
- Implement a microtask queue to wait until the stack clears.

## 🧪 Temporal Test

```bash
npm run test:day6
```


👉 [Read the Submission Guide](../../SUBMISSION_GUIDE.md)
