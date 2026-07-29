# JavaScript Functions

## Introduction

A function is a reusable block of code that performs a specific task.

---

## Why Use Functions?

Functions help avoid code repetition, improve readability, and make programs easier to maintain.

---

## Function Declaration

```javascript
function greet() {
  console.log("Hello");
}
```

---

## Function Expression

```javascript
const greet = function () {
  console.log("Hello");
};
```

---

## Arrow Function

```javascript
const greet = () => {
  console.log("Hello");
};
```

---

## Parameters vs Arguments

Parameters:

```javascript
function add(a, b) {}
```

Arguments:

```javascript
add(10, 20);
```

---

## Return Statement

```javascript
function square(num) {
  return num * num;
}
```

---

## Default Parameters

```javascript
function greet(name = "Guest") {
  console.log(name);
}
```

---

## Best Practices

- Keep functions small.
- Use meaningful names.
- Return values instead of printing when possible.
- Avoid global variables.

---

## Common Mistakes

- Forgetting `return`.
- Calling function without required arguments.
- Writing one function for multiple unrelated tasks.

---

## Interview Questions

- Difference between function declaration and expression?
- What are arrow functions?
- Difference between parameters and arguments?
- What does `return` do?
- When should arrow functions be avoided?

---

## Quick Revision

- Reusable code block
- Parameters receive values
- Arguments pass values
- `return` sends a value back
- Arrow functions use `=>`