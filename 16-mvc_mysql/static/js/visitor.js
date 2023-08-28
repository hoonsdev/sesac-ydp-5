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
  tbody.append(newVisitor);
  newVisitor.innerHTML = `
    <td>${id}</td>
    <td>${name}</td>
    <td>${comment}</td>
    <td><button type="button">수정</button></td>
    <td><button type="button">삭제</button></td>
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

const editVisitor = async (obj, id, name, comment) => {
  const res = await axios({
    method: 'patch',
    url: '/visitor',
    data: { id: id, name: name, comment: comment },
  });
  console.log(res.data);
};
