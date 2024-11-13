---
sidebar_position: 1
---

# Basic syntax

In aki, types are declared at the end. That means that

```jsx title="Variables"
let a: bool = true;  // Immutable variable (cannot be reassigned)
var b: bool = true;  // Mutable variable (can be reassigned)
b = false;           // Valid reassignment

// You can also initialize multiple variables to the same value
let a,b,c,d : bool = true;
```

```jsx title="Functions"
fn main(argc: i32) {  // No return type means void
  print("Hello world");
}

fn get_answer(): i32 {  // Explicit return type
  return 42;
}

fn get_number() {  // Type inference for numeric returns (defaults to i32)
  return 42;
}

// Multiple returns:
// Under the hood, aki will try to pack or return the first in the regular way and the rest as out ptr.
fn return_multiple() {
  let a,b,c,d : bool = true;
  return a,b,c,d;
}

let a,b,c,d = return_multiple();
```


Aki follows the concept of RAII, which means:
```jsx title="Classes/Structs"
complex FileHandler {
  var file: File;  // Resource member

  fn FileHandler(path: str) {
    // The resource is acquired (file is opened) during initialization
    self.file = File.open(path);
    // If File.open fails, the constructor fails and no instance is created
  }

  fn ~FileHandler() {
    // When the complex is destroyed, the resource is automatically released
    // self.file is automatically closed
  }
}

fn example() {
  let handler : FileHandler("data.txt"); // Resource acquired
  // ... use the file ...
} // handler goes out of scope, destructor called, file automatically closed
```

If statements:
```jsx title="Classes/Structs"
fn example() {
  // classical c like syntax
  if (a == 42) {
    // do something
    dosomething();
  } else {
    // do something else
  }

  // or:
  a == 42 ? dosomething();

  // This syntax is nice with functions that return bools
  isactive() ? dosomething();
  isactive2() ? dosomethingelse();

  isactive3() ? print("yes") : print("no");
}
```
