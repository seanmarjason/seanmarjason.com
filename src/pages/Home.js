import './pages.css'
import './Home.css'
import NavigationButton from '../components/NavigationButton/NavigationButton'


const Home = () => {
  return(
    <div className="page" id="home-page">
      <div id="headline">
        <h1 id="home" className="">Sean Marjason</h1>
        <p id="tagline">Product Manager | Product Owner | Software Engineer</p>
        <div id="keylinks">
          <NavigationButton text="View Portfolio" link="#projects"/>
          <NavigationButton text="Contact Me" link="#contact"/>
        </div>
      </div>
      <div className="arrow">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default Home;