// front js
// TODO: [Login] 버튼 클릭시 서버에 회원 정보 수정 요청하기
// POST /user/profile/edit
async function profileEdit() {
  const form = document.forms['form_profile'];
  const data = {
    userid: form.userid.value,
    pw: form.pw.value,
    name: form.name.value,
  };
  const res = await axios({
    url: '/user/profile/edit',
    method: 'post',
    data: data,
  });
  if (res.data) {
    alert('정보수정 성공!');
  }
}

// TODO: [Login] 버튼 클릭시 서버에 회원 정보 삭제 요청하기
// POST /user/profile/delete
async function profileDelete() {
  const form = document.forms['form_profile'];
  const data = {
    userid: form.userid.value,
  };
  const res = await axios({
    url: '/user/profile/delete',
    method: 'post',
    data: data,
  });
  if (res.data) {
    alert('회원탈퇴 성공!');
    document.location.src = '/user';
  }
}
