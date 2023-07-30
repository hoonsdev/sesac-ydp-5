let value1 = document.querySelector('#value1');
let value2 = document.querySelector('#value2');
let operator = document.querySelector('#operator');
let result = document.querySelector('#result');
const cal = document.querySelector('.cal');
const reset = document.querySelector('.reset');

cal.addEventListener('click', function () {
  if (operator.value === '+') {
    result.value = Number(value1.value) + Number(value2.value);
  } else if (operator.value === '-') {
    result.value = Number(value1.value) - Number(value2.value);
  } else if (operator.value === '*') {
    result.value = Number(value1.value) * Number(value2.value);
  } else if (operator.value === '/') {
    result.value = Number(value1.value) / Number(value2.value);
  } else {
    alert('연산자에는 + - * / 만 입력!');
  }
});

reset.addEventListener('click', function () {
  value1.value = '';
  value2.value = '';
  operator.value = '';
  result.value = '';
});
