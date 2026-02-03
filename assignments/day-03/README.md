# 🚀 Day 3: The Spaceport Dashboard (Advanced Async)

> "Commander, we are receiving signals from Mars, Titan, and Europa. The latency is high. If one fails, do NOT crash the dashboard."

## 📚 Mission Briefing

You are building the UI for the **Interplanetary Traffic Control (ITC)**.

- **The Problem**: We need to fetch status reports from 3 remote outposts.
- **The Constraint**: If "Titan Outpost" is offline (rejects), we still need to show Mars and Europa. `Promise.all` is too fragile (it fails if ONE fails).
- **The Bottleneck**: We have 500 supply ships launching. launching them all at once crashes the docking computer. We need a **Queue**.

## 🧠 Theory Download

- **`Promise.allSettled`**: The resilient aggregator.
- **Concurrency Control**: Limiting how many promises run at once.
- **Backoff Strategy**: If a signal fails, wait... then try again. Maybe it was just solar flare interference.

## 🛠️ Your Objectives

### 1. Operation: `promiseAllSettled(promises)`

Build a resilient fetcher.

- Receive multiple "Signal Promises".
- Return an array showing the fate of each: `{ status: 'fulfilled', value }` OR `{ status: 'rejected', reason }`.

### 2. Operation: `retry(fn, retries, delay)`

The communication link is flaky.

- Wrap the `sendSignal()` function.
- If it fails, wait `delay` ms and try again.
- Repeat `retries` times before giving up and declaring "Signal Lost".

### 3. Operation: `AsyncQueue(concurrency)`

**Traffic Control System**.

- We have 10 ships trying to dock.
- We only have 2 docking ports (`concurrency = 2`).
- Implement the queue to ensure ships wait their turn.

## 🧪 Testing the Uplink

Initialize docking procedure:

```bash
npm run test:day3
```


👉 [Read the Submission Guide](../../SUBMISSION_GUIDE.md)
