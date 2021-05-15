const Line = ({ emoji }) => {
  return (
    <div>
      <span className="symbol">{emoji.symbol}</span>
      <span className="title">{emoji.title}</span>
    </div>
  );
};

export default Line;
