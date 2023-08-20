export const StampButton = ({ StampImg, count }) => {
  return (
    <div className="btn-stamp">
      <img src={StampImg} alt="stamp-img"></img>
      {count ? <span>{count}</span> : ""}
    </div>
  );
};
