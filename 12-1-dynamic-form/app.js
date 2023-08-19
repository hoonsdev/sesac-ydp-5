const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/', express.static(__dirname + '/static')); // 미들웨어 등록

app.use(express.urlencoded({ extended: true })); // post 형식으로 들어오는 모든 종류 데이터 파싱
app.use(express.json()); // JSON 파일 형식으로 데이터 주고받음.

// 루트 경로 요청시 index.ejs 보여줌.
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/ajax', (req, res) => {
  console.log(req.query, typeof req.query);
  res.send(req.query);
});

app.post('/ajax', (req, res) => {
  res.send(req.body);
});

app.get('/axios', (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

app.post('/axios', (req, res) => {
  res.send(req.body);
});

app.get('/fetch', (req, res) => {
  res.send(req.query);
});

app.post('/fetch', (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.listen(PORT, () => {
  console.log(`listening ${PORT} PORT!`);
});
