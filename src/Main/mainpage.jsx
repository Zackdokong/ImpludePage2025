import './mainpage.css';
import ImpludeLogo from '../assets/implude.svg';
import styled, { keyframes } from 'styled-components';
import ArrowBottom from '../assets/arrow_bottom.svg';
import { useRef } from 'react';

function MainPage() {
    const phraseRef = useRef(null); // ImpludePhrase의 h1을 참조할 ref

    // ArrowBottom 클릭 시 실행되는 함수
    const scrollToPhrase = () => {
        phraseRef.current.scrollIntoView({
            behavior: 'smooth', // 부드럽게 스크롤
            block: 'center', // 요소의 시작 부분이 화면 상단에 맞춰짐
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
        `
        const ReturnSpan = styled.span`
          width: ${`${n / 24}rem`};
          height: ${'0.7rem'};
          background: black;
          display: inline-block;
          position: relative;
          bottom: 1.5vw;
          animation: ${animation} 3s ease-in-out infinite;
        `
        return <ReturnSpan />
    }

    return (
        <>
            <div className="Header">
                {/* 헤더 내용 */}
            </div>
            <div className="wrapper">
                <div className="LogoWrapper">
                    <img className="ImpludeLogo" src={ImpludeLogo} alt="Implude Logo" />
                    <h1>#IMPLUDE</h1>
                    <img className="ArrowBottom" src={ArrowBottom} alt="arrow" onClick={scrollToPhrase} /> {/* 클릭 시 scrollToPhrase 함수 호출 */}
                </div>
                <div className="ImpludePhrase" ref={phraseRef}>
                    <h1>당신의 상상이 현실이 되도록</h1>
                    <div>
                        YOUR {messageBar(244)} <span className="PhraseBlue">IM</span>PACT <br />
                        <span className="PhraseBlue">P</span>ASSION {messageBar(96)} <span className="PhraseBlue">L</span>EARN {messageBar(132)} <br />
                        FUT<span className="PhraseBlue">U</span>RE {messageBar(188)} <span className="PhraseBlue">D</span>REAM <br />
                        {messageBar(114)} POTENTIAL {messageBar(62)} T<span className="PhraseBlue">E</span>AM
                    </div>
                </div>
            </div>
            <div className="footer">
                {/* 푸터 내용 */}
            </div>
        </>
    );
}

export default MainPage;
