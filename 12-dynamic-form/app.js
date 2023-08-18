const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('/views', './views');

app.use(express.urlencoded({ extended: true })); // post 요청으로 들어오는 모든 종류 데이터 파싱
app.use(express.json());

app.get('/', (req, res) => {
  res.render('dynamic', { title: '동적 폼 전송' });
});

app.get('/ajax', (req, res) => {
  console.log(req.query); // 여기서 console.log는 서버측(백)에서 찍힘. 터미널!
  res.send(req.query);
});

app.post('/ajax', (req, res) => {
  console.log(req.body); // 여기서 console.log는 서버측(백)에서 찍힘. 터미널!
  res.send(req.body);
});

app.listen(PORT, () => {
  console.log(`listening ${PORT} port!`);
});
