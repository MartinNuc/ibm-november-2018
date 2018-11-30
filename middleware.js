const fs = require('fs');

app.get('/static/:fileName', (req, res) => {
  const filename = req.params.fileName;
  const content = fs.readFileSync(`public/${filename}`);
  res.send(content);
})

