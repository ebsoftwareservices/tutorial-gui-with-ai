# 01 — Building a Simple GUI Over an API Using AI

**Level:** Freshman
**Time estimate:** 1–2 hours
**Tools:** Node.js, Vite, React, Cursor (AI IDE)

---

## Objective

Build a simple web page that:

- Takes user input
- Calls an online API
- Displays the result

You will use **Cursor** (an AI-assisted IDE) to help write the code.

**Learning goals:**

- Understand how a frontend talks to an API
- Learn how to use AI to assist and debug code
- Run a React project locally

No backend, no deployment, no database required.

---

## Step 1 — Install Required Software

### Install Node.js

Download the **LTS version** from https://nodejs.org/

After installation, verify in your terminal:

```bash
node -v
npm -v
```

Both commands should print version numbers.

### Install Cursor

Download from https://cursor.sh/ and install like a normal application.

---

## Step 2 — Create the Project

Open Cursor, then open the integrated terminal and run:

```bash
npm create vite@latest
```

When prompted:

| Prompt | Answer |
|--------|--------|
| Project name | `api-demo` (or anything you like) |
| Framework | React |
| Variant | JavaScript |

Then:

```bash
cd api-demo
npm install
npm run dev
```

Open the URL shown in the terminal. If you see a React page, setup is complete.

---

## Step 3 — What You Will Build

A single page with:

- An input box for a User ID
- A "Fetch User" button
- The API response displayed as formatted JSON
- A loading indicator
- An error message if the request fails

API you will use:

```
https://jsonplaceholder.typicode.com/users/{id}
```

Example: https://jsonplaceholder.typicode.com/users/1

---

## Step 4 — Use Cursor to Generate the Code

In Cursor's AI chat, paste this prompt:

> Create a simple React component that:
> - Has an input field for a user ID
> - Has a button labeled "Fetch User"
> - Calls `https://jsonplaceholder.typicode.com/users/{id}` with the entered ID
> - Displays the response as formatted JSON
> - Shows a loading state while fetching
> - Shows an error message if the request fails

Paste the generated code into `src/App.jsx`, then run:

```bash
npm run dev
```

Test it with user IDs 1 through 10.

---

## Deliverables

Submit a GitHub repository containing:

- [ ] A working React project (must run with `npm install && npm run dev`)
- [ ] A `README.md` with:
  - Setup instructions
  - Which API you used
  - A screenshot of your working app

> **Stuck?** A reference implementation is available in [`solution/`](solution/).
> Run it with `cd solution && npm install && npm run dev`.
> Try to finish on your own first — use it only to compare or unblock yourself.

---

## Important Notes

- Do **not** ask AI to generate the entire project structure — always initialize with Vite first.
- If errors appear, ask Cursor to help debug them.
- Try to understand the code, not just copy it.

---

## Out of Scope

This tutorial does **not** cover:

- Backend / server-side code
- Deployment
- Databases
- Authentication
- Production architecture

Focus: **AI-assisted frontend development that calls a public API.**
