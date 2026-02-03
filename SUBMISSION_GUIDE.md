# 🚀 Submission Guide

Welcome to the intensive frontend sprint! Here is how you verify and submit your work.

## 1. The Golden Rule

**"If it builds, it ships."**

This repository has automated checks. You cannot push your code if the tests are failing.

## 2. Running Tests Locally

Each assignment has a corresponding test suite.

- **Run all tests**: `npm test`
- **Run specific day**: `npm run test:day1` (check `package.json` for available scripts)

> [!IMPORTANT]
> **Smart Testing**: When you push, we run `npm run test:changed`. This only tests files you have modified. This means you can complete Day 1 and push it, even if Day 2 is still broken/incomplete.

## 3. How to Submit

### Step 0: Initial Setup (Do this once)

When you first fork and clone the repo, the tests are RED (failing) because you haven't written code yet. To save your initial "Setup" commit (creating your branch), you need to **bypass** the checks once.

1.  Create your branch:
    ```bash
    git checkout -b intensive-learning-sprint
    ```
2.  Push with bypass (Only for this first time!):
    ```bash
    git push origin intensive-learning-sprint --no-verify
    ```

### Step 1: The Daily Loop

1.  **Code**: Write your solution in `assignments/day-XX/index.js`.
2.  **Verify**: Run `npm run test:dayXX` and ensure it is GREEN.
3.  **Commit**:
    ```bash
    git add .
    git commit -m "feat: complete day 1 assignment"
    ```
4.  **Push**:
    ```bash
    git push origin intensive-learning-sprint
    ```
    > 🛑 **Wait!** If your changed tests fail, this command will be rejected by the pre-push hook. You must fix your code before pushing.

### Step 2: Open a Pull Request

When you are ready to formally submit or want feedback:

1.  Go to your GitHub repository.
2.  You will see a "Compare & pull request" button for your `intensive-learning-sprint` branch.
3.  Open the PR against your own `main` branch (or the trainer's repo if instructed).
