import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { productInfos } from './ProductPage';

export default function ProductDetailPage() {
  const { productId } = useParams();
  // console.log(productId); // '2'
  // console.log(productInfos);
  // const [product] = productInfos.filter((product) => product.id === +productId);
  const product = productInfos[+productId - 1];
  // console.log(product);

  const navigate = useNavigate();

  return (
    <div>
      <h1>ProductDetailPage</h1>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        뒤로가기
      </button>
      <button
        onClick={() => {
          navigate('/');
        }}
      >
        홈으로 이동하기
      </button>
      <ul>
        <li>상품번호: {product.id}</li>
        <li>상품명: {product.name}</li>
        <li>판매자: {product.email}</li>
        <li>상세설명: {product.body}</li>
      </ul>
    </div>
  );
}
