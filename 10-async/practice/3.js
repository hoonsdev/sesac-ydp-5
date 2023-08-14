const body = document.querySelector('body');
// 1. 1초 뒤에 body 태그의 색상을 빨간색 변경
// 2. 1초 뒤에 body 태그의 색상을 빨 -> 1초 뒤 주 .... -> 1초 뒤 파란색

function changeColor(color) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      body.style.backgroundColor = color;
      resolve();
    }, 1000);
  });
}

changeColor('red')
  .then(function () {
    return changeColor('orange');
  })
  .then(function () {
    return changeColor('yellow');
  })
  .then(function () {
    return changeColor('green');
  })
  .then(function () {
    return changeColor('blue');
  });
