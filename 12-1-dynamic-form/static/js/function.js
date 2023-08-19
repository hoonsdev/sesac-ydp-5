// result를 나타낼 div 요소 선택
const resultBox = document.querySelector('.result');

// form 에 입력한 정보를 가져오기
const form = document.forms['register'];

const ajaxGet = () => {
  const data = {
    name: form.name.value,
    gender: form.gender.value,
  };

  $.ajax({
    url: '/ajax',
    type: 'get',
    data: data, // 여기서 오른쪽 데이터는 폼에서 입력받은 데이터
    success: (data) => {
      // 여기서 데이터는 서버가 응답한 데이터. 바로 js에서 사용할 수 있는 형식으로 온다!
      resultBox.textContent = `GET /ajax 요청 완료! ${data.name} 님은 성별이 ${data.gender} 이시네요!`;
      resultBox.style.color = 'blue';
    },
  });
};

const ajaxPost = () => {
  const data = {
    name: form.name.value,
    gender: form.gender.value,
  };

  $.ajax({
    url: '/ajax',
    type: 'post',
    data: data,
    success: (data) => {
      const { name, gender } = data;
      resultBox.textContent = `POST /ajax 요청 완료! ${name} 님은 성별이 ${gender} 이시네요!`;
      resultBox.style.color = 'blue';
    },
  });
};

const axiosGet = () => {
  const data = {
    name: form.name.value,
    gender: form.gender.value,
  };

  // axios는 프로미스 기반! then, async 사용 가능.
  axios({
    method: 'get',
    url: '/axios',
    params: data,
  }).then((response) => {
    // axios는 서버에서 응답하는 객체에 우리가 원하는 데이터보다 더 많은 정보가 담겨있음! response.data로 원하는 부분만 추출.
    console.log(response);
    const { name, gender } = response.data;
    resultBox.textContent = `GET /axios 요청 완료! ${name} 님은 성별이 ${gender} 이시네요!`;
    resultBox.style.color = 'blue';
  });
};

const axiosPost = async () => {
  const data = {
    name: form.name.value,
    gender: form.gender.value,
  };

  const response = await axios({
    method: 'post',
    url: '/axios',
    data: data,
  });
  const { name, gender } = response.data;
  resultBox.textContent = `Post /axios 요청 완료! ${name} 님은 성별이 ${gender} 이시군요?`;
  resultBox.style.color = 'blue';
};

function fetchGet() {
  const data = {
    name: form.name.value,
    gender: form.gender.value,
  };

  fetch(`/fetch?name=${data.name}&gender=${data.gender}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const { name, gender } = data;
      resultBox.textContent = `Get /fetch 요청 완료! ${name} 님은 성별이 ${gender} 이시군요?`;
      resultBox.style.color = 'blue';
    });
}

const fetchPost = async () => {
  const data = {
    name: form.name.value,
    gender: form.gender.value,
  };

  const response = await fetch('/fetch', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json', // json 파일로 다루겠다
    },
    body: JSON.stringify(data), // js data 를 json으로 바꿔 body에 보내겠다
  });
  const responseData = await response.json();
  console.log(responseData);
  // 만약 여기도 await를 걸어주지 않으면 response까지만 기다리고 responseData에는 undefined 할당될 수도 있음. 여기는 비동기 처리 안했으니까
  const { name, gender } = responseData;
  resultBox.textContent = `Post /fetch 요청 완료! ${name} 님은 성별이 ${gender} 이시군요?`;
  resultBox.style.color = 'blue';
};
