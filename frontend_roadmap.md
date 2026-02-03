# 🚀 Frontend Engineering in 15 Days (Accelerated)

**Learner Name:** YOUR*NAME_HERE
**Target Audience:** CS Graduates / Fast Learners (5-6h study/day)
**Goal:** Deeply understand the \_engineering* behind frontend and deploy a production-grade application.

---

# 📂 Target Project Structure

By the end of this course, your repository should look like this. Use this as your mental map.

```text
my-repo-name/
├── assignments/               # 📂 Created Today
│   ├── day-01/                # 📂 Day 1: Runtime
│   │   ├── README.md          # 📄 Instructions
│   │   ├── index.js           # 📝 Your Code
│   │   └── index.test.js      # 🧪 Tests
│   ├── day-02/
│   └── ...
├── TRAINER_SETUP.md           # 🎓 For Repo Owners
├── SUBMISSION_GUIDE.md        # 🚀 How to submit
└── frontend_roadmap.md        # 📝 You are here
```

---

# 🛠️ Phase 0: The Professional Setup (Day 0)

> **Purpose:** Setup a professional workflow that allows you to deploy your work for free.
> **Philosophy:** "If it's not on GitHub, it didn't happen."

## 1️⃣ Fork & Clone (Crucial for Deployment)

Since you don't own the main repository, you must **Fork** it to your own account to have full control over deployments.

1.  Click the **Fork** button in the top-right corner of this page.
2.  Clone **YOUR** forked repository:
    ```bash
    git clone https://github.com/<YOUR-USERNAME>/<REPO-NAME>.git
    cd <REPO-NAME>
    ```

## 2️⃣ Create Your Workspace

1.  Run this command in the root to install testing tools:

    ```bash
    npm install
    ```

    (This installs Jest, TypeScript, and the test runner)

2.  Create a branch for your learning sprint:
    ```bash
    git checkout -b intensive-learning-sprint
    ```

## 3️⃣ The Checkbox Workflow

- **Task**: Edit this file, put your name at the top, and check the box below.
- [ ] **Commit 0**: Logic & Setup initialized.
  > **Note**: Since you haven't written code yet, the tests will fail. We need to bypass the check for this _first_ commit.
  ```bash
  git add .
  git commit -m "chore: initialize study roadmap and assignments folder [skip ci]"
  git push origin intensive-learning-sprint --no-verify
  ```
  _(The `--no-verify` flag skips local tests. `[skip ci]` tells GitHub not to run the failing tests yet)_

---

# 🧠 Phase 1: Computer Science & JavaScript Runtime (Days 1-4)

_Goal: Understand the "Machine" (Browser) you are programming for._

## 🗓️ Day 1: The JavaScript Runtime & Execution Context

_Forget "var vs let". How does V8 actually execute your code?_

### The Engine

- [ ] **Call Stack**: Stack frames & LIFO execution. [MDN: Call Stack](https://developer.mozilla.org/en-US/docs/Glossary/Call_stack)
- [ ] **Heap Memory**: Reference types storage & Garbage Collection. [V8: Memory Model](https://v8.dev/blog/trash-talk)
- [ ] **Single Threaded Nature**: Why `while(true)` freezes the browser. [MDN: Event Loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)

### The Event Loop (CRITICAL)

- [ ] **Task Queue (Macrotasks)**: `setTimeout`. [JS.info: Event Loop](https://javascript.info/event-loop)
- [ ] **Microtask Queue**: `Promises`. Higher priority than tasks! [MDN: Microtask Guide](https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API/Microtask_guide)
- [ ] **Execution Order**: Sync Code → Microtasks → Rendering → Macrotasks. [Visualizer: JSEventLoop](https://www.jsv9000.app/)

### Scopes & Closures

- [ ] **Lexical Environment**: Where variables live. [MDN: Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
- [ ] **Hoisting**: Why function declarations run before definition. [MDN: Hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)
- [ ] **The "Module Pattern"**: Using closures to create private state. [Patterns: Module](https://www.patterns.dev/posts/module-pattern/)

### 📝 Assignment: Rate Limiters & Batching

> **Go to:** [`assignments/day-01/README.md`](assignments/day-01/README.md) for the full assignment.

- [ ] **Debounce & Throttle**: Control function execution rate.
- [ ] **Batching**: Aggregate multiple calls into one.
- [ ] **Promisify**: Convert callbacks to promises.
- [ ] **Verify**: Run `npm run test:day1`

---

## 🗓️ Day 2: Prototypes & OOP vs Functional

_JS is multi-paradigm. React uses FP, legacy code uses OOP._

### The Prototype Chain

- [ ] **`__proto__` vs `prototype`**: The delegation chain. [MDN: Prototypes](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)
- [ ] **`Object.create()`**: Inheritance without classes. [MDN: Object.create](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create)
- [ ] **`this` Keyword**: The 4 Rules (Implicit, Explicit, New, Default). [MDN: The _this_ keyword](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)

### Functional Programming (Review for React)

- [ ] **Pure Functions**: No side effects, deterministic. [FreeCodeCamp: Pure Functions](https://www.freecodecamp.org/news/what-is-a-pure-function-in-javascript-acb887375dfe/)
- [ ] **Immutability**: Why we copy arrays before editing. [MDN: Reference vs Value](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#objects)
- [ ] **Map / Filter / Reduce**: Transformation pipelines. [MDN: Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

### 📝 Assignment: The Deep Cloner (`assignments/day2-cloning.js`)

> **Context:** In React, `state` must be immutable. If you just say `newState = oldState`, React won't re-render. You need a copy.

- [ ] **Task**: Create `assignments/day2-cloning.js`.
- [ ] **Implement `deepClone(obj)`**: Recursively copy an object (don't use `structuredClone` for this exercise, build the recursion).
- [ ] **Bonus**: Handle `Date` and `RegExp` objects.

---

## 🗓️ Day 3: Asynchronous Patterns & Networking

_Mastering non-blocking I/O._

### Evolution of Async

- [ ] **Callbacks**: The Pyramid of Doom. [MDN: Async JS](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing)
- [ ] **Promises**: `.then()` chaining and unwrapping. [MDN: Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
- [ ] **Async/Await**: Syntactic sugar over Promises. [MDN: Async functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [ ] **Concurrency**: `Promise.all()` (fail fast) vs `Promise.allSettled()` (wait for all). [MDN: Promise.all](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)

### Networking & HTTP

- [ ] **Fetch API**: Request configuration. [MDN: Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [ ] **HTTP Methods**: GET (Safe), POST, PUT (Replace), PATCH (Modify). [MDN: HTTP Methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
- [ ] **Status Codes**: 200, 301, 401 (Unauth), 403 (Forbidden), 500. [MDN: Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

### 📝 Assignment: Async Aggregator (`assignments/day3-async.ts`)

> **Context:** Professional dashboards usually fetch data from multiple sources (Profile, Notifications, Feed) simultaneously.

- [ ] **Task**: Create `assignments/day3-async.ts` (Try Typescript!).
- [ ] **Implement `fetchDashboardData()`**:
  - Manage 3 mock API calls (simulate with `setTimeout`).
  - Use `Promise.all` to fetch them concurrently.
  - If one fails, the whole dashboard should NOT fail (Use `allSettled` or individual catch).

---

## 🗓️ Day 4: TypeScript - The Professional Standard

_Safety at compile time._

### The Type System

- [ ] **Structural Typing**: Shape over name. [TS Docs: Type Compatibility](https://www.typescriptlang.org/docs/handbook/type-compatibility.html)
- [ ] **Inference**: Let TS do the work. [TS Docs: Type Inference](https://www.typescriptlang.org/docs/handbook/type-inference.html)
- [ ] **Interfaces vs Types**: When to use which. [TS Docs: Interfaces vs Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces)

### Advanced Types

- [ ] **Generics**: Reusable components. [TS Docs: Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html)
- [ ] **Union Types**: `Status = 'loading' | 'error'`. [TS Docs: Unions](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types)
- [ ] **Utility Types**: `Partial`, `Pick`, `Omit`, `Record`. [MDN: Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html)

---

# ⚛️ Phase 2: React Internal Architecture (Days 5-8)

_Don't just learn usage. Learn how "The Engine" works._

## 🗓️ Day 5: Rendering & Reconciliation

- [ ] **Virtual DOM**: Why it's faster than direct DOM manipulation. [React Docs: Virtual DOM](https://legacy.reactjs.org/docs/faq-internals.html)
- [ ] **Reconciliation**: The Diffing Algorithm. [React Docs: Reconciliation](https://react.dev/learn/preserving-and-resetting-state)
- [ ] **Keys**: Why math.random() as key destroys performance. [React Docs: Rendering Lists](https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key)

## 🗓️ Day 6: State Primitives

- [ ] **Immutability in State**: Why we need `setCount(c => c + 1)`. [React Docs: Updating Objects](https://react.dev/learn/updating-objects-in-state)
- [ ] **Batching**: Automatic batching in React 18. [ReactWG: Batching](https://github.com/reactwg/react-18/discussions/21)
- [ ] **State vs Refs**: When to cause a re-render and when not to. [React Docs: Refs](https://react.dev/learn/referencing-values-with-refs)

## 🗓️ Day 7: The Effect Lifecycle

- [ ] **Synchronization**: Effects sync data, they are not events. [React Docs: Synchronizing with Effects](https://react.dev/learn/synchronizing-with-effects)
- [ ] **Cleanup**: Handling race conditions. [React Docs: Effect Cleanup](https://react.dev/learn/lifecycle-of-reactive-effects)
- [ ] **Custom Hooks**: Extracting logic. [React Docs: Reusing Logic](https://react.dev/learn/reusing-logic-with-custom-hooks)

## 🗓️ Day 8: Performance & Memoization

- [ ] **`useMemo`**: Cache expensive calculation. [React Docs: useMemo](https://react.dev/reference/react/useMemo)
- [ ] **`useCallback`**: Stable function references. [React Docs: useCallback](https://react.dev/reference/react/useCallback)
- [ ] **`React.memo`**: Skipping re-renders of children. [React Docs: memo](https://react.dev/reference/react/memo)

---

# 🛡️ Phase 3: The Professional Ecosystem (Day 9)

## 🗓️ Day 9: Authentication & Security Patterns

### Security Theory

- [ ] **JWT (JSON Web Token)**: Header, Payload, Signature. [JWT.io Introduction](https://jwt.io/introduction)
- [ ] **Storage**: LocalStorage vs HttpOnly Cookies. [Auth0: Token Storage](https://auth0.com/blog/secure-browser-storage-the-facts/)
- [ ] **XSS & CSRF**: Attack vectors. [OWASP: XSS](https://owasp.org/www-community/attacks/xss/)

### OAuth 2.0

- [ ] **The Flow**: Resource Owner, Client, Authorization Server. [Auth0: OAuth 2.0](https://auth0.com/intro-to-iam/what-is-oauth-2)
- [ ] **Playground**: Understand the redirect dance. [OAuth Playground](https://www.oauth.com/playground/)

---

# 🏗️ Phase 4: The Build - "Kanban Board" (Days 10-15)

> **STOP:** The requirements for the final project are extensive.
> 👉 **Open [`FINAL_PROJECT_SPECS.md`](FINAL_PROJECT_SPECS.md) for the detailed Kanban Board guide.**

We recommend creating a **separate repository** for this phase to showcase it on your profile.

## 🗓️ High Level Schedule

- **Day 10**: Setup & Architecture
- **Day 11**: Atomic UI Kit (Tailwind + CVA)
- **Day 12**: Data Modeling & Reducers
- **Day 13**: Drag and Drop (`@dnd-kit`)
- **Day 14**: Optimistic UI & LocalStorage
- **Day 15**: Deployment & Case Study

---

# ✅ Graduation

- [ ] **Retrospective**: You have learned the runtime, built your own tools, studied the architecture, and shipped a product.
- [ ] **Next Step**: Star the original repo if this helped you!
