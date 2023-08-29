const User = require('../model/User');

exports.main = (req, res) => {
  res.render('index');
};

exports.signup = (req, res) => {
  res.render('signup');
};
exports.signin = (req, res) => {
  res.render('signin');
};
exports.register = (req, res) => {
  console.log(req.body);
  User.register(req.body, (result) => {
    res.send({ result: result });
  });
};
