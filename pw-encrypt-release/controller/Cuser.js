// TODO: User 모델 모듈 불러오기
const { User } = require('../models');
// TODO: bcrypt 패키지 불러오기
const bcrypt = require('bcrypt');

// 기본 페이지 렌더링
exports.index = (req, res) => {
  // index.ejs 랜더 (data 키로 session 객체의 userInfo 전달)
  res.render('index', { data: req.session.userInfo }); // data 없으면 undefined
};

exports.getRegister = (req, res) => {
  // register.ejs 랜더
  res.render('register');
};

exports.getLogin = (req, res) => {
  // login.ejs 랜더
  res.render('login');
};

exports.getUsers = async (req, res) => {
  // 세션에 userInfo 데이터가 있다면; 전체 유저를 찾음
  // 세션에 userInfo 데이터가 없다면; /login 경로로 리다이렉트
  // -> 즉, 해당 요청은 로그인한 사람만 전체 유저를 조회할 수 있음
  if (req.session.userInfo) {
    const result = await User.findAll();
    res.render('users', {
      name: req.session.userInfo.name,
      users: result,
    });
  } else {
    res.redirect('/login');
  }
};

exports.getProfile = async (req, res) => {
  try {
    // 1. userInfo 세션에 저장된 id를 이용해 현재 로그인한 유저의 id 값으로 특정 유저 정보 하나를 조회
    const userid = req.session.userInfo.id;
    const result = await User.findOne({
      where: { userid },
    });
    // 2. profile.ejs 랜더 + data 키로 특정 유저를 찾은 결과를 넘김
    res.render('profile', { data: result.dataValues });
  } catch (err) {
    console.log('Error!', err);
  }
};

exports.postRegister = async (req, res) => {
  // 회원가입 요청시 비밀번호는 암호화한 값으로 DB에 추가
  // 응답은 {result: true}
  const { userid, pw, name } = req.body;
  // 비밀번호 암호화
  let hashedPw = bcryptPassword(pw);
  console.log('hashedPw', hashedPw);
  await User.create({
    id: null,
    userid,
    name,
    pw: hashedPw,
  });
  res.send({ result: true });
};

exports.postLogin = async (req, res) => {
  // Step1. 아이디를 찾아서 사용자 존재 유무 체크
  // Step2. 입력된 비밀번호 암호화하여 기존 데이터와 비교
  // 2-1. 유저 있음
  // 2-1-1. 비밀번호 일치;
  //    userInfo 키 값으로 세션 생성 (userInfo는 name키와 id 키를 갖는 "객체")
  //    응답 데이터: { result: true, data: step1에서 찾은 유저 }
  // 2-1-2. 비밀번호 불일치;
  //    응답 데이터; { result: false, message: '비밀번호가 틀렸습니다.'
  // 2-2. 유저 없음
  //    응답 데이터; { result: false, message: '존재하는 사용자가 없습니다' }
  const { userid, pw } = req.body;
  console.log(userid, pw);
  const result = await User.findOne({
    where: { userid },
  });
  if (result) {
    if (compareFunc(pw, result.dataValues.pw)) {
      // 유저가 존재하고 비번 일치
      req.session.userInfo = {
        name: result.dataValues.name,
        id: result.dataValues.userid,
      };
      res.send({ result: true, data: req.session.userInfo });
    } else {
      // 유저가 존재하지만 비번 틀림
      res.send({ result: false, message: '비밀번호가 틀렸습니다.' });
    }
  } else {
    // 유저 존재하지 않음
    res.send({ result: false, message: '존재하는 사용자가 없습니다' });
  }
};

exports.getLogout = (req, res) => {
  // 로그아웃 링크 클릭 시 get /logout 요청 -> 세션 삭제
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
      return;
    }
    res.redirect('/');
  });
};

exports.patchProfile = async (req, res) => {
  try {
    // 사용자가 요청한 데이터를 변경
    // 응답 데이터; { result: true }
    console.log(req.body);
    const { id, userid, name, pw } = req.body;
    await User.update(
      {
        name,
        pw: bcryptPassword(pw),
      },
      { where: { userid: userid, id: id } }
    );
    res.send({ result: true });
  } catch (err) {
    console.error(err);
    res.send('Internal Server Error!!');
  }
};

exports.deleteUser = async (req, res) => {
  // 1. 유저 삭제
  const { id } = req.body;
  await User.destroy({
    where: { id },
  });
  // 2. 세션 삭제
  await req.session.destroy((err) => {
    if (err) {
      console.log(err);
      return;
    }
    res.send({ result: true });
  });
};

// 비밀번호 암호화 함수 => (선택) 가능하다면 비밀번호 암호화와 관련된 별도의 모듈로 작성해보기! (utils/encrypt.js)
const saltRounds = 11;
// TODO: 비밀번호를 해싱하는 함수 정의 (bcryptPassword)
function bcryptPassword(pw) {
  return bcrypt.hashSync(pw, saltRounds);
}

// TODO:비밀번호와 원본 비번을를 비교하는 함수 (compareFunc)
function compareFunc(pw, hashedPw) {
  return bcrypt.compareSync(pw, hashedPw);
}
