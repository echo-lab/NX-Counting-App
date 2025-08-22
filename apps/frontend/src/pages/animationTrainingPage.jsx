import React, { useState, useEffect, useRef } from "react";
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "../styles/gamePage.css";
import { useAppData } from "../context/Context.jsx";
import Tray1 from "../assests/TrayB.png";
import BigBird from "../assests/BigBird.png";
import greenTray from "../assests/greenTray.png";
import purpleTray from "../assests/purpleTray.png";
import "bootstrap/dist/css/bootstrap.css";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AnimationNoCircle from "../components/animationNoCircleDraw.jsx";
import { useSound } from '../helpers/SoundContext';
import { textToSpeech } from '../helpers/textToSpeech';
import DialogBox from "../components/dialogBox";
import { handleInteraction, handleNextClickTraining } from '../helpers/imageTouchData';
import { saveAnswers } from "../helpers/SaveAnswers";

const AnimationTrainingPage = () => {
  const { sectionTrainData, audioData, selectedOption } = useAppData();
  const { page } = useParams();
  const currentPage = parseInt(page);
  const [showBigBird, setShowBigBird] = useState(false);
  const [showTray2, setShowTray2] = useState(false);
  const [selectedTray, setSelectedTray] = useState(null);
  const [showMessage, setShowMessage] = useState(false);
  const [activeCookieIndex, setActiveCookieIndex] = useState(0);
  const [showGrayArea, setshowGrayArea] = useState(false);
  const [isWiggling, setIsWiggling] = useState(false);
  const spokenRef = useRef(false);
  const spokenRef2 = useRef(false);
  const once = useRef(false);
  const { soundEnabled } = useSound();
  const [modalShow, setModalShow] = useState(false);
  const [startAnimation, setstartAnimation] = useState(false);
  const [touchData, setTouchData] = useState([]);
  const [firstAudioStarted, setFirstAudioStarted] = useState(false);

  const audioUrls = [
    audioData.trills[0],
    audioData.trills[1],
    audioData.trills[2],
    audioData.trills[3],
    audioData.trills[4],
    audioData.trills[5],
    audioData.trills[6],
    audioData.trills[7],
    audioData.trills[8],
    audioData.trills[9],
  ];

  const handleAnimationFinish = () => {
    setTimeout(() => {
      const audioElement2 = new Audio();
      switch (sectionTrainData.pages[currentPage].cookies.length) {
        case 1:
          audioElement2.src = audioData.circling.total1;
          break;
        case 2:
          audioElement2.src = audioData.circling.total2;
          break;
        default:
          return;
      }
      audioElement2.play();
      audioElement2.onended = () => {
        if (!spokenRef2.current) {
          setTimeout(() => {
            setshowGrayArea(true);
            setstartAnimation(false);
            setShowMessage(true);
            setShowBigBird(true);
            setShowTray2(true);
            if (soundEnabled) {
              const utterance = `${sectionTrainData.pages[currentPage].message2}`;
              textToSpeech(utterance);
            }
            spokenRef2.current = true;
          }, 500);
        }
      };
    }, 500);
  };

  const speakUtterance = () => {
    if (soundEnabled) {
      const utterance = `${sectionTrainData.pages[currentPage].message1}`;
      setTimeout(() => {
        textToSpeech(utterance, () => {
          setFirstAudioStarted(true);
          setActiveCookieIndex(1);
        });
      }, 1000);
    }
  };

  useEffect(() => {
    if (!spokenRef.current) {
      speakUtterance();
      spokenRef.current = true;
    }
  }, [currentPage]);

  useEffect(() => {
    if (!once.current) {
      document.addEventListener('touchstart', (event) => {
        handleInteraction(event, setTouchData);
      });
      once.current = true;
      return () => {
        document.removeEventListener('touchstart', (event) => {
          handleInteraction(event, setTouchData);
        });
      };
    }
  }, []);

  const message = showMessage
    ? `${sectionTrainData.pages[currentPage].message2}`
    : `${sectionTrainData.pages[currentPage].message1}`;

  useEffect(() => {
    if (firstAudioStarted === true) {
      if (activeCookieIndex - 1 <= sectionTrainData.pages[currentPage].cookies.length) {
        setIsWiggling(true);
        const audio = new Audio(audioUrls[activeCookieIndex - 1]);
        audio.play();
        audio.onended = () => {
          setIsWiggling(false);
          if (activeCookieIndex === sectionTrainData.pages[currentPage].cookies.length) {
            setActiveCookieIndex(999);
            setstartAnimation(true);
          } else {
            setTimeout(() => {
              setActiveCookieIndex(activeCookieIndex + 1);
            }, 2000);
          }
        };
      }
    }
  }, [activeCookieIndex, firstAudioStarted]);

  const handleNextPage = () => {
    if (currentPage < 1) {
      setShowTray2(false);
      setShowBigBird(false);
      setShowMessage(false);
      setActiveCookieIndex(0);
      setshowGrayArea(false);
      setSelectedTray(null);
      spokenRef.current = false;
      spokenRef2.current = false;
      handleNextClickTraining(touchData, "animation", currentPage);
      setFirstAudioStarted(false);
      saveAnswers("animationTraining");
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setShowTray2(false);
      setShowBigBird(false);
      setShowMessage(false);
      setActiveCookieIndex(0);
      setshowGrayArea(false);
      setSelectedTray(null);
      spokenRef.current = false;
      spokenRef2.current = false;
      setFirstAudioStarted(false);
    }
  };

  const setModelshow = () => {
    handleNextClickTraining(touchData, "Animation", currentPage);
    setModalShow(true);
  };

  const storeAnswer = (answerKey, answerValue) => {
    const storedAnswersJSON = localStorage.getItem('animationTrainingAnswers');
    const storedAnswersObject = storedAnswersJSON ? JSON.parse(storedAnswersJSON) : {};
    storedAnswersObject[answerKey] = answerValue;
    localStorage.setItem('animationTrainingAnswers', JSON.stringify(storedAnswersObject));
  };

  const handleTrayClick = (trayType) => {
    setSelectedTray(trayType);
    storeAnswer(currentPage, trayType);
  };

  return (
    <div className="container">
      <div className="row">
        <div className={showGrayArea ? "col-4 cookiecol graybg" : "col-4 cookiecol"}>
          {showGrayArea && <div className="overlay"></div>}
          <div className="background-container">
            <img src={Tray1} alt="tray1" />
          </div>
          <div className="card">
            <div className="card-body">
              {message}
            </div>
          </div>
          <div className="cookieContainer position-absolute">
            {sectionTrainData.pages[currentPage].cookies.map((cookie) => (
              <img
                key={cookie.id}
                src={cookie.img}
                id={cookie.id}
                className={`${activeCookieIndex === cookie.id ? "circle" : ""} ${activeCookieIndex === cookie.id && isWiggling ? "wiggle" : ""}`}
                alt={`Cookie ${cookie.id}`}
                style={{
                  position: "absolute",
                  top: cookie.top,
                  left: cookie.left,
                }}
              />
            ))}
          </div>
          {startAnimation && (
            <div className="anim">
              <AnimationNoCircle onAnimationFinish={handleAnimationFinish} />
            </div>
          )}
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
                alt="greentray"
                className="tray2"
                id="greenTray"
                key="greenTray"
              />
              <div className="greenBiscuits position-absolute">
                {sectionTrainData.pages[currentPage].greenTray[0].biscuits.map((biscuit) => (
                  <img
                    key={biscuit.id}
                    src={biscuit.img}
                    id={biscuit.id}
                    className="biscuits"
                    alt=""
                    style={{
                      position: "absolute",
                      top: biscuit.top,
                      left: biscuit.left,
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
                alt="purpletray"
              />
              <div className="greenBiscuits position-absolute">
                {sectionTrainData.pages[currentPage].purpleTray[0].biscuits.map((biscuit) => (
                  <img
                    key={biscuit.id}
                    src={biscuit.img}
                    id={biscuit.id}
                    className="biscuits"
                    alt=""
                    style={{
                      position: "absolute",
                      top: biscuit.top,
                      left: biscuit.left,
                    }}
                  />
                ))}
              </div>
            </div>
          )}
          {showBigBird && (
            <img src={BigBird} className="bigBird" id="bigBird" key="bigBird" alt="bigbird" />
          )}
        </div>
        <div className="buttons">
          {currentPage > 0 ? (
            <button onClick={handlePreviousPage}>
              <Link to={`/game/animation/training/${currentPage - 1}`}>
                <ArrowBackIosIcon />
              </Link>
            </button>
          ) : (
            <button disabled>
              <ArrowBackIosIcon />
            </button>
          )}
          {currentPage < 1 ? (
            <button onClick={handleNextPage}>
              <Link to={`/game/animation/training/${currentPage + 1}`}>
                <ArrowForwardIosIcon />
              </Link>
            </button>
          ) : (
            <button onClick={setModelshow}>
              <ArrowForwardIosIcon />
            </button>
          )}
          <DialogBox show={modalShow} onHide={() => setModalShow(false)} page="animationTrainingPage" />
        </div>
      </div>
      <div>
        <button className="homeLogo">
          <Link to={`/game/home/${selectedOption}`}>
            <HomeRoundedIcon />
          </Link>
        </button>
      </div>
    </div>
  );
};

export default AnimationTrainingPage;