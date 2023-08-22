export const WordCard = ({ text, onClick }) => {
  return (
    <div className="word-card" onClick={onClick}>
      <span>{text}</span>
    </div>
  );
};
