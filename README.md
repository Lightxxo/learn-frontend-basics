# 🚀 Frontend Engineering in 15 Days (Accelerated)

> **"Don't just use libraries. Build them."**

## 👋 Welcome

This is an intensive, accelerated curriculum designed to take you from "React User" to **Frontend Engineer**.
You won't just learn _how_ to use hooks; you will **implement your own** `useState` and Virtual DOM from scratch.

**Target Audience:** CS Graduates, Fast Learners, or Junior Devs aiming for Senior.
**Time Commitment:** 5-6 hours/day.

---

## 📚 The Curriculum

| Phase   | Focus                      | Days  | Topics                                         |
| :------ | :------------------------- | :---- | :--------------------------------------------- |
| **I**   | **The Machine**            | 1-4   | Event Loop, Prototypes, Async, TypeScript      |
| **II**  | **The Internal Engine**    | 5-8   | **Build Mini-React** (VDOM, Reconciler, Hooks) |
| **III** | **Professional Ecosystem** | 9     | Security (JWT, CSRF), Auth, RBAC               |
| **IV**  | **The Capstone**           | 10-15 | **Kanban Board** (Drag & Drop, Architecture)   |

👉 **[View Full Roadmap & Study Plan](frontend_roadmap.md)**
👉 **[View Final Project Specs](FINAL_PROJECT_SPECS.md)**

---

## 🛠️ The Workflow (Setup Guide)

Since you (likely) don't own this repository, follow this workflow to save your progress.

### 1. Fork & Clone

1.  Click the **Fork** button (top right) to copy this to your GitHub.
2.  Clone **YOUR** fork:
    ```bash
    git clone https://github.com/<YOUR-USERNAME>/learn-frontend-basics.git
    cd learn-frontend-basics
    ```

### 2. Install Dependencies

We use **Jest** for testing and **TypeScript** for sanity.

```bash
npm install
```

### 3. Create Your Sprint Branch

Do not work on `main`. Create a branch for your journey.

```bash
git checkout -b intensive-learning-sprint
```

### 4. Running Tests

Each day has its own test suite.

```bash
# Example: Day 1
npm run test:day1
```

_Your goal: Turn the RED tests GREEN._

---

## 📦 Directory Structure

```text
my-repo-name/
├── assignments/               # 📂 Your Daily Tasks
│   ├── day-01/
│   │   ├── README.md          # 📄 Mission Briefing
│   │   ├── index.js           # 📝 Your Implementation
│   │   └── index.test.js      # 🧪 Verification Suite
│   └── ...
├── TRAINER_SETUP.md           # 🎓 Instructions for Repo Owners
├── frontend_roadmap.md        # 🗺️ Detailed Syllabus
└── FINAL_PROJECT_SPECS.md     # 🏗️ Capstone Requirements
```

---

## 🏆 Graduation Criteria

1.  All **9 days** of assignments passed (Green tests).
2.  **Final Project** deployed to production (Vercel/Netlify).
3.  **Code** written with TypeScript and proper architecture.

**Good luck, Engineer.**
