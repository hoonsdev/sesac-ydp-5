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
