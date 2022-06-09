import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
// import Blog from './pages/Blog'
import Contact from './pages/Contact'

const navLinks = {
  Home: '/#home-page',
  About: '/#about-page',
  Projects: '/#projects-page',
  // Blog: '/#blog',
  Contact: '/#contact-page'
}

const HomePage = () => 
  <>
    <Home />
    <div data-aos="fade-up"><About /></div>
    <div data-aos="fade-up"><Projects /></div>
    <div data-aos="fade-up"><Contact /></div>
    {/* <Blog /> */}
  </>

export {
  HomePage, 
  navLinks,
};
