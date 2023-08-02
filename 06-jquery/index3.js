console.log(document);
console.log($(document));

// 1. Load Event
// in js
document.addEventListener('DOMContentLoaded', function () {
  console.log('문서의 dom tree가 완성되면 실행되는 이벤트');
});

// in jquery
$(document).ready(function () {
  console.log('ready - 문서 dom tree가 완성되면 실행되는 이벤트');
});

$(function () {
  console.log('하이!');
});

// 2. Mouse Event
$('.p-msg').click(function () {
  $('.p-msg').css('color', 'red');
});

// $('.num').click(function () {
//   $(this).css('color', 'blue');
//   // $(this): 자기 자신 = 이벤트가 적용된 요소
// });

// $('.num').on('click', function () {
//   $(this).css('color', 'blue');
// });

// click in js
const nums = document.querySelectorAll('.num');
for (let num of nums) {
  num.addEventListener('click', function () {
    console.log(this); // 자기 자신 = 현재 클릭된 요소
    this.style.color = 'blue';
  });
}

// mouseover(): 요소에 마우스를 올렸을 때
// $('.numbers').mouseover(function () {
//   $(this).css('background-color', 'skyblue');
//   $(this).append('<div>handler for .on() called!</div>');
// });

// $('.numbers').on('mouseover', function () {
//   $(this).css('background-color', 'skyblue');
//   $(this).append('<div>handler for .on() called!</div>');
// });

// hover(): 마우스 올리고/뗐을 때
// mouseover + mouseout 합친 형태
// $('.div-hover').hover(
//   function () {
//     $(this).addClass('hover');
//   },
//   function () {
//     $(this).removeClass('hover');
//   }
// );

$('.div-hover').hover(function () {
  $(this).toggleClass('hover');
});

// scroll()
// 윈도우 창을 스크롤할 때
// in jquery
// $(window).scroll(function () {
//   console.log('scrolling!');
// });
$(window).on('scroll', function () {
  console.log('scrolling!');
});

// in js
// window.addEventListener('scroll', function () {
//   console.log('scrolling with js!!!');
// });

// 3. Key Event
$('.input-key').on('keydown', function (e) {
  // e: 이벤트 객체
  console.log(e);
  console.log(e.code); // 눌려진 키의 고유 코드
  console.log(e.key); // input에 입력된 값

  if (e.code === 'ArrowUp') {
    console.log('⬆');
  } else if (e.code === 'ArrowDown') {
    console.log('⬇');
  } else {
    console.log('others');
  }
});

// 4. Form Event
$('#todo-form').on('submit', function (e) {
  console.log(e); // 이벤트 객체
  e.preventDefault(); // 이벤트의 기본동작을 막는 메서드
  // 지금 발생한 이벤트가 "submit"이기 때문에 submit 이벤트의 기본 동작인 "새로고침"을 막음

  // 퀴즈
  // 1. name 속성값이 todo인 요소를 선택하고 해당 요소의 value를 todo 변수에 저장 -> val() 활용
  // 2. todos 클래스를 갖는 요소를 선택
  //    -> li 요소에 todo 변수의 값을 텍스트로 갖게 한 후 todos 클래스 요소에 추가 -> append() 활용
  // 3. name 속성값이 todo인 요소의 value 초기화
  const todo = $("[name='todo']").val();
  $('.todos').append(`<li>${todo}</li>`);
  $("[name='todo']").val('');
});

// e.preventDefault() 또 다른 예제
$('a#inactive').on('click', function (e) {
  e.preventDefault(); // a 태그의 기본 동작 막음
  // a 태그의 클릭 이벤트에 대해서 기본 동작은
  // href에 연결되어 있는 링크로의 이동!
  $('#text').append('이 링크는 동작하지 않음!');
});

// this
// 그 함수가 속해 있던 객체를 참조
// - 뭔가를 클릭할 때 불러오는 함수 (콜백함수)에서 this는 그 "뭔가"를 의미!
const btns = document.querySelectorAll('.btn');
const spans = document.querySelectorAll('.span');

function setBgColor() {
  console.log(this);
  this.style.backgroundColor = 'royalblue';
}

function setBgColor2(elem, color) {
  elem.style.backgroundColor = color;
}

for (let btn of btns) {
  // btn.addEventListener('click', setBgColor);
  btn.addEventListener('click', function () {
    setBgColor2(this, 'purple');
  });
}

for (let span of spans) {
  span.addEventListener('click', setBgColor);
}
