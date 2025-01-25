import ImpludeLogo from '../assets/implude_Light.svg';
import './footer.css'
import Instagram from '../assets/instagram.svg'
import Youtube from '../assets/youtube.svg'
import { Link } from 'react-router-dom';

export default function Footer() {
    return(
        <>
            <div className='container'>
                <div className='logoWrapper'>
                    <img className="Logo" src={ImpludeLogo} alt="Implude Logo" />
                    <div className='Info'>
                        <h1>#IMPLUDE</h1>
                        <h3>INCLUDE + IMPORT</h3>
                        <br></br>
                        <h3>상호: IMPLUDE | 대표자명: 김민찬</h3>
                        <h3>Email: biz.implude@dimigo.hs.kr</h3>
                        <h3>주소: 경기도 안산시 단원구 사세충열로 94 한국디지털미디어고등학교</h3>
                    </div>
                </div>
                <div className="sns">
                    <Link to="https://www.instagram.com/implude_official/"><img className="Instagram" src={Instagram} alt="Instagram" /></Link>
                    <Link to="https://www.youtube.com/@implude_official/featured"><img className="Youtube" src={Youtube} alt="Youtube" /></Link>
                </div>
            </div>
        </>
    );
}