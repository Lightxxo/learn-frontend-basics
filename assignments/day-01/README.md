# 🕵️ Day 1: The Glitchy Terminal (Runtime & Event Loop)

> "Agent, the terminal is lagging. Every time I type a command, it fires 50 requests to the mainframe. Fix it before they trace us."

## 📚 Mission Briefing

You are hacking into a secure mainframe. The previous engineer left the interface a mess.

- **The Problem**: The search bar fires an API call for every keystroke (`k`, `ki`, `kil`, `kill`). We need to wait until the user _stops_ typing.
- **The Batching Issue**: We are sending individual packets for every single byte. We need to bundle them.

## 🧠 Theory Download

- **Call Stack**: The single-threaded brain.
- **Macrotasks** (`setTimeout`): Taking a nap, then running.
- **Microtasks** (`Promise`): Cutting the line. VIP access.

## 🛠️ Your Objectives

### 1. Operation: `debounce(fn, delay)`

_Status: Critical_
The "Search Mainframe" input is noisy.

- **Task**: Implement a debouncer.
- **Requirement**: If the agent types "ACCESS", only ONE request should fire after they stop typing for `delay` ms.
- **Advanced**: Implement `{ leading: true }`. Fire IMMEDIATELY on first keypress (to show "Searching..."), then ignore rapid fire.

### 2. Operation: `batcher(fn, limit)`

_Status: High Utility_
We are uploading virus fragments.

- **Current State**: `upload(frag1)`, `upload(frag2)`... (Too suspicious!)
- **Goal State**: Wait until we have 5 fragments OR 100ms passed, then `upload([frag1, frag2, ...])`.

### 3. Operation: `promisify(fn)`

_Status: Legacy Code Support_
The old mainframe uses callbacks: `mainframe.login(user, (err, data) => ...)`.

- **Task**: Wrap it so we can use modern `await mainframe.login(user)`.

## 🧪 Testing the Matrix

Run the simulation:

```bash
npm run test:day1
```

_(Check `index.test.js` to see the simulated hacking attempts!)_


👉 [Read the Submission Guide](../../SUBMISSION_GUIDE.md)
