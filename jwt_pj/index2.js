const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const PORT = 8003;
const SECRET = '9PBYbnIhfXEVQdeXrvPWrX6ydDAJkIqV';

const userInfo = { id: 'banana', pw: '1234', name: '홍길동', age: 29 };

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/login', (req, res) => {
  try {
    const { id, pw } = req.body; // 유저가 입력한 정보
    // 유저의 정답 정보
    const { id: realId, pw: realPw } = userInfo;
    if (id === realId && pw === realPw) {
      // 토큰 생성
      const token = jwt.sign({ id: id }, SECRET);
      res.json({ result: true, token: token });
    } else {
      // 로그인 실패 응답
      res.json({ result: false, message: '로그인 정보가 올바르지 않음!' });
    }
  } catch (err) {
    console.error(err);
  }
});

app.post('/token', (req, res) => {
  console.log(req.headers);
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(' '); // ['Bearer', 'token_string']
    try {
      // 토큰이 변조되지 않고 유효한지 검사하는 코드
      const result = jwt.verify(token[1], SECRET);
      console.log('result >>>>>', result);
      // 토큰이 유효하다면 정답 데이터와 토큰을 통해 받아온 데이터가 일치하는지 확인
      if (result.id === userInfo.id) {
        res.json({ result: true, name: userInfo.name });
      }
    } catch (err) {
      console.error(err);
      res.json({ result: false, message: '인증된 회원이 아님' });
    }
  } else {
    res.redirect('/login');
  }
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
