import Footer from "../components/footer";
import Header from "../components/header";
import "./ideal.css";

export default function Ideal() {
  return (
    <>
      <Header />
      <div className="PageWrapper">
        <div className="ideal-container">
          <h1 className="ideal-title">임플루드의 인재상</h1>
          <div className="ideal-values">
            <div className="value-item">
              <div className="icon"></div>
              <h2>책임감 있는</h2>
              <span>
                팀워크에서 가장 중요한 점은 책임감 입니다.
                <br /> 내가 맡은 바를 책임감 있게 수행해야 <br /> 성공적인
                프로젝트가 진행될 수 있습니다.
              </span>
            </div>
            <div className="value-item">
              <div className="icon"></div>
              <h2>상상력이 풍부한</h2>
              <span>
                상상은 세상을 바꾸는 힘이 있습니다. <br /> 빛나는 아이디어를
                가진 인재가 <br />
                세상을 바꾼다고 믿습니다. <br />
                <br />
                ps. MBTI가 N일 필요는 없습니다!
              </span>
            </div>
            <div className="value-item">
              <div className="icon"></div>
              <h2>열정 넘치는</h2>
              <span>
                열정은 불가능을 가능으로 만드는 힘이 있습니다. <br />
                임플루드 부원들은 활활 타오르는
                <br /> 열정을 가지고 있습니다. <br />
                <br />
              </span>
            </div>
            <div className="value-item">
              <div className="icon"></div>
              <h2>진지함과 위트</h2>
              <span>
                일에 대한 진지함은 잃지 않으면서, <br /> 위트있고 유쾌한
                방식으로 문제를 풀어나갑니다.
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
