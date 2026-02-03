# ⏳ Day 6: The Time Travel Paradox (State)

> "We messed up the timeline. We need a way to go back."

## 📚 Mission Briefing

You are building the **Chronos State Manager**.

- **The Problem**: The app's state changes chaotically. We need a Single Source of Truth.
- **The Goal**: Create a Store where we can track history and `undo()` catastrophic events.

## 🛠️ Your Objectives

### 1. `createStore(initialTimeline)`

The Core.

- `state` is private. Only accessible via `getState`.
- **Pub/Sub**: When `setState` happens, notify the Temporal Agency (subscribers).

### 2. `createHistoryStore(initialTimeline)`

The Time Machine.

- `state = 2024`.
- `setState(2025)`.
- `undo()`. -> `state` should revert to `2024`.
- `redo()`. -> `state` should go back to `2025`.

## 🧠 Mental Model

Think of Redux. This is effectively "Redux in 20 lines of code".

## 🧪 Time Jump Test

```bash
npm run test:day6
```
