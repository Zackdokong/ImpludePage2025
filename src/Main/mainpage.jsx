import './mainpage.css';
import ImpludeLogo from '../assets/implude.svg';

function MainPage() {
    return (
        <>
            <div className="Header">

            </div>
            <div className="wrapper">
                <div className="LogoWrapper">
                    <img className="ImpludeLogo" src={ImpludeLogo} alt="Implude Logo" />
                    <h1>#IMPLUDE</h1>
                </div>
            </div>
            <div className="footer">

            </div>
        </>
    );
}

export default MainPage;
