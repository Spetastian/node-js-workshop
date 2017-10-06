# 5. Spread and rest operators
A common pattern in JavaScript is instead for a function to take a lot of arguments, it takes a single object that contains the arguments as properties.

Lets look at a typical example from the documentation on jQuery.ajax:

```javascript
$.ajax({
  method: "POST",
  url: "some.php",
  data: { name: "John", location: "Boston" }
})
  .done(function( msg ) {
    alert( "Data Saved: " + msg )
  });
```

Instead of doing this:

```javascript
$.ajax("POST", "some.php", { name: "John", location: "Boston" }) [...]
```

This function only takes one argument that is a single object containg all the "options". By doing this we can have several optional properties combined with the required ones. We can also add properties to that object without introducing breaking changes to the API.

A function that takes an "options" object might look a bit like this:

```javascript
function ajax(options) {
  const url = options.url
  const method = options.method
  const data = options.data
  [...]
  return this.xhr([...])
}
```

With the spread operator, we can "spread" an object and automatically assign the properties to variables like so:
```javascript
function ajax(options) {
  const { url, method, data } = options
  [...]
  return this.xhr([...])
}
```

Even better, we can do this as well:
```javascript
function ajax({ url, method, data }) {
  [...]
  return this.xhr([...])
}
```

This function still takes a single object as an argument. The order of the properties does not matter and some of them does not even have to be present.

You can also create objects by doing this:
```javascript
const foo = 123
const bar = 42
const someObject = { foo, bar }

console.log(someObject.foo) // 123
console.log(someObject.bar) // 42
```
