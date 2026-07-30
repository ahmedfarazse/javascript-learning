# JavaScript Higher-Order Functions

## Introduction

A Higher-Order Function (HOF) is a function that either accepts another function as an argument or returns a function.

---

## Why Use Higher-Order Functions?

Higher-Order Functions make code reusable, flexible, and easier to maintain.

---

## Accepting a Function

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

## Returning a Function

```javascript
function greeting() {
  return function () {
    console.log("Hello Ahmed");
  };
}

const message = greeting();
message();
```

---

## Callback vs Higher-Order Function

Higher-Order Function:

```javascript
function greet(callback) {
  callback();
}
```

Callback Function:

```javascript
function sayBye() {
  console.log("Good Bye");
}

greet(sayBye);
```

---

## Common Uses

- map()
- filter()
- reduce()
- forEach()
- Event Handling
- Promises
- Express Middleware

---

## Best Practices

- Keep callback functions small.
- Use meaningful function names.
- Reuse Higher-Order Functions whenever possible.
- Prefer arrow functions for short callbacks.

---

## Common Mistakes

- Confusing callback with Higher-Order Function.
- Passing `callback()` instead of `callback`.
- Returning a value instead of a function.

---

## Interview Questions

- What is a Higher-Order Function?
- What is the difference between a callback and a Higher-Order Function?
- Can a Higher-Order Function return another function?
- Name some built-in Higher-Order Functions in JavaScript.

---

## Quick Revision

- Accepts a function or returns a function.
- Improves code reusability.
- Callbacks are passed into Higher-Order Functions.
- map(), filter(), reduce(), and forEach() are Higher-Order Functions.