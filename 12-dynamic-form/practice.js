const express = require('express');
const app = express();
const PORT = 8001;

app.set('view engine', 'ejs');
app.set('/views', './views');

app.use(express.urlencoded({ extended: true })); // post 요청으로 들어오는 모든 종류 데이터 파싱
app.use(express.json());

app.get('/', (req, res) => {
  res.render('practice', { title: '동적 폼 전송' });
});

app.get('/axios', (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

app.post('/axios', (req, res) => {
  res.send({ realId: 'banana', realPw: '4321', userData: req.body });
});

app.listen(PORT, () => {
  console.log(`listening ${PORT} port!`);
});
