import { Link, Element } from "react-scroll";

const NavBar = () => {
  return (
    <div className="container navbar-container">
      <Link to="aboutSection" smooth={true} duration={800}>
        <div>ABOUT</div>
      </Link>
      <Link to="portfolio" smooth={true} duration={800}>
        <div>PROJECTS</div>
      </Link>
      <Link to="contact" smooth={true} duration={800}>
        <div>CONTACT</div>
      </Link>
    </div>
  );
};

export default NavBar;
