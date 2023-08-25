const Info = require('../model/Info');

exports.main = (req, res) => {
  res.render('practice', { title: '동적 폼 전송' });
};

exports.getAxios = (req, res) => {
  console.log(req.query);
  res.send(req.query);
};

exports.postAxios = (req, res) => {
  const info = Info.getInfo();
  res.send({ userData: req.body, info: info });
};
