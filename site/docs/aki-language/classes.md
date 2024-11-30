---
sidebar_position: 4
---

# Complexes

What you may know as classes/structs in other languages, are called complexes in aki.
```jsx title="Classes/Structs"
complex MyComplex {
  let priv member : bool;

  fn MyComplex(a: i32) : i32 { // In aki, constructors may return variables.
    self.member = true; // It ensures all member variables are set up before we ret.
    return 42;
  }

  fn ~MyComplex(); // Destructors may however not return anything;

  fn my_member_fn() {
    // Member functions can be defined in the class.
  }
}
// Constructor return value:
fn my_fn() {
  // Declare an immutable class on the stack.
  let my_complex, variable : MyComplex(1337);
  // the self instance is always returned first, for the constructor.
  // the return value is then passed as the second arg.
  // This is a special constructor rule.
  // Variable should now be 42.

  my_complex.my_member_fn();
}
```

Of course you can also allocate a complex on the heap:
```jsx title="Heap allocated complex"
fn my_fn() {
  let my_complex& : MyComplex = new MyComplex(1337);
  // The complex is now allocated on the heap.
  // The complex is automatically deallocated when it goes out of scope.
}
```

Inheritance is also supported, but only single inheritance is allowed.
```jsx title="Inheritance"
complex Base {
  fn base_fn() {
    print("Base");
  }
}
// single inheritance is allowed.
complex Derived extends Base {
  fn derived_fn() {
    print("Derived");
  }
}

// multiple inheritance is not allowed.
complex Derived2 extends Base, Derived { // Error
  fn derived_fn() {
    print("Derived");
  }
}

fn my_fn() {
  let derived& : Derived = new Derived();
  derived.base_fn();
  derived.derived_fn();
}
```

Preferrably, you should use composition over inheritance.
```jsx title="Composition"
complex Base {
  let member : i32;
}

complex Derived {
  let base : Base;
  fn derived_fn() {
    print("Derived");
  }
}
```
