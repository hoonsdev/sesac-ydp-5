import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

export default function UseCallbackEx2({ postId }) {
  const [post, setPost] = useState({});

  // [before]
  // const getPost = async () => {
  //   // 데이터 요청
  //   const res = await axios.get(
  //     `https://jsonplaceholder.typicode.com/todos/${postId}`
  //   );
  //   setPost(res.data);
  // };

  // [after]
  // useCallback 훅으로 Memoization -> 의존성 배열에 있는 postId가 변경되지 않는 한
  // 컴포넌트는 리랜더링되지 않음!
  // postId 가 바뀌는 순간에만 함수를 재구성하는것!
  // --> 필요한 순간에만 api 요청을 날림!
  const getPost = useCallback(async () => {
    // 데이터 요청
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/todos/${postId}`
    );
    // console.log(res);
    setPost(res.data);
  }, [postId]);

  // useEffect 의존성 배열에 "함수"
  // [before]
  // 컴포넌트가 리랜더링 -> 함수 재생성 (주소값 변경) -> getPost 재호출 ... 무한루프!
  useEffect(() => {
    getPost();
  }, [getPost]);

  return (
    <div>
      <h1>UseCallback ex2</h1>
      {post.id ? post.title : '로딩중....'}
    </div>
  );
}
