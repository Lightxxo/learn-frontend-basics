# 🕵️‍♀️ Day 9: The Spy Agency (Security)

> "Agent, the enemy is intercepting our messages. Encypt everything. And watch out for Double Agents."

## 📚 Mission Briefing

You are the Cryptographer for MI6.

- **The Problem**: We are sending messages in plain text.
- **The Attack**: Enemy agents are using **CSRF** (Cross-Site Request Forgery) to impersonate us.

## 🛠️ Your Objectives

### 1. `parseJWT(token)`

Decode the Enemy Transmission.

- It's a Base64 encoded JSON blob. We need to see who signed it.

### 2. `CsrfManager`

The Handshake.

- Every time we send a request, stamp it with a secret `X-CSRF-Token`.
- If the token is missing or old, the server rejects it.

### 3. `hasPermission(agent, file, action)`

Clearance Levels.

- `007` (Admin) can delete files.
- `analyst` (Viewer) can only read.
- Implement the check.

## 🧪 Security Audit

```bash
npm run test:day9
```


👉 [Read the Submission Guide](../../SUBMISSION_GUIDE.md)
