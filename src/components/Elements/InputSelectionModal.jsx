import { Modal } from "react-bootstrap";
import { ModalButton } from "./ModalButton";
import { useNavigate } from "react-router-dom";

export const InputSelectionModal = ({ showModal, onClose, videoId }) => {
  const navigate = useNavigate();
  const goQuestionEdit = (isTyping) => {
    navigate(`/videos/detail/${videoId}/question/${isTyping}`);
  };
  return (
    <>
      <Modal
        dialogClassName="modal-input-sel"
        show={showModal}
        onHide={onClose}
        size="lg"
        centered
      >
        <Modal.Body>
          <ModalButton
            isConfirm={true}
            onClick={() => goQuestionEdit(false)}
            children={"手や ペンで 書く"}
          />
          <ModalButton
            isConfirm={true}
            onClick={() => goQuestionEdit(true)}
            children={"キーボードで 書く"}
          />
          <ModalButton
            isConfirm={false}
            onClick={onClose}
            children={"やめる"}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};
