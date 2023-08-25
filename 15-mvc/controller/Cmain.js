const Comment = require('../model/Comment');
// (임시) DB로부터 받아온 댓글 목록

exports.main = (req, res) => {
  res.render('index');
};

exports.comments = (req, res) => {
  res.render('comments', { comments: Comment.getCommentAll() });
};

exports.comment = (req, res) => {
  const cmtId = Number(req.params.id); // 데이터 베이스에 있는 id 말고 요청하는 댓글의 고유 id
  const comments = Comment.getCommentAll(); // 댓글 목록 배열

  if (!comments[cmtId - 1]) {
    return res.render('404');
  }
  res.render('comment', { comment: comments[cmtId - 1] });
};
