import Footer from "../components/footer";
import Header from "../components/header";
import "./member.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Member() {
  const [activeTab, setActiveTab] = useState("23기");

  const tenth = [
    { name: "최수현", role: "팀 리더", bio: "React와 Firebase 전문가." },
    {
      name: "한유진",
      role: "프론트엔드 개발자",
      bio: "UI/UX 구현에 열정이 많습니다.",
    },
    {
      name: "김도윤",
      role: "백엔드 개발자",
      bio: "Node.js와 MySQL을 주로 다룹니다.",
    },
    {
      name: "박민지",
      role: "디자이너",
      bio: "창의적인 브랜딩과 UI 디자인이 강점입니다.",
    },
    {
      name: "이준혁",
      role: "프로덕트 매니저",
      bio: "팀워크와 기획을 담당합니다.",
    },
    {
      name: "서하은",
      role: "QA 엔지니어",
      bio: "서비스 품질과 테스트를 담당합니다.",
    },
    {
      name: "정민호",
      role: "모바일 앱 개발자",
      bio: "React Native 전문가입니다.",
    },
    {
      name: "유다현",
      role: "데이터 분석가",
      bio: "데이터 시각화와 분석을 진행합니다.",
    },
  ]; //임플루드 10기 데이터

  return (
    <>
      <Header />
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
          <Link className="findOut" to="./apply">
            <h1>지금은 11기 <span>임플루드</span> 동아리원을 <span>모집</span>중이에요!</h1>
            <button className="findOutButton">지원절차 알아보기!</button>
          </Link>
        )}
      </div>
      <Footer />
    </>
  );
}
