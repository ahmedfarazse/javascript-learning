# JavaScript Error Handling

## Introduction

Error handling is the process of detecting and managing runtime errors to prevent an application from crashing.

---

## Why Use Error Handling?

Error handling allows programs to continue running gracefully even when unexpected errors occur.

---

## try...catch

```javascript
try {
  console.log(user);
} catch (error) {
  console.log("Something went wrong.");
}
```

---

## Error Object

```javascript
try {
  console.log(user);
} catch (error) {
  console.log(error.message);
}
```

---

## finally

```javascript
try {
  console.log("Hello");
} catch (error) {
  console.log(error.message);
} finally {
  console.log("Finished");
}
```

The `finally` block always executes whether an error occurs or not.

---

## throw

```javascript
function checkAge(age) {
  if (age < 18) {
    throw new Error("You must be 18 or older.");
  }

  console.log("Access Granted");
}
```

---

## Common Uses

- User Input Validation
- API Calls
- File Handling
- Database Operations
- Authentication
- Payment Systems

---

## Best Practices

- Use `try...catch` for runtime errors.
- Use `throw` for custom errors.
- Use `finally` for cleanup tasks.
- Prefer `===` over `==`.

---

## Common Mistakes

- Assuming `try...catch` catches syntax errors.
- Forgetting to handle thrown errors.
- Using `throw` without meaningful error messages.

---

## Interview Questions

- What is error handling?
- What is the purpose of `try...catch`?
- What does `finally` do?
- What is the difference between `throw` and `return`?

---

## Quick Revision

- `try` → Code to test
- `catch` → Handles runtime errors
- `finally` → Always executes
- `throw` → Creates a custom error