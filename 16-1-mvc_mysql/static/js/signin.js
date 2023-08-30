// front js
// TODO: [Login] 버튼 클릭시 서버에 로그인 요청하기
// POST /user/signin
async function login() {
  const form = document.forms['form_login'];
  const data = {
    id: form.userid.value,
    pw: form.pw.value,
  };
  const res = await axios({
    url: '/user/signin',
    method: 'post',
    data: data,
  });
  const form_info = document.forms['form_info'];
  form_info.userid.value = data.id;
  if (!res.data.loginSucceeded) {
    alert('로그인 실패!');
    form_info.reset();
    form.userid.value = '';
    form.pw.value = '';
  } else {
    alert('로그인 성공!');
    form_info.submit();
  }
}
