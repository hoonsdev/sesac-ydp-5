const express = require('express');
const app = express();
const PORT = 8001;

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use('/public', express.static(__dirname + '/static'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('blog');
});

app.post('/result', (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.get('/result', (req, res) => {
  res.render('result');
});

app.listen(PORT, () => {
  console.log(`listening ${PORT} port!`);
});
