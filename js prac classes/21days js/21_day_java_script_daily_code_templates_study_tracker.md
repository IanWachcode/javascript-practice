# 📘 21-Day JavaScript Daily Code Templates & Study Tracker

This document gives you **daily coding templates** + a **checklist tracker** you can reuse every day. Use it in VS Code or print it.

---

## 🕒 DAILY STUDY STRUCTURE (3–4 HOURS)
- 📺 Learn / Watch: 60–90 min
- 👨‍💻 Code Along: 60 min
- 🧠 Exercises: 30–45 min
- 🛠️ Mini Project: 45–60 min

---

# 🧩 DAILY CODE TEMPLATE (USE EVERY DAY)

## 📂 Folder Structure
```
Day-X/
 ├── index.html
 ├── script.js
 └── notes.md
```

---

## 🧪 script.js TEMPLATE
```js
/*************************************************
 * Day X – Topic Name
 * What I learned:
 * -
 * -
 *************************************************/

// 1️⃣ Variables
let example = "";

// 2️⃣ Functions
function exampleFunction() {
  console.log("Function running");
}

// 3️⃣ Practice Code
// Write practice problems here

// 4️⃣ Mini Project Code
// Build today's project below
```

---

## 📝 notes.md TEMPLATE
```md
# Day X – Topic

## Key Concepts
-
-

## What I Understand Well
-

## What I Need to Revise
-

## Questions
-
```

---

# 📅 WEEK 1 – DAILY CODE TEMPLATES

## Day 1 – Variables & Data Types
### Exercises
```js
let name = "";
let age = 0;
let isStudent = true;
console.log(name, age, isStudent);
```

### Mini Project
```js
let userName = "Ian";
console.log(`Hello ${userName}, welcome to JavaScript!`);
```

---

## Day 2 – Conditions
### Exercises
```js
let number = 10;
if (number % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}
```

### Mini Project – Age Checker
```js
let age = 18;
if (age < 13) console.log("Child");
else if (age < 20) console.log("Teen");
else console.log("Adult");
```

---

## Day 3 – Loops
### Exercises
```js
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
```

### Mini Project – Guessing Game
```js
let secret = 5;
let guess = 3;
if (guess === secret) console.log("Correct!");
else console.log("Try again");
```

---

## Day 4 – Functions
```js
function add(a, b) {
  return a + b;
}
console.log(add(3, 4));
```

---

## Day 5 – Arrays
```js
let tasks = [];
tasks.push("Learn JS");
console.log(tasks);
```

---

## Day 6 – Objects
```js
let student = {
  name: "Ian",
  age: 20,
  grades: [80, 90, 85]
};
```

---

## Day 7 – Review Project
✅ Console Quiz App

---

# 📅 WEEK 2 – DOM TEMPLATE

## DOM Starter Template
```html
<button id="btn">Click Me</button>
<p id="text">Hello</p>
<script src="script.js"></script>
```

```js
document.getElementById("btn").addEventListener("click", () => {
  document.getElementById("text").innerText = "Clicked!";
});
```

---

# 📅 WEEK 3 – ADVANCED TEMPLATE

## Fetch API Template
```js
async function getData() {
  try {
    const res = await fetch("https://api.example.com");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
getData();
```

---

# ✅ 21-DAY STUDY TRACKER

## WEEK 1
- [ ] Day 1 – Variables
- [ ] Day 2 – Conditions
- [ ] Day 3 – Loops
- [ ] Day 4 – Functions
- [ ] Day 5 – Arrays
- [ ] Day 6 – Objects
- [ ] Day 7 – Review

## WEEK 2
- [ ] Day 8 – DOM Basics
- [ ] Day 9 – Events
- [ ] Day 10 – Styling
- [ ] Day 11 – DOM + Arrays
- [ ] Day 12 – Local Storage
- [ ] Day 13 – Forms
- [ ] Day 14 – Review

## WEEK 3
- [ ] Day 15 – ES6+
- [ ] Day 16 – Async JS
- [ ] Day 17 – Errors
- [ ] Day 18 – Modules
- [ ] Day 19 – Project Plan
- [ ] Day 20 – Build Project
- [ ] Day 21 – Deploy & Review

---

## 🏁 FINAL RULES
✅ Code every day
✅ Break things & fix them
✅ Build before moving on

🚀 After this, you’re ready for **React or Node.js**

