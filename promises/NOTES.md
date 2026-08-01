# JavaScript Promises

## Introduction

A Promise is an object that represents the eventual completion or failure of an asynchronous operation.

A Promise can be in one of three states: Pending, Fulfilled, or Rejected.

---

## Why Use Promises?

Promises make asynchronous code easier to read, maintain, and handle.

They help avoid deeply nested callbacks and Callback Hell.

---

## Creating a Promise

```javascript
const promise = new Promise((resolve, reject) => {

  // asynchronous operation

});
```

A Promise receives two functions:

* `resolve()` → successful operation
* `reject()` → failed operation

---

## Promise States

### Pending

The operation is still in progress.

### Fulfilled

The operation completed successfully.

### Rejected

The operation failed.

```text
Pending
   ↓
Fulfilled

OR

Pending
   ↓
Rejected
```

---

## resolve()

`resolve()` is used when an asynchronous operation is successful.

```javascript
const promise = new Promise((resolve, reject) => {
  resolve("Data Loaded");
});
```

---

## reject()

`reject()` is used when an asynchronous operation fails.

```javascript
const promise = new Promise((resolve, reject) => {
  reject("Network Error");
});
```

---

## then()

`.then()` handles the fulfilled Promise.

```javascript
const promise = new Promise((resolve) => {
  resolve("Welcome Ahmed");
});

promise.then((result) => {
  console.log(result);
});
```

Output:

```text
Welcome Ahmed
```

---

## catch()

`.catch()` handles the rejected Promise.

```javascript
const promise = new Promise((resolve, reject) => {
  reject("Invalid Password");
});

promise.catch((error) => {
  console.log(error);
});
```

Output:

```text
Invalid Password
```

---

## finally()

`.finally()` runs whether the Promise is fulfilled or rejected.

```javascript
promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Request Completed");
  });
```

---

## Promise Chaining

Multiple `.then()` methods can be chained together.

The value returned from one `.then()` is passed to the next `.then()`.

```javascript
Promise.resolve(5)
  .then((value) => {
    return value * 2;
  })
  .then((value) => {
    return value + 10;
  })
  .then((value) => {
    console.log(value);
  });
```

Output:

```text
20
```

---

## Asynchronous Promise

Promises can be used with asynchronous operations such as `setTimeout()`.

```javascript
function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data Loaded");
    }, 2000);
  });
}

getData().then((data) => {
  console.log(data);
});
```

The Promise resolves after 2 seconds.

---

## Promise.all()

`Promise.all()` waits for all Promises to fulfill.

If one Promise rejects, the whole `Promise.all()` rejects.

```javascript
Promise.all([
  Promise.resolve("User"),
  Promise.resolve("Posts"),
  Promise.resolve("Comments")
])
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.log(error);
  });
```

---

## Promise.allSettled()

`Promise.allSettled()` waits for all Promises to finish, whether they are fulfilled or rejected.

```javascript
Promise.allSettled([
  Promise.resolve("User"),
  Promise.reject("Posts Failed"),
  Promise.resolve("Comments")
])
  .then((results) => {
    console.log(results);
  });
```

---

## Promise.race()

`Promise.race()` returns the result of the first Promise to settle.

The first Promise can be fulfilled or rejected.

```javascript
const p1 = new Promise((resolve) => {
  setTimeout(() => resolve("First"), 1000);
});

const p2 = new Promise((resolve) => {
  setTimeout(() => resolve("Second"), 2000);
});

Promise.race([p1, p2])
  .then((result) => {
    console.log(result);
  });
```

Output:

```text
First
```

---

## Promise.any()

`Promise.any()` returns the first fulfilled Promise.

Rejected Promises are ignored unless all Promises reject.

```javascript
Promise.any([
  Promise.reject("Server 1 Failed"),
  Promise.resolve("Server 2 Success"),
  Promise.resolve("Server 3 Success")
])
  .then((result) => {
    console.log(result);
  });
```

Output:

```text
Server 2 Success
```

---

## Promise Methods Comparison

| Method                 | Behavior                     |
| ---------------------- | ---------------------------- |
| `Promise.all()`        | All Promises must fulfill    |
| `Promise.allSettled()` | Waits for all results        |
| `Promise.race()`       | First settled Promise wins   |
| `Promise.any()`        | First fulfilled Promise wins |

---

## Best Practices

* Always handle rejected Promises.
* Use `.catch()` for Promise errors.
* Return values when chaining `.then()`.
* Use `Promise.all()` for multiple operations that all need to succeed.
* Use `Promise.allSettled()` when every result is needed.
* Use `Promise.any()` when the first successful result is enough.
* Use `Promise.race()` when the first settled result matters.

---

## Common Mistakes

* Confusing `resolve()` with `console.log()`.
* Forgetting `.catch()` for rejected Promises.
* Forgetting `return` inside Promise chains.
* Confusing `Promise.race()` with `Promise.any()`.
* Thinking `Promise.all()` ignores rejected Promises.
* Using `Promise.any()` when all results are required.

---

## Interview Questions

* What is a Promise?
* What are the three states of a Promise?
* What is the difference between `resolve()` and `reject()`?
* What is the difference between `.then()`, `.catch()`, and `.finally()`?
* What is Promise Chaining?
* What is the difference between `Promise.all()` and `Promise.allSettled()`?
* What is the difference between `Promise.race()` and `Promise.any()`?
* What happens when one Promise rejects inside `Promise.all()`?

---

## Quick Revision

* Promise represents the future result of an asynchronous operation.
* Promise states: Pending, Fulfilled, Rejected.
* `resolve()` → success.
* `reject()` → failure.
* `.then()` → handles success.
* `.catch()` → handles failure.
* `.finally()` → always runs.
* Promise chaining passes returned values to the next `.then()`.
* `Promise.all()` → all must fulfill.
* `Promise.allSettled()` → all results.
* `Promise.race()` → first settled.
* `Promise.any()` → first fulfilled.
