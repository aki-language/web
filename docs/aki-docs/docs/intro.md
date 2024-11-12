---
sidebar_position: 1
---

# The Aki Programming Language

> Aki is currently in development. Documentation and features may evolve.

## Why Aki?

You might wonder why we need another programming language. The answer lies in Aki's unique position in the ecosystem:

### Seamless C/C++ Integration
- Aki can emit C/C++ code, allowing gradual migration of legacy codebases
- Zero-cost interop with existing C/C++ libraries
- No runtime overhead when calling C/C++ functions
- Keep your existing build systems and toolchains

### Modern Safety with Legacy Compatibility
- Rust-like safety guarantees without breaking existing code
- Memory safety and thread safety by default
- Ability to isolate and modernize critical components while keeping the rest
- Gradual adoption: migrate file by file, function by function

### Better C++ Than C++
- Clean, modern syntax without historical baggage
- RAII and ownership semantics without template complexity
- No more header files
- Clear dependency management
- Predictable build times
- Modern generics without template metaprogramming pain

### Performance First
- Zero-cost abstractions
- Direct mapping to C/C++ constructs
- No garbage collection
- Predictable runtime behavior
- Compile-time optimization opportunities

Instead of forcing a complete rewrite of your codebase, Aki allows you to:
1. Start with your most critical components
2. Maintain full compatibility with existing code
3. Gradually introduce modern safety features
4. Keep your current toolchain and deployment process

```aki
// Example: Seamless C++ interop
extern "C++" {
  class LegacyClass;  // Your existing C++ class
}

complex ModernWrapper {
  let priv legacy: LegacyClass;
  
  fn modernize(data: &str) : Result<i32, Error> {
    // Safe Aki code interfacing with legacy C++
    // Full IDE support and safety guarantees
  }
}
```

Aki isn't just another language - it's a practical bridge between legacy systems and modern development practices.