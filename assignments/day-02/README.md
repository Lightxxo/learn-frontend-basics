# 🐑 Day 2: The Cloning Lab (Prototypes)

> "We are attempting to clone the Subject. But the copy keeps referencing the original's memories. Isolate them!"

## 📚 Mission Briefing

You are a geneticist in a cloning facility.

- **The Problem**: When we clone a `Sheep`, the clone's `dna` object still points to the original Sheep's memory address. If the clone gets sick, the original gets sick. This is unacceptable.
- **The Goal**: Create a **Perfect Deep Clone**.

## 🧠 Theory Download

- **Prototypes**: The DNA shared by all instances.
- **`this`**: The specific biological context (the individual sheep).
- **Recursion**: Processing complex DNA strands (nested objects).

## 🛠️ Your Objectives

### 1. Operation: `deepClone(organism)`

Create a perfect copy.

- **Constraint**: Must handle `Date` (Birthday) and `RegExp` (Pattern Matching DNA).
- **Hazard**: **Circular Dependencies**. The Sheep knows its Mother, and the Mother knows the Sheep. Don't let your cloner crash in an infinite loop! (Use a `WeakMap` cache).

### 2. Operation: `Array.prototype.customMap`

The lab equipment is outdated. We need to inject our own software into the `Array` mainframe.

- Implement `myMap`, `myFilter`, `myReduce` directly on the `Array.prototype`.

### 3. Operation: `parasiticInherit` (DNA Splicing)

We need to create a `MutantSheep` that inherits from `Sheep`, but without running the `Sheep` constructor twice (which costs expensive energy). Splice the prototype chain manually.

## 🧪 Testing the Clones

Run the genetic sequencer:

```bash
npm run test:day2
```


👉 [Read the Submission Guide](../../SUBMISSION_GUIDE.md)
