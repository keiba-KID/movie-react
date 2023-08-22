import Modal from "react-bootstrap/Modal";
import { Dropdown } from "react-bootstrap";
import { useEffect, useState } from "react";
import { dummyClassData } from "../../config";
import { KanjiText } from "./CustomText";

export const QuestionModal = ({ showModal, onClose, text }) => {
  const [school, setSchool] = useState("");
  const [initQuestion, setInitQuestion] = useState("");
  useEffect(() => {
    setSchool(dummyClassData[0]);
  }, []);

  const handleSelect = (item) => {
    setSchool(item);
  };
  const handleQuestion = () => {
    setInitQuestion("これが初期の問いです。");
  };
  const handleChangeQuestion = (event) => {
    setInitQuestion("");
  };
  return (
    <Modal
      show={showModal}
      onHide={onClose}
      dialogClassName="question-modal"
      size="lg"
      centered
    >
      <Modal.Header>
        <Modal.Title>
          <Dropdown onSelect={handleSelect}>
            <Dropdown.Toggle>{school}</Dropdown.Toggle>

            <Dropdown.Menu style={{ maxHeight: "15rem", overflowY: "auto" }}>
              {dummyClassData.map((item) => (
                <Dropdown.Item key={item} eventKey={item}>
                  {item}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body as="div">
        <div className="body-left">
          <span className="btn-span">
            <KanjiText title={"問"} pronun={"と"} />
            い
            <br />
            ボックス
          </span>
        </div>
        <div className="vertical-line"></div>
        <div className="body-right">
          <textarea className="content-span" onChange={handleChangeQuestion}>
            どうがでは、たんぽぽのどんなちえについてせつめいしていましたか。
            きょうかしょとちがうとかんじたところはありましたか。
          </textarea>
          <div className="limit-letter">
            <span>{initQuestion}</span>
            <span>
              〇〇
              <>
                <KanjiText title={"字"} pronun={"じ"} />
              </>
              ／〇〇
              <>
                <KanjiText title={"字"} pronun={"じ"} />
              </>
            </span>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button className="btn-cancel" onClick={handleQuestion}>
          最初の問いに戻す
        </button>
        <button className="btn-ok" onClick={onClose}>
          変更する
        </button>
      </Modal.Footer>
    </Modal>
  );
};
