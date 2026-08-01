# JavaScript Async/Await

## Introduction

`async/await` is a cleaner and easier way to work with Promises in JavaScript.

It makes asynchronous code look more like synchronous code.

---

## async

An `async` function always returns a Promise.

```javascript
async function greet() {
    return "Hello Ahmed";
}
```

The result can be handled using `.then()`:

```javascript
greet().then((result) => {
    console.log(result);
});
```

---

## await

`await` waits for a Promise to fulfill and gives its resolved value.

`await` is normally used inside an `async` function.

```javascript
function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data Loaded");
        }, 2000);
    });
}

async function showData() {

    const data = await getData();

    console.log(data);
}

showData();
```

Output after 2 seconds:

```text
Data Loaded
```

---

## async/await vs then()

Using `.then()`:

```javascript
getData()
    .then((data) => {
        console.log(data);
    });
```

Using `async/await`:

```javascript
async function showData() {

    const data = await getData();

    console.log(data);
}

showData();
```

Both work with Promises.

`async/await` usually makes asynchronous code easier to read.

---

## Error Handling

`try...catch` is used to handle errors with `async/await`.

```javascript
async function showData() {

    try {

        const data = await getData();

        console.log(data);

    } catch (error) {

        console.log(error);

    }
}
```

---

## finally

`finally` runs whether the operation succeeds or fails.

```javascript
async function showData() {

    try {

        const data = await getData();

        console.log(data);

    } catch (error) {

        console.log(error);

    } finally {

        console.log("Request Completed");

    }
}
```

---

## Sequential Operations

When independent Promises are awaited one after another, they run sequentially.

```javascript
const user = await getUser();

const posts = await getPosts();
```

Flow:

```text
getUser()
   ↓
wait
   ↓
getPosts()
   ↓
wait
```

---

## Concurrent Operations

For independent operations, `Promise.all()` can be used with `await`.

```javascript
const [user, posts] = await Promise.all([
    getUser(),
    getPosts()
]);
```

This allows both operations to start without unnecessarily waiting for each other.

---

## Best Practices

* Remember that `async` functions always return Promises.
* Use `await` when you need the result of a Promise.
* Use `try...catch` for error handling.
* Use `Promise.all()` for independent operations.
* Avoid unnecessary sequential `await`.
* Keep asynchronous functions focused and readable.

---

## Common Mistakes

* Forgetting that `async` returns a Promise.
* Using `await` incorrectly.
* Forgetting error handling.
* Running independent operations sequentially unnecessarily.
* Assuming `async` makes JavaScript completely synchronous.

---

## Interview Questions

* What is `async/await`?
* What does `async` do?
* What does `await` do?
* Does an `async` function always return a Promise?
* What is the difference between `.then()` and `await`?
* How do you handle errors with `async/await`?
* What is the difference between sequential and concurrent operations?
* How can `Promise.all()` be used with `async/await`?

---

## Quick Revision

* `async` → function always returns a Promise.
* `await` → waits for a Promise result.
* `async/await` → cleaner Promise syntax.
* `try...catch` → handles errors.
* `finally` → runs after success or failure.
* Sequential `await` → operations run one after another.
* `Promise.all()` + `await` → useful for independent concurrent operations.
