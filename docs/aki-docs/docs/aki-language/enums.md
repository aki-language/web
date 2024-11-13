---
sidebar_position: 3
---

# Enums

Enums in aki are automatically "namespaced" such as `enum class` in c++. This is to avoid name clashes.

```jsx title="Enum"
enum Color {
    Red,
    Green,
    Blue
}

// Enums may be extended with additional values
enum ExtraColors extends Color {
    Yellow,
    Purple
}

fn my_func() {
    let color: Color = Color::Red;  // works
    let color2: Color = Red;        // will not work (explicit name missing)
}
```
