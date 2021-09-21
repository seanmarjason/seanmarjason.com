import './Navbar.css';
import Hamburger from '../Hamburger/Hamburger'

const showHideMenu = () => {
  const menu = document.getElementById("menu")
  const menuStyle = getComputedStyle(menu)
  menu.style.visibility = 
    (menuStyle.visibility === "hidden" || menu.style.visibility === "hidden") ? "visible" : "hidden"
}

const Navbar = ({navLinks, logo}) =>
  <>
    <div id="navbar" className="navbar">
      <div id="logo">
        <a href="../index.html">
          <img src={logo} alt="SM Logo in Black"/>
        </a>
      </div>
      <div id="menuContainer">
        <Hamburger callback={showHideMenu}/>
        <div id="menu">
          { 
            Object.entries(navLinks).map(([heading, link], index) => 
              <a key={index} className="navlink" href={link}>{heading}</a>
            )
          }
        </div>
      </div>
    </div>
  </>

export default Navbar;
