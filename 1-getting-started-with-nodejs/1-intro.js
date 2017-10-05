// ES6+ const
const fs = require('fs');

// ES6+ String Templates
fs.readFile(`${__dirname}/1-intro.md`,'utf8', (err, data) => {
  if (err) {
    console.error(err);
  }
  else{
    console.log(data);
  }
});