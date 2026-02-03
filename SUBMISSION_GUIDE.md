# 🚀 Submission Guide

Welcome to the intensive frontend sprint! Here is how you verify and submit your work.

## 1. The Golden Rule

**"If it builds, it ships."**

This repository has automated checks. You cannot push your code if the tests are failing.

## 2. Running Tests Locally

Each assignment has a corresponding test suite.

- **Run all tests**: `npm test`
- **Run specific day**: `npm run test:day1` (check `package.json` for available scripts)

## 3. How to Submit

1. **Complete the Assignment**: Write your code in the `assignments/day-XX/index.js` file.
2. **Verify**: Run `npm test` and ensure everything is GREEN.
3. **Commit**:
   ```bash
   git add .
   git commit -m "feat: complete day 1 assignment"
   ```
4. **Push**:

   ```bash
   git push origin main
   ```

   > 🛑 **Wait!** If your tests fail, this command will verify fail and abort. You must fix your code before pushing.

5. **(Optional) Open a Pull Request**:
   If you want feedback or just want to mark it as "formally submitted", go to your GitHub repository and open a Pull Request from your branch to your own `main` branch (or the upstream repo if instructed).
