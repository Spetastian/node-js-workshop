# 2. let vs. const
We dont use `var` anymore at all when declaring variables in JavaScript. We use `let` or `const`.

## var
The scope of a variable defined with `var` is function scope or declared outside any function; global.

This has caused some troubles in the past and needed fixing.

## let
The scope of a variable defined with `let` is block scope. Always.

## const
Like `let`, variables defined with `const` are block-scoped, but with the addition that the value cannot change through re-assignment, and it can't be redeclared.

You should always use const if you define a variable with a value that you kow will not change.