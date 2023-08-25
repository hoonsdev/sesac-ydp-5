// 모듈
// 이 모듈의 역할
// 경로 선언과 관련된 내용 기술
const express = require('express');
const controller = require('../controller/Cmain');
const router = express.Router();

// // (임시) DB로부터 받아온 댓글 목록
// const comments = [
//   {
//     id: 1,
//     userid: 'helloworld',
//     date: '2022-10-31',
//     comment: '안녕하세요^~^',
//   },
//   {
//     id: 2,
//     userid: 'happy',
//     date: '2022-11-01',
//     comment: '반가워유',
//   },
//   {
//     id: 3,
//     userid: 'lucky',
//     date: '2022-11-02',
//     comment: '오 신기하군',
//   },
//   {
//     id: 4,
//     userid: 'bestpart',
//     date: '2022-11-02',
//     comment: '첫 댓글입니당ㅎㅎ',
//   },
// ];

// 이 파일의 기본 경로: localhost:PORT/

// // GET localhost:PORT/
// router.get('/', (req, res) => {
//   res.render('index');
// });

// // GET localhost:PORT/comments
// router.get('/comments', (req, res) => {
//   res.render('comments', { comments });
// });

// // GET localhost:PORT/comment/:id
// router.get('/comment/:id', (req, res) => {
//   // req.params: 라우트 매개변수에 대한 정보가 담겨 있음.
//   console.log(req.params);
//   const cmtId = Number(req.params.id); // 댓글의 고유 id
//   // for (let comment of comments) {
//   //   if (cmtId !== comment.id) {
//   //     res.render('404');
//   //   } else {
//   //     res.render('comment', { comment: comments[cmtId - 1] });
//   //   }
//   // }

//   // comments.forEach((el) => {
//   //   if (cmtId !== el.id) {
//   //     res.render('404');
//   //   } else {
//   //     res.render('comment', { comment: comments[cmtId - 1] });
//   //   }
//   // });

//   // 한 번에 처리
//   if (!comments[cmtId - 1]) {
//     return res.render('404');
//   }
//   res.render('comment', { comment: comments[cmtId - 1] });

//   // if (typeof cmtId === NaN || cmtId > comments.length || cmtId < 1) {
//   //   res.render('404');
//   // }
//   // res.render('comment', { comment: comments[cmtId - 1] });
// });

router.get('/', controller.main);
router.get('/comments', controller.comments);
router.get('/comment/:id', controller.comment);

// module.exports 구문을 통해 라우터를 내보내야
// 다른 파일(파일)에서 라우터 객체를 사용할 수 있음!
module.exports = router;
