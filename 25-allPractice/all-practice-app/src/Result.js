function Result({ img, bColor, color, input }) {
  console.log(img, bColor, color, input);
  return (
    <div style={{ display: 'block' }}>
      <img src={img + '.png'} width={100} height={100} alt="fruit" />

      <div
        style={{
          padding: '10px',
          marginTop: '10px',
          backgroundColor: bColor,
          color: color,
        }}
      >
        {input}
      </div>
    </div>
  );
}

export default Result;
