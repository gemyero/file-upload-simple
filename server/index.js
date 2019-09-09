const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.raw({
  limit: '10mb' // or whatever
}));

app.post('/', (req, res) => {
  console.log(req.body); // will be the file buffer
  // do whatever we want with the file
  res.send('Done');
});

app.listen(4040, () => console.log('server starts...'));