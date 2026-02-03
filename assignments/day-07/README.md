# ☢️ Day 7: The Reactive Core (Signals)

> "Warning: Core temperature rising. If the cooling pumps don't auto-activate, we melt down."

## 📚 Mission Briefing

You are designing the safety systems for a Nuclear Power Plant.

- **The Problem**: Manual checks are too slow. If `temperature` rises, `coolingSystems` MUST update automatically.
- **The Solution**: **Fine-Grained Reactivity (Signals)**.

## 🛠️ Your Objectives

### 1. `signal(temp)`

Create a reactive atom.

- When `temp` changes, it screams "I CHANGED!" to anyone listening.

### 2. `effect(fn)`

The Safety Monitor.

- `effect(() => if (temp() > 100) alarm())`.
- This function must **automatically subcribe** to `temp`. You don't tell it to. It just _knows_.

### 3. `computed(fn)`

Derived metrics.

- `const dangerLevel = computed(() => temp() * pressure())`.
- If `temp` changes, `dangerLevel` updates instantly.

## 🧠 Mental Model

This is how SolidJS, Preact Signals, and Vue work. It's the "Magic" without the VDOM diffing.

## 🧪 Safety Drill

```bash
npm run test:day7
```
