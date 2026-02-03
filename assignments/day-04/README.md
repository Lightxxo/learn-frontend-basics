# 🪐 Day 4: The Galactic Archive (TypeScript)

> "The alien archives are corrupt. We have untyped JSON blobs everywhere. Using `any` is punishable by exile to the Outer Rim."

## 📚 Mission Briefing

You are the Chief Archivist for the Federation.

- **The Problem**: We have diverse data types coming in from different species. We need a system that enforces structure but allows flexibility.
- **The Tools**: Interfaces, Generics, and Type Guards.

## 🛠️ Your Objectives

### 1. `SchemaValidator<T>` (The Gatekeeper)

We receive a `blob: unknown`.

- You need to perform a runtime check, but tell the compiler "Trust me, if this passes, it IS a `Starship`".
- Implement `isStarship(x: unknown): x is Starship`.

### 2. `EventBus<Events>` (The Subspace Transceiver)

Ships communicate on different channels.

- `distress-signal`: Payload `{ lat: number, long: number }`.
- `cargo-update`: Payload `{ tons: number }`.
- **Task**: Build a TYPE-SAFE emitter. If I listen to `distress-signal`, TypeScript should KNOW the payload has latitude/longitude.

### 3. `DeepPartial<T>` (The Scanner)

Sometimes we only scan _parts_ of a ship.

- We need a type that allows a `Starship` object to have missing pieces, deeply nested.

## 🧪 Testing the Archives

Run the compiler checks:

```bash
npm run test:day4
```
