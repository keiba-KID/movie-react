import { useParams } from "react-router-dom";
import { Header } from "../../../components/Header/Header";
import { MainLayout } from "../../../components/Layout";
import "../../../styles/video/detail/index.scss";
import StampNormalImg from "../../../assets/stamp1.png";
import StampGoodImg from "../../../assets/stamp2.png";
import StampBestImg from "../../../assets/stamp3.png";
import BookImg from "../../../assets/book.png";
import { StampButton } from "../component/StampButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNavicon } from "@fortawesome/free-solid-svg-icons";
import { dummyWordData } from "../../../config";
import { WordCard } from "../component/WordCard";
import { useRef, useState } from "react";
import { QuestionModal } from "../../../components/Elements/QuestionModal";
import { WordModal } from "../../../components/Elements/WordModal";
import { Overlay } from "react-bootstrap";
import { ChapterButton } from "../component/ChapterButton";
import { StampCard } from "../component/StampCard";
import { StampModal } from "../../../components/Elements/StampModal";
import { InputSelectionModal } from "../../../components/Elements/InputSelectionModal";
import { BarChart } from "../component/BarChart";
import { KanjiText } from "../../../components/Elements/CustomText";
import ReactPlayer from "react-player";

export const VideoDetail = () => {
  const { videoId } = useParams();
  const [showQuestionModal, setShowQuestionModal] = useState(false);
  const [showWordModal, setShowWordModal] = useState(false);
  const [word, setWord] = useState("");
  const [chpList, setChpList] = useState(false);
  const [stmpList, setStmpList] = useState(false);
  const [stmpClear, setStmpClear] = useState(false);
  const [inputSel, setInputSel] = useState(false);
  const [stmpGraph, setStmpGraph] = useState(false);
  const [stampHeaderStr, setStampHeaderStr] = useState(null);

  const textRef = useRef(null);
  const chapterRef = useRef(null);

  const openQuestionModal = () => {
    setShowQuestionModal(true);
  };
  const closeQuestionModal = () => {
    setShowQuestionModal(false);
  };
  const openWordModal = (word) => {
    setShowWordModal(true);
    setWord(word);
  };
  const closeWordModal = () => {
    setShowWordModal(false);
  };
  const closeStmpClearModal = () => {
    setStmpClear(false);
  };
  const closeInputSelModal = () => {
    setInputSel(false);
  };
  const handleStamps = (self) => {
    setChpList(false);
    self ? setStmpList(true) : setStmpGraph(true);
    let headerStr = self ? (
      <>
        <span>
          <KanjiText title={"自"} pronun={"じ"} />
          <KanjiText title={"分"} pronun={"ぶん"} />
          がスタンプをおした
          <KanjiText title={"時"} pronun={"じ"} />
          <KanjiText title={"間"} pronun={"かん"} />
        </span>
      </>
    ) : (
      <>
        <span>
          クラスのみんながスタンブをおした
          <KanjiText title={"時"} pronun={"じ"} />
          <KanjiText title={"間"} pronun={"かん"} />
        </span>
      </>
    );
    setStampHeaderStr(headerStr);
  };

  return (
    <MainLayout>
      <Header />
      <div className="container video-detail">
        <div className="stamp">
          <div className="row">
            <div className="col-6">
              <StampButton StampImg={StampNormalImg} count={1}></StampButton>
              <StampButton StampImg={StampGoodImg}></StampButton>
              <StampButton StampImg={StampBestImg} count={3}></StampButton>
              <div
                className="chapter"
                ref={chapterRef}
                onClick={() => {
                  setChpList(!chpList);
                  setStmpList(false);
                  setStmpGraph(false);
                }}
              >
                <FontAwesomeIcon icon={faNavicon}></FontAwesomeIcon>
              </div>
              <div className="overlay-list">
                <Overlay
                  show={chpList}
                  placement="right"
                  target={chapterRef.current}
                >
                  <div className="chapter-list">
                    <div className="chapter-header">
                      <span>スタンプをおした時間</span>
                    </div>
                    <div className="chapter-body">
                      <ChapterButton
                        children={
                          <span>
                            <KanjiText title={"自"} pronun={"じ"} />
                            <KanjiText title={"分"} pronun={"ぶん"} />
                            がスタンプをおした
                            <KanjiText title={"時"} pronun={"じ"} />
                            <KanjiText title={"間"} pronun={"かん"} />
                          </span>
                        }
                        onClick={() => handleStamps(true)}
                      />
                      <ChapterButton
                        children={
                          <>
                            <span>クラスのみんなが</span>
                            <br />
                            <span>
                              スタンブをおした
                              <KanjiText title={"時"} pronun={"じ"} />
                              <KanjiText title={"間"} pronun={"かん"} />
                            </span>
                          </>
                        }
                        onClick={() => handleStamps(false)}
                      />
                    </div>
                  </div>
                </Overlay>
                <Overlay
                  show={stmpList}
                  placement="right"
                  target={chapterRef.current}
                >
                  <div className="stamp-list">
                    <div className="stamp-header">
                      <span>{stampHeaderStr}</span>
                    </div>
                    <div className="stamp-body">
                      <div className="stampcard-list">
                        <StampCard stampImg={StampNormalImg} stampCount={1} />
                        <StampCard stampImg={StampGoodImg} />
                        <StampCard stampImg={StampBestImg} stampCount={2} />
                      </div>
                      <div
                        className="btn-clear"
                        onClick={() => setStmpClear(true)}
                      >
                        <span>
                          <KanjiText title={"時"} pronun={"じ"} />
                          <KanjiText title={"間"} pronun={"かん"} />
                          を
                          <KanjiText title={"消"} pronun={"け"} />す
                        </span>
                      </div>
                    </div>
                  </div>
                </Overlay>
                <Overlay
                  show={stmpGraph}
                  placement="right"
                  target={chapterRef.current}
                >
                  <div className="stamp-graph">
                    <BarChart />
                  </div>
                </Overlay>
              </div>
            </div>
          </div>
        </div>
        <div className="video">
          <div className="row">
            <div className="col-6 video-box">
              <ReactPlayer
                url={
                  "https://s3.ap-northeast-1.amazonaws.com/mastercode.jp-movie-react/output/test/123123modifier.m3u8"
                }
                id="MainPlay"
                loop
                controls={true}
                width="100%"
                height="100%"
              />
            </div>
            <div className="col-6 word-box">
              <div className="wave">
                <div className="row">
                  <div className="col-5">
                    <div className="col-12">
                      <span>
                        どうがに　
                        <>
                          <KanjiText title={"出"} pronun={"で"} />
                        </>
                        てくる
                      </span>
                    </div>
                    <div className="col-12 span-bold">
                      <span>ことば</span>
                      <img src={BookImg} alt="book icon"></img>
                    </div>
                  </div>
                  <div className="col-7">
                    <span>
                      <>
                        <KanjiText title={"下"} pronun={"した"} />
                      </>
                      の ことばを おすと、いみを たしかめることが できるよ。
                    </span>
                  </div>
                </div>
              </div>
              <div className="word-list">
                {dummyWordData.map((element) => (
                  <WordCard
                    text={element}
                    onClick={() => openWordModal(element)}
                  ></WordCard>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="question">
          <div className="row">
            <div className="col-12 question-title">
              <div className="col-10 left">
                <button>
                  <>
                    <KanjiText title={"問"} pronun={"と"} />
                  </>
                  い
                  <br />
                  ボックス
                </button>
                <span>
                  しりょうを見て どんなことを 思いましたか。書いてみましょう。
                </span>
              </div>
              <div className="col-2 right">
                <div>
                  <span>教師用</span>
                  <button onClick={openQuestionModal}>
                    問いを
                    <br />
                    編集する
                  </button>
                </div>
              </div>
            </div>
            <div className="col-12 question-content">
              <div>
                <textarea placeholder="「ボックスを ひらく」のボタンをおして、書いてみよう。"></textarea>
              </div>
              <button onClick={() => setInputSel(true)}>
                <span>ボックスを</span>
                <br />
                <span>ひらく</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-question">
        <QuestionModal
          showModal={showQuestionModal}
          onClose={closeQuestionModal}
          text={""}
        />
      </div>
      <div className="modal-word">
        <WordModal
          showModal={showWordModal}
          onClose={closeWordModal}
          text={word}
        />
      </div>
      <div className="modal-stamp">
        <StampModal showModal={stmpClear} onClose={closeStmpClearModal} />
      </div>
      <div className="modal-input-sel">
        <InputSelectionModal
          showModal={inputSel}
          onClose={closeInputSelModal}
          videoId={videoId}
        />
      </div>
    </MainLayout>
  );
};
