// const User = require('../model/User');
const { User } = require('../models');

// 기본 ejs 파일 렌더링
exports.main = (req, res) => {
  res.render('index');
};
exports.signup = (req, res) => {
  res.render('signup');
};
exports.signin = (req, res) => {
  res.render('signin');
};

// 각 요청 시 렌더링
exports.register = async (req, res) => {
  // User.register(req.body, (result) => {
  //   res.send({ result });
  // });
  const { userid, name, pw } = req.body;
  // id 는 auto_increment 걸려 있으니 null로 설정
  await User.create({
    id: null,
    userid,
    name,
    pw,
  });
  // 생성이 되었다면 true 전달
  res.send(true);
};
exports.login = async (req, res) => {
  // User.login(req.body, (result) => {
  //   res.send(result);
  // });
  const { id, pw } = req.body;
  const result = await User.findOne({
    where: {
      userid: id,
      pw,
    },
  });
  // 조회가 되었다면 빈 값 x -> 프론트에서 받아서 true / false 판단 가능
  res.send(result);
};
exports.profile = (req, res) => {
  res.render('profile', { userData: req.body });
};
exports.profileEdit = async (req, res) => {
  // User.profileEdit(req.body, (result) => {
  //   res.send(result);
  // });
  const { userid, pw, name } = req.body;
  await User.update(
    { name, pw },
    {
      where: { userid },
    }
  );
  res.send(true);
};
exports.profileDelete = async (req, res) => {
  // User.profileDelete(req.body, (result) => {
  //   res.send(result);
  // });
  const { userid } = req.body;
  await User.destroy({
    where: { userid },
  });
  res.send(true);
};
