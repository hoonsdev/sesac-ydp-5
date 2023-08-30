// front js

// tbody 요소, button-group 요소 선택
const tbody = document.querySelector('tbody');
const buttonGroup = document.querySelector('#button-group');

// 폼의 [등록] 버튼 클릭 시 테이블에 방문데이터 추가
// : 버튼 클릭 시 POST /visitor 요청 날려서 DB에 데이터 insert
const createVisitor = async () => {
  const form = document.forms['visitor-form'];
  const data = {
    name: form.name.value,
    comment: form.comment.value,
  };
  const res = await axios({
    url: '/visitor',
    method: 'post',
    data: data,
  });
  const { id, name, comment } = res.data;
  // jquery
  // $('tbody').append(newVisitor);
  const newVisitor = document.createElement('tr');
  newVisitor.setAttribute('id', `tr_${id}`);
  tbody.prepend(newVisitor);
  newVisitor.innerHTML = `
    <td>${id}</td>
    <td>${name}</td>
    <td>${comment}</td>
    <td><button type="button" onclick="editVisitor('${id}')">수정</button></td>
    <td><button type="button" onClick="createVisitor(this, '${id}')">삭제</button></td>
  `;
  // const newVisitor = `
  //   <tr id="tr_${id}">
  //     <td>${id}</td>
  //     <td>${name}</td>
  //     <td>${comment}</td>
  //     <td><button type="button">수정</button></td>
  //     <td><button type="button" onClick="createVisitor(this, ${id})">삭제</button></td>
  //   </tr>
  // `;
  // tbody.insertAdjacentElement('beforeend', newVisitor);
};

const deleteVisitor = async (obj, id) => {
  console.log(obj, id);
  // confirm 창에서 [취소] 누르면 아무일도 일어나지 않음
  if (!confirm('정말로 삭제하시겠습니까?')) {
    return;
  }
  // confirm 창에서 [확인] 누르면 visitor 데이터 삭제
  // : axios로 DELETE /visitor 요청 날려서 DB에 데이터 delete
  const res = await axios({
    method: 'delete',
    url: '/visitor',
    data: { id: id },
  });
  console.log('delete /visitor 요청에 대한 응답', res.data);
  alert('삭제성공!');
  obj.parentElement.parentElement.remove();
};

async function editVisitor(id) {
  console.log(id, '번 방명록 수정!!');
  // TODO
  // 1. id를 가지고 방명록 하나를 조회 (Read one) -> input에 각각 value로 저장
  axios({
    // GET /visitor/:id
    method: 'get',
    url: `/visitor/${id}`,

    // GET /visitor?id=1
    // method: 'get',
    // url: `/visitor?id=${id}`,
    // params: {
    //   id: id,
    // },
  }).then((res) => {
    console.log(res.data);
    const { name, comment } = res.data;
    const form = document.forms['visitor-form'];
    form.name.value = name;
    form.comment.value = comment;
  });

  // 2. [변경], [취서] 버튼 보이기
  const btns = `
    <button type="button" onclick=editDo(${id})>변경</button>
    <button type="button" onclick=editCancel(${id})>취소</button>
  `;
  buttonGroup.innerHTML = btns;
}

// 변경 버튼 클릭 시 내용 수정
const editDo = async (id) => {
  // 수정한 내용을 DB에 전달하기 위해 form 요소 접근
  const form = document.forms['visitor-form'];
  const data = {
    id,
    name: form.name.value,
    comment: form.comment.value,
  };
  // editVisitor 함수에서 전달한 id 값과 폼 요소의 이름, 방명록을 DB로 전달
  const res = await axios({
    method: 'patch',
    url: '/visitor',
    data: data,
  });
  // DB 결과로 성공하면 true 값 반환
  if (res.data) {
    // 똑같이 수정하고자 하는 부분의 이름과 방명록 선택
    const visitor = document.querySelector(`#tr_${id} :nth-child(2)`);
    const comment = document.querySelector(`#tr_${id} :nth-child(3)`);
    // true를 send 받아서, 수정이 true이므로 input에 있는 내용을 선택한 부분에 대입
    visitor.innerText = form.name.value;
    comment.innerText = form.comment.value;
    alert('수정 완료!');
    // alert 이후 input 값 초기화
    editCancel();
  }
};

// 취소 버튼 클릭 시 내용 복구
const editCancel = () => {
  // 폼 요소의 값을 다 초기화
  const form = document.forms['visitor-form'];
  form.name.value = '';
  form.comment.value = '';
  // 변경 취소 버튼을 다시 등록 버튼으로 초기화
  buttonGroup.innerHTML =
    '<button type="button" onclick="createVisitor()">등록</button>';
};

// async function editVisitor(id) {
// 내가 한거
// // id를 기준으로 사용자 이름, 방명록 선택
// const visitor = document.querySelector(`#tr_${id} :nth-child(2)`);
// const comment = document.querySelector(`#tr_${id} :nth-child(3)`);
// // input 값에 선택한 사용자 이름, 방명록 대입
// const form = document.forms['visitor-form'];
// form.name.value = visitor.innerText;
// form.comment.value = comment.innerText;
// // 수정 버튼 클릭 시 '등록' 버튼을 '변경' '취소' 버튼으로 변경
// const div = document.querySelector('#button-group');
// div.innerHTML = `<button type="button" onclick="editDo('${id}')">변경</button>  <button type="button" onclick="editCancel('${id}')">취소</button>`;
// }
