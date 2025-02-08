import { Link } from 'react-router-dom';
import './header.css'
export default function Header(){
    return(
        <>
        <div className="header">
                <Link className="title" to="/"><h1>#IMPLUDE</h1></Link>
                <div className="headerGoto">
                    <Link to="../member"><h1>팀원</h1></Link>
                    <Link to="../achievement"><h1>실적</h1></Link>
                    <Link to="../recruit"><h1>지원절차</h1></Link>
                </div>
            </div>
        </>
    );
}