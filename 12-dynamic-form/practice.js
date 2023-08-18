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
  if (!req.query.name) {
    res.send('이름은 필수 값입니다!');
  } else {
    res.send(req.query);
  }
});

app.post('/axios', (req, res) => {
  const realId = 'banana';
  const realPw = '4321';
  console.log(req.body);
  if (!req.body.id || !req.body.pw) {
    res.send('아이디와 비밀번호는 필수 값입니다.');
  } else if (realId === req.body.id && realPw === req.body.pw) {
    res.send(req.body);
  } else {
    res.send('아이디 또는 패스워드 오류😥');
  }
});

app.listen(PORT, () => {
  console.log(`listening ${PORT} port!`);
});
