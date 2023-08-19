const form = document.forms['writeContent'];
const container = document.querySelector('div.container');
let globalData;

const postContent = async () => {
  const data = {
    title: form.title.value,
    content: form.content.value,
    date: form.date.value,
  };

  const resultBox = document.createElement('div');
  resultBox.classList.add('result');
  resultBox.innerHTML =
    '<button onClick="buttonClick()">결과 페이지로 미리 보기!</button>';
  container.append(resultBox);

  const response = await axios({
    url: '/result',
    method: 'post',
    data: data,
  });

  globalData = response.data;
};

const buttonClick = () => {
  const { title, content, date } = globalData;
  const p = document.createElement('p');
  p.innerHTML = `제목 ${title} <br /> 본문 ${content} <br/> 날짜 ${date}`;
  p.classList.add('text-start');
  p.style.border = '3px solid blue';
  const resultBox = document.querySelector('div.result');
  resultBox.append(p);
};
