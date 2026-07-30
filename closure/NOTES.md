# JavaScript Closures

## Introduction

A closure is created when an inner function remembers and can access the variables of its outer function even after the outer function has finished executing.

---

## Why Use Closures?

Closures help preserve data, create private variables, and build reusable functions.

---

## Basic Example

```javascript
function outer() {
  let name = "Ahmed";

  function inner() {
    console.log(name);
  }

  return inner;
}

const result = outer();
result();
```

---

## Lexical Scope

```javascript
function outer() {
  let message = "Hello";

  function inner() {
    console.log(message);
  }

  inner();
}
```

The inner function can access variables from its outer function.

---

## Closure Example

```javascript
function counter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const increment = counter();

increment();
increment();
```

---

## Common Uses

- Private Variables
- Data Hiding
- Function Factories
- Event Handlers
- React Hooks
- Memoization

---

## Best Practices

- Use closures only when needed.
- Avoid unnecessary memory usage.
- Keep closure logic simple and readable.

---

## Common Mistakes

- Confusing lexical scope with closures.
- Assuming all inner functions are closures.
- Creating unnecessary closures inside loops.

---

## Interview Questions

- What is a closure?
- How is a closure different from lexical scope?
- Why are closures useful?
- Where are closures used in JavaScript?

---

## Quick Revision

- Inner function remembers outer variables.
- Variables stay in memory.
- Built on lexical scope.
- Used for private data and reusable functions.