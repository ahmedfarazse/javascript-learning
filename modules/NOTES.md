# JavaScript Modules

## Introduction

A JavaScript Module is a file that contains related code and can export or import functionality from other files.

---

## Why Use Modules?

Modules make code reusable, organized, maintainable, and easier to debug.

---

## Export

The `export` keyword makes variables or functions available to other files.

```javascript
export const name = "Ahmed";

export function add(a, b) {
  return a + b;
}
```

---

## Import

The `import` keyword is used to use exported members from another file.

```javascript
import { name, add } from "./user.js";
```

---

## Import Everything

```javascript
import * as MathUtils from "./math.js";

console.log(MathUtils.add(2, 3));
```

---

## Alias

The `as` keyword allows renaming imported members.

```javascript
import { name as userName } from "./user.js";
```

---

## Named Export

A module can have multiple named exports.

```javascript
export const PI = 3.14;

export function add() {}

export function subtract() {}
```

Import

```javascript
import { PI, add, subtract } from "./math.js";
```

---

## Default Export

A module can have only one default export.

```javascript
export default function greet() {
  console.log("Hello");
}
```

Import

```javascript
import greet from "./greet.js";
```

---

## Named Export vs Default Export

Named Export

- Multiple exports allowed
- Uses {}
- Exact exported name required

Default Export

- Only one export allowed
- No {}
- Any name can be used during import

---

## Best Practices

- Keep related code in separate modules.
- Always use the `.js` extension in ESM imports.
- Use meaningful file names.
- Use Named Exports for multiple members.
- Use Default Export when exporting a single main feature.

---

## Common Mistakes

- Forgetting the `.js` extension.
- Using `{}` with Default Export.
- Forgetting `{}` with Named Export.
- Reassigning imported bindings.
- Confusing Named Export with Default Export.

---

## Interview Questions

- What is a JavaScript Module?
- Why do we use Modules?
- What is the difference between Export and Import?
- What is the difference between Named Export and Default Export?
- Can a module have multiple Default Exports?
- What does `import * as` do?

---

## Quick Revision

- A module is a JavaScript file.
- `export` shares code.
- `import` uses shared code.
- Named Exports use `{}`.
- Default Export does not use `{}`.
- A module can have only one Default Export.
- Modules improve code organization and reusability.