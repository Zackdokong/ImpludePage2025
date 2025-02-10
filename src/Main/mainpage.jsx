import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import styled, { css, keyframes } from "styled-components";

// Components
import Header from "../components/header";
import Footer from "../components/footer";

// Assets
import ImpludeLogo from "../assets/implude.svg";
import ArrowBottom from "../assets/arrow_bottom.svg";

// Project Thumbnails
import YAMMY from "../assets/Project_Thumbnail/YAMMY.jpg";
import VOAH from "../assets/Project_Thumbnail/VOAH.jpg";
import MOLA from "../assets/Project_Thumbnail/MOLA.jpg";
import MK1 from "../assets/Project_Thumbnail/MK1.jpg";
import JOIN from "../assets/Project_Thumbnail/JOIN.jpg";
import JipGaGoSipDa from "../assets/Project_Thumbnail/JipGaGoSipDa.jpg";
import ITNun from "../assets/Project_Thumbnail/ITNun.jpg";
import DINEON from "../assets/Project_Thumbnail/DINEON.jpg";
import DAYCUBE from "../assets/Project_Thumbnail/DAYCUBE.jpg";
import ASD from "../assets/Project_Thumbnail/ASD.jpg";

// Awards
import award1 from "../assets/award/1.jpg";
import award2 from "../assets/award/2.jpg";
import award3 from "../assets/award/3.jpg";
import award4 from "../assets/award/4.jpg";
import award5 from "../assets/award/5.jpg";
import award6 from "../assets/award/6.jpg";
import award7 from "../assets/award/7.jpg";
import award8 from "../assets/award/8.jpg";
import award9 from "../assets/award/9.jpg";

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
  const images = [
    YAMMY,
    VOAH,
    MOLA,
    MK1,
    JOIN,
    JipGaGoSipDa,
    ITNun,
    DINEON,
    DAYCUBE,
    ASD,
  ];
  const awardimages=[
    award1,
    award2,
    award3,
    award4,
    award5,
    award6,
    award7,
    award8,
    award9,
  ]

  const [currentIndex, setCurrentIndex] = useState(0);
  const [awardCurrentIndex, setAwardCurrentIndex] = useState(1);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const awardHandlePrev = () => {
    setAwardCurrentIndex((prevIndex) =>
      prevIndex === 0? awardimages.length - 1 : prevIndex - 1
    );
  };

  const awardHandleNext = () => {
    setAwardCurrentIndex((prevIndex) =>
      prevIndex === awardimages.length - 1? 0 : prevIndex + 1
    );
  };
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  const phraseRef = useRef(null);

  const keyvalueData = [
    { detail: "팀워크" },
    { detail: "자유롭고 편한 소통" },
    { detail: "많은 실전 경험" },
    { detail: "실패를 즐기는" },
    { detail: "지속적인 혁신" },
    { detail: "깊은 신뢰" },
  ];

  const achievementsData = [
    {
      year: 2024,
      details: [
        { rank: "1위", description: "비즈쿨 우수창업동아리" },
        { rank: "2위", description: "Junction Asia" },
        { rank: "대상", description: "레드브릭 게임개발대회" },
        { rank: "대상", description: "한국코드페어" },
        { rank: "대상", description: "데이터 크리에이터캠프" },
        { rank: "우수상", description: "STA+C" },
      ],
    },
    {
      year: 2023,
      details: [
        { rank: "1위", description: "비즈쿨 우수창업동아리" },
        { rank: "금상", description: "벤처창업아이템경진대회" },
        { rank: "특별상", description: "공개 SW 개발자 대회" },
      ],
    },
    {
      year: 2022,
      details: [
        { rank: "대상", description: "STA+C" },
        { rank: "특별상", description: "공개 SW 개발자 대회" },
      ],
    },
  ];

  const [randomAchievement, setRandomAchievement] = useState(() =>
    getRandomAchievement()
  );

  const [randomValue, setRandomValue] = useState(() => getRandomValue());

  function getRandomValue(previousValue = null) {
    let randomValue;
    do {
      randomValue =
        keyvalueData[Math.floor(Math.random() * keyvalueData.length)].detail;
    } while (randomValue === previousValue);
    return randomValue;
  }

  function getRandomAchievement(previousAchievement = null) {
    let randomAchievement;
    do {
      const randomYear =
        achievementsData[Math.floor(Math.random() * achievementsData.length)];
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
      setRandomValue((prev) => getRandomValue(prev));
    }, 3000); // Update every 3 seconds
    return () => clearInterval(interval);
  },[]);

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
                  <button onClick={handlePrev} className="slider-button left">
                    {"<"}
                  </button>
                  <div className="image-container">
                    <img
                      src={images[currentIndex]}
                      alt={`Slide ${currentIndex}`}
                      className="Vision"
                    />
                  </div>
                  <button onClick={handleNext} className="slider-button right">
                    {">"}
                  </button>
                </div>
                <div className="OgleMent">
                  우리가 사용하는 평범하고도 대단한 많은 것들은 처음엔 <br />
                  누군가의 상상에 의해 만들어졌습니다.
                  <br />
                  세상을 구성하는 상상들에는 특별한 힘이 있습니다.
                  <br />
                  임플루드는 상상이 세상을 바꿀 수 있다고 믿습니다.
                  <br />
                  하지만 그저 상상만으로는 세상을 바꿀 수 없습니다.
                  <br />
                  상상으로 세상을 바꾸기 위해서는
                  <br /> 상상을 현실로 만들어낼 수 있는 능력이 필요합니다.
                  <br />
                  임플루드는 이를 돕기 위해 존재합니다.
                  <br />
                  우리의 상상이 세상을 바꿀 수 있도록,
                  <br /> 임플루드는 오늘도 달리고 있습니다.
                </div>
              </div>
            </div>
          </div>
          <div className="summary-wrapper">
            {/* 임플루드 실적 */}
            <div className="achievementSummary">
            <div className="slider-container">
                  <button onClick={awardHandlePrev} className="slider-button left">
                    {"<"}
                  </button>
                  <div className="image-container">
                    <img
                      src={awardimages[awardCurrentIndex]}
                      alt={`Slide ${currentIndex}`}
                      className="awardImage"
                    />
                  </div>
                  <button onClick={awardHandleNext} className="slider-button right">
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
