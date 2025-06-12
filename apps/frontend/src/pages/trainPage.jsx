import React, { useState, useEffect, useRef } from "react";
import "../styles/base.css";
import { useParams, Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useAppData } from "../context/Context.jsx";
import Tray1 from "../assests/TrayB.png";
import BigBird from "../assests/BigBird.png";
import greenTray from "../assests/greenTray.png";
import purpleTray from "../assests/purpleTray.png";
import CookieImg from "../assests/creamCookie.png";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import DialogBox from "../components/dialogBox";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import { useSound } from '../helpers/SoundContext';
import { textToSpeech } from '../helpers/textToSpeech';
import { handleInteraction, handleNextClickTraining } from '../helpers/imageTouchData';
import { saveAnswers } from "../helpers/SaveAnswers";
// Import the training data generator
import { generateTrainingData } from "../helpers/trainingGenerator";

const TrainingPage = () => {
  const [trainingData, setTrainingData] = useState(null);
  
  const { selectedOption } = useAppData();
  const { page } = useParams();
  const currentPage = parseInt(page);
  const messageRef = useRef(false);
  const [modalShow, setModalShow] = useState(false);
  const [touchData, setTouchData] = useState([]);
  const [selectedTray, setSelectedTray] = useState(null);
  const [showGrayArea, setShowGrayArea] = useState(false);
  const [showBigBird, setShowBigBird] = useState(false);
  const [showTray2, setShowTray2] = useState(false);
  const once = useRef(false);
  const spokenRef = useRef(false);
  const { soundEnabled } = useSound();
  
  const trayW = 300, trayH = 400;
  const cookieW = 60, cookieH = 60;
  const padding = 20;
  const minGap = cookieW * 1.1;
  
  const navigate = useNavigate();

  // Speak message when page changes
  const speakUtterance = () => {
    console.log("trying to speak");
    const utterance = trainingData.pages[currentPage].message[0];
    console.log("if success");
    textToSpeech(utterance, handleSpeechEnd);
  };

  function handleSpeechEnd() {
    setShowGrayArea(true);
    setShowBigBird(true);
    setShowTray2(true);
  }

  useEffect(() => {
    if (trainingData) {
      speakUtterance();
    }
  }, [currentPage, trainingData]);

  useEffect(() => {
    if (!once.current) {
      document.addEventListener("touchstart", (event) => {
        handleInteraction(event, setTouchData);
      });
      once.current = true;
      return () => {
        document.removeEventListener("touchstart", (event) => {
          handleInteraction(event, setTouchData);
        });
      };
    }
  }, []);

  // Generate training data
  useEffect(() => {
    const storedTrainingData = localStorage.getItem("trainingData");
    if (storedTrainingData) {
      setTrainingData(JSON.parse(storedTrainingData));
    } else {
      // Fallback if data was not generated
      const data = generateTrainingData();
      setTrainingData(data);
    }
  }, []);
  

  const storeAnswer = (answerKey, answerValue) => {
    const storedAnswersJSON = localStorage.getItem("baselineTrainingAnswers");
    const storedAnswersObject = storedAnswersJSON ? JSON.parse(storedAnswersJSON) : {};
    storedAnswersObject[answerKey] = answerValue;
    localStorage.setItem("baselineTrainingAnswers", JSON.stringify(storedAnswersObject));
  };

  const handleTrayClick = (trayType) => {
    setSelectedTray(trayType);
    storeAnswer(currentPage, trayType);
  };

  const handleNextPage = () => {
    if (currentPage < trainingData.pages.length - 1) {
      messageRef.current = false;
      spokenRef.current = false;
      setShowGrayArea(false);
      setShowTray2(false);
      setShowBigBird(false);
      setSelectedTray(null);
      handleNextClickTraining(touchData, "baseline", currentPage);
      saveAnswers("baselineTraining");
      navigate(`/game/train-custom/${currentPage + 1}`);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      messageRef.current = false;
      spokenRef.current = false;
      setSelectedTray(null);
      setShowGrayArea(false);
      setShowTray2(false);
      setShowBigBird(false);
      navigate(`/game/train-custom/${currentPage - 1}`);
    }
  };

  const setModelShow = () => {
    handleNextClickTraining(touchData, "baseline", currentPage);
    setModalShow(true);
  };

  if (!trainingData) return <div>Loading training data...</div>;

  return (
    <div className="container">
      <div className="row">
        <div className="col-2 cookiecol">
          <div className={showGrayArea ? "col-4 cookiecol graybg" : "col-4 cookiecol"}>
            {showGrayArea && <div className="overlay"></div>}
            <div className="background-container">
              <img src={Tray1} alt="Tray1" className="tray1" />
            </div>
            <div className="card">
              <div className="card-body">
                {trainingData.pages[currentPage].message[0]}
              </div>
            </div>
            <div className="cookieContainer position-absolute">
              {trainingData.pages[currentPage].cookies.map((cookie) => (
                <img
                  key={cookie.id}
                  src={trainingData.pages[currentPage].cookieImg || CookieImg}
                  id={cookie.id}
                  alt={`Cookie ${cookie.id}`}
                  style={{
                    position: "absolute",
                    top: cookie.top,
                    left: cookie.left,
                    width: `${cookieW}px`,
                    height: `${cookieH}px`
                  }}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="col-8 position-absolute tray-container">
          {showTray2 && (
            <div>
              <div
                className={`tray-overlay1 ${selectedTray === "greenTray" ? "glow1" : ""}`}
                onClick={() => handleTrayClick("greenTray")}
              />
              <img
                src={greenTray}
                alt="green tray"
                className="tray2"
                id="greenTray"
                key="greenTray"
              />
              <div className="greenBiscuits position-absolute">
                {trainingData.pages[currentPage].greenTray[0].biscuits.map((biscuit) => (
                  <img
                    key={biscuit.id}
                    src={biscuit.img}
                    id={biscuit.id}
                    className="biscuits"
                    style={{
                      position: "absolute",
                      top: biscuit.top,
                      left: biscuit.left,
                      width: `${cookieW}px`,
                      height: `${cookieH}px`
                    }}
                  />
                ))}
              </div>
            </div>
          )}
          {showTray2 && (
            <div>
              <div
                className={`tray-overlay2 ${selectedTray === "purpleTray" ? "glow2" : ""}`}
                onClick={() => handleTrayClick("purpleTray")}
              />
              <img
                src={purpleTray}
                className="tray3"
                id="purpleTray"
                key="purpleTray"
                alt="purple tray"
              />
              <div className="greenBiscuits position-absolute">
                {trainingData.pages[currentPage].purpleTray[0].biscuits.map((biscuit) => (
                  <img
                    key={biscuit.id}
                    src={biscuit.img}
                    id={biscuit.id}
                    className="biscuits"
                    style={{
                      position: "absolute",
                      top: biscuit.top,
                      left: biscuit.left,
                      width: `${cookieW}px`,
                      height: `${cookieH}px`
                    }}
                  />
                ))}
              </div>
            </div>
          )}
          {showBigBird && (
            <img src={BigBird} className="bigBird" id="bigBird" key="bigBird" alt="big bird" />
          )}
        </div>
        <div className="buttons">
          {currentPage > 0 ? (
            <button onClick={handlePreviousPage}>
              <ArrowBackIosIcon />
            </button>
          ) : (
            <button disabled>
              <ArrowBackIosIcon />
            </button>
          )}
          {currentPage < trainingData.pages.length - 1 ? (
            <button onClick={handleNextPage}>
              <ArrowForwardIosIcon />
            </button>
          ) : (
            <button onClick={setModelShow}>
              <ArrowForwardIosIcon />
            </button>
          )}
          <DialogBox show={modalShow} onHide={() => setModalShow(false)} page="play" />
        </div>
        <div>
          <button className="homeLogo">
            <Link to={`/game/home/${selectedOption}`}>
              <HomeRoundedIcon />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrainingPage;
