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
  const phraseRef = useRef(null);
  const achievementsData = [
    {
      year: 2024,
      details: [
        { rank: "1위", description: "비즈쿨 우수창업동아리" },
        {
          rank: "2위",
          description: "Junction Asia Apple Developer Academy@POSTECH track",
        },
        { rank: "대상", description: "레드브릭 게임개발대회" },
        { rank: "대상", description: "한국코드페어 SW 공모전" },
        { rank: "대상", description: "2024 데이터 크리에이터캠프" },
        { rank: "동상", description: "경기 상업교육페스티벌 취업설계 PT" },
        {
          rank: "동상",
          description: "전국 고등학교 동아리 소프트웨어 경진대회",
        },
        { rank: "우수상", description: "2024 스마틴 앱 챌린지" },
        { rank: "우수상", description: "한양대 에리카 2024 고교창업경진대회" },
        {
          rank: "장려상",
          description: "대구 데이터분석 경진대회 데이터 시각화 부문",
        },
      ],
    },
    {
      year: 2023,
      details: [
        { rank: "1위", description: "비즈쿨 우수창업동아리" },
        { rank: "우수상", description: "세종시 공공데이터 활용 창업경진대회" },
        { rank: "금상", description: "벤처창업아이템 경진대회" },
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

  const [randomAchievement, setRandomAchievement] = useState(getRandomAchievement);

  function getRandomAchievement() {
    const randomYear =
      achievementsData[Math.floor(Math.random() * achievementsData.length)];
    const randomDetail =
      randomYear.details[Math.floor(Math.random() * randomYear.details.length)];
    return `${randomYear.year}년 ${randomDetail.description} ${randomDetail.rank}`;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setRandomAchievement(getRandomAchievement());
    }, 3000); // 3초마다 새로운 실적을 보여줌

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
              임플루드는 2015년부터 상상을 현실로 바꿔오는 일을 했습니다
              <br />
              오늘도 우리의 상상이 세상을 바꿀 수 있도록, <br />
              임플루드는 오늘도 달리고 있습니다.
            </p>
            <Link to="/introduce" className="link-button">
              임플루드의 핵심가치 알아보기!
            </Link>
          </div>

          {/* 임플루드 실적 */}
          <div className="achievementSummary">
            <h2>임플루드 실적</h2>
            <p>
              임플루드는 2015년부터 꾸준히 좋은 성과를 이뤄냈습니다 <br />
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
            <Link to="/achievement" className="link-button">
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
