console.log('-- Function scope vs. blocked scope with var and let --')
/*
 A function creates a function scope 
 which `var` will be scoped to if declared
 inside that function. That is why it cannot
 be used outsied that function.

 So far so good...
*/
function fooFunc () {
  var fooVar = 'Hey var';
  console.log('fooVar inside fooFunc', fooVar);
}

fooFunc();

try {
  console.log('fooVar outside fooFunc', fooVar);
}
catch(err) {
  //console.error(err);
  /*
    And that is why we will caught a ReferenceError
    here.
  */
  console.log('ReferenceError caught!')
}

/*
 But a for-loop creates a blocked scope. In this
 case the variable defined with `var` will be accessible
 in the global scope.
*/
for (var iVar = 0; iVar<1; iVar++){
  var anotherVar = 'anotherVarValue';
  console.log('anotherVar inside for loop', anotherVar);
}

/*
  Both i and anotherVar is defined 
  inside above block scope, but acessible
  outside it.
*/
console.log(iVar);
console.log(anotherVar);

/*
 This is not the case with `let`
*/
for (let iLet = 0; iLet<1; iLet++){
  let anotherLet = 'anotherVarValue';
  console.log('anotherLet inside for loop', anotherLet);
}

try{
  console.log(iLet);
  console.log(anotherLet);
}
catch(err) {
  //console.error(err);
  /*
    And that is why we will caught a ReferenceError
    here.
  */
  console.log('ReferenceError caught!')
}

console.log('-- Closure inside loop doing async operation --')
/*
 One side effect of that `var` is accessible in the
 global scope when defined inside a blocked scope
 is that async calls whose callback refers to that
 value does get the value assigned to that variable
 at the moment of usage.
*/
for (var i = 0; i < 5; ++i) {
  setTimeout(function () {
    console.log(i); // output '5' 5 times
  }, 100);  
}

/*
`let` in the loop can re-binds it to each iteration of the loop, 
making sure to re-assign it the value from the end of the previous 
loop iteration, so it can be used to avoid issue with closures.
*/
for (let i = 0; i < 5; ++i) {
  setTimeout(function () {
    console.log(i); // output 0, 1, 2, 3, 4 
  }, 100);  
}