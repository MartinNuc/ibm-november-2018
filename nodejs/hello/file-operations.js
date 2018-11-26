const fs = require('fs');

/* ----- how to use them:
write('file.txt', 'hello');
write('another.txt', 'Hello my friend');

let content = read('file.txt');
let content = read('another.txt');
*/

module.exports.write = function(filename, content) {
  fs.writeFileSync(filename, content);
}

module.exports.read = function(filename) {
  return fs.readFileSync(filename, 'utf8');
}