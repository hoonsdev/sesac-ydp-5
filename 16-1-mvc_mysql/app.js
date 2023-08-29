const express = require('express');
const app = express();
const indexRouter = require('./routes/user');
const PORT = 8000;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', indexRouter);

app.get('*', (req, res) => {
  res.render('404');
});

app.listen(PORT, () => {
  console.log(`listening localhost:${PORT}`);
});
