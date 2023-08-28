const Visitor = require('../model/Visitor');

exports.main = (req, res) => {
  res.render('index');
};

exports.getVisitors = (req, res) => {
  // 이전 코드
  // console.log(Visitor.getVisitors());
  // res.render('visitor', { data: Visitor.getVisitors() });

  // DB 연결 후 수정된 코드
  Visitor.getVisitors((result) => {
    console.log('controller getVisitors >> ', result);
    res.render('visitor', { data: result });
  });
};

exports.postVisitor = (req, res) => {
  Visitor.postVisitor(req.body, (insertId) => {
    console.log('controller postVisitor >> ', insertId);
    res.send({ id: insertId, name: req.body.name, comment: req.body.comment });
  });
};

exports.deleteVisitor = (req, res) => {
  const { id } = req.body;
  Visitor.deleteVisitor(id, (result) => {
    console.log(result);
    res.send(result);
  });
};
