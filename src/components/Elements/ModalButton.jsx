export const ModalButton = ({ children, isConfirm, onClick }) => {
  const divStyle = {
    width: "90%",
    height: "30%",
    display: "flex",
    justfyContent: "center",
    alignItems: "center",
    backgroundColor: isConfirm ? "#4d4d4d" : "#cccccc",
    borderRadius: "5px",
  };
  const spanStyle = {
    fontSize: "1.5rem",
    textAlign: "center",
    color: isConfirm ? "white" : "black",
  };
  return (
    <div style={divStyle} onClick={onClick}>
      <span style={spanStyle}>{children}</span>
    </div>
  );
};
