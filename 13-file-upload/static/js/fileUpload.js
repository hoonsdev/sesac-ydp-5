function fileUpload() {
  console.log('동적 파일 업로드');
  // js 만으로 폼을 전송 (파일데이터를 서버로 전송해야 하는 케이스)
  // FormData 객체를 활용하면 쉽게 전송 가능!
  const formData = new FormData();
  const file = document.querySelector('#dynamic-file');
  console.dir(file);
  console.dir(file.files); // 업로드한 파일 객체
  console.dir(file.files[0]); // 업로드한 첫 파일

  // append(key, value)
  formData.append('dynamicUserfile', file.files[0]);

  axios({
    url: '/dynamicFile',
    method: 'post',
    data: formData,
    header: {
      'Content-Type': 'multipart/form-data', // enctype="multipart/form-data"
    },
  }).then((res) => {
    console.log(res);
    const { data } = res;
    document.querySelector('img').src = data.path;
  });
}
