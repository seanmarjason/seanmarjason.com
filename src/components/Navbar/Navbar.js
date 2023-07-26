import './Navbar.css';
import Hamburger from '../Hamburger/Hamburger'

const showHideMenu = () => {
  const menu = document.getElementById("menu")
  const menuStyle = getComputedStyle(menu)
  menu.style.right =
    menuStyle.right === "-1000px" || menu.style.right === "-1000px"
      ? "0"
      : "-1000px"
}

const Navbar = ({navLinks}) =>
  <>
    <div id="navbar" className="navbar">
      <div id="logo">
        <a id="site-title" href="/">
          Sean Marjason
        </a>
      </div>
      <div id="menuContainer">
        <Hamburger callback={showHideMenu}/>
        <div id="menu">
          { 
            Object.entries(navLinks).map(([heading, link], index) => 
              <a 
                key={index}
                className="navlink"
                href={link}
                onClick={showHideMenu}
              >
                {heading}
              </a>
            )
          }
        </div>
      </div>
    </div>
  </>

export default Navbar;
