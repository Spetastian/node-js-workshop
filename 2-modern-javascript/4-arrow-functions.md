# 4. Arrow functions
> An arrow function expression has a shorter syntax than a function expression and does not bind its own this, arguments, super, or new.target. These function expressions are best suited for non-method functions, and they cannot be used as constructors.

You might have seen this somewhere:

```javascript
[...]
var self = this;
$.ajax({
  url: "http://someurl.com",
})
.done(function( data ) {
  self.updateSomething(data)
});
[...]
```

This is because `this` in JavaScript is not the current declaration scope. `this` refers to the current execution context.