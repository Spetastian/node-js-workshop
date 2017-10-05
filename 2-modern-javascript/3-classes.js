class MagicalClass {
  constructor(foo='defaultFoo', bar='defaultBar') {
    this.foo = foo
    this.bar = bar
  }

  get fooBar() {
    return `${this.foo} ${this.bar}`;
  }

}

const magicalClass = new MagicalClass('Hello', 'world');

console.log(magicalClass.fooBar);