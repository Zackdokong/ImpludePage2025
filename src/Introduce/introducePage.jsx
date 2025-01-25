import './introduce.css'
import Footer from "../components/footer";
import Header from "../components/header";
import Vision from "../assets/Vision.jpg";

export default function Introduce(){
    return(
        <>
        <Header />
            <div className="introduceWrapper">
                <h1>임플루드</h1>
                <div className="Ment">
                    <img className="Vision" src={Vision} alt="Vision" />
                    <div className="OgleMent">
                        우리가 사용하는 평범하고도 대단한 많은 것들은 처음엔 누군가의 상상에 의해 만들어졌습니다.<br /> 
                        세상을 구성하는 상상들에는 특별한 힘이 있습니다.<br />
                        임플루드는 상상이 세상을 바꿀 수 있다고 믿습니다.<br /> 
                        하지만 그저 상상만으로는 세상을 바꿀 수 없습니다.<br />
                        상상으로 세상을 바꾸기 위해서는 상상을 현실로 만들어낼 수 있는 능력이 필요합니다.<br /> 
                        임플루드는 이를 돕기 위해 존재합니다.<br />
                        우리의 상상이 세상을 바꿀 수 있도록,<br/> 임플루드는 오늘도 달리고 있습니다.
                    </div>
                </div>
            </div>
        <Footer />
        </>
    );
}