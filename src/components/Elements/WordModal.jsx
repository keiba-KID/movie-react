import Modal from "react-bootstrap/Modal";

export const WordModal = ({ showModal, onClose, text }) => {
  return (
    <Modal
      show={showModal}
      onHide={onClose}
      dialogClassName="modal-word"
      size="xl"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="title-div">
            <span className="main-span">{text}</span>
            <span className="sub-span">
              【知恵】<span style={{ fontSize: "1.5rem" }}>[名]</span>{" "}
            </span>
          </div>
          <div className="content-div">
            <span>知恵の説明を表示します。</span>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};
