import Footer from "../components/footer";
import Header from "../components/header";
import "./member.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Banner from "../assets/ImpludeBanner.png";

export default function Member() {
  const [activeTab, setActiveTab] = useState("23기");

  const tenth = [
    {
      name: "김민찬",
      role: "창업동아리장,FE Developer",
      bio: "FE뿐만 아니라 다양한 분야에 관심갖고 있는 임플루드의 창동장, 김민찬입니다!",
    },
    {
      name: "이지민",
      role: "포지션",
      bio: "한줄소개",
    },
    {
      name: "이승준",
      role: "App, FE Developer",
      bio: "임플루드에서 App과 FE개발을 담당하고 있는 이승준입니다!",
    },
    {
      name: "박은빈",
      role: "디자인",
      bio: "몇 안 되는 23기디자이너 중 한명입니다. 임플루드에서 귀한 인맥을 낚아채세요.",
    },
    {
      name: "김소은",
      role: "FE Developer",
      bio: "배우고 만들고 나아갑니다.",
    },
    {
      name: "최현서",
      role: "AI",
      bio: "임플루드에서 AI 개발을 담당하는 최현서입니다!",
    },
    {
      name: "전소현",
      role: "포지션",
      bio: "한줄소개",
    },
    {
      name: "이연준",
      role: "DevOps, BE Engineer",
      bio: "SWA를 꿈꾸는 백엔드 엔지니어, 이연준입니다!",
    },
  ]; //임플루드 10기 데이터

  return (
    <>
      <Header />
      <div className="PageWrapper">
      <img className="impludeBanner" src={Banner} />
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
            tenth.map((member, index) => (
              <div className="card" key={index}>
                <h2>{member.name}</h2>
                <h4>{member.role}</h4>
                <p>{member.bio}</p>
              </div>
            ))}
        </div>
        {activeTab === "24기" && (
          <Link className="findOut" to="../recruit">
            <h1>
              지금은 11기 <span>임플루드</span> 동아리원을 <span>모집</span>
              중이에요!
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
