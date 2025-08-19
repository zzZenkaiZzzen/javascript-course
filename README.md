# javascript-course

# 🟨 JavaScript Fundamentals - Session 1: Variables & Data Types

## 🎯 Session Overview

Welcome to your JavaScript journey! In this first session, you'll build the foundation for everything that comes next.

### What You'll Learn Today

- Set up a professional JavaScript development environment
- Use the browser console for debugging and testing
- Create and manage variables with `let`, `const`, and `var`
- Understand JavaScript data types and check them with `typeof`
- Use Git for version control and build your coding portfolio

### Time Required

**60 minutes** (1 hour)

---

## 📁 Files in This Folder

| File         | Purpose                                 |
| ------------ | --------------------------------------- |
| `index.html` | Your webpage - already set up and ready |
| `script.js`  | Where you'll write your JavaScript code |
| `README.md`  | This file - session instructions        |

---

## 🚀 Getting Started

### 1. Open the Files

- Make sure you're in the `01-fundamentals-part-1/starter/` folder
- Open `script.js` - this is where you'll write your code
- Open `index.html` in your browser to see the results

### 2. Test Your Setup

Add this code to `script.js` to test everything works:

```javascript
// JavaScript Fundamentals - Session 1
// My first JavaScript code!

let js = "amazing";
console.log(40 + 8 + 23 - 10);
```

### 3. See It Work

1. Save `script.js`
2. Open `index.html` in your browser
3. Press **F12** to open Developer Tools
4. Click the **Console** tab
5. You should see the number **61**

🎉 **Success!** You're ready to start coding!

---

## 📚 Key Concepts You'll Master

### Variables

```javascript
// Variables that can change
let firstName = "Sarah";
let age = 25;

// Variables that cannot change
const birthYear = 1991;
const PI = 3.1415;
```

### Data Types

```javascript
// Number
let score = 100;

// String
let message = "Hello World";

// Boolean
let isStudent = true;

// Undefined
let unknown;
```

### Type Checking

```javascript
console.log(typeof 42); // "number"
console.log(typeof "Hello"); // "string"
console.log(typeof true); // "boolean"
```

---

## 🎯 Session Goals

By the end of this session, you should be able to:

- [ ] Create variables using `let` and `const`
- [ ] Explain when to use `let` vs `const` vs `var`
- [ ] Use `typeof` to check data types
- [ ] See output in the browser console
- [ ] Make a Git commit to save your work

---

## 🔧 Troubleshooting

### Console doesn't show anything?

- [ ] Is the browser console open? (Press F12)
- [ ] Did you save `script.js`?
- [ ] Are there any red errors in the console?
- [ ] Is `script.js` linked in the HTML? (It should be!)

### Git issues?

- [ ] Are you in the correct directory?
- [ ] Is Git installed on your computer?
- [ ] Did you clone the repository correctly?

---

## 📊 Save Your Progress

When you complete the session, save your work with Git:

```bash
git add .
git commit
```

Copy this commit message:

```
feat: add basic variables and data types

- Set up JavaScript environment and browser console
- Implement let, const, var variable declarations
- Add data type exploration with typeof operator
- Establish development workflow and best practices
```

```bash
git push origin main
```

---

## 🚀 What's Next?

After completing this session, you'll be ready for:

**Session 2: Operators & Expressions**

- Mathematical operations and calculations
- Comparing values and making decisions
- Building your first real coding challenge
- Creating a BMI calculator from scratch

---

## 📚 Quick Reference

### Variable Declaration

| Keyword | Can Change? | When to Use                           |
| ------- | ----------- | ------------------------------------- |
| `let`   | ✅ Yes      | When value will change                |
| `const` | ❌ No       | When value stays the same (preferred) |
| `var`   | ✅ Yes      | Don't use (old way)                   |

### Data Types

| Type        | Example              | Description       |
| ----------- | -------------------- | ----------------- |
| `number`    | `42`, `3.14`         | Any number        |
| `string`    | `"Hello"`, `'World'` | Text in quotes    |
| `boolean`   | `true`, `false`      | True or false     |
| `undefined` | `undefined`          | No value assigned |

---

## 💡 Pro Tips

1. **Use `const` by default** - only use `let` when you need to change the value
2. **The console is your friend** - use it to test and debug your code
3. **Good variable names matter** - `firstName` is better than `fn`
4. **Save often** - your browser needs the latest version of your file
5. **Practice makes perfect** - try creating your own variables!

---

## 🎉 Ready to Start?

You have everything you need! Open `script.js` and start coding. Remember:

- **Take your time** - understanding is more important than speed
- **Experiment** - try changing values and see what happens
- **Ask questions** - if something doesn't make sense, investigate!
- **Have fun** - you're learning one of the world's most popular programming languages!

**Happy coding!** 💻✨
