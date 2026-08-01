# JavaScript Event Loop

## Introduction

The Event Loop is a mechanism that allows JavaScript to handle asynchronous operations while JavaScript runs on a single thread.

It manages the execution of synchronous code and asynchronous callbacks.

---

## Why Use the Event Loop?

The Event Loop allows JavaScript to handle asynchronous operations without blocking the main thread.

It is important for understanding:

* Promises
* async/await
* setTimeout()
* Asynchronous JavaScript
* Node.js

---

## JavaScript is Single-Threaded

JavaScript executes one piece of JavaScript code at a time.

```javascript
console.log("A");
console.log("B");
console.log("C");
```

Output:

```text
A
B
C
```

---

## Call Stack

The Call Stack keeps track of the functions currently being executed.

```javascript
function first() {
    console.log("First");
}

function second() {
    first();
    console.log("Second");
}

second();
```

Execution:

```text
second()
   ↓
first()
   ↓
console.log("First")
   ↓
console.log("Second")
```

The Call Stack follows **LIFO (Last In, First Out)**.

---

## Synchronous Code

Synchronous code executes one statement at a time.

```javascript
console.log("A");
console.log("B");
console.log("C");
```

Output:

```text
A
B
C
```

---

## Asynchronous Code

Asynchronous operations allow JavaScript to continue executing other code while waiting for an operation to complete.

```javascript
console.log("A");

setTimeout(() => {
    console.log("B");
}, 2000);

console.log("C");
```

Output:

```text
A
C
B
```

---

## setTimeout()

`setTimeout()` schedules a callback to run later.

Even `setTimeout(..., 0)` does not execute immediately.

```javascript
console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

console.log("C");
```

Output:

```text
A
C
B
```

---

## Event Loop

The Event Loop checks when the Call Stack is available and coordinates the execution of queued asynchronous callbacks.

Simplified flow:

```text
Call Stack
    ↓
Asynchronous Operation
    ↓
Queue
    ↓
Event Loop
    ↓
Call Stack
```

---

## Microtask Queue

Promise callbacks are placed in the Microtask Queue.

```javascript
console.log("A");

Promise.resolve().then(() => {
    console.log("B");
});

console.log("C");
```

Output:

```text
A
C
B
```

The Promise callback runs after the synchronous code finishes.

---

## Task / Callback Queue

Callbacks such as `setTimeout()` are scheduled as tasks.

```javascript
console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

console.log("C");
```

Output:

```text
A
C
B
```

---

## Microtask Queue vs Task Queue

After the current synchronous task finishes, pending microtasks are processed before another task.

```javascript
console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

Promise.resolve().then(() => {
    console.log("C");
});

console.log("D");
```

Output:

```text
A
D
C
B
```

Execution order:

```text
Synchronous Code
A
D

Microtask Queue
C

Task Queue
B
```

---

## async/await and Event Loop

The code after `await` continues asynchronously.

```javascript
console.log("A");

async function test() {

    console.log("B");

    await Promise.resolve();

    console.log("C");
}

test();

console.log("D");
```

Output:

```text
A
B
D
C
```

The code after `await` continues through the microtask mechanism.

---

## Important Example

```javascript
console.log("1");

setTimeout(() => {

    console.log("2");

    Promise.resolve().then(() => {
        console.log("3");
    });

}, 0);

Promise.resolve().then(() => {
    console.log("4");
});

console.log("5");
```

Output:

```text
1
5
4
2
3
```

Execution:

```text
Synchronous:
1
5

Microtask:
4

Task:
2

Microtask:
3
```

The Promise inside the timer callback is added to the Microtask Queue after the timer callback starts.

Therefore, `2` executes before `3`.

---

## Execution Order

For the examples covered in this topic:

```text
1. Synchronous Code
        ↓
2. Microtask Queue
   Promise.then()
   await continuation
        ↓
3. Task / Callback Queue
   setTimeout()
```

After a task finishes, pending microtasks are processed before another task is taken.

---

## Best Practices

* Understand execution flow instead of memorizing outputs.
* Remember that `setTimeout(..., 0)` does not mean immediate execution.
* Promise callbacks are microtasks.
* Code after `await` continues asynchronously.
* Trace synchronous code first.
* Then trace microtasks.
* Then trace tasks.

---

## Common Mistakes

* Thinking `setTimeout(..., 0)` executes immediately.
* Thinking Promise callbacks execute before synchronous code.
* Confusing the Microtask Queue with the Task Queue.
* Forgetting that code after `await` continues asynchronously.
* Thinking the Promise inside a timer executes before the timer's own synchronous code.

---

## Interview Questions

* What is the Event Loop?
* Is JavaScript single-threaded?
* What is the Call Stack?
* What is the Microtask Queue?
* What is the Task / Callback Queue?
* Why does `Promise.then()` execute before `setTimeout(..., 0)`?
* Does `setTimeout(..., 0)` execute immediately?
* How does `async/await` interact with the Event Loop?
* What happens when a Promise is created inside a `setTimeout()` callback?

---

## Quick Revision

* JavaScript executes code using the Call Stack.
* JavaScript is single-threaded.
* The Event Loop coordinates asynchronous execution.
* Promise callbacks are placed in the Microtask Queue.
* `setTimeout()` callbacks are tasks.
* Microtasks are processed before another task.
* `setTimeout(..., 0)` does not execute immediately.
* Code after `await` continues asynchronously.
* Always trace synchronous code first.
* Then trace microtasks.
* Then trace tasks.
