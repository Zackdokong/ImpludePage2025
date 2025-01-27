import "./introduce.css";
import Footer from "../components/footer";
import Header from "../components/header";
import Vision from "../assets/Vision.jpg";

export default function Introduce() {
  return (
    <>
      <Header />
      <div className="introduceWrapper">
        <div className="MentWrapper">
          <h1>임플루드</h1>
          <div className="Ment">
            <img className="Vision" src={Vision} alt="Vision" />
            <div className="OgleMent">
              우리가 사용하는 평범하고도 대단한 많은 것들은 처음엔 누군가의
              상상에 의해 만들어졌습니다.
              <br />
              세상을 구성하는 상상들에는 특별한 힘이 있습니다.
              <br />
              임플루드는 상상이 세상을 바꿀 수 있다고 믿습니다.
              <br />
              하지만 그저 상상만으로는 세상을 바꿀 수 없습니다.
              <br />
              상상으로 세상을 바꾸기 위해서는 상상을 현실로 만들어낼 수 있는
              능력이 필요합니다.
              <br />
              임플루드는 이를 돕기 위해 존재합니다.
              <br />
              우리의 상상이 세상을 바꿀 수 있도록,
              <br /> 임플루드는 오늘도 달리고 있습니다.
            </div>
          </div>
        </div>
      </div>
      <div className="valueWrapper">
        <h1>핵심가치</h1>
        <div className="valueMent">
          <div>
            <span className="theme">팀워크</span>
            <span className="detail">
              임플루드는 팀워크를 가장 중요한 요소로 생각합니다.<br />
              좋은 팀워크는 모든 것이 가능하도록 만듭니다.<br />
              임플루드는 모두가 서로의 단점을 보완하며<br /> 각자의 역량을 인정하는
              팀을 지향합니다.
            </span>
          </div>
          <div>
            <span className="theme">자유롭고 편한 소통</span>
            <span className="detail">
              수직적이지 않고 수평적인 분위기를 지향하며, <br />모두가 자유롭게
              질문하고 의견을 제시하는 분위기를 추구합니다.
            </span>
          </div>
          <div>
            <span className="theme">많은 실전 경험</span>
            <span className="detail">
              임플루드는 책상에 앉아서 배우는 것보다 실제로 적용하며 배우는 것이
              많다고 생각합니다.<br /> 많은 실전 경험을 통해 압축적인 성장을
              지향합니다.
            </span>
          </div>
          <div>
            <span className="theme">실패를 즐기는</span>
            <span className="detail">
              실패는 성공의 과정에 필연적인 존재입니다.<br /> 실패를 통한
              깨달음과 성장만 있을 뿐,<br /> 실패는 두려운 존재가 아닙니다.
            </span>
          </div>
          <div>
            <span className="theme">지속적인 혁신</span>
            <span className="detail">
              어제의 내가 오늘의 나와 같다면,<br /> 이는 유지가 아닌 퇴행입니다.<br />
              지속적인 혁신으로 세상을 바꿉니다.
            </span>
          </div>
          <div>
            <span className="theme">깊은 신뢰</span>
            <span className="detail">
              임플루드는 서로를 깊게 신뢰하며, 각자의 상상이 실현될 것이라는
              확신을 가지고 있습니다.<br /> 불가능을 가능하다고 믿는 사람들이 모이면<br />
              불가능했던 일도 가능해집니다.
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
