// val() - value
function getValue() {
  // js
  // const inputVal = document.querySelector('input').value;
  // alert(inputVal);

  // jquery
  const val = $('input').val();
  alert(val);
}
function setValue() {
  // js
  // document.querySelector('input').value = '하이하이~';

  // jquery
  $('input').val('하이~');
}

// css()
function changeCssJS() {
  // js
  const span = document.querySelector('span');
  span.style = 'font-size: 20px; color: red;';
}
function changeCssJquery() {
  // case1
  // $('span').css('font-size', '40px');
  // $('span').css('color', 'blue');

  // case2. css 여러 속성 한번에 적용
  $('span').css({
    fontSize: '40px',
    color: 'blue',
  });
}
function getCssJquery() {
  console.log($('span').css('color'));
}

// attr()
function changeAttrJS() {
  // 퀴즈: a 태그 선택, href 속성 값 naver 주소로 변경
  const a = document.querySelector('a');
  a.href = 'https://www.naver.com';
}
function changeAttrJquery() {
  $('a').attr('href', 'https://www.daum.net');
}

// text()
function changeTextJS() {
  // 퀴즈: p-text 클래스 갖는 요소 선택, 요소의 텍스트 임의 값 변경
  const pText = document.querySelector('.p-text');
  pText.innerText = '커피가 맛있네요!';
}
function changeTextJquery() {
  $('.p-text').text('하이하이~');
}

// html()
function changeHtmlJS() {
  // 퀴즈: p-html 클래스 갖는 요소 선택, <h3>javascript</h3>로 변경
  const pHtml = document.querySelector('.p-html');
  pHtml.innerHTML = '<h3>javascript</h3>';
}
function changeHtmlJquery() {
  $('.p-html').html('<b>으악!!!!!!</b>');
}

// 요소 추가하기
// append()
function appendJS() {
  // 1. colors 클래스 갖는 요소 선택하고
  const colors = document.querySelector('.colors');
  // 2. li 태그 요소를 생성한 후
  const li = document.createElement('li');
  // 3. li 태그의 텍스트로 '마지막 자식으로 추가된 js' 추가
  li.innerText = '마지막 자식으로 추가된 js';
  // 4. colors 클래스를 갖는 요소에 "맨 마지막 자식"으로 li 요소 추가
  colors.append(li);
  // 힌트: https://developer.mozilla.org/en-US/docs/Web/API/Element/append
}

function appendJquery() {
  // li = $('<li>'); // li 태그 생성 // $('~')는 선택 / $('<~>')는 생성
  // $(li).text('마지막 자식으로 추가된 js');
  // $('.colors').append(li);

  $('.colors').append('<li>마지막 자식으로 추가된 js</li>');
}

// prepend()
function prependJS() {
  // 1. colors 클래스 갖는 요소 선택하고
  const colors = document.querySelector('.colors');
  // 2. li 태그 요소를 생성한 후
  const li = document.createElement('li');
  // 3. li 태그의 텍스트로 '첫 자식으로 추가된 js' 추가
  li.innerText = '첫 자식으로 추가된 js';
  // 4. colors 클래스를 갖는 요소에 "가장 첫 자식"으로 li 요소 추가
  colors.prepend(li);
  // 힌트: https://developer.mozilla.org/en-US/docs/Web/API/Element/prepend
}

function prependJquery() {
  // li = $('<li>');
  // $(li).text('첫 자식으로 추가된 js');
  // $('.colors').prepend(li);

  $('.colors').prepend('<li>첫 자식으로 추가된 js</li>');
}

// before()
function beforeJS() {
  // 1. green 클래스를 갖는 요소 선택하고
  const green = document.querySelector('.green');
  // 2. li 태그 요소를 생성한 후
  const li = document.createElement('li');
  // 3. li 태그의 텍스트로 'green 클래스를 갖는 요소의 이전 형제 요소로 추가(js)' 추가
  li.innerText = 'green 클래스를 갖는 요소의 이전 형제 요소로 추가(js)';
  // 4. green 클래스를 갖는 요소의 "바로 이전 형제 요소"로 li 요소 추가
  green.before(li);
  // 힌트: https://developer.mozilla.org/en-US/docs/Web/API/Element/before
}

function beforeJquery() {
  $('.green').before(
    '<li>green 클래스를 갖는 요소의 이전 형제 요소로 추가(jquery)</li>'
  );
}

// after()
function afterJS() {
  // 1. green 클래스를 갖는 요소 선택하고
  const green = document.querySelector('.green');
  // 2. li 태그 요소를 생성한 후
  const li = document.createElement('li');
  // 3. li 태그의 텍스트로 'green 클래스를 갖는 요소의 다음 형제 요소로 추가(js)' 추가
  li.innerText = 'green 클래스를 갖는 요소의 다음 형제 요소로 추가(js)';
  // 4. green 클래스를 갖는 요소의 "바로 다음 형제 요소"로 li 요소 추가
  green.after(li);
  // 힌트: https://developer.mozilla.org/en-US/docs/Web/API/Element/after
}

function afterJquery() {
  $('.green').after(
    '<li>green 클래스를 갖는 요소의 다음 형제 요소로 추가(jquery)</li>'
  );
}

// 요소 삭제하기
// remove()
function removeJS() {
  // li2 아이디를 갖는 요소를 선택하여 그 요소를 삭제
  const li2 = document.querySelector('#li2');
  li2.remove();
}

function removeJquery() {
  $('#li2').remove();
}

// empty()
function emptyJS() {
  // 참고! js에는 empty 메서드가 없습니다~ 따라서 아래와 같이 코드를 적용해주세요
  // ul 태그이자 nums 클래스를 갖는 요소를 선택 후
  const nums = document.querySelector('ul.nums');
  // 해당 요소의 HTML을 빈 문자열 ''로 설정(innerHTML)
  nums.innerHTML = '';
}

function emptyJquery() {
  $('ul.nums').empty(); // 해당 선택자 자식 요소를 전부 제거
}

// 요소 탐색하기
function findParent() {
  // child2 클래스 갖는 요소의 부모 요소
  const child2 = document.querySelector('.child2');
  console.log(child2.parentElement);
  console.log($('.child2').parent());
}

function findParents() {
  // JS 없습니다! 패스~~
  console.log($('.child2').parents());
}

function findNext() {
  // child2 클래스 갖는 요소의 다음 형제 요소
  const child2 = document.querySelector('.child2');
  console.log(child2.nextElementSibling);
  console.log($('.child2').next());
}

function findPrev() {
  // child2 클래스 갖는 요소의 이전 형제 요소
  const child2 = document.querySelector('.child2');
  console.log(child2.previousElementSibling);
  console.log($('.child2').prev());
}

function findChildren() {
  // parent 클래스 갖는 요소의 자식 요소
  const parent = document.querySelector('.parent');
  console.log(parent.children);
  console.log($('.parent').children());
}

// 클래스 조작하기
function addClass() {
  // hi 아이디 갖는 요소 선택하여 "fs-50" 클래스 추가
  // const hi = document.querySelector('#hi');
  // hi.classList.add('fs-50');
  $('#hi').addClass('fs-50');
}

function removeClass() {
  // hi 아이디 갖는 요소 선택하여 "fs-50" 클래스 삭제
  // const hi = document.querySelector('#hi');
  // hi.classList.remove('fs-50');
  $('#hi').removeClass('fs-50');
}

function hasClass() {
  // hi 아이디 갖는 요소 선택하여 "fs-50" 클래스 포함 여부 확인
  // const hi = document.querySelector('#hi');
  // if (hi.classList.contains('fs-50') === true) {
  //   console.log('fs-50 포함!');
  // } else {
  //   console.log('fs-50 없음!');
  // }
  console.log($('#hi').hasClass('fs-50'));
}

function toggleClass() {
  // hi 아이디 갖는 요소 선택하여 "bg-pink" 클래스 토글 (있으면 삭제, 없으면 추가)
  // const hi = document.querySelector('#hi');
  // hi.classList.toggle('bg-pink');
  $('#hi').toggleClass('bg-pink');
}
