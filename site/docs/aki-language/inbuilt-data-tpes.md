---
sidebar_position: 1
---

# Inbuilt types

Aki has a number of inbuilt types that are used to represent basic data types. These types are used to represent numbers, characters, and other basic data types.
Unlike as in C++, the types are _the same_ across all platforms.

```jsx title="Integer types"
byte // 8 bit unsigned integer, guaranteed to be 8 bits on *all* platforms (equal to u8)
i8
i16
i32
i64
i128

u8
u16
u32
u64
u128
```

The integer types are signed and unsigned integers of various sizes. The `i` prefix denotes signed integers, while the `u` prefix denotes unsigned integers. The number following the prefix denotes the number of bits used to represent the integer.

```jsx title="Floating point types"
f8  // not common
f16 // half float
f32 // most common the default floating point type in c++
f64 // would be a double in c++
```

Character types are used to represent single characters. The `c` prefix denotes character types. The number following the prefix denotes the number of bits used to represent the character.

```jsx title="Character types"
c8 // utf8 character
c16 // utf16 character
c32 // utf32 character
```

You can declare an array of characters using the character types:

```jsx title="Character array"
let characters: [c8, ...] = {'a','b','c'};
// or:
let characters: [c8, 3] = "abc";
```

Since the character sequences are stored in rdata, you can also just use a u8 reference to a string literal:

```jsx title="String literal"
let characters: &u8 = "abc";
```

It is recommended to use `c8` for most cases, as it uses the uf8 encoding, which is the most common encoding for characters.
Aki will try its best to reencode the characters into the target language's encoding.

```jsx title="Boolean type"
bool
```

Aki also has an inbuilt slice type that is used to represent a view into an array. Slices are used to represent a contiguous sequence of elements in an array.
TBD
