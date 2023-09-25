const Food = (props) => {
  const { food } = props;
  const style = {
    color: 'red',
  };
  return (
    <div>
      <span style={style}>{food}</span>은 정말 맛있는 음식입니다!
    </div>
  );
};

Food.defaultProps = {
  food: '기본 음식 불고기',
};

export default Food;
