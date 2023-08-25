const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/public', express.static(__dirname + '/static'));

const indexRouter = require('./routes/index');

// indexRouter에서는 localhost:PORT/ 기본 경로
app.use('/', indexRouter);

app.get('*', (req, res) => {
  res.render('404');
});

// localhost:PORT 로 express 앱이 실행
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
