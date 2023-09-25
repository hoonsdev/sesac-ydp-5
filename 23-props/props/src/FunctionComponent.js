// 'prop-types' 모듈을 PropTypes로 쓰겠다~
import PropTypes from 'prop-types';

export default function FunctionComponent(props) {
  const student = '김땡땡';
  const { name } = props;
  return (
    <div>
      {/* props로 받을 내용 */}
      <h1>Hi {student}!</h1>
      <p>여기는 FunctionComponent</p>
      {/* <p>
        새로운 컴포넌트의 이름은 <b>{props.name}</b>
      </p> */}
      <p>
        새로운 컴포넌트의 이름은 <b>{name}</b>
      </p>
    </div>
  );
}

FunctionComponent.defaultProps = {
  name: '기본 이름',
};

FunctionComponent.propTypes = {
  name: PropTypes.string,
};
