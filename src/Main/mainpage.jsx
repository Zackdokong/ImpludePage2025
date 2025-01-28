import { useRef, useState, useEffect, useMemo } from "react"; // useMemo 추가
import { motion } from "framer-motion"; // 애니메이션 라이브러리 추가
import { Link } from "react-router-dom";
import ImpludeLogo from "../assets/implude.svg";
import ArrowBottom from "../assets/arrow_bottom.svg";
import styled, { keyframes } from "styled-components";
import Header from "../components/header";
import Footer from "../components/footer";
import "./mainpage.css";

function MainPage() {
  const handleLinkClick = (path) => {
    navigate(path);
    window.scrollTo(0, 0); // 페이지 맨 위로 스크롤
  };

  const phraseRef = useRef(null);
  const keyvalueData = [
    {
      detail: "팀워크",
    },
    {
      detail: "자유롭고 편한 소통",
    },
    {
      detail: "많은 실전 경험",
    },
    {
      detail: "실패를 즐기는",
    },
    {
      detail: "지속적인 혁신",
    },
    {
      detail: "깊은 신뢰",
    },
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
        { rank: "우수상", description: "한양대 에리카 고교창업경진대회" },
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

  const [randomAchievement, setRandomAchievement] =
    useState(getRandomAchievement);
  const [randomValue, setRandomValue] = useState(getRandomValue);
  function getRandomValue() {
    const randomValue =
      keyvalueData[Math.floor(Math.random() * keyvalueData.length)];
    return `${randomValue.detail}`; // 'detail' 속성을 반환하도록 수정
  }

  // getRandomValue 함수 수정
  function getRandomValue(previousValue) {
    let randomValue;
    do {
      randomValue =
        keyvalueData[Math.floor(Math.random() * keyvalueData.length)].detail;
    } while (randomValue === previousValue); // 이전 값과 같으면 다시 뽑기
    return randomValue;
  }

  // getRandomAchievement 함수 수정
  function getRandomAchievement(previousAchievement) {
    let randomAchievement;
    do {
      const randomYear =
        achievementsData[Math.floor(Math.random() * achievementsData.length)];
      const randomDetail =
        randomYear.details[
          Math.floor(Math.random() * randomYear.details.length)
        ];
      randomAchievement = `${randomYear.year}년 ${randomDetail.description} ${randomDetail.rank}`;
    } while (randomAchievement === previousAchievement); // 이전 값과 같으면 다시 뽑기
    return randomAchievement;
  }

  // useEffect 수정
  useEffect(() => {
    const interval = setInterval(() => {
      setRandomAchievement((prev) => getRandomAchievement(prev));
      setRandomValue((prev) => getRandomValue(prev));
    }, 3000); // 3초마다 새로운 값
    return () => clearInterval(interval);
  }, []);

  // ArrowBottom 클릭 시 실행되는 함수
  const scrollToPhrase = () => {
    phraseRef.current.scrollIntoView({
      behavior: "smooth", // 부드럽게 스크롤
      block: "center", // 요소의 시작 부분이 화면 상단에 맞춰짐
    });
  };

  function messageBar(n) {
    const animation = keyframes`
      0% {
        width: ${`${n / 24}rem`}
      }
      50% {
        width: ${`${n / 24 + 2}rem`}
      }
      100% {
        width: ${`${n / 24}rem`}
      }
    `;

    const ReturnSpan = styled.span`
      width: ${`${n / 24}rem`};
      height: ${"0.7rem"};
      background: black;
      display: inline-block;
      position: relative;
      bottom: 1.5vw;
      animation: ${animation} 4s ease-in-out infinite;
    `;

    return useMemo(() => <ReturnSpan />, [n]); // useMemo로 memoize
  }

  return (
    <>
      <Header />
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
        <div className="ImpludePhrase" ref={phraseRef}>
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
        <div className="summary-wrapper">
          {/* 임플루드 소개 */}
          <div className="introduceSummary">
            <h2>임플루드 소개</h2>
            <p>
              임플루드는 2015년부터 상상을 현실로 바꿔오는 일을 했습니다.
              <br />
              오늘도 우리의 상상이 세상을 바꿀 수 있도록, <br />
              임플루드는 오늘도 달리고 있습니다.
            </p>
            <motion.div
              key={randomValue} // 실적이 변경될 때마다 애니메이션을 새로 시작하게 합니다.
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="random-value"
            >
              <p>{randomValue}</p>
            </motion.div>
            <Link
              to="/introduce"
              className="link-button"
              onClick={handleLinkClick}
            >
              임플루드의 핵심가치 알아보기!
            </Link>
          </div>

          {/* 임플루드 실적 */}
          <div className="achievementSummary">
            <h2>임플루드 실적</h2>
            <p>
              임플루드는 2015년부터 꾸준히 좋은 성과를 이뤄냈습니다. <br />
              2023년, 2024년 2년 연속 비즈쿨 우수 창업동아리 1위를 하며, <br />
              디미고 최고 창업동아리의 명성을 이어나가고 있습니다.
            </p>
            {/* 랜덤 실적 보여주기 */}
            <motion.div
              key={randomAchievement} // 실적이 변경될 때마다 애니메이션을 새로 시작하게 합니다.
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
              onClick={handleLinkClick}
            >
              임플루드의 실적 알아보기!
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MainPage;
