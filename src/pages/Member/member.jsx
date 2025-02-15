import Footer from "../../components/footer";
import Header from "../../components/header";
import "./member.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Banner from "../../assets/ImpludeBanner.png";
import DefaultProfile from "../../assets/default-profile.png"; // Import default profile image
import * as constants from "../../constant/index.js";

export default function Member() {
  const [activeTab, setActiveTab] = useState("23기");

  return (
    <>
      <Header />
      <div className="PageWrapper">
        <img className="impludeBanner" src={Banner} alt="Implude Banner" />
        <div className="memberWrapper">
          <h1>동아리원 소개</h1>
          <hr />
          <div className="tabWrapper">
            <button
              className={`tabButton ${activeTab === "23기" ? "active" : ""}`}
              onClick={() => setActiveTab("23기")}
            >
              10기
            </button>
            <button
              className={`tabButton ${activeTab === "24기" ? "active" : ""}`}
              onClick={() => setActiveTab("24기")}
            >
              11기
            </button>
          </div>
          <div className="gridWrapper">
            {activeTab === "23기" &&
              constants.tenth.map((member, index) => (
                <div className="card" key={index}>
                  {/* Add profile picture */}
                  <img
                    className="profileImage"
                    src={DefaultProfile} // Use default profile image
                    alt={`${member.name} Profile`}
                  />
                  <h2>{member.name}</h2>
                  <h4>{member.role}</h4>
                  <p>{member.bio}</p>
                </div>
              ))}
          </div>
          {activeTab === "24기" && (
            <Link className="findOut" to="/recruit">
              <h1>
                지금은 11기 <span>임플루드</span> 동아리원을 <span>모집</span> 중이에요!
              </h1>
              <button className="findOutButton">임플루드 지원하러가기!</button>
            </Link>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
