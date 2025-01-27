import Footer from "../components/footer";
import Header from "../components/header";
import "./member.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Member() {
  const [activeTab, setActiveTab] = useState("23기");

  const tenth = [
    { name: "김민찬", role: "포지션", bio: "한줄소개" },
    {
      name: "이지민",
      role: "포지션",
      bio: "한줄소개",
    },
    {
      name: "이승준",
      role: "App, FE developer",
      bio: "한줄소개",
    },
    {
      name: "박은빈",
      role: "포지션",
      bio: "한줄소개",
    },
    {
      name: "김소은",
      role: "포지션",
      bio: "한줄소개",
    },
    {
      name: "최현서",
      role: "포지션",
      bio: "한줄소개",
    },
    {
      name: "전소현",
      role: "포지션",
      bio: "한줄소개",
    },
    {
      name: "이연준",
      role: "DevOps, Backend-Engineer",
      bio: "SWA를 꿈꾸는 백엔드 엔지니어, 이연준입니다!",
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
          <Link className="findOut" to=""> {/*여기에 서핑 링크 넣어야함*/}
            <h1>지금은 11기 <span>임플루드</span> 동아리원을 <span>모집</span>중이에요!</h1>
            <button className="findOutButton">임플루드 지원하러가기!</button>
          </Link>
        )}
      </div>
      <Footer />
    </>
  );
}
