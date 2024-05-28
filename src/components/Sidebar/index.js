import { Link, NavLink } from "react-router-dom";
import "./index.scss";
import Logos from "../../assets/images/logo-s.png";
import LogoSubtitle from "../../assets/images/logo_sub.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={Logos} alt="logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="logo" />
        {/* <h2 className='name'>Sohan</h2> */}
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/about"
          className="about-link"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/contact"
          className="contact-link"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
            <a href="https://www.linkedin.com/in/sohan-choudhury" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
            </a>
            
        </li>
        <li>
        <a href="https://github.com/Sohan-C2222" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
            </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
