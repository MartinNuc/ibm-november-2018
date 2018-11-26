
const fileOperations = require('./file-operations.js')

fileOperations.write('file.txt', 'hello this is content of file');

let contentOfFile = fileOperations.read('file.txt');
console.log(contentOfFile);
