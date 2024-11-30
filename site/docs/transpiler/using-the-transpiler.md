---
sidebar_position: 2
---

# Using the transpiler (cctranspiler)

You can invoke the transpiler with the following arguments.

The transpiler generally is optimized for single invokation mode,
meaning that you should not run the transpiler multiple times in a row. This is because the transpiler will not be able to cache the
results of the previous invokation and will have to recompile everything from scratch.

Rather provide a list of all files to compile and invoke the transpiler once.

| Long Form  | Short Alias | Description |
|-----------|------------|------------|
| --help | -h | Print this help message |
| --output | -o | Specify the output directory |
| --verbose | -v | Print verbose output |
| --eval | -e | Evaluate the given expression |
| FILES... | - | The files to compile |
