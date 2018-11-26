
const fs = require('fs');

fs.writeFile('file.txt', 'Hello this is content of the file.', (err) => {
  if (err) { 
    console.error(err);
    return;
  }
  console.log('DONE, file is written.');

  fs.readFile('file.txt', 'utf8', (err, content) => {
    if (err) { 
      console.error(err);
      return;
    }
    console.log('read: ', content);
  });
});