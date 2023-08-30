// front js
// TODO: [Register] 버튼 클릭시 서버에 회원가입 요청하기
// POST /user/signup
async function register() {
  const form = document.forms['form_register'];
  const data = {
    id: form.userid.value,
    name: form.name.value,
    pw: form.pw.value,
  };
  const res = await axios({
    url: '/user/signup',
    method: 'post',
    data: data,
  });
  if (res.data) {
    alert('회원가입 성공!');
    document.location.href = '/user/signin';
  }
}
