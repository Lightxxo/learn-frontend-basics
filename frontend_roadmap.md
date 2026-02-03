# 🗺️ The Roadmap (Study Plan)

## 🧠 Phase 1: Computer Science & JavaScript Runtime (Days 1-4)

_Goal: Understand the "Machine" (Browser) you are programming for._

### 🗓️ Day 1: The JavaScript Runtime

- **Focus**: Call Stack, Heap, Event Loop (Microtasks vs Macrotasks).
- **Assignments**:
  - [ ] `debounce` & `throttle` (Rate Limiting).
  - [ ] `batcher` (Event Aggregation).
  - [ ] `promisify` (Legacy node wrapping).
- **Resources**:
  - [MDN: Event Loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)
  - [Visualizer: JSEventLoop](https://www.jsv9000.app/)

### 🗓️ Day 2: Prototypes & Memory

- **Focus**: Prototype Chain, `this` context, Garbage Collection.
- **Assignments**:
  - [ ] `deepClone` (Handling Circular Refs & Recursion).
  - [ ] `Array.prototype.customMap` (Polyfills).
- **Resources**:
  - [MDN: Object Prototypes](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)

### 🗓️ Day 3: Advanced Async & Networking

- **Focus**: Concurrency (`Promise.allSettled`), Retries, Queues.
- **Assignments**:
  - [ ] `promiseAllSettled` (Resilient fetching).
  - [ ] `retry` (Backoff strategies).
  - [ ] `AsyncQueue` (Concurrency control).
- **Resources**:
  - [MDN: Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)

### 🗓️ Day 4: TypeScript Systems

- **Focus**: Generics, Discriminated Unions, Type Guards.
- **Assignments**:
  - [ ] `EventBus<T>` (Strictly typed pub/sub).
  - [ ] `isStarship` (Runtime Type Guards).
- **Resources**:
  - [TS Handbook: Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html)

---

## ⚛️ Phase 2: The Internal Engine (Mini-React) (Days 5-8)

_Goal: Don't just use React. Re-create it._

### 🗓️ Day 5: Rendering & Reconciliation

- **Focus**: Virtual DOM, Diffing Algorithms, Hyperscript.
- **Assignments**:
  - [ ] `h()` (Create VNode).
  - [ ] `render()` (Mount to DOM).
  - [ ] `diff()` (Basic Reconciliation).

### 🗓️ Day 6: State Primitives

- **Focus**: Closures, Hook Indices, Batching.
- **Assignments**:
  - [ ] `useState` (Implement from scratch).
  - [ ] `render()` (Trigger re-render on state change).

### 🗓️ Day 7: The Effect Lifecycle

- **Focus**: Side Effects, Dependency Arrays, Cleanup.
- **Assignments**:
  - [ ] `useEffect` (Dependency comparison logic).
  - [ ] `cleanup` (Unsubscription).

### 🗓️ Day 8: Performance & Memoization

- **Focus**: Caching, Reference Stability, Referential Integrity.
- **Assignments**:
  - [ ] `useMemo` (Cache based on dependencies).
  - [ ] `LRUCache` (Least Recently Used algorithm).

---

## 🛡️ Phase 3: The Professional Ecosystem (Day 9)

### 🗓️ Day 9: Security & Auth

- **Focus**: JWT Structure, XSS vs CSRF, RBAC.
- **Assignments**:
  - [ ] `parseJWT` (Manual decoding).
  - [ ] `CsrfManager` (Token injection).
  - [ ] `hasPermission` (Role-based access).
- **Resources**:
  - [OWASP Top 10](https://owasp.org/www-project-top-ten/)
  - [JWT.io](https://jwt.io/)

---

## 🏗️ Phase 4: The Build (Days 10-15)

> **Go to [`FINAL_PROJECT_SPECS.md`](FINAL_PROJECT_SPECS.md) for the detailed instructions.**

1.  **Day 10**: Architecture & Setup (Vite, TS).
2.  **Day 11**: Atomic UI Kit (Tailwind, CVA).
3.  **Day 12**: Data Modeling (Zustand/Redux).
4.  **Day 13**: Drag & Drop (`@dnd-kit`).
5.  **Day 14**: Optimistic UI & Local Persistence.
6.  **Day 15**: Deployment & CI/CD.

---

## 🌟 Bonus: Senior Concepts (Self-Study)

_Things that distinguish Seniors but didn't fit the 15-day sprint._

- **Accessibility (A11y)**: Semantic HTML, ARIA roles, Focus management.
- **Web Vitals**: LCP (Largest Contentful Paint), CLS (Cumulative Layout Shift).
- **Testing Pyramid**: Unit (Jest) vs Integration (RTL) vs E2E (Playwright).
- **Server Side Rendering (SSR)**: How Next.js/Remix works under the hood.
