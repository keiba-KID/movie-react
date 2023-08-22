import { StampButton } from "./StampButton";

export const StampCard = ({ stampImg, stampCount }) => {
  return (
    <div className="stamp-card">
      <StampButton StampImg={stampImg} count={stampCount} />
      <div className="stamp-time">
        <span>00:01:22</span>
        <span>00:01:22</span>
        <span>00:01:22</span>
      </div>
    </div>
  );
};
