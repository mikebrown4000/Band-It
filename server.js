const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');

const artistRouter = require('./routes/artistRouter');
const bandRouter = require('./routes/bandRouter')
const commentRouter = require('./routes/commentRouter')

const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('hello');
});

app.use('/artists', artistRouter);

app.use('/bands', bandRouter);

app.use('/comments', commentRouter);


app.listen(6969, ()=> console.log('listening on 6969'));
