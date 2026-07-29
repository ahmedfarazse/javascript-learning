# JavaScript Objects

## Introduction

An object is a collection of key-value pairs used to store related data.

---

## Why Use Objects?

Objects organize related information into a single structure.

Example:

```javascript
const student = {
  name: "Ahmed",
  age: 22,
  city: "Okara"
};
```

---

## Creating Objects

```javascript
const person = {
  name: "Ahmed",
  age: 22
};
```

---

## Access Properties

Dot notation:

```javascript
person.name;
```

Bracket notation:

```javascript
person["name"];
```

---

## Update Property

```javascript
person.age = 23;
```

---

## Add Property

```javascript
person.country = "Pakistan";
```

---

## Delete Property

```javascript
delete person.city;
```

---

## Object Methods

```javascript
const user = {
  name: "Ahmed",
  greet() {
    console.log("Hello");
  }
};
```

---

## Spread Operator

```javascript
const copy = {
  ...person
};
```

---

## Useful Object Methods

```javascript
Object.keys()

Object.values()

Object.entries()

Object.freeze()

Object.assign()
```

---

## Best Practices

- Use meaningful property names.
- Prefer dot notation when possible.
- Use `const` for object references.
- Keep related data together.

---

## Common Mistakes

- Confusing objects with arrays.
- Accessing missing properties.
- Forgetting objects are mutable.
- Using incorrect property names.

---

## Interview Questions

- What is an object?
- Difference between object and array?
- Dot notation vs bracket notation?
- What does the spread operator do?
- Difference between `Object.keys()` and `Object.values()`?

---

## Quick Revision

- Objects store key-value pairs.
- Dot and bracket notation access properties.
- Objects are mutable.
- Methods are functions inside objects.
- Spread operator copies objects.