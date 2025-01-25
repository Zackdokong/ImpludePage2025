import { Link } from 'react-router-dom';
import './header.css'
export default function Header(){
    return(
        <>
        <div className="header">
                <Link className="title" to="/"><h1>#IMPLUDE</h1></Link>
                <div className="headerGoto">
                    <Link to="../introduce"><h1>소개</h1></Link>
                    <Link><h1>팀원</h1></Link>
                    <Link><h1>실적</h1></Link>
                    <Link><h1>인재상</h1></Link>
                </div>
            </div>
        </>
    );
}