const express = require('express');
const session = require('express-session');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');
app.use('/static', express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  session({
    secret: 'MySessionSecretKey',
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      maxAge: 300 * 1000, // 300s
    },
  })
);

const userInfo = { id: 'banana', pw: '1234' };

app.get('/', (req, res) => {
  if (req.session.user) {
    res.render('index', { isLogin: true, id: req.session.user });
  } else {
    res.render('index', { isLogin: false });
  }
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/login', (req, res) => {
  console.log(req.body);
  if (userInfo.id === req.body.id && userInfo.pw === req.body.pw) {
    req.session.user = req.body.id;
    res.redirect('/');
  } else {
    res.send(
      "<script>alert('로그인 실패'); document.location.href = '/'</script>"
    );
  }
});

app.get('/logout', (req, res) => {
  // 세션 삭제
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
      return;
    }
    res.redirect('/');
  });
  console.log(req.session);
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
