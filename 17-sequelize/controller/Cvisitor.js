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

exports.getVisitor = (req, res) => {
  // console.log(req.query); //
  console.log(req.params); // { id: 5 }
  const { id } = req.params;
  Visitor.getVisitor(id, (result) => {
    res.send(result);
  });
};

exports.editVisitor = (req, res) => {
  // 여기서 req.body에는 id, name, comment가 있다.
  // 이 req.body와 콜백으로 라우터 처리 -> model의 Visitor 모듈을 이용
  Visitor.editVisitor(req.body, (result) => {
    // DB에서 정상적으로 처리되면 true값이 result에 담김. 이걸 send
    res.send(result);
  });
};
