# 📚 Day 8: The Restricted Library (useMemo)

> "The casting spell is expensive. Do not cast it again unless the winds of magic have shifted."

## 📚 Mission Briefing

You are implementing `useMemo`.

- **The Problem**: `const expensive = heavyCalc(prop)` runs on EVERY render.
- **The Solution**: Cache the result. Only re-calculate if `prop` changes.

## 🛠️ Your Objectives

### 1. `useMemo(factory, depArray)`

- **First Run**: Call factory(), return result, save `[deps, result]`.
- **Next Run**: Compare deps. If same, return saved result. If different, call factory() again.

### 2. `useCallback(fn, depArray)` (Bonus)

- Sugar for `useMemo(() => fn, deps)`. Returns the _function itself_, stable across renders.

## 🧪 Mana Test

```bash
npm run test:day8
```
