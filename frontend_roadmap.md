# 🗺️ Frontend Developer Roadmap

> **Your 9-day learning journey + 6-day build sprint.** Work through each day in order. Check off items as you complete them.

---

## 🧠 Day 0: Mental Model (READ FIRST)

_Before writing any code, understand WHAT you're building and WHY._

### 📖 Concepts to Learn

- [ ] **Client vs Server** — The browser (client) requests, the server responds
- [ ] **What happens when you press Enter in the browser** — DNS → TCP → HTTP → Response → Render
- [ ] **What is an SPA (Single Page Application)** — One HTML file, JavaScript handles navigation
- [ ] **What React actually solves** — Keeping UI in sync with state (state → UI)

### 🔗 Resources

- 📖 [Thinking in React](https://react.dev/learn/thinking-in-react) — **Start here!**
- 📖 [How the Web Works (MDN)](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works)

---

## �️ Day 1: JavaScript Runtime & Fundamentals

_Goal: Understand the "Machine" (Browser) you are programming for._

### 📖 Concepts to Learn

#### JavaScript Basics

- [ ] `let` vs `const` vs `var` — Block scope, reassignment rules
- [ ] **Primitive vs non-primitive values** — `string`, `number`, `boolean` vs `object`, `array`
- [ ] **Value vs reference** — Why copying an object doesn't create a new one
- [ ] **Why `const` objects can mutate** — `const` prevents reassignment, not mutation
- [ ] `==` vs `===` — Loose vs strict equality (always use `===`)
- [ ] **Truthy & falsy values** — `0`, `""`, `null`, `undefined`, `NaN` are falsy

#### The JavaScript Runtime

- [ ] **Call Stack** — The single-threaded brain, LIFO stack of function calls
- [ ] **Heap** — Where objects are stored in memory
- [ ] **Web APIs** — Browser-provided features (setTimeout, fetch, DOM)
- [ ] **Event Loop** — Moves tasks from queues to the call stack
- [ ] **Macrotasks vs Microtasks** — `setTimeout` (macro) vs `Promise.then` (micro)

### 🛠️ Assignments

- [ ] `debounce` & `throttle` (Rate Limiting)
- [ ] `batcher` (Event Aggregation)
- [ ] `promisify` (Legacy node wrapping)

### 🔗 Resources

- 📖 [MDN: Data Structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
- 📖 [MDN: Equality Comparisons](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)
- 📖 [MDN: Event Loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)
- 🎥 [JS Event Loop Visualizer](https://www.jsv9000.app/) — **Highly recommended!**

---

## 🗓️ Day 2: Prototypes, Functions & Memory

_Goal: Master the prototype chain and understand `this` context._

### 📖 Concepts to Learn

#### Functions

- [ ] **Arrow functions vs normal functions** — Lexical `this`, shorter syntax
- [ ] **Anonymous functions** — Functions without names, used inline
- [ ] **Callback functions** — Functions passed as arguments
- [ ] **Higher-order functions (HOF)** — Functions that take or return functions
- [ ] `.map()` — Transform each element, return new array
- [ ] `.filter()` — Keep elements that pass a test
- [ ] `.reduce()` — Accumulate values into one result

#### Objects & Prototypes

- [ ] **Objects & methods** — `{ key: value }`, functions as properties
- [ ] **Prototype chaining** — How objects inherit from other objects
- [ ] **`this` keyword** — Refers to the calling context
- [ ] **Garbage Collection** — How JS cleans up unused memory
- [ ] **Class vs functional patterns** — When to use each

#### Control Flow & Errors

- [ ] `if` / `else` vs `switch` — When to use each
- [ ] `try` / `catch` / `finally` — Error handling pattern
- [ ] **Error bubbling** — Errors propagate up the call stack

### 🛠️ Assignments

- [ ] `deepClone` (Handling Circular Refs & Recursion)
- [ ] `Array.prototype.customMap` (Polyfills)

### 🔗 Resources

- 📖 [MDN: Functions Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
- 📖 [MDN: Array.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- 📖 [MDN: Inheritance and Prototype Chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
- 📖 [MDN: Object Prototypes](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)
- 📖 [MDN: Control Flow & Error Handling](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)

---

## 🗓️ Day 3: Asynchronous JavaScript & Networking

_Goal: Master Promises, async/await, and HTTP requests._

### 📖 Concepts to Learn

#### Async / Await

- [ ] **Promise states** — Pending → Fulfilled / Rejected
- [ ] `async` / `await` — Modern syntax for handling promises
- [ ] **Error handling in async code** — `try/catch` with `await`
- [ ] **Sequential vs parallel async calls** — `await` one-by-one vs `Promise.all()`
- [ ] `Promise.allSettled()` — Wait for all, don't fail fast

#### Network & Data

- [ ] `fetch()` API — Making HTTP requests from the browser
- [ ] **HTTP methods** — `GET` (read), `POST` (create), `PUT` (update), `DELETE` (remove)
- [ ] **HTTP status codes** — `200` OK, `201` Created, `400` Bad Request, `404` Not Found, `500` Server Error
- [ ] `JSON.stringify()` — Object → JSON string
- [ ] `JSON.parse()` — JSON string → Object

#### Advanced Async Patterns

- [ ] **Retry patterns** — Retry failed requests with backoff
- [ ] **Concurrency control** — Limit how many requests run at once

### 🛠️ Assignments

- [ ] `promiseAllSettled` (Resilient fetching)
- [ ] `retry` (Backoff strategies)
- [ ] `AsyncQueue` (Concurrency control)

### 🔗 Resources

- 📖 [MDN: Using Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
- 📖 [MDN: async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- 📖 [MDN: Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

---

## �️ Day 4: TypeScript Fundamentals

_Goal: Learn enough TypeScript to use React with confidence._

### 📖 Concepts to Learn

#### TypeScript Basics

- [ ] **Why TypeScript exists** — Type safety, better IDE support, documentation
- [ ] **Type inference** — TS can often figure out types automatically
- [ ] **Avoiding `any`** — `any` defeats the purpose of TypeScript

#### Type System

- [ ] `type` vs `interface` — Both define shapes; `interface` for objects, `type` for unions
- [ ] **Optional properties** — `name?: string`
- [ ] **Union types** — `string | number`
- [ ] **Intersection types** — `TypeA & TypeB`
- [ ] **Enums** — Named constants (awareness)

#### Generics & Type Guards

- [ ] **Generic functions** — `function identity<T>(arg: T): T`
- [ ] **Generic React components** — `<List<T> items={items} />`
- [ ] **Discriminated unions** — Tagged unions for type narrowing
- [ ] **Type guards** — Runtime checks that narrow types (`x is Type`)

#### Project Structure

- [ ] **Typical React + TS folder structure** — `src/components`, `src/hooks`, `src/types`
- [ ] **Typing props** — `interface ButtonProps { label: string }`
- [ ] **Typing state** — `useState<User | null>(null)`

### 🛠️ Assignments

- [ ] `EventBus<T>` (Strictly typed pub/sub)
- [ ] `isStarship` (Runtime Type Guards)

### 🔗 Resources

- 📖 [TypeScript Docs](https://www.typescriptlang.org/docs/)
- 📖 [TS Handbook: Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html)
- 📖 [React TypeScript Guide](https://react.dev/learn/typescript)

---

## 🗓️ Day 5: Virtual DOM & Reconciliation

_Goal: Understand HOW React renders—by building it yourself._

### 📖 Concepts to Learn

#### How React Works Under the Hood

- [ ] **What React is** — A library for building UIs, not a framework
- [ ] **Virtual DOM vs Real DOM** — React's in-memory representation for efficient updates
- [ ] **Rendering & Reconciliation** — React compares old and new VDOM, updates only what changed
- [ ] **Hyperscript** — What JSX compiles to (`h('div', props, children)`)
- [ ] **Diffing algorithms** — How React determines what changed

#### Component Basics

- [ ] **Functional components vs Class components** — Use functional (modern)
- [ ] **JSX syntax** — HTML-like syntax in JavaScript
- [ ] **Props** — Data passed from parent to child

### 🛠️ Assignments

- [ ] `h()` (Create VNode)
- [ ] `render()` (Mount to DOM)
- [ ] `diff()` (Basic Reconciliation)

### 🔗 Resources

- 📖 [React: Render and Commit](https://react.dev/learn/render-and-commit)
- 📖 [React: Writing Markup with JSX](https://react.dev/learn/writing-markup-with-jsx)

---

## 🗓️ Day 6: React State Primitives

_Goal: Build useState from scratch to truly understand it._

### 📖 Concepts to Learn

#### Core Hooks

- [ ] `useState` — Store and update component-level state
- [ ] **Functional state updates** — `setCount(prev => prev + 1)` for reliable updates
- [ ] **Why hooks must be called in order** — Hook indices in the fiber tree
- [ ] **Closures** — Functions retaining access to outer scope

#### State Management Basics

- [ ] **Lifting state up** — Move state to the common parent when shared
- [ ] **Controlled components (forms)** — React controls the input value
- [ ] **Batching** — Multiple setState calls batched into one re-render

### 🛠️ Assignments

- [ ] `useState` (Implement from scratch)
- [ ] `render()` (Trigger re-render on state change)

### 🔗 Resources

- 📖 [React: useState](https://react.dev/reference/react/useState)
- 📖 [React: State as a Snapshot](https://react.dev/learn/state-as-a-snapshot)
- 📖 [React: Queueing State Updates](https://react.dev/learn/queueing-a-series-of-state-updates)

---

## 🗓️ Day 7: Effects & Side Effects

_Goal: Understand how React handles side effects._

### 📖 Concepts to Learn

#### useEffect

- [ ] `useEffect` — Run side effects after render
- [ ] **Dependency array** — `[]` = once, `[dep]` = when dep changes, none = every render
- [ ] **Cleanup functions** — Return a function to clean up subscriptions/timers
- [ ] **Why effects run after render** — Non-blocking UI updates

#### Context

- [ ] `useContext` — Access shared state without prop drilling
- [ ] **Context Provider** — Wrap components to provide context values
- [ ] **Prop drilling problem** — Passing props through many levels is painful

#### Component Design

- [ ] **Conditional rendering** — `{condition && <Component />}` or ternary
- [ ] **Smart vs Dumb components** — Container (logic) vs Presentational (UI)

### 🛠️ Assignments

- [ ] `useEffect` (Dependency comparison logic)
- [ ] `cleanup` (Unsubscription)

### 🔗 Resources

- 📖 [React: useEffect](https://react.dev/reference/react/useEffect)
- 📖 [React: Synchronizing with Effects](https://react.dev/learn/synchronizing-with-effects)
- 📖 [React: useContext](https://react.dev/reference/react/useContext)

---

## �️ Day 8: Performance & Memoization

_Goal: Learn when (and when NOT) to optimize._

### 📖 Concepts to Learn

#### React Performance Hooks

- [ ] `useMemo` — Memoize expensive calculations
- [ ] `useCallback` — Memoize functions to prevent unnecessary re-renders
- [ ] `useRef` — Access DOM elements, persist values across renders without re-render
- [ ] **When NOT to use memoization** — Premature optimization is the root of all evil

#### Caching Patterns

- [ ] **LRU Cache** — Least Recently Used eviction strategy
- [ ] **Reference stability** — Same object reference = no re-render
- [ ] **React.memo** — Memoize entire components

#### State Patterns

- [ ] `useReducer` — Redux-like state management in a single component
- [ ] **Reducer pattern** — `(state, action) => newState`
- [ ] **Undo / Redo mental model** — Store state history, navigate the stack

### 🛠️ Assignments

- [ ] `useMemo` (Cache based on dependencies)
- [ ] `LRUCache` (Least Recently Used algorithm)

### 🔗 Resources

- 📖 [React: useMemo](https://react.dev/reference/react/useMemo)
- 📖 [React: useCallback](https://react.dev/reference/react/useCallback)
- 📖 [React: useRef](https://react.dev/reference/react/useRef)
- 📖 [React: useReducer](https://react.dev/reference/react/useReducer)

---

## �️ Day 9: Security, Auth & Ecosystem

_Goal: Understand production-level security patterns._

### 📖 Concepts to Learn

#### Authentication & Authorization

- [ ] **Authentication vs Authorization** — "Who are you?" vs "What can you do?"
- [ ] **JWT (JSON Web Tokens)** — Self-contained tokens with encoded info
- [ ] **Access token vs Refresh token** — Short-lived vs long-lived tokens
- [ ] **OAuth high-level flow** — "Login with Google/GitHub"
- [ ] **Token storage strategies** — localStorage (less secure) vs httpOnly cookies

#### Security

- [ ] **XSS (Cross-Site Scripting)** — Injecting malicious scripts
- [ ] **CSRF (Cross-Site Request Forgery)** — Tricking users into making requests
- [ ] **RBAC (Role-Based Access Control)** — Permissions based on roles

#### Routing

- [ ] **What client-side routing is** — URL changes without full page reload
- [ ] **React Router setup** — `<BrowserRouter>`, `<Routes>`, `<Route>`
- [ ] **Route params** — `/users/:id` → `useParams()`
- [ ] **Protected routes** — Redirect if not authenticated

### 🛠️ Assignments

- [ ] `parseJWT` (Manual decoding)
- [ ] `CsrfManager` (Token injection)
- [ ] `hasPermission` (Role-based access)

### 🔗 Resources

- 📖 [JWT Introduction](https://jwt.io/introduction)
- 📖 [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- 📖 [React Router Tutorial](https://reactrouter.com/en/main/start/tutorial)

---

## 🏗️ Phase 4: The Build (Days 10-15)

> **Go to [`FINAL_PROJECT_SPECS.md`](FINAL_PROJECT_SPECS.md) for the detailed instructions.**

### Additional Topics to Learn During the Build

#### Styling with Tailwind CSS

- [ ] **Utility-first CSS concept** — Classes like `p-4`, `text-lg`, `bg-blue-500`
- [ ] **Responsive modifiers** — `sm:`, `md:`, `lg:`, `xl:`
- [ ] **Conditional classes** — Use `clsx` or template literals
- [ ] **Reusable UI components** — Build a Button, Card, Input component library

**Resources:**

- 📖 [Tailwind Installation](https://tailwindcss.com/docs/installation)
- 📖 [Tailwind Utility-First](https://tailwindcss.com/docs/utility-first)

#### API Integration

- [ ] **API call lifecycle** — Loading → Success / Error
- [ ] **Error handling strategy** — Show toast, fallback UI, or retry
- [ ] **Empty states** — "No items found" instead of blank screen
- [ ] **Optimistic UI** — Update UI immediately, rollback if API fails

#### Real-World Topics

- [ ] **Debouncing & Throttling** in UI — Limit how often a function runs
- [ ] **Code splitting & Lazy loading** — Load code on demand with `React.lazy()`
- [ ] **Performance basics** — React.memo, virtualization, bundle size

---

### Build Schedule

1.  **Day 10**: Architecture & Setup (Vite, TS)
2.  **Day 11**: Atomic UI Kit (Tailwind, CVA)
3.  **Day 12**: Data Modeling (Zustand/Redux)
4.  **Day 13**: Drag & Drop (`@dnd-kit`)
5.  **Day 14**: Optimistic UI & Local Persistence
6.  **Day 15**: Deployment & CI/CD

---

## 🌟 Bonus: Senior Concepts (Self-Study)

_Things that distinguish Seniors but didn't fit the 15-day sprint._

- **Accessibility (A11y)**: Semantic HTML, ARIA roles, Focus management
- **Web Vitals**: LCP (Largest Contentful Paint), CLS (Cumulative Layout Shift)
- **Testing Pyramid**: Unit (Jest) vs Integration (RTL) vs E2E (Playwright)
- **Server Side Rendering (SSR)**: How Next.js/Remix works under the hood
- **WebSockets**: Real-time bidirectional communication
