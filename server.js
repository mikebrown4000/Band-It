const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');

const artistRouter = require('./routes/artistRouter');
const bandRouter = require('./routes/bandRouter')

const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('hello');
});

app.use('/artists', artistRouter);

app.use('/bands', bandRouter);


app.listen(6969, ()=> console.log('listening on 6969'));
