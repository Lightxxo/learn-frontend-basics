# 📚 Day 8: The Restricted Library (Performance)

> "The Forbidden Scrolls take eons to summon. Once read, keep them close. If the bag is full, burn the old ones."

## 📚 Mission Briefing

You are the Keeper of the Scrolls in a magical library.

- **The Problem**: Summoning a scroll (expensive API call) takes too much mana.
- **The Solution (Memoize)**: If someone asks for "Fire Spell" again, give them the copy you already have.
- **The Constraint (LRU)**: Your satchel only holds 3 scrolls. If you pick up a 4th, you must drop the one you haven't used in the longest time.

## 🛠️ Your Objectives

### 1. `LRUCache(capacity)`

The Satchel.

- `get(scrollName)`: Return it. **Mark it as fresh**.
- `put(scrollName, content)`: Add it. If full, **Drop the oldest**.

### 2. `memoize(spellCast)`

The Spell Book.

- Wrap a function so that `spellCast("Fireball")` runs once. The next time, it returns the cached explosion instantly.

## 🧪 Mana Test

```bash
npm run test:day8
```
