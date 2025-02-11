import Footer from "../../components/footer";
import Header from "../../components/header";
import { useState } from "react";
import "./achievements.css";
import Banner from "../../assets/ImpludeBanner.png";
import * as constants from "../../constant/index.js";

export default function Achievement() {
  const [activeYear, setActiveYear] = useState(2024); // 기본값 2024년

  return (
    <>
      <Header />
      <img className="impludeBanner" src={Banner} alt="Implude Banner" />
      <div className="PageWrapper">
        <div className="achievement-container">
          <div className="timeline">
            {constants.achievementData.map((yearData) => (
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
            {constants.achievementData
              .filter((data) => data.year === activeYear)
              .map((yearData) => (
                <div key={yearData.year} className="year-section">
                  <h2>{yearData.year} 실적</h2>
                  <div className="achievement-cards">
                    {yearData.details.map((detail, index) => (
                      <div key={index} className="achievement-card">
                        <p>
                          <span
                            className={`rank-${detail.rank}`}
                          >{`${detail.rank}`}</span>{" "}
                          - {`${detail.description}`}
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
