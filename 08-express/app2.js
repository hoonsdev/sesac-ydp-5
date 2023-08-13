// express 및 ejs 연습
const express = require('express');
const app2 = express();
const PORT = 8000;

app2.set('view engine', 'ejs');
app2.set('views', './views2');
app2.use('/public', express.static(__dirname + '/static2'));

app2.get('/', (req, res) => {
  res.render('index2');
});

app2.get('/login', function (req, res) {
  res.render('login');
});

app2.get('/register', function (req, res) {
  res.render('register');
});

app2.get('/sesac', function (req, res) {
  res.render('sesac');
});

app2.listen(PORT, () => {
  console.log(`listening ${PORT} PORT`);
});
