---
sidebar_position: 2
---

# Advanced concepts

This section covers advanced concepts.

## Translation units & symbol visibility

In aki, you can import other source files using the
`import` keyword. This is similar to the `#include` keyword in C/C++. However in aki, all symbols are private unless declared public.

```jsx title="Source files and visibility"
// In other_file.aki
pub fn foo() { // This fn will be visible in the importing file
  print("Hello from foo");
}

fn bar() { // This fn will not be visible in the importing file
  print("Hello from bar");
}

// in main.aki
import "other_file.aki"; // import all pub symbols from other_file.aki and make them available in the global namespace
// unless they specified their own namespace
import "other_file.aki" as other; // import all pub symbols from other_file.aki under the (new) namespace other

fn main() {
  foo(); // OK
  bar(); // Error: bar is not visible
  other::foo(); // OK
  other::bar(); // Error: bar is not visible
}

// Selective imports
import { Vec3, Matrix4 } from "math.aki";             // Import specific symbols
import { Vec3 as Vector3, Matrix4 } from "math.aki";  // Import and rename
import { Vec3, * } from "math.aki";                   // Import specific symbols plus everything else
```

## General visibility rules

In general the visibility rules are as follows:

- All symbols are private by default
- Symbols can be made public by prefixing them with `pub`
- Complex types and their members are private by default

```jsx title="complex visibility"
// Regular complex - type and members are private
complex Vec3 {
    let x: i32;      // private
    let y: i32;      // private
    pub let z: i32;  // explicitly public
}

// Public complex - type is public but members remain private by default
pub complex Vec3 {
    let x: i32;      // still private
    let y: i32;      // still private
    pub let z: i32;  // explicitly public
}

// Public complex with default public members
pub(all) complex Vec3 {
    let x: i32;      // public by default
    let y: i32;      // public by default
    priv let z: i32; // explicitly private
}
```

The `pub(all)` modifier makes both the complex type and all its members public by default. Individual members can still be made private using the `priv` keyword.
