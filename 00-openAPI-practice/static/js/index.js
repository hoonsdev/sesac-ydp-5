const img = document.querySelector('img');
const container = document.querySelector('.container');

async function changeImg() {
  const res = await axios({
    url: 'http://www.omdbapi.com/?apikey=3793c8d5&s=frozen',
    method: 'get',
  });
  console.log(res);
  const { data } = res;
  const { Search } = data;
  console.log(data);
  for (let info of Search) {
    const movieInfo = document.createElement('div');
    movieInfo.classList.add('movieInfo');
    const title = document.createElement('span');
    const year = document.createElement('span');
    const img = document.createElement('img');
    title.innerText = `영화 제목 : ${info.Title}`;
    year.innerText = `출시 년도 : ${info.Year}`;
    img.src = info.Poster;
    img.style.width = '200';
    img.style.height = '200';

    movieInfo.append(title, year, img);
    container.append(movieInfo);
  }
}
