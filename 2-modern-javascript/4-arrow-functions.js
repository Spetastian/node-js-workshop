class MagicalClass {
  constructor(foo='defaultFoo', bar='defaultBar') {
    this.foo = foo
    this.bar = bar
  }

  get fooBar() {
    return `${this.foo} ${this.bar}`;
  }
  
  delayedFooBar () {
    setTimeout(function () {
      //`this` is not MagicalClass here
      console.log(this.fooBar);
    }, 100);  
  }

  delayedFooBarArrow () {
    setTimeout(() => {
      //`this` is MagicalClass here
      console.log(this.fooBar);
    }, 100);  
  }

}

const magicalClass = new MagicalClass('Hello', 'world');

magicalClass.delayedFooBar() // Prints undefined
magicalClass.delayedFooBarArrow() // Prints Hello World