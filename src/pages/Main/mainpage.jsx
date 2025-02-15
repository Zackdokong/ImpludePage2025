import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import styled, { css, keyframes } from "styled-components";

// Components
import Header from "../../components/header";
import Footer from "../../components/footer";

// Assets
import ImpludeLogo from "../../assets/implude.svg";
import ArrowBottom from "../../assets/arrow_bottom.svg";
import VisionImg from "../../assets/Vision.jpg";

import * as constants from "../../constant/index.js";

// Styles
import "./mainpage.css";

const getAnimation = (n, isTabletOrMobile) => keyframes`
  0% {
    width: ${isTabletOrMobile ? `${n / 32}rem` : `${n / 24}rem`}
  }
  50% {
    width: ${isTabletOrMobile ? `${n / 32}rem` : `${n / 24 + 2}rem`}
  }
  100% {
    width: ${isTabletOrMobile ? `${n / 32}rem` : `${n / 24}rem`}
  }
`;

const StyledSpan = styled.span.withConfig({
  shouldForwardProp: (prop) => prop !== "isThin" && prop !== "animation",
})`
  width: ${(props) => props.width};
  height: ${(props) => (props.isThin ? "0.5rem" : "0.7rem")};
  background: black;
  display: inline-block;
  position: relative;
  bottom: 1.5vw;
  animation: ${(props) =>
    css`
      ${props.animation} 3s ease-in-out infinite
    `};
`;

function MainPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [awardCurrentIndex, setAwardCurrentIndex] = useState(1);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? constants.images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === constants.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const awardHandlePrev = () => {
    setAwardCurrentIndex((prevIndex) =>
      prevIndex === 0 ? constants.awardimages.length - 1 : prevIndex - 1
    );
  };

  const awardHandleNext = () => {
    setAwardCurrentIndex((prevIndex) =>
      prevIndex === constants.awardimages.length - 1 ? 0 : prevIndex + 1
    );
  };
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  const phraseRef = useRef(null);

  const [randomAchievement, setRandomAchievement] = useState(() =>
    getRandomAchievement()
  );

  function getRandomAchievement(previousAchievement = null) {
    let randomAchievement;
    do {
      const randomYear =
        constants.achievementsData[
          Math.floor(Math.random() * constants.achievementsData.length)
        ];
      const randomDetail =
        randomYear.details[
          Math.floor(Math.random() * randomYear.details.length)
        ];
      randomAchievement = `${randomYear.year}년 ${randomDetail.description} ${randomDetail.rank}`;
    } while (randomAchievement === previousAchievement);
    return randomAchievement;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setRandomAchievement((prev) => getRandomAchievement(prev));
    }, 3000);
    const awardNextIndex =
      (awardCurrentIndex + 1) % constants.awardimages.length;
    const awardPrevIndex =
      (awardCurrentIndex - 1 + constants.awardimages.length) %
      constants.awardimages.length;
    const nextIndex = (currentIndex + 1) % constants.images.length;
    const prevIndex =
      (currentIndex - 1 + constants.images.length) % constants.images.length;

    new Image().src = constants.awardimages[awardNextIndex]; // 다음 수상 이미지 미리 로드
    new Image().src = constants.awardimages[awardPrevIndex]; // 이전 수상 이미지 미리 로드
    new Image().src = constants.images[nextIndex]; // 다음 이미지 미리 로드
    new Image().src = constants.images[prevIndex]; // 이전 이미지 미리 로드
    return () => {
      clearInterval(interval);
    };
  }, [awardCurrentIndex, currentIndex]);

  const scrollToPhrase = () => {
    phraseRef.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  function messageBar(n) {
    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1200px)" });
    const isBarHastobeThin = useMediaQuery({ query: "(max-width: 800px)" });

    const animation = getAnimation(n, isTabletOrMobile);

    return (
      <StyledSpan
        width={isTabletOrMobile ? `${n / 32}rem` : `${n / 24}rem`}
        isThin={isBarHastobeThin}
        animation={animation}
      />
    );
  }

  return (
    <>
      <Header />
      <div className="PageWrapper">
        <div className="wrapper">
          <div className="LogoWrapper">
            <img className="ImpludeLogo" src={ImpludeLogo} alt="Implude Logo" />
            <h1>#IMPLUDE</h1>
            <div>
              <img
                className="ArrowBottom animate"
                src={ArrowBottom}
                alt="arrow"
                onClick={scrollToPhrase}
              />
            </div>
          </div>
          <div className="introduceWrapper" ref={phraseRef}>
            <div className="MentWrapper">
              <h1>
                We Are <span>#IMPLUDE!</span>
              </h1>
              <div className="Ment">
                <div className="slider-container">
                  <div className="image-container">
                    <img
                      src={VisionImg}
                      alt={`Slide ${currentIndex}`}
                      className="Vision"
                    />
                  </div>
                </div>
                <div className="OgleMent">
                  <span className="phar">
                    우리가 사용하는 평범하고도 대단한 많은 것들은 처음엔 <br />
                    누군가의 상상에 의해 만들어졌습니다.
                    <br />
                  </span>
                  <span className="phar-acc">
                    세상을 구성하는 상상들에는 특별한 힘이 있습니다.
                    <br />
                    임플루드는 상상이 세상을 바꿀 수 있다고 믿습니다.
                    <br />
                  </span>
                  <span className="phar">
                    하지만 그저 상상만으로는 세상을 바꿀 수 없습니다.
                    <br />
                  </span>
                  <span className="phar">
                    상상으로 세상을 바꾸기 위해서는
                    <br /> 상상을 현실로 만들어낼 수 있는 능력이 필요합니다.
                    <br />
                  </span>
                  <span className="phar">
                    임플루드는 이를 돕기 위해 존재합니다.
                    <br />
                  </span>
                  <span className="phar-acc">
                    우리의 상상이 세상을 바꿀 수 있도록,
                    <br /> 임플루드는 오늘도 달리고 있습니다.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="summary-wrapper">
            {/* 임플루드 실적 */}
            <div className="achievementSummary">
              <div className="slider-container">
                <button
                  onClick={awardHandlePrev}
                  className="slider-button left"
                >
                  {"<"}
                </button>
                <div className="image-container">
                  <img
                    src={constants.awardimages[awardCurrentIndex]}
                    alt={`Slide ${currentIndex}`}
                    className="awardImage"
                  />
                </div>
                <button
                  onClick={awardHandleNext}
                  className="slider-button right"
                >
                  {">"}
                </button>
              </div>
              <div className="achievementSummaryDetail">
                <div className="SummaryText">
                  <h2>임플루드 실적</h2>
                  <p>
                    임플루드는 꾸준히 좋은 성과를 이뤄냈습니다.
                    <br />
                    디미고 최고 창업동아리의 명성을 이어나가고 있습니다.
                  </p>
                </div>

                {/* 랜덤 실적 보여주기 */}
                <motion.div
                  key={randomAchievement}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  className="random-achievement"
                >
                  <p>{randomAchievement}</p>
                </motion.div>
                <Link
                  to="/achievement"
                  className="link-button"
                  onClick={() => handleLinkClick("/achievement")}
                >
                  임플루드의 실적 알아보기!
                </Link>
              </div>
            </div>
          </div>
          <div className="ImpludePhrase">
            <h1>당신의 상상이 현실이 되도록</h1>
            <div>
              YOUR {messageBar(244)} <span className="PhraseBlue">IM</span>PACT{" "}
              <br />
              <span className="PhraseBlue">P</span>ASSION {messageBar(96)}{" "}
              <span className="PhraseBlue">L</span>EARN {messageBar(132)} <br />
              FUT<span className="PhraseBlue">U</span>RE {messageBar(188)}{" "}
              <span className="PhraseBlue">D</span>REAM <br />
              {messageBar(114)} POTENTIAL {messageBar(62)} T
              <span className="PhraseBlue">E</span>AM
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MainPage;
