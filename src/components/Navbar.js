import './Navbar.css';
import Logo from '../assets/SMLogo_Black.png'

const Navbar = () => {
  return(
    <div id="navbar" className="navbar">
      <div id="logo">
        <a href="../index.html">
          <img src={Logo} alt="SM Logo in Black"/>
        </a>
      </div>
      <div id="menu">
          <a className="navlink" href="#home">Home</a>
          <a className="navlink" href="#about">About</a>
          <a className="navlink" href="#projects">Projects</a>
          <a className="navlink" href="#contact">Contact</a>
      </div>
    </div>
  );
}

export default Navbar;
