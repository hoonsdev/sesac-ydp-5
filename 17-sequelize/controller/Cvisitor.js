// const Visitor = require('../model/Visitor');
const { Visitor } = require('../models'); // ../models/index.js

exports.main = (req, res) => {
  res.render('index');
};

exports.getVisitors = async (req, res) => {
  // [before]
  // Visitor.getVisitors((result) => {
  //   console.log('controller getVisitors >> ', result);
  //   res.render('visitor', { data: result });
  // });

  const result = await Visitor.findAll();
  console.log(result);
  res.render('visitor', { data: result });
};

exports.postVisitor = async (req, res) => {
  // [before]
  // Visitor.postVisitor(req.body, (insertId) => {
  //   console.log('controller postVisitor >> ', insertId);
  //   res.send({ id: insertId, name: req.body.name, comment: req.body.comment });
  // });
  const { name, comment } = req.body;
  const result = await Visitor.create({
    name,
    comment,
  });
  // console.log(result); // create 메서드가 실행된 결과 (== insert한 데이터 값)
  res.send(result);
};

exports.deleteVisitor = async (req, res) => {
  // [before]
  // const { id } = req.body;
  // Visitor.deleteVisitor(id, (result) => {
  //   console.log(result);
  //   res.send(result);
  // });
  const { id } = req.body;
  await Visitor.destroy({
    where: { id },
  });
  res.send(true);
};

exports.getVisitor = async (req, res) => {
  // [before]
  // const { id } = req.params;
  // Visitor.getVisitor(id, (result) => {
  //   res.send(result);
  // });
  const { id } = req.params;
  const result = await Visitor.findOne({
    where: { id },
  });
  res.send(result);
};

exports.editVisitor = async (req, res) => {
  // [before]
  // Visitor.editVisitor(req.body, (result) => {
  //   // DB에서 정상적으로 처리되면 true값이 result에 담김. 이걸 send
  //   res.send(result);
  // });

  // update(변경될 값, where 절)
  const { id, name, comment } = req.body;
  await Visitor.update(
    { name, comment },
    {
      where: { id },
    }
  );
  res.send(true);
};
