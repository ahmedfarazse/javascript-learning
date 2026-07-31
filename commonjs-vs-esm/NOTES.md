# CommonJS vs ESM

## Introduction

JavaScript has two module systems:

- CommonJS (CJS)
- ECMAScript Modules (ESM)

Both are used to organize and share code between multiple files.

---

## CommonJS

CommonJS is the original module system used by Node.js.

Import

```javascript
const math = require("./math");
```

Export

```javascript
module.exports = {
  add,
  subtract
};
```

---

## Exports Shortcut

Instead of using `module.exports`, we can also write:

```javascript
exports.add = add;
exports.subtract = subtract;
```

---

## ECMAScript Modules (ESM)

ESM is the modern JavaScript module system.

Import

```javascript
import { add } from "./math.js";
```

Export

```javascript
export function add(a, b) {
  return a + b;
}
```

Default Export

```javascript
export default function greet() {
  console.log("Hello");
}
```

---

## Enabling ESM in Node.js

To use `import` and `export` in Node.js, add this to `package.json`:

```json
{
  "type": "module"
}
```

---

## CommonJS vs ESM

| CommonJS | ESM |
|-----------|-----|
| require() | import |
| module.exports | export |
| exports | export |
| Older Node.js | Modern JavaScript |
| Synchronous Loading | Static Imports |

---

## Best Practices

- Prefer ESM for new projects.
- Use CommonJS only when working with legacy projects.
- Use `.js` extension in ESM imports.
- Don't mix CommonJS and ESM in the same file.
- Keep one module system per project whenever possible.

---

## Common Mistakes

- Forgetting `"type": "module"` in Node.js.
- Using `require()` inside an ESM file.
- Using `import` inside a CommonJS file.
- Forgetting `.js` extension.
- Mixing CommonJS and ESM syntax.

---

## Interview Questions

- What is CommonJS?
- What is ESM?
- Difference between CommonJS and ESM?
- What does `module.exports` do?
- What does `require()` do?
- Why is ESM preferred in modern JavaScript?
- Can we mix CommonJS and ESM?

---

## Quick Revision

- CommonJS uses `require()`.
- CommonJS exports using `module.exports`.
- ESM uses `import`.
- ESM exports using `export`.
- Modern projects prefer ESM.
- Older Node.js projects commonly use CommonJS.