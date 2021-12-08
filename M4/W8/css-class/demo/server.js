const express = require('express');
const morgan = require('morgan')

const app = express();
const port = 8080;

app.use(morgan('dev'));
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/box-model', (req, res) => {
  res.render('box-model');
});

app.get('/flexbox', (req, res) => {
  res.render('flexbox');
});

app.get('/tweet', (req, res) => {
  res.render('tweet');
});

app.listen(port, () => {
  console.log(`App is listening on ${port}`);
});
