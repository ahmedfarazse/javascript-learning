# JavaScript Destructuring

## Introduction

Destructuring is an ES6 feature that allows you to extract values from arrays or properties from objects into separate variables in a clean and concise way.

---

## Why Use Destructuring?

Without destructuring:

```javascript
const person = {
  name: "Ahmed",
  age: 22
};

const name = person.name;
const age = person.age;
```

With destructuring:

```javascript
const { name, age } = person;
```

It reduces code duplication and improves readability.

---

## Array Destructuring

```javascript
const fruits = ["Apple", "Mango", "Orange"];

const [first, second] = fruits;
```

### Skip Values

```javascript
const [first, , third] = fruits;
```

### Default Values

```javascript
const [first, second = "Banana"] = ["Apple"];
```

### Rest Operator

```javascript
const [first, ...others] = fruits;
```

---

## Object Destructuring

```javascript
const user = {
  name: "Ahmed",
  age: 22
};

const { name, age } = user;
```

### Rename Variables

```javascript
const { name: fullName } = user;
```

### Default Values

```javascript
const { city = "Okara" } = user;
```

---

## Function Parameters

```javascript
function printUser({ name, age }) {
  console.log(name, age);
}
```

---

## Best Practices

- Use destructuring for cleaner code.
- Use default values when data may be missing.
- Rename variables if needed to avoid conflicts.
- Use rest operator to collect remaining values.

---

## Common Mistakes

- Destructuring from `undefined` or `null`.
- Forgetting `{}` for objects and `[]` for arrays.
- Incorrect property names return `undefined`.

---

## Interview Questions

- What is destructuring?
- Difference between array and object destructuring?
- What is the rest operator?
- Can destructuring use default values?
- How does destructuring work in function parameters?

---

## Quick Revision

- ES6 feature
- Extract values easily
- Works with arrays and objects
- Supports default values
- Supports rest operator