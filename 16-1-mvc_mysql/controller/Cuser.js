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
  User.register(req.body, (result) => {
    res.send({ result });
  });
};
exports.login = (req, res) => {
  User.login(req.body, (result) => {
    res.send(result);
  });
};
exports.profile = (req, res) => {
  res.render('profile', { userData: req.body });
};
exports.profileEdit = (req, res) => {
  User.profileEdit(req.body, (result) => {
    res.send(result);
  });
};
exports.profileDelete = (req, res) => {
  User.profileDelete(req.body, (result) => {
    res.send(result);
  });
};
