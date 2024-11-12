---
sidebar_position: 3
---

# Safety concepts

Aki enforces several safety concepts at compile time, similar to Rust's borrow checker but with some unique characteristics.

```jsx title="Ownership and Borrowing"
fn example() {
  let data : String = "hello".to_string();
  consume_string(data);      // Ownership transferred
  // Using data here would be a compile error
  
  var value : i32 = 42;
  let ref : &i32 = &value;   // Immutable borrow
  // let mut_ref : &mut i32 = &mut value;  // Error: can't borrow mutably while immutable borrow exists
  print(*ref);               // Dereference with *
}

fn consume_string(s: String) { // Takes ownership
  // s is dropped at end of scope
}
```

```jsx title="Safe Mutability"
fn demonstrate_mut() {
  let mut data : Vec<i32>();
  
  let ref1 = &mut data;     // First mutable borrow
  // let ref2 = &mut data;  // Error: only one mutable borrow at a time
  ref1.push(42);
  
  let shared1 : &Vec<i32> = &data;       // Multiple immutable borrows OK
  let shared2 : &Vec<i32> = &data;       // This is fine
  // data.push(42);                       // Error: can't modify while borrowed
}
```

Instead of null, Aki uses Option types (denoted by the '?' on the return type):
```jsx title="Option Types"
fn divide(a: i32, b: i32) : i32? {
  if (b == 0) {
    return null;
  }
  return a / b;
}

fn use_division() {
  let result : i32? = divide(10, 2);
  if (result == null) 
    print("Division by zero");
  else
    print(result!);
}
```