import book from './book.png';
import './Book.css';

const Book = (props) => {
  const { title, author, price, type } = props;
  return (
    <div className="container">
      <h1>이번 주 베스트셀러</h1>
      <img src={book} alt="" />
      <div className="title">{title}</div>
      <div className="info">
        저자 : {author}
        <br />
        판매가 : {price}
        <br />
        구분 : {type}
      </div>
    </div>
  );
};

export default Book;
