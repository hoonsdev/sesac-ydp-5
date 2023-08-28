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
  // const newVisitor = document.createElement('tr');
  // newVisitor.setAttribute('id', `tr_${id}`);
  // jquery
  // $('tbody').append(newVisitor);
  // tbody.append(newVisitor);
  // newVisitor.innerHTML = `
  //   <td>${id}</td>
  //   <td>${name}</td>
  //   <td>${comment}</td>
  //   <td><button type="button">수정</button></td>
  //   <td><button type="button">삭제</button></td>
  // `;
  const newVisitor = `
    <tr id="tr_${id}">
      <td>${id}</td>
      <td>${name}</td>
      <td>${comment}</td>
      <td><button type="button">수정</button></td>
      <td><button type="button">삭제</button></td>
    </tr>
  `;
  tbody.insertAdjacentElement('beforeend', newVisitor);
};
