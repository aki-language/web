---
sidebar_position: 2
---

# Arrays

Aki supports arrays with a fixed size. Arrays are declared with the type followed by the size in square brackets. The size must be a constant expression.

```jsx title="Fixed Array declaration"
let numbers: [i32, 3] = {1,2,3};
```

Arrays can also be specified without an explicit length:

```jsx title="Unbounded Array declaration"
let characters: [c8, ...] = {'a','b','c'};
```

In this case, the size is inferred from the number of elements in the initializer list.
