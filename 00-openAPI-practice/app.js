const express = require('express');
const app = express();
const PORT = 8003;

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use('/public', express.static(__dirname + '/static'));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/search', (req, res) => {
  res.send(req.query);
});

app.listen(PORT, () => {
  console.log(`listening ${PORT} port!`);
});
