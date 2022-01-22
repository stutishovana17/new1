const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
});
app.get('/stuti', (req, res) => {
    res.send('Hello World! is here')
  });
  app.post('/stuti1', (req, res) => {
    res.send('Hello World! is here and there')
  });
  app.post('/stuti11', (req, res) => {
    res.send('Hello World! is here and there every where we can find it easily')
  });
 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});