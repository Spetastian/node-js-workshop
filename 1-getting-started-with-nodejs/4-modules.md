# 4. Modules
In order for a module to be "requireable" or "importable" in Node, it has to be "exported". In order to export a module, it has to follow a specific format.

In order to do this: `const fooBar = require('./utils/fooBar')` you have to do this in `./utils/fooBar.js`:

```javascript

module.exports = () => {
  return 'Hey world'
}

```