import Footer from "../components/footer";
import Header from "../components/header";
import { useState } from "react";
import "./achievements.css";
import Banner from "../assets/ImpludeBanner.png";

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
      { rank: "금상", description: "전국 상업경진대회 취업설계 PT" },
      { rank: "동상", description: "경기 상업교육페스티벌 취업설계 PT" },
      { rank: "동상", description: "전국 고등학교 동아리 소프트웨어 경진대회" },
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

export default function Achievement() {
  const [activeYear, setActiveYear] = useState(2024); // 기본값 2024년

  return (
    <>
      <Header />
      <img className="impludeBanner" src={Banner} alt="Implude Banner" />
      <div className="PageWrapper">
        <div className="achievement-container">
          <div className="timeline">
            {achievementsData.map((yearData) => (
              <div
                key={yearData.year}
                className={`timeline-item ${
                  activeYear === yearData.year ? "active" : ""
                }`}
                onClick={() => setActiveYear(yearData.year)}
              >
                <span className="year">{yearData.year}</span>
              </div>
            ))}
          </div>
          <div className="achievement-details">
            {achievementsData
              .filter((data) => data.year === activeYear)
              .map((yearData) => (
                <div key={yearData.year} className="year-section">
                  <h2>{yearData.year} 실적</h2>
                  <div className="achievement-cards">
                    {yearData.details.map((detail, index) => (
                      <div key={index} className="achievement-card">
                        <p>
                          <span>{`${detail.rank}`}</span> -{" "}
                          {`${detail.description}`}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
