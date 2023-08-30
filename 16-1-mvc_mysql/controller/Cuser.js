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
exports.profile = (req, res) => {
  console.log(req.body);
  res.render('profile');
};
exports.register = (req, res) => {
  User.register(req.body, (result) => {
    res.send({ result });
  });
};
exports.login = (req, res) => {
  User.login(req.body, (result) => {
    console.log('controller result: ', result);
    if (result) {
      return res.send({ loginSucceeded: true });
    } else {
      return res.send({ loginSucceeded: false });
    }
  });
};
