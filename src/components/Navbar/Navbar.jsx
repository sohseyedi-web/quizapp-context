import './Navbar.scss'
import {Link} from "react-router-dom";
import * as RiIcon from "react-icons/ri";


const Navbar = () => {
    return (
        <header className="header" dir={"ltr"}>
            <div className="header-container container-fluid">
                <h3>QuizApp</h3>
                <div className="header-container__links">
                    <Link to={"/"}><RiIcon.RiHome2Line size={32}/></Link>
                    <a target={"_blank"} href={"https://www.linkedin.com/in/sohseyedi/"}><RiIcon.RiLinkedinLine size={32}/></a>
                    <a target={"_blank"} href={"https://github.com/sohseyedi-web"}><RiIcon.RiGithubLine size={32}/></a>
                    <a href={"/"}><RiIcon.RiTwitterLine size={32}/></a>
                </div>
            </div>
        </header>
    )
}

export default Navbar