# JavaScript Arrays

## What is an Array?

An array is a special object used to store multiple values in a single variable. Every element is stored at a numeric index starting from **0**.

```javascript
const fruits = ["Apple", "Mango", "Orange"];
```

---

# Why use Arrays?

Without arrays:

```javascript
let fruit1 = "Apple";
let fruit2 = "Mango";
let fruit3 = "Orange";
```

With arrays:

```javascript
const fruits = ["Apple", "Mango", "Orange"];
```

Arrays make code shorter, cleaner, and easier to manage.

---

# Characteristics

- Ordered collection
- Zero-based indexing
- Dynamic size
- Mutable
- Can store different data types

Example

```javascript
const data = [
    "Ahmed",
    22,
    true,
    null,
    {city: "Okara"}
];
```

---

# Creating Arrays

```javascript
const arr = [];

const numbers = [10,20,30];

const fruits = new Array("Apple","Mango");
```

> Prefer array literals (`[]`) instead of `new Array()`.

---

# Access Elements

```javascript
const colors = ["Red","Blue","Green"];

console.log(colors[0]);

console.log(colors[2]);
```

---

# Update Elements

```javascript
colors[1] = "Black";
```

---

# Array Length

```javascript
colors.length
```

---

# Common Methods

## Add

```javascript
push()
```

Adds an element at the end.

Complexity

O(1)

---

```javascript
unshift()
```

Adds an element at the beginning.

Complexity

O(n)

---

## Remove

```javascript
pop()
```

Removes the last element.

Complexity

O(1)

---

```javascript
shift()
```

Removes the first element.

Complexity

O(n)

---

## Search

```javascript
includes()

indexOf()
```

Complexity

O(n)

---

## Copy

```javascript
slice()
```

Returns a new array.

---

## Modify

```javascript
splice()
```

Adds or removes elements.

---

# Spread Operator

```javascript
const arr3 = [...arr1,...arr2];
```

Uses

- Copy Array
- Merge Arrays

---

# Time Complexity

| Operation | Complexity |
|------------|------------|
| Access | O(1) |
| Update | O(1) |
| Search | O(n) |
| push() | O(1) |
| pop() | O(1) |
| shift() | O(n) |
| unshift() | O(n) |

---

# Best Practices

✅ Use `const` if the array reference will not change.

✅ Prefer `map()`, `filter()`, and `reduce()` over manual loops when appropriate.

✅ Use descriptive variable names.

✅ Use the spread operator for copying arrays.

```javascript
const copy = [...original];
```

---

# Common Mistakes

❌ Accessing an index that does not exist.

```javascript
arr[100]
```

Result

```javascript
undefined
```

---

❌ Using `==` instead of `===`.

---

❌ Forgetting that arrays start from index **0**.

---

❌ Using `splice()` when `slice()` is intended.

---

# Interview Questions

### What is the difference between Array and Object?

---

### Difference between slice() and splice()?

---

### Difference between push() and unshift()?

---

### Why is push() O(1) while shift() is O(n)?

---

### What does the spread operator do?

---

# Quick Revision

- Arrays store multiple values.
- Index starts from **0**.
- Arrays are mutable.
- `push()` and `pop()` work at the end.
- `shift()` and `unshift()` work at the beginning.
- `slice()` copies.
- `splice()` modifies.
- Spread operator copies and merges arrays.