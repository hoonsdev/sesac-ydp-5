const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/public', express.static(__dirname + '/static'));

// (임시) DB로부터 받아온 댓글 목록
const comments = [
  {
    id: 1,
    userid: 'helloworld',
    date: '2022-10-31',
    comment: '안녕하세요^~^',
  },
  {
    id: 2,
    userid: 'happy',
    date: '2022-11-01',
    comment: '반가워유',
  },
  {
    id: 3,
    userid: 'lucky',
    date: '2022-11-02',
    comment: '오 신기하군',
  },
  {
    id: 4,
    userid: 'bestpart',
    date: '2022-11-02',
    comment: '첫 댓글입니당ㅎㅎ',
  },
];

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/comments', (req, res) => {
  res.render('comments', { comments });
});

app.get('/comment/:id', (req, res) => {
  // req.params: 라우트 매개변수에 대한 정보가 담겨 있음.
  console.log(req.params);
  const cmtId = Number(req.params.id); // 댓글의 고유 id
  // for (let comment of comments) {
  //   if (cmtId !== comment.id) {
  //     res.render('404');
  //   } else {
  //     res.render('comment', { comment: comments[cmtId - 1] });
  //   }
  // }

  // comments.forEach((el) => {
  //   if (cmtId !== el.id) {
  //     res.render('404');
  //   } else {
  //     res.render('comment', { comment: comments[cmtId - 1] });
  //   }
  // });

  // 한 번에 처리
  if (!comments[cmtId - 1]) {
    return res.render('404');
  }
  res.render('comment', { comment: comments[cmtId - 1] });

  // if (typeof cmtId === NaN || cmtId > comments.length || cmtId < 1) {
  //   res.render('404');
  // }
  // res.render('comment', { comment: comments[cmtId - 1] });
});

// param 여러개 사용 가능
app.get('/test/:id/:name', (req, res) => {
  console.log(req.params);
  res.send('test res success!');
});

app.get('*', (req, res) => {
  res.render('404');
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
