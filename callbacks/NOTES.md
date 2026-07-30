# JavaScript Callbacks

## Introduction

A callback is a function passed as an argument to another function and executed after a specific task.

---

## Why Use Callbacks?

Callbacks make functions more flexible and allow code to run after another operation is completed.

---

## Basic Syntax

```javascript
function greet(callback) {
  console.log("Hello");

  callback();
}

function sayBye() {
  console.log("Good Bye");
}

greet(sayBye);
```

---

## Function Reference vs Function Call

Function Reference:

```javascript
greet(sayBye);
```

Function Call:

```javascript
greet(sayBye());
```

Always pass the function reference when using callbacks.

---

## Anonymous Callback

```javascript
greet(function () {
  console.log("Welcome");
});
```

---

## Arrow Function Callback

```javascript
greet(() => {
  console.log("Welcome");
});
```

---

## Callback with Parameters

```javascript
function processUser(callback) {
  callback("Ahmed");
}

processUser(function (name) {
  console.log(name);
});
```

---

## Common Uses

- Event Listeners
- setTimeout()
- setInterval()
- API Requests
- File Handling
- Database Operations

---

## Best Practices

- Pass function references instead of function calls.
- Use descriptive callback names.
- Use arrow functions for short callbacks.
- Keep callback functions simple.

---

## Common Mistakes

- Writing `callback()` instead of passing `callback`.
- Confusing function reference with function call.
- Making callbacks too complex.

---

## Interview Questions

- What is a callback function?
- Why are callbacks used?
- What is the difference between `callback` and `callback()`?
- Where are callbacks commonly used?
- What are callback functions in asynchronous JavaScript?

---

## Quick Revision

- Callback is a function.
- Passed as an argument.
- Executes later.
- Use function reference.
- Commonly used in asynchronous programming.