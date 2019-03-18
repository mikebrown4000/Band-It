const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');

const artistRouter = require('./routes/artistRouter');

const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('hello');
});

app.use('/artists', artistRouter);


app.listen(3000, ()=> console.log('listening on 3000'));
