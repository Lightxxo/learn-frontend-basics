# ☢️ Day 7: The Effect Loop (useEffect)

> "The Reactor needs to synchronize. When the Core gets hot, the cooling fans MUST spin up. But don't spin them up if the Core is already steady."

## 📚 Mission Briefing

You are implementing `useEffect`.

- **The Problem**: Side effects (Data fetching, timers, subscriptions) need to happen _after_ render.
- **The Constraint**: They should only re-run if their **Dependency Array** changes.

## 🛠️ Your Objectives

### 1. `useEffect(callback, depArray)`

- **Mount**: Run callback.
- **Update**: Compare `depArray` with `oldDepArray`. If different, run callback.
- **No Array**: If `depArray` is undefined, run EVERY time.

### 2. Cleanup Function

- **Unmount/Re-run**: If the callback returned a function (`return () => unsub()`), you MUST call it before running the new effect. (Prevent memory leaks!).

## 🧪 Reactor Test

```bash
npm run test:day7
```
