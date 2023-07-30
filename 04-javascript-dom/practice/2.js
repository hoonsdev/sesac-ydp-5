// 요소 선택
const writer = document.querySelector('#writer');
const content = document.querySelector('#content');
const btn = document.querySelector('button');
const table = document.querySelector('table tbody');

// 방명록 번호
let idx = 0;

// 작성 시간
let today = new Date();

let year = today.getFullYear();
let month = ('0' + (today.getMonth() + 1)).slice(-2);
let day = ('0' + today.getDate()).slice(-2);

let dateString = `${year} - ${month} - ${day}`;

let hour = today.getHours();
let minute = today.getMinutes();

let hourString = `${hour} : ${minute}`;

btn.addEventListener('click', () => {
  const tr1 = document.createElement('tr');
  table.append(tr1);
  const td1 = document.createElement('td');
  const td2 = document.createElement('td');
  const td3 = document.createElement('td');
  const td4 = document.createElement('td');
  td1.textContent = idx + 1;
  td2.textContent = writer.value;
  td3.textContent = content.value;
  td4.textContent = `${dateString} ${hourString}`;
  tr1.append(td1, td2, td3, td4);
  idx++;
  writer.value = '';
  content.value = '';
});
